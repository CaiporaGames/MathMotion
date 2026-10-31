'use client';
import { filterTools } from '@/services/content.service';
import { useState } from 'react';
import { Filters } from '@/components/catalog/Filters';
import { ToolCard } from '@/components/catalog/ToolCard';
import type { ToolInfo } from '@/types/content';
import s from '@/app/laboratorio/page.module.scss';
export function LabController({ tools }: { tools: ToolInfo[] }) {
  const [query, setQuery] = useState(''),
    [topic, setTopic] = useState('Todos'),
    [year, setYear] = useState('Todos');
  const items = filterTools(tools, query, topic, year);
  return (
    <>
      <Filters
        query={query}
        topic={topic}
        year={year}
        topics={['Todos', ...new Set(tools.map((t) => t.subject))]}
        onQuery={setQuery}
        onTopic={setTopic}
        onYear={setYear}
      />
      <p className={s.count} aria-live="polite">
        {items.length} experiências · anos indicativos, ajustáveis ao teu percurso
      </p>
      <div className={s.grid}>
        {items.map((t) => (
          <ToolCard key={t.kind} tool={t} />
        ))}
      </div>
      {!items.length && (
        <div className="empty">
          <h3>Ainda não há experiências para esta seleção.</h3>
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
