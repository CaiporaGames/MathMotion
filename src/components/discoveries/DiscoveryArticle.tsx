import Link from 'next/link';
import type { DiscoveryArticle as Article } from '@/types/discovery';
import { ArticleText } from './ArticleText';
import { DiscoverySectionController } from '@/controllers/DiscoverySectionController';
import s from './DiscoveryArticle.module.scss';
export function DiscoveryArticle({ article }: { article: Article }) {
  return <article className={s.article}>
    <header className={s.hero}>
      <Link href="/descobertas/" className={s.back}>← Todas as descobertas</Link>
      <span className="eyebrow">CADERNO DE INVESTIGAÇÃO · COMBINATÓRIA</span>
      <h1>{article.title}<span>{article.subtitle}</span></h1>
      <p className={s.opening}>{article.opening}</p>
      <div className={s.byline}><span>Por {article.author}</span><span>9 experiências · ao teu ritmo</span></div>
      <div className={s.heroGrid} aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i}>({['a', 'b', 'c'][Math.floor(i / 4)]}, {i % 4 + 1})</span>)}</div>
    </header>
    <div className={s.layout}>
      <aside className={s.contents}><nav aria-label="Percurso da investigação"><span>O PERCURSO</span><ol>{article.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.nav}</a></li>)}</ol><a href="#proximas-investigacoes">Para onde continuaremos? ↗</a></nav></aside>
      <div className={s.body}>
        <section className={s.intro}><h2>A pergunta que iniciou tudo</h2><ArticleText text={article.intro} /><p className={s.instruction}>Lê a situação, mexe na experiência e arrisca uma explicação. Só depois abre a descoberta. Podes voltar às tabelas sempre que quiseres; não há cronómetro nem pontuação.</p><noscript>Ativa o JavaScript para usar as experiências e abrir as conclusões.</noscript></section>
        {article.sections.map((section, i) => <section id={section.id} className={s.section} key={section.id}>
          <span className={s.chapter}>{String(i + 1).padStart(2, '0')} / INVESTIGAÇÃO</span>
          <h2>{section.title}</h2>
          <ArticleText text={section.before} />
          <div className={s.question}><span>ANTES DE CONCLUIR</span><p>{section.question}</p></div>
          <DiscoverySectionController lab={section.lab}><ArticleText text={section.conclusion} /></DiscoverySectionController>
          {i < article.sections.length - 1 && <a className={s.next} href={`#${article.sections[i + 1].id}`}>A próxima pergunta: {article.sections[i + 1].nav} →</a>}
        </section>)}
        <section id="proximas-investigacoes" className={s.future}><span className="eyebrow">O CADERNO CONTINUA ABERTO</span><h2>Para onde continuaremos?</h2><ArticleText text={article.future} /><Link className="textLink" href="/laboratorio/">Continuar a experimentar no laboratório →</Link></section>
        <footer className={s.editorial}>Texto reconstruído a partir da investigação guiada de Timóteo. As hesitações de cálculo foram condensadas; a ordem das descobertas e as distinções matemáticas foram preservadas.</footer>
      </div>
    </div>
  </article>;
}
