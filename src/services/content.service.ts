import data from '@/data/lessons.json';
import repeatingDecimals from '@/data/lessons/dizimas-e-irracionais.json';
import squareSequence from '@/data/lessons/sequencia-quadrados.json';
import zeroProduct from '@/data/lessons/produto-nulo-balanca.json';
import triangleArea from '@/data/lessons/area-triangulo-quadrado.json';
import pyramidVolume from '@/data/lessons/volume-piramide-cubo.json';
import type { Lesson, ToolInfo } from '@/types/content';
export const lessons = [...data, repeatingDecimals, squareSequence, zeroProduct, triangleArea, pyramidVolume] as unknown as Lesson[];
export function getLessons() {
  return [...lessons].sort((a, b) => b.date.localeCompare(a.date));
}
export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
export function filterLessons(items: Lesson[], query: string, topic: string, year: string) {
  const clean = (v: string) =>
    v
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  return items.filter(
    (x) =>
      (!query || clean(x.title + ' ' + x.subtitle + ' ' + x.topic).includes(clean(query))) &&
      (topic === 'Todos' || x.topic === topic) &&
      (year === 'Todos' || x.years.includes(Number(year))),
  );
}
export const tools: ToolInfo[] = [
  {
    kind: 'area',
    title: 'Área & perímetro',
    description: 'O contorno fica. O espaço muda.',
    subject: 'Geometria',
    years: [3, 4, 5, 6, 7, 8, 9, 10],
    color: 'green',
    icon: 'Square',
  },
  {
    kind: 'volume',
    title: 'Dentro da caixa',
    description: 'Três medidas, uma nova dimensão.',
    subject: 'Geometria',
    years: [5, 6, 7, 8, 9],
    color: 'purple',
    icon: 'Box',
  },
  {
    kind: 'fractions',
    title: 'Partes de um todo',
    description: 'Vê uma fração ganhar forma.',
    subject: 'Números',
    years: [3, 4, 5, 6],
    color: 'orange',
    icon: 'PieChart',
  },
  {
    kind: 'ratio',
    title: 'Mistura à medida',
    description: 'Escala a receita, mantém a razão.',
    subject: 'Números',
    years: [5, 6, 7, 8],
    color: 'blue',
    icon: 'FlaskConical',
  },
  {
    kind: 'percent',
    title: 'O preço muda',
    description: 'Aumentos e descontos em cadeia.',
    subject: 'Números',
    years: [6, 7, 8, 9],
    color: 'purple',
    icon: 'Percent',
  },
  {
    kind: 'equation',
    title: 'Encontra o equilíbrio',
    description: 'Uma incógnita. Dois lados iguais.',
    subject: 'Álgebra',
    years: [6, 7, 8, 9],
    color: 'green',
    icon: 'Scale',
  },
  {
    kind: 'function',
    title: 'Uma reta em movimento',
    description: 'Inclinação, posição e coordenadas.',
    subject: 'Funções',
    years: [8, 9, 10],
    color: 'blue',
    icon: 'ChartNoAxesCombined',
  },
  {
    kind: 'probability',
    title: 'Dois dados, muitas hipóteses',
    description: 'Contar antes de adivinhar.',
    subject: 'Probabilidade',
    years: [6, 7, 8, 9, 10, 11, 12],
    color: 'orange',
    icon: 'Dices',
  },
  {
    kind: 'pythagoras',
    title: 'O lado que falta',
    description: 'Explora um triângulo retângulo.',
    subject: 'Geometria',
    years: [8, 9, 10],
    color: 'purple',
    icon: 'Triangle',
  },
  {
    kind: 'motion',
    title: 'Distância em movimento',
    description: 'Liga matemática e ciências.',
    subject: 'Ciências',
    years: [7, 8, 9, 10],
    color: 'blue',
    icon: 'MoveRight',
  },
  {
    kind: 'numberline',
    title: 'Salta pela reta',
    description: 'Somar e subtrair ganha uma direção.',
    subject: 'Números',
    years: [1, 2, 3, 4, 5, 6, 7],
    color: 'green',
    icon: 'MoveRight',
  },
  {
    kind: 'trigonometry',
    title: 'Uma volta, duas coordenadas',
    description: 'Seno e cosseno no círculo unitário.',
    subject: 'Trigonometria',
    years: [10, 11, 12],
    color: 'purple',
    icon: 'PieChart',
  },
  {
    kind: 'derivative',
    title: 'Da secante à tangente',
    description: 'Uma pequena variação, uma grande ideia.',
    subject: 'Funções',
    years: [11, 12],
    color: 'blue',
    icon: 'ChartNoAxesCombined',
  },
];
export function getTool(kind: string) {
  return tools.find((t) => t.kind === kind);
}

export function filterTools(items: ToolInfo[], query: string, topic: string, year: string) {
  const clean = (v: string) =>
    v
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  return items.filter(
    (t) =>
      (topic === 'Todos' || t.subject === topic) &&
      (year === 'Todos' || t.years.includes(Number(year))) &&
      clean(t.title + ' ' + t.description).includes(clean(query)),
  );
}
