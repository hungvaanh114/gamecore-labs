import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFirebaseApp } from './firebase';

export function getFirebaseServices() {
  const app = getFirebaseApp();
  return { auth:getAuth(app), db:getFirestore(app), storage:getStorage(app) };
}
