import type { SubmissionDraft, SubmissionKind, FieldErrors } from '@/types/submission';
export function validateSubmission(d: SubmissionDraft, kind: SubmissionKind): FieldErrors {
  const e: FieldErrors = {};
  if (d.name.trim().length > 80) e.name = 'Usa até 80 caracteres.';
  if (kind === 'lesson' && d.name.trim().length < 2) e.name = 'Indica o teu nome.';
  if ((kind === 'lesson' || d.email.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))
    e.email = 'Indica um email válido.';
  if (d.email.trim().length > 160) e.email = 'O email é demasiado longo.';
  if (d.phone.trim().length > 30) e.phone = 'Usa até 30 caracteres.';
  if (d.message.trim().length < 10)
    e.message = 'Escreve pelo menos 10 caracteres para percebermos a tua dúvida.';
  if (d.message.trim().length > 2000) e.message = 'Usa até 2000 caracteres.';
  if (!d.consent) e.consent = 'Confirma que leste a informação de privacidade.';
  if (kind === 'lesson') {
    if (!d.year) e.year = 'Escolhe o nível de estudo.';
    if (d.topic.trim().length < 2) e.topic = 'Indica o assunto em que precisas de ajuda.';
    if (d.topic.trim().length > 120) e.topic = 'Usa até 120 caracteres.';
    if (d.availability.trim().length < 3) e.availability = 'Indica a tua disponibilidade habitual.';
    if (d.availability.trim().length > 300) e.availability = 'Usa até 300 caracteres.';
  }
  return e;
}
export function safeError(error: unknown): string {
  const code = (error as { code?: string })?.code || '';
  if (
    code === 'auth/invalid-credential' ||
    code === 'auth/wrong-password' ||
    code === 'auth/user-not-found'
  )
    return 'Não foi possível entrar. Verifica o email e a palavra-passe.';
  if (code === 'auth/too-many-requests')
    return 'Demasiadas tentativas. Aguarda um pouco antes de tentar novamente.';
  if (code === 'permission-denied')
    return 'O envio ou acesso foi recusado. Aguarda um minuto e tenta novamente. Se persistir, contacta o responsável pelo site.';
  if (code === 'unavailable' || code === 'auth/network-request-failed')
    return 'Não conseguimos ligar ao serviço. Verifica a tua ligação e tenta novamente.';
  if (code === 'auth/operation-not-allowed')
    return 'O formulário ainda não está disponível. O responsável precisa de concluir a configuração.';
  if (error instanceof Error && error.message === 'cooldown')
    return 'Aguarda um minuto entre envios.';
  return 'Não foi possível concluir a operação. Tenta novamente mais tarde.';
}
