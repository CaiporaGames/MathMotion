import Link from 'next/link';
import { ArrowLeft, ArrowDown, Check, CheckCircle2, Lightbulb, MessageCircle } from 'lucide-react';
import type { Lesson } from '@/types/content';
import { MathFormula } from '@/components/ui/Math';
import s from './LessonView.module.scss';
type Props = {
  lesson: Lesson;
  completed: boolean;
  onComplete: () => void;
  onQuestion: (step: string) => void;
  explorer: React.ReactNode;
  form: React.ReactNode;
};
export function LessonView({
  lesson: l,
  completed,
  onComplete,
  onQuestion,
  explorer,
  form,
}: Props) {
  return (
    <div className={`container ${s.page}`}>
      <Link className={s.back} href="/aulas/">
        <ArrowLeft size={16} /> Todas as aulas
      </Link>
      <header className={s.hero}>
        <div>
          <div className={s.tags}>
            <span className="tag">{l.topic}</span>
            <span>
              {Math.min(...l.years)}.º–{Math.max(...l.years)}.º ano · {l.minutes} min
            </span>
          </div>
          <h1>{l.title}</h1>
          <p>{l.subtitle}</p>
          <a className="button" href="#problema">
            Começar pelo problema <ArrowDown size={16} />
          </a>
        </div>
        <img src={l.image} alt={l.imageAlt} width="800" height="440" />
      </header>
      <div className={s.layout}>
        <aside className={s.aside}>
          <span>O TEU PERCURSO</span>
          <nav aria-label="Secções da aula">
            {[
              ['problema', '01', 'O problema'],
              ['explorar', '02', 'Experimenta'],
              ['resolucao', '03', 'Passo a passo'],
              ['guardar', '04', 'Ideias para guardar'],
              ['praticar', '05', 'Agora tenta tu'],
            ].map(([id, n, title]) => (
              <a key={id} href={`#${id}`}>
                <small>{n}</small>
                {title}
              </a>
            ))}
          </nav>
          <button onClick={onComplete} className={s.complete}>
            {completed ? <CheckCircle2 size={17} /> : <Check size={17} />}{' '}
            {completed ? 'Aula concluída' : 'Marcar como concluída'}
          </button>
          <p>Progresso guardado só neste dispositivo.</p>
        </aside>
        <div className={s.article}>
          <section id="problema" className={s.block}>
            <span className="eyebrow">01 · O PROBLEMA</span>
            <h2>
              Antes da fórmula,
              <br />
              uma pergunta.
            </h2>
            <p className={s.problem}>{l.problem}</p>
            <div className={s.challenge}>
              <Lightbulb size={22} />
              <p>{l.question}</p>
            </div>
            <h3>Precisas de uma pista?</h3>
            {l.hints.map((hint, i) => (
              <details key={hint} className={s.details}>
                <summary>Pista {i + 1}</summary>
                <p>{hint}</p>
              </details>
            ))}
          </section>
          <section id="explorar" className={s.block}>
            <span className="eyebrow">02 · EXPERIMENTA</span>
            {explorer}
          </section>
          <section id="resolucao" className={s.block}>
            <span className="eyebrow">03 · PASSO A PASSO</span>
            <h2>Vamos construir a resposta.</h2>
            {l.steps.map((step, i) => (
              <article key={step.title} className={s.step} id={`passo-${i + 1}`}>
                <span className={s.stepNumber}>{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {step.formula && (
                    <div className={s.formula}>
                      <MathFormula value={step.formula} />
                    </div>
                  )}
                  <button className={s.questionButton} onClick={() => onQuestion(String(i + 1))}>
                    <MessageCircle size={14} /> Tenho uma dúvida neste passo
                  </button>
                </div>
              </article>
            ))}
          </section>
          <section id="guardar" className={`${s.block} ${s.takeaways}`}>
            <span className="eyebrow">04 · IDEIAS PARA GUARDAR</span>
            <h2>Leva estas ideias contigo.</h2>
            <ul>
              {l.takeaways.map((t) => (
                <li key={t}>
                  <CheckCircle2 size={18} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
          <section id="praticar" className={s.block}>
            <span className="eyebrow">05 · AGORA TENTA TU</span>
            <h2>
              Uma pequena mudança.
              <br />
              Um novo problema.
            </h2>
            {l.exercises.map((e, i) => (
              <article key={e.question} className={s.exercise}>
                <span className="tag">DESAFIO {i + 1}</span>
                <h3>{e.question}</h3>
                <details className={s.details}>
                  <summary>Uma pista</summary>
                  <p>{e.hint}</p>
                </details>
                <details className={s.details}>
                  <summary>Ver resposta e explicação</summary>
                  <strong>{e.answer}</strong>
                  <p>{e.explanation}</p>
                </details>
              </article>
            ))}
            <button className="button" onClick={onComplete}>
              <CheckCircle2 size={17} />
              {completed ? 'Concluída · marcar por fazer' : 'Concluir esta aula'}
            </button>
          </section>
          <section id="pergunta" className={s.block}>
            {form}
          </section>
        </div>
      </div>
    </div>
  );
}
