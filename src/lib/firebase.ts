import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { firebaseConfig, firebaseConfigured } from './firebase-config';
let initialized = false;
export function getFirebase() {
  if (typeof window === 'undefined' || !firebaseConfigured)
    throw new Error('Firebase não configurado no navegador.');
  const app = getApps()[0] || initializeApp(firebaseConfig);
  if (!initialized) {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (key)
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(key),
        isTokenAutoRefreshEnabled: true,
      });
    initialized = true;
  }
  return { app, auth: getAuth(app), db: getFirestore(app) };
}
