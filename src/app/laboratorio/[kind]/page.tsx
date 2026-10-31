import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { tools, getTool } from '@/services/content.service';
import { ExplorerController } from '@/controllers/ExplorerController';
import { SubmissionController } from '@/controllers/SubmissionController';
import s from './page.module.scss';
export function generateStaticParams() {
  return tools.map((t) => ({ kind: t.kind }));
}
export async function generateMetadata({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  return { title: getTool(kind)?.title || 'Experiência' };
}
export default async function Page({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params,
    t = getTool(kind);
  if (!t) notFound();
  return (
    <div className={`container ${s.page}`}>
      <Link href="/laboratorio/" className={s.back}>
        <ArrowLeft size={16} /> Voltar ao laboratório
      </Link>
      <div className="pageIntro">
        <span className="eyebrow">{t.subject} · EXPERIÊNCIA INTERATIVA</span>
        <h1>{t.title}</h1>
        <p>{t.description} Antes de mover um controlo, tenta prever o resultado.</p>
      </div>
      <ExplorerController kind={t.kind} />
      <div className={s.questions}>
        <h2>Três perguntas para investigar</h2>
        <ol>
          <li>Se duplicares uma quantidade, o resultado também duplica?</li>
          <li>O que muda? O que permanece igual?</li>
          <li>Consegues explicar o padrão sem usar o desenho?</li>
        </ol>
      </div>
      <SubmissionController
        kind="question"
        lessonSlug={`laboratorio-${t.kind}`}
        lessonTitle={t.title}
      />
    </div>
  );
}
