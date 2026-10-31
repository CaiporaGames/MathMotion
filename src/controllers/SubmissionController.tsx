'use client';
import { useRef, useState, type FormEvent } from 'react';
import { SubmissionForm } from '@/components/forms/SubmissionForm';
import { firebaseConfigured } from '@/lib/firebase-config';
import {
  emptyDraft,
  type SubmissionDraft,
  type SubmissionKind,
  type FieldErrors,
} from '@/types/submission';
import { validateSubmission, safeError } from '@/services/validation.service';
export function SubmissionController({
  kind,
  lessonSlug = '',
  lessonTitle = '',
  step = '',
  onStepChange,
}: {
  kind: SubmissionKind;
  lessonSlug?: string;
  lessonTitle?: string;
  step?: string;
  onStepChange?: (v: string) => void;
}) {
  const [draft, setDraft] = useState<SubmissionDraft>({ ...emptyDraft }),
    [errors, setErrors] = useState<FieldErrors>({}),
    [busy, setBusy] = useState(false),
    [message, setMessage] = useState(''),
    [success, setSuccess] = useState(false);
  const lock = useRef(false);
  function change<K extends keyof SubmissionDraft>(key: K, value: SubmissionDraft[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current || !firebaseConfigured) return;
    setMessage('');
    const errors = validateSubmission(draft, kind);
    setErrors(errors);
    if (Object.keys(errors).length) {
      const first = Object.keys(errors)[0];
      document.getElementById(`${kind === 'question' ? 'question' : 'contact'}-${first}`)?.focus();
      return;
    }
    lock.current = true;
    setBusy(true);
    try {
      const { submitMessage } = await import('@/services/submission.service');
      await submitMessage(draft, { kind, lessonSlug, lessonTitle, step });
      setSuccess(true);
    } catch (error) {
      setMessage(safeError(error));
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <SubmissionForm
      kind={kind}
      draft={draft}
      errors={errors}
      busy={busy}
      message={message}
      success={success}
      available={firebaseConfigured}
      lessonTitle={lessonTitle}
      step={step}
      onStepChange={onStepChange}
      onChange={change}
      onSubmit={submit}
      onReset={() => {
        setDraft({ ...emptyDraft });
        setSuccess(false);
        setMessage('');
        setErrors({});
      }}
    />
  );
}
