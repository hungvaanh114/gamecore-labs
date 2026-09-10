# Firebase setup for GameCore Labs

The public site remains on GitHub Pages. Firebase supplies secure admin authentication, Firestore data, image storage, analytics counters and the Gmail notification function.

1. Create a Firebase project and register a Web app.
2. Enable Authentication > Email/Password and create the admin user with a strong password.
3. Create Firestore in production mode and Cloud Storage.
4. Put the Web app values and `PUBLIC_ADMIN_LOGIN_EMAIL` in repository Actions variables using the names listed in `.env.example`.
5. In Firestore, create `admins/{ADMIN_USER_UID}`. The document may contain `{ "role": "admin" }`.
6. Install the Firebase CLI, log in and select the project.
7. Configure secrets without putting them in source control:
   - `firebase functions:secrets:set GMAIL_USER`
   - `firebase functions:secrets:set GMAIL_APP_PASSWORD`
8. Deploy with `firebase deploy --only firestore:rules,storage,functions`.

For Gmail, enable two-step verification and create an app password. Never use or commit the normal Gmail password. The Gmail address is both sender and notification recipient.
