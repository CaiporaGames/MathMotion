import { readFileSync } from 'node:fs';
import { test, before, after } from 'node:test';
import {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  writeBatch,
  serverTimestamp,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
let env: RulesTestEnvironment;
before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-mathmotion',
    firestore: { rules: readFileSync('firestore.rules', 'utf8'), host: '127.0.0.1', port: 8080 },
  });
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'admins', 'teacher'), { role: 'owner' });
  });
});
after(async () => {
  await env?.cleanup();
});
const payload = (uid: string) => ({
  kind: 'question',
  lessonSlug: 'test',
  lessonTitle: 'Teste',
  step: '1',
  name: '',
  email: '',
  phone: '',
  year: '',
  topic: '',
  mode: 'online',
  availability: '',
  message: 'Esta pergunta tem mais de dez caracteres.',
  contactRole: 'student',
  consent: true,
  uid,
  status: 'new',
  createdAt: serverTimestamp(),
});
function batchMessage(uid: string, id: string, extra = {}) {
  const db = env.authenticatedContext(uid).firestore(),
    batch = writeBatch(db);
  batch.set(doc(db, 'submissions', id), { ...payload(uid), ...extra });
  batch.set(doc(db, 'submissionLimits', uid), {
    lastSubmittedAt: serverTimestamp(),
    submissionId: id,
  });
  return batch.commit();
}
test('submissao atomica valida e intervalo minimo', async () => {
  await assertSucceeds(batchMessage('visitor1', 'first'));
  await assertFails(batchMessage('visitor1', 'second'));
});
test('nao permite envios sem limite nem uid falsificado', async () => {
  const db = env.authenticatedContext('visitor2').firestore();
  await assertFails(setDoc(doc(db, 'submissions', 'nolimit'), payload('visitor2')));
  await assertFails(batchMessage('visitor3', 'fake', { uid: 'someone-else' }));
});
test('nao permite envios sem autenticacao ou campos inesperados', async () => {
  const db = env.unauthenticatedContext().firestore();
  await assertFails(setDoc(doc(db, 'submissions', 'anon'), payload('x')));
  await assertFails(batchMessage('visitor4', 'extra', { secret: 'x' }));
});
test('visitante nao le mensagens, nem concede a si proprio acesso', async () => {
  const db = env.authenticatedContext('visitor1').firestore();
  await assertFails(getDocs(collection(db, 'submissions')));
  await assertFails(getDoc(doc(db, 'submissions', 'first')));
  await assertFails(setDoc(doc(db, 'admins', 'visitor1'), { role: 'owner' }));
});
test('professor le, muda estado e elimina, mas nao edita dados pessoais', async () => {
  await assertSucceeds(batchMessage('visitor5', 'admin-test'));
  const db = env.authenticatedContext('teacher').firestore(),
    ref = doc(db, 'submissions', 'admin-test');
  await assertSucceeds(getDoc(ref));
  await assertSucceeds(updateDoc(ref, { status: 'contacted' }));
  await assertFails(updateDoc(ref, { email: 'other@example.com' }));
  await assertSucceeds(deleteDoc(ref));
});
