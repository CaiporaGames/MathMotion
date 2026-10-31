'use client';
import { useEffect, useState } from 'react';
import { Filters } from '@/components/catalog/Filters';
import { LessonCard } from '@/components/lessons/LessonCard';
import { filterLessons } from '@/services/content.service';
import type { Lesson } from '@/types/content';
import { useLearningStore } from '@/stores/learning.store';
import s from '@/app/aulas/page.module.scss';
export function CatalogController({ lessons }: { lessons: Lesson[] }) {
  const [query, setQuery] = useState(''),
    [topic, setTopic] = useState('Todos'),
    [year, setYear] = useState('Todos');
  const completed = useLearningStore((s) => s.completed);
  useEffect(() => {
    void useLearningStore.persist.rehydrate();
  }, []);
  const filtered = filterLessons(lessons, query, topic, year);
  return (
    <>
      <Filters
        query={query}
        topic={topic}
        year={year}
        topics={['Todos', ...new Set(lessons.map((l) => l.topic))]}
        onQuery={setQuery}
        onTopic={setTopic}
        onYear={setYear}
      />
      <p className={s.count} aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'aula para explorar' : 'aulas para explorar'}
      </p>
      <div className={s.grid}>
        {filtered.map((l) => (
          <LessonCard key={l.slug} lesson={l} completed={completed.includes(l.slug)} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty">
          <h3>Ainda não há aulas com estes filtros.</h3>
          <p>Experimenta outro tema ou explora uma ferramenta do laboratório.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery('');
              setTopic('Todos');
              setYear('Todos');
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}
