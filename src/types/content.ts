export type ToolKind =
  | 'area'
  | 'volume'
  | 'fractions'
  | 'ratio'
  | 'percent'
  | 'equation'
  | 'function'
  | 'probability'
  | 'pythagoras'
  | 'motion'
  | 'numberline'
  | 'trigonometry'
  | 'derivative';
export type ToolConfig = {
  initial?: Record<string, number>;
  title?: string;
  prompt?: string;
  perimeter?: number;
};
export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  topic: string;
  years: number[];
  minutes: number;
  image: string;
  imageAlt: string;
  accent: 'green' | 'purple';
  date: string;
  problem: string;
  question: string;
  hints: string[];
  tool: ToolKind;
  toolConfig?: ToolConfig;
  steps: { title: string; text: string; formula?: string }[];
  takeaways: string[];
  exercises: { question: string; hint: string; answer: string; explanation: string }[];
};
export type ToolInfo = {
  kind: ToolKind;
  title: string;
  description: string;
  subject: string;
  years: number[];
  color: string;
  icon: string;
};
