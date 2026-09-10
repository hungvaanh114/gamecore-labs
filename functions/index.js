const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const nodemailer = require('nodemailer');

initializeApp();
const db = getFirestore();
const gmailUser = defineSecret('GMAIL_USER');
const gmailAppPassword = defineSecret('GMAIL_APP_PASSWORD');

const clean = (value, max = 1000) => String(value || '').trim().slice(0, max);
const html = (value) => clean(value, 5000).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));

exports.submitInquiry = onCall({ region:'asia-southeast1', secrets:[gmailUser, gmailAppPassword] }, async request => {
  const data = request.data || {};
  const inquiry = {
    name: clean(data.name, 120), email: clean(data.email, 180), company: clean(data.company, 180),
    projectType: clean(data.projectType, 120), budget: clean(data.budget, 120), timeline: clean(data.timeline, 120),
    genre: clean(data.genre, 120), referenceProduct: clean(data.referenceProduct, 160), referenceGame: clean(data.referenceGame, 300),
    description: clean(data.description, 5000), language: clean(data.language, 8), status: 'new', createdAt: FieldValue.serverTimestamp(),
  };
  if (!inquiry.name || !/^\S+@\S+\.\S+$/.test(inquiry.email) || inquiry.description.length < 20) throw new HttpsError('invalid-argument', 'Thông tin liên hệ chưa hợp lệ.');
  const saved = await db.collection('inquiries').add(inquiry);
  const transporter = nodemailer.createTransport({ service:'gmail', auth:{ user:gmailUser.value(), pass:gmailAppPassword.value() } });
  await transporter.sendMail({
    from: `GameCore Labs Website <${gmailUser.value()}>`, to:gmailUser.value(), replyTo:inquiry.email,
    subject:`[GameCore Labs] Yêu cầu mới từ ${inquiry.name}`,
    html:`<h2>Yêu cầu dự án mới</h2><p><b>Khách hàng:</b> ${html(inquiry.name)} (${html(inquiry.email)})</p><p><b>Công ty:</b> ${html(inquiry.company || '—')}</p><p><b>Loại dự án:</b> ${html(inquiry.projectType || '—')}</p><p><b>Thể loại:</b> ${html(inquiry.genre || '—')}</p><p><b>Game tham khảo:</b> ${html(inquiry.referenceProduct || inquiry.referenceGame || '—')}</p><p><b>Ngân sách:</b> ${html(inquiry.budget || '—')}</p><p><b>Thời gian:</b> ${html(inquiry.timeline || '—')}</p><hr><p>${html(inquiry.description).replace(/\n/g, '<br>')}</p><p>Mã liên hệ: ${saved.id}</p>`,
  });
  return { ok:true, id:saved.id };
});

exports.trackEvent = onCall({ region:'asia-southeast1' }, async request => {
  const productId = clean(request.data?.productId, 100);
  const event = clean(request.data?.event, 10);
  if (!/^[A-Za-z0-9_-]+$/.test(productId) || !['view','click'].includes(event)) throw new HttpsError('invalid-argument', 'Invalid event.');
  const field = event === 'view' ? 'views' : 'clicks';
  await db.collection('stats').doc(productId).set({ [field]:FieldValue.increment(1), updatedAt:FieldValue.serverTimestamp() }, { merge:true });
  return { ok:true };
});
