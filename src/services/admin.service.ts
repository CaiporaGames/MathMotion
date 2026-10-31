import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  browserSessionPersistence,
  setPersistence,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  updateDoc,
  deleteDoc,
  type QueryDocumentSnapshot,
  type DocumentData,
} from 'firebase/firestore';
import { getFirebase } from '@/lib/firebase';
import type { SubmissionRecord, SubmissionStatus } from '@/types/submission';
export type Cursor = QueryDocumentSnapshot<DocumentData> | null;
export function watchUser(callback: (user: User | null) => void) {
  return onAuthStateChanged(getFirebase().auth, callback);
}
export async function login(email: string, password: string) {
  const { auth } = getFirebase();
  await setPersistence(auth, browserSessionPersistence);
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(getFirebase().auth);
}
export async function isAdmin(uid: string) {
  return (await getDoc(doc(getFirebase().db, 'admins', uid))).exists();
}
export async function fetchMessages(cursor: Cursor = null) {
  const { db } = getFirebase();
  const q = cursor
    ? query(
        collection(db, 'submissions'),
        orderBy('createdAt', 'desc'),
        startAfter(cursor),
        limit(30),
      )
    : query(collection(db, 'submissions'), orderBy('createdAt', 'desc'), limit(30));
  const result = await getDocs(q);
  return {
    items: result.docs.map(
      (d) =>
        ({
          ...d.data(),
          id: d.id,
          createdAt: d.data().createdAt?.toDate?.().toISOString() || '',
        }) as SubmissionRecord,
    ),
    cursor: result.docs.at(-1) || null,
    hasMore: result.size === 30,
  };
}
export async function setMessageStatus(id: string, status: SubmissionStatus) {
  return updateDoc(doc(getFirebase().db, 'submissions', id), { status });
}
export async function removeMessage(id: string) {
  return deleteDoc(doc(getFirebase().db, 'submissions', id));
}
