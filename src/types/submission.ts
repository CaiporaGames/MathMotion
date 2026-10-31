export type SubmissionKind = 'question' | 'lesson';
export type SubmissionStatus = 'new' | 'contacted' | 'closed';
export type SubmissionDraft = {
  name: string;
  email: string;
  phone: string;
  year: string;
  topic: string;
  mode: string;
  availability: string;
  message: string;
  contactRole: string;
  consent: boolean;
  website: string;
};
export type SubmissionContext = {
  kind: SubmissionKind;
  lessonSlug: string;
  lessonTitle: string;
  step: string;
};
export type SubmissionPayload = Omit<SubmissionDraft, 'website'> & SubmissionContext;
export type SubmissionRecord = SubmissionPayload & {
  id: string;
  uid: string;
  status: SubmissionStatus;
  createdAt: string;
};
export type FieldErrors = Partial<Record<keyof SubmissionDraft, string>>;
export const emptyDraft: SubmissionDraft = {
  name: '',
  email: '',
  phone: '',
  year: '',
  topic: '',
  mode: 'online',
  availability: '',
  message: '',
  contactRole: 'student',
  consent: false,
  website: '',
};
