import { Search } from 'lucide-react';
import { useId } from 'react';
import s from './Filters.module.scss';
export function Filters({
  query,
  topic,
  year,
  topics,
  onQuery,
  onTopic,
  onYear,
}: {
  query: string;
  topic: string;
  year: string;
  topics: string[];
  onQuery: (v: string) => void;
  onTopic: (v: string) => void;
  onYear: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className={s.filters}>
      <label className={s.search}>
        <Search size={18} />
        <span className="srOnly">Pesquisar</span>
        <input
          placeholder="O que queres descobrir?"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </label>
      <div className={s.select}>
        <label htmlFor={`${id}-topic`}>Tema</label>
        <select id={`${id}-topic`} value={topic} onChange={(e) => onTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className={s.select}>
        <label htmlFor={`${id}-year`}>Ano</label>
        <select id={`${id}-year`} value={year} onChange={(e) => onYear(e.target.value)}>
          <option value="Todos">Todos os anos</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((y) => (
            <option key={y} value={y}>
              {y}.º ano
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
