export type CombinatoricsLabId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface DiscoverySection {
  id: string; title: string; nav: string; lab: CombinatoricsLabId;
  before: string; question: string; conclusion: string;
}
export interface DiscoveryArticle {
  slug: string; title: string; subtitle: string; author: string;
  description: string; opening: string; intro: string;
  sections: DiscoverySection[]; future: string;
}
