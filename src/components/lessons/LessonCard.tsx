import Link from 'next/link';
import { ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import type { Lesson } from '@/types/content';
import s from './LessonCard.module.scss';
export function LessonCard({
  lesson: l,
  completed = false,
}: {
  lesson: Lesson;
  completed?: boolean;
}) {
  return (
    <article className={s.card}>
      <Link href={`/aulas/${l.slug}/`} className={s.image}>
        <img src={l.image} alt={l.imageAlt} width="800" height="440" loading="lazy" />
        <span className={s.badge}>
          {completed ? (
            <>
              <CheckCircle2 size={13} /> Concluída
            </>
          ) : (
            'PROBLEMA → DESCOBERTA'
          )}
        </span>
      </Link>
      <div className={s.content}>
        <div className={s.meta}>
          <span>{l.topic}</span>
          <span>
            {Math.min(...l.years)}.º–{Math.max(...l.years)}.º ano
          </span>
        </div>
        <h3>
          <Link href={`/aulas/${l.slug}/`}>{l.title}</Link>
        </h3>
        <p>{l.subtitle}</p>
        <div className={s.bottom}>
          <span>
            <Clock size={14} /> {l.minutes} min de exploração
          </span>
          <Link href={`/aulas/${l.slug}/`} aria-label={`Explorar ${l.title}`}>
            <ArrowUpRight size={21} />
          </Link>
        </div>
      </div>
    </article>
  );
}
