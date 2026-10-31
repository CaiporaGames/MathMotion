import { signInAnonymously } from 'firebase/auth';
import { collection, doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { getFirebase } from '@/lib/firebase';
import { validateSubmission } from './validation.service';
import type { SubmissionDraft, SubmissionContext, SubmissionPayload } from '@/types/submission';
export async function submitMessage(draft: SubmissionDraft, context: SubmissionContext) {
  if (draft.website) throw new Error('Invalid submission');
  if (Object.keys(validateSubmission(draft, context.kind)).length)
    throw new Error('Invalid submission');
  const { db, auth } = getFirebase();
  await auth.authStateReady();
  const user = auth.currentUser || (await signInAnonymously(auth)).user;
  const payload: SubmissionPayload = {
    ...context,
    name: draft.name.trim(),
    email: draft.email.trim(),
    phone: draft.phone.trim(),
    year: draft.year,
    topic: draft.topic.trim(),
    mode: draft.mode,
    availability: draft.availability.trim(),
    message: draft.message.trim(),
    contactRole: draft.contactRole,
    consent: true,
  };
  const ref = doc(collection(db, 'submissions')),
    limitRef = doc(db, 'submissionLimits', user.uid);
  await runTransaction(db, async (tx) => {
    const limit = await tx.get(limitRef),
      last = limit.data()?.lastSubmittedAt?.toMillis?.();
    if (last && Date.now() - last < 60000) throw new Error('cooldown');
    tx.set(ref, { ...payload, uid: user.uid, status: 'new', createdAt: serverTimestamp() });
    tx.set(limitRef, { lastSubmittedAt: serverTimestamp(), submissionId: ref.id });
  });
  return ref.id;
}
