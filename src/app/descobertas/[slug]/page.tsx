import { notFound } from 'next/navigation';
import { getDiscoveries, getDiscovery } from '@/services/discovery.service';
import { DiscoveryArticle } from '@/components/discoveries/DiscoveryArticle';
import s from './page.module.scss';
export function generateStaticParams() { return getDiscoveries().map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const article = getDiscovery((await params).slug);
  return { title: article ? `${article.title}: ${article.subtitle}` : 'Descoberta', description: article?.description };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const article = getDiscovery((await params).slug);
  if (!article) notFound();
  return <div className={`container ${s.page}`}><DiscoveryArticle article={article} /></div>;
}
