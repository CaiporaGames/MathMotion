import type { Metadata } from 'next';
import { MessageCircle, MapPin, Monitor, Check } from 'lucide-react';
import { SubmissionController } from '@/controllers/SubmissionController';
import { site } from '@/data/site';
import s from './page.module.scss';
export const metadata: Metadata = { title: 'Explicações com Timóteo' };
export default function Page() {
  return (
    <div className={`container ${s.page}`}>
      <div className="pageIntro">
        <span className="eyebrow">AO TEU RITMO, COM ACOMPANHAMENTO</span>
        <h1>
          Não precisas de perceber
          <br />
          tudo à primeira.
        </h1>
        <p>
          Podemos encontrar juntos o ponto onde a matemática deixou de fazer sentido — e começar por
          aí.
        </p>
      </div>
      <div className={s.layout}>
        <aside>
          <div className={s.teacher}>
            <div className={s.avatar} aria-hidden="true">
              T<span>×</span>
            </div>
            <h2>{site.tutor}</h2>
            <span>{site.location}</span>
            <p>{site.bio}</p>
          </div>
          <div className={s.options}>
            <p>
              <Monitor size={18} /> Online
            </p>
            <p>
              <MapPin size={18} /> Presencial em Coimbra
            </p>
            <p>
              <MessageCircle size={18} /> Disponibilidade combinada por contacto
            </p>
          </div>
          <h3>O que podemos trabalhar</h3>
          <ul>
            {[
              'Compreender a matéria, não só decorar',
              'Resolver exercícios com autonomia',
              'Preparar testes e exames',
              'Recuperar bases e ganhar confiança',
            ].map((t) => (
              <li key={t}>
                <Check size={16} />
                {t}
              </li>
            ))}
          </ul>
          <p className={s.note}>
            Nível, objetivos, duração e valor das explicações são combinados antes de qualquer
            marcação.
          </p>
        </aside>
        <SubmissionController kind="lesson" />
      </div>
      <section className={s.faq}>
        <h2>Perguntas frequentes</h2>
        {[
          [
            'Preciso de já saber qual é a minha dificuldade?',
            'Não. Podes indicar a matéria que estás a estudar e dar um exemplo de um exercício que te bloqueia.',
          ],
          [
            'O formulário faz uma reserva?',
            'Não. É apenas um pedido de contacto. A disponibilidade, o formato e o valor são combinados depois.',
          ],
          [
            'Posso acompanhar as aulas gratuitas sem pedir explicações?',
            'Sim. As aulas e as experiências do laboratório estão abertas, sem conta de aluno.',
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
