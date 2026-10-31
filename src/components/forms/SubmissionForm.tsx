import type { FormEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, LockKeyhole, CheckCircle2 } from 'lucide-react';
import type { SubmissionKind, SubmissionDraft, FieldErrors } from '@/types/submission';
import s from './SubmissionForm.module.scss';
type Props = {
  kind: SubmissionKind;
  draft: SubmissionDraft;
  errors: FieldErrors;
  busy: boolean;
  message: string;
  success: boolean;
  available: boolean;
  lessonTitle?: string;
  step?: string;
  onStepChange?: (v: string) => void;
  onChange: <K extends keyof SubmissionDraft>(key: K, value: SubmissionDraft[K]) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
};
export function SubmissionForm({
  kind,
  draft: d,
  errors: e,
  busy,
  message,
  success,
  available,
  lessonTitle,
  step,
  onStepChange,
  onChange,
  onSubmit,
  onReset,
}: Props) {
  const prefix = kind === 'question' ? 'question' : 'contact';
  const question = kind === 'question';
  const field = (
    key: Exclude<keyof SubmissionDraft, 'consent' | 'website'>,
    label: string,
    type = 'text',
    max = 120,
    required = false,
  ) => (
    <div className={s.field}>
      <label htmlFor={`${prefix}-${key}`}>
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={`${prefix}-${key}`}
        type={type}
        value={d[key]}
        required={required}
        maxLength={max}
        autoComplete={
          key === 'name' ? 'name' : key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'off'
        }
        aria-invalid={!!e[key]}
        aria-describedby={e[key] ? `${prefix}-${key}-error` : undefined}
        onChange={(event) => onChange(key, event.target.value)}
      />
      {e[key] && (
        <small id={`${prefix}-${key}-error`} className={s.error}>
          {e[key]}
        </small>
      )}
    </div>
  );
  return (
    <div className={s.card}>
      <span className="eyebrow">
        {question ? 'UMA DÚVIDA TAMBÉM É UM COMEÇO' : 'VAMOS CONVERSAR'}
      </span>
      <h2>{question ? 'Onde ficaste com dúvidas?' : 'Conta-me do que precisas.'}</h2>
      <p>
        {question
          ? 'A tua pergunta é privada. Deixa o email se quiseres receber uma resposta.'
          : 'Este pedido não faz uma marcação nem tem pagamento. Combinamos os detalhes depois de conversar.'}
      </p>
      {lessonTitle && (
        <p className={s.context}>
          {lessonTitle}
          {step ? ` · passo ${step}` : ''}
          {step && onStepChange && (
            <button type="button" onClick={() => onStepChange('')}>
              Remover passo
            </button>
          )}
        </p>
      )}
      {!available && (
        <p className="notice">
          O formulário ainda não está disponível. Podes continuar a explorar todas as aulas e
          experiências.
        </p>
      )}
      {success ? (
        <div className={s.sent} role="status">
          <CheckCircle2 size={35} />
          <h3>Mensagem recebida.</h3>
          <p>
            {d.email
              ? 'O Timóteo poderá responder através do email que indicaste.'
              : 'A tua pergunta ficou guardada. Como não indicaste email, não será possível enviar uma resposta direta.'}
          </p>
          <button className="button secondary" onClick={onReset}>
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <fieldset disabled={busy || !available}>
            <legend className="srOnly">
              {question ? 'Enviar uma dúvida' : 'Pedir uma explicação'}
            </legend>
            <div className={s.grid}>
              {field('name', question ? 'Nome (opcional)' : 'Nome', 'text', 80, !question)}
              {field(
                'email',
                question ? 'Email para resposta (opcional)' : 'Email de contacto',
                'email',
                160,
                !question,
              )}
              {!question && (
                <>
                  {field('phone', 'Telefone (opcional)', 'tel', 30)}
                  <div className={s.field}>
                    <label htmlFor="contact-year">Nível de estudo *</label>
                    <select
                      id="contact-year"
                      value={d.year}
                      onChange={(e) => onChange('year', e.target.value)}
                      aria-invalid={!!e.year}
                    >
                      <option value="">Selecionar</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((y) => (
                        <option key={y} value={`${y}`}>
                          {y}.º ano
                        </option>
                      ))}
                      <option value="adult">Adulto / preparação de acesso</option>
                      <option value="other">Outro</option>
                    </select>
                    {e.year && <small className={s.error}>{e.year}</small>}
                  </div>
                  {field('topic', 'Tema ou dificuldade', 'text', 120, true)}
                  <div className={s.field}>
                    <label htmlFor="contact-mode">Modalidade</label>
                    <select
                      id="contact-mode"
                      value={d.mode}
                      onChange={(e) => onChange('mode', e.target.value)}
                    >
                      <option value="online">Online</option>
                      <option value="coimbra">Presencial em Coimbra</option>
                      <option value="either">Sem preferência</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="contact-role">Estou a contactar como</label>
                    <select
                      id="contact-role"
                      value={d.contactRole}
                      onChange={(e) => onChange('contactRole', e.target.value)}
                    >
                      <option value="student">Aluno adulto</option>
                      <option value="guardian">Responsável pelo aluno</option>
                    </select>
                  </div>
                  {field('availability', 'Dias e horários disponíveis', 'text', 300, true)}
                </>
              )}
            </div>
            <div className={s.field}>
              <label htmlFor={`${prefix}-message`}>
                {question ? 'A tua pergunta' : 'O que gostarias de trabalhar?'} *
              </label>
              <textarea
                id={`${prefix}-message`}
                rows={5}
                maxLength={2000}
                value={d.message}
                aria-invalid={!!e.message}
                aria-describedby={`${prefix}-message-help`}
                onChange={(e) => onChange('message', e.target.value)}
                placeholder={
                  question
                    ? 'Por exemplo: não percebi por que o outro lado é 10 − a…'
                    : 'Conta-me o que estás a estudar e onde costumas ficar com dúvidas.'
                }
              />
              <small id={`${prefix}-message-help`} className={e.message ? s.error : s.help}>
                {e.message ||
                  `${d.message.length}/2000 caracteres · não incluas documentos ou dados sensíveis.`}
              </small>
            </div>
            <div className={s.trap} aria-hidden="true">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={d.website}
                  onChange={(e) => onChange('website', e.target.value)}
                />
              </label>
            </div>
            <label className={s.consent}>
              <input
                type="checkbox"
                checked={d.consent}
                onChange={(e) => onChange('consent', e.target.checked)}
              />
              <span>
                Li a{' '}
                <Link href="/privacidade/" target="_blank">
                  informação de privacidade
                </Link>{' '}
                e autorizo o uso destes dados para tratar esta mensagem.
              </span>
            </label>
            {e.consent && <p className={s.error}>{e.consent}</p>}
            {!question && (
              <p className={s.help}>
                Se o aluno for menor, o pedido deve ser enviado pelo responsável, com os seus
                próprios contactos.
              </p>
            )}
            <div className={s.actions}>
              <button className="button" type="submit">
                {busy ? 'A enviar…' : question ? 'Enviar pergunta' : 'Pedir uma explicação'}{' '}
                <ArrowUpRight size={17} />
              </button>
              <span>
                <LockKeyhole size={13} /> Só o professor pode ler
              </span>
            </div>
          </fieldset>
          {message && (
            <p className="notice error" role="alert">
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
