import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  MousePointer2,
  Lightbulb,
  BookOpen,
  MessageCircle,
  MoveUpRight,
} from 'lucide-react';
import { AreaExplorer } from '@/components/explorers';
import { LessonCard } from '@/components/lessons/LessonCard';
import { ToolCard } from '@/components/catalog/ToolCard';
import { getLessons, tools } from '@/services/content.service';
import { site } from '@/data/site';
import s from './page.module.scss';
export default function Home() {
  const lessons = getLessons();
  return (
    <>
      <section className={`container ${s.hero}`}>
        <div className={s.heroCopy}>
          <span className="eyebrow">PARA QUEM GOSTA DE PERGUNTAR PORQUÊ</span>
          <h1>
            A matemática
            <br />
            faz mais sentido
            <br />
            <em>quando mexes nela.</em>
          </h1>
          <p>
            Começa com um problema. Experimenta uma ideia.
            <br className={s.desktop} /> Descobre a teoria pelo caminho.
          </p>
          <div className="actions">
            <Link className="button" href="/aulas/">
              Encontrar uma aula <ArrowRight size={17} />
            </Link>
            <Link className="button secondary" href="/laboratorio/">
              Abrir o laboratório
            </Link>
          </div>
          <div className={s.micro}>
            <span>
              <span /> Sem conta para aprender
            </span>
            <span>Ao teu ritmo</span>
          </div>
        </div>
        <div className={s.heroVisual}>
          <div className={s.floating}>
            <MousePointer2 size={14} /> Experimenta. É mesmo interativo.
          </div>
          <AreaExplorer
            compact
            config={{ initial: { a: 3 }, title: '20 metros. Qual é a maior área?' }}
          />
          <span className={s.scribble}>
            arrasta e descobre <MoveUpRight size={24} />
          </span>
        </div>
      </section>
      <div className={s.ribbon}>
        <div className={`container ${s.ribbonInner}`}>
          <span>
            <BookOpen size={18} /> Problemas antes de fórmulas
          </span>
          <span>
            <MousePointer2 size={18} /> Aprende a experimentar
          </span>
          <span>
            <Lightbulb size={18} /> Guarda a ideia, não só a resposta
          </span>
        </div>
      </div>
      <section className="container section">
        <div className="sectionHeading">
          <div>
            <span className="eyebrow">UMA BOA PERGUNTA MUDA TUDO</span>
            <h2>Por onde começa a tua curiosidade?</h2>
          </div>
          <Link className={s.link} href="/aulas/">
            Todas as aulas <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className={s.lessons}>
          {lessons.map((l) => (
            <LessonCard lesson={l} key={l.slug} />
          ))}
        </div>
      </section>
      <section className={s.labSection}>
        <div className="container">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">O TEU LABORATÓRIO DE IDEIAS</span>
              <h2>Menos «decora». Mais «e se…?»</h2>
            </div>
            <p>Muda uma medida, vê o que acontece e constrói a tua própria intuição.</p>
          </div>
          <div className={s.tools}>
            {tools.slice(0, 4).map((t) => (
              <ToolCard key={t.kind} tool={t} />
            ))}
          </div>
          <div className={s.center}>
            <Link className="button secondary" href="/laboratorio/">
              Explorar as {tools.length} ferramentas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className={`container section ${s.method}`}>
        <div>
          <span className="eyebrow">UMA MANEIRA DIFERENTE DE APRENDER</span>
          <h2>
            Não saltamos
            <br />a parte de pensar.
          </h2>
          <p>O caminho até à resposta é onde a aprendizagem acontece.</p>
        </div>
        <ol>
          {[
            ['Pergunta', 'Um problema concreto para despertar a curiosidade.'],
            ['Experimenta', 'Pistas e ferramentas para testar as tuas ideias.'],
            ['Compreende', 'Uma resolução por etapas que explica o porquê.'],
          ].map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {site.nextLive && (
        <section className="container section">
          <span className="eyebrow">PRÓXIMA LIVE</span>
          <h2>{site.nextLive.title}</h2>
          <p>
            {new Date(site.nextLive.date).toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' })} ·
            hora de Lisboa
          </p>
          <a className="button" href={site.nextLive.url} target="_blank" rel="noreferrer">
            Ver no TikTok <ArrowUpRight size={16} />
          </a>
        </section>
      )}
      <section className={`container ${s.cta}`}>
        <div>
          <span className={s.ctaLabel}>ÀS VEZES, BASTA UMA BOA EXPLICAÇÃO.</span>
          <h2>
            Vamos descobrir
            <br />o que te está a bloquear?
          </h2>
          <p>
            Explicações de matemática com Timóteo.
            <br />
            Online ou presencialmente em Coimbra, mediante disponibilidade.
          </p>
          <Link className="button light" href="/explicacoes/">
            Conversar sobre explicações <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className={s.ctaArt} aria-hidden="true">
          <MessageCircle size={75} strokeWidth={1} />
          <span>
            x + uma boa pergunta
            <br />= um novo começo
          </span>
        </div>
      </section>
    </>
  );
}
