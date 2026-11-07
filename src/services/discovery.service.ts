import raw from '@/data/discoveries/reconstruindo-a-combinatoria.json';
import type { DiscoveryArticle } from '@/types/discovery';
// Local editorial content: add future articles here, independently of lessons.json.
const articles: DiscoveryArticle[] = [raw as DiscoveryArticle];
export function getDiscoveries(): DiscoveryArticle[] { return articles; }
export function getDiscovery(slug: string) { return articles.find(article => article.slug === slug); }
