import type { FormEvent } from 'react';
import { RefreshCw, LogOut, Mail, Trash2, LockKeyhole } from 'lucide-react';
import type { SubmissionRecord, SubmissionStatus } from '@/types/submission';
import s from './AdminView.module.scss';
export type AdminPhase = 'loading' | 'login' | 'denied' | 'ready' | 'unconfigured' | 'error';
type Props = {
  phase: AdminPhase;
  email: string;
  password: string;
  busy: boolean;
  error: string;
  items: SubmissionRecord[];
  filter: string;
  hasMore: boolean;
  pendingDelete: string | null;
  onEmail: (v: string) => void;
  onPassword: (v: string) => void;
  onLogin: (e: FormEvent) => void;
  onLogout: () => void;
  onRefresh: () => void;
  onMore: () => void;
  onFilter: (v: string) => void;
  onStatus: (id: string, status: SubmissionStatus) => void;
  onDelete: (id: string) => void;
  onConfirmDelete: (id: string) => void;
  onCancelDelete: () => void;
};
const labels: Record<SubmissionStatus, string> = {
  new: 'Novo',
  contacted: 'Em contacto',
  closed: 'Concluído',
};
export function AdminView(p: Props) {
  return (
    <div className={s.admin}>
      {p.error && (
        <p className="notice error" role="alert">
          {p.error}
        </p>
      )}
      {p.phase === 'loading' && <p role="status">A verificar o acesso…</p>}
      {p.phase === 'unconfigured' && (
        <div className="notice">
          Configura o Firebase em .env.local para ativar o painel. Consulta docs/FIREBASE.md.
        </div>
      )}
      {p.phase === 'error' && (
        <p>Não foi possível verificar o acesso. Atualiza a página e tenta novamente.</p>
      )}
      {p.phase === 'login' && (
        <form className={s.login} onSubmit={p.onLogin}>
          <LockKeyhole size={27} />
          <h2>Entrar como professor</h2>
          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            value={p.email}
            onChange={(e) => p.onEmail(e.target.value)}
            required
          />
          <label htmlFor="admin-password">Palavra-passe</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={p.password}
            onChange={(e) => p.onPassword(e.target.value)}
            required
          />
          <button className="button" disabled={p.busy}>
            {p.busy ? 'A entrar…' : 'Entrar'}
          </button>
          <p>
            As contas de professor são criadas pelo responsável no Firebase. Não há registo público.
          </p>
        </form>
      )}
      {p.phase === 'denied' && (
        <div className="empty">
          <h2>Esta conta não tem acesso.</h2>
          <p>O UID desta conta precisa de um documento na coleção admins.</p>
          <button className="button secondary" onClick={p.onLogout}>
            Sair e usar outra conta
          </button>
        </div>
      )}
      {p.phase === 'ready' && (
        <>
          <div className={s.toolbar}>
            <label>
              Mostrar
              <select value={p.filter} onChange={(e) => p.onFilter(e.target.value)}>
                <option value="all">Todos os estados</option>
                <option value="new">Novos</option>
                <option value="contacted">Em contacto</option>
                <option value="closed">Concluídos</option>
              </select>
            </label>
            <button className="button secondary small" onClick={p.onRefresh} disabled={p.busy}>
              <RefreshCw size={15} /> Atualizar
            </button>
            <button className="button secondary small" onClick={p.onLogout}>
              <LogOut size={15} /> Sair
            </button>
          </div>
          <p className={s.count}>
            Filtro aplicado às mensagens carregadas. Usa “Carregar mais” para consultar as
            anteriores.
          </p>
          {p.items.length === 0 && <div className="empty">Sem mensagens nesta seleção.</div>}
          <div className={s.items}>
            {p.items.map((item) => (
              <article key={item.id} className={s.item}>
                <header>
                  <span className="tag">
                    {item.kind === 'question' ? 'Dúvida' : 'Pedido de explicação'}
                  </span>
                  <time dateTime={item.createdAt}>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString('pt-PT', {
                          timeZone: 'Europe/Lisbon',
                        })
                      : 'Sem data'}
                  </time>
                </header>
                <h3>{item.name || 'Visitante sem nome'}</h3>
                {item.lessonTitle && (
                  <p className={s.context}>
                    {item.lessonTitle}
                    {item.step ? ` · passo ${item.step}` : ''}
                  </p>
                )}
                <p className={s.message}>{item.message}</p>
                <dl>
                  {[
                    ['Email', item.email],
                    ['Telefone', item.phone],
                    ['Nível', item.year],
                    ['Tema', item.topic],
                    ['Modalidade', item.mode],
                    ['Disponibilidade', item.availability],
                    [
                      'Contacto',
                      item.contactRole === 'guardian' ? 'Responsável pelo aluno' : 'Aluno',
                    ],
                  ]
                    .filter(([, v]) => !!v)
                    .map(([key, value]) => (
                      <div key={key}>
                        <dt>{key}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                </dl>
                <div className={s.itemActions}>
                  <label className="srOnly" htmlFor={`status-${item.id}`}>
                    Estado da mensagem
                  </label>
                  <select
                    id={`status-${item.id}`}
                    value={item.status}
                    disabled={p.busy}
                    onChange={(e) => p.onStatus(item.id, e.target.value as SubmissionStatus)}
                  >
                    {Object.entries(labels).map(([v, label]) => (
                      <option key={v} value={v}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {item.email && (
                    <a
                      className="button secondary small"
                      href={`mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent('MathMotion — ' + (item.lessonTitle || 'Pedido de explicação'))}`}
                    >
                      <Mail size={14} /> Responder por email
                    </a>
                  )}
                  <button
                    className={s.delete}
                    disabled={p.busy}
                    onClick={() => p.onDelete(item.id)}
                  >
                    <Trash2 size={15} /> Eliminar
                  </button>
                </div>
                {p.pendingDelete === item.id && (
                  <div className={s.confirm}>
                    <p>Eliminar definitivamente esta mensagem e os dados de contacto associados?</p>
                    <button
                      className="button small"
                      disabled={p.busy}
                      onClick={() => p.onConfirmDelete(item.id)}
                    >
                      Eliminar mensagem
                    </button>
                    <button className="button secondary small" onClick={p.onCancelDelete}>
                      Cancelar
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
          {p.hasMore && (
            <button className="button secondary" disabled={p.busy} onClick={p.onMore}>
              {p.busy ? 'A carregar…' : 'Carregar mais'}
            </button>
          )}
          <p className={s.count}>
            Responder abre o teu programa de email. Não envia uma mensagem automaticamente.
          </p>
        </>
      )}
    </div>
  );
}
