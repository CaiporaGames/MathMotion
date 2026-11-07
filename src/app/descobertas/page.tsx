import type { Metadata } from 'next';
import Link from 'next/link';
import { getDiscoveries } from '@/services/discovery.service';
import s from './page.module.scss';
export const metadata: Metadata = { title: 'Descobertas', description: 'Investigações matemáticas interativas com Timóteo. Experimenta, observa e descobre as fórmulas.' };
export default function Page() {
  return <div className={`container ${s.page}`}>
    <header className="pageIntro"><span className="eyebrow">CADERNO DE DESCOBERTAS</span><h1>A pergunta vem<br />antes da fórmula.</h1><p>Um espaço para reconstruir ideias. Mexe nas experiências, testa uma hipótese e acompanha o caminho que nos levou à descoberta.</p></header>
    <div className={s.articles}>{getDiscoveries().map(article => <Link key={article.slug} href={`/descobertas/${article.slug}/`} className={s.card}>
      <div className={s.visual} aria-hidden="true"><span>A × B</span><div>{Array.from({ length: 12 }, (_, i) => <i key={i}>{['a', 'b', 'c'][Math.floor(i / 4)]}{i % 4 + 1}</i>)}</div><small>Que objetos estamos a contar?</small></div>
      <div className={s.copy}><span className="eyebrow">INVESTIGAÇÃO INTERATIVA</span><h2>{article.title}</h2><h3>{article.subtitle}</h3><p>{article.description}</p><span className={s.cta}>Abrir o caderno · {article.sections.length} experiências ↗</span></div>
    </Link>)}</div>
  </div>;
}
