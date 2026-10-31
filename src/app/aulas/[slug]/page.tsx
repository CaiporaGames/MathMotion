import { notFound } from 'next/navigation';
import { getLessons, getLesson } from '@/services/content.service';
import { LessonController } from '@/controllers/LessonController';
import s from './page.module.scss';
export function generateStaticParams() {
  return getLessons().map((l) => ({ slug: l.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params,
    l = getLesson(slug);
  return { title: l?.title || 'Aula', description: l?.subtitle };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params,
    l = getLesson(slug);
  if (!l) notFound();
  return (
    <div className={s.page}>
      <LessonController lesson={l} />
    </div>
  );
}
