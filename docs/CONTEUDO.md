# Criar aulas, imagens e lives

## Onde editar

As aulas ficam em `src/data/lessons.json`. Cada objeto gera uma página `/aulas/slug/` durante o build. Não é preciso alterar o router nem criar outra pasta.

Para adicionar uma aula:

1. Duplica um dos objetos existentes.
2. Escolhe um `slug` único, sem espaços nem acentos.
3. Altera título, assunto, anos indicativos, duração, problema, pistas e passos.
4. Escolhe o `tool` e configura os valores iniciais em `toolConfig`.
5. Coloca a imagem em `public/images` e indica o caminho `/images/nome.svg`.
6. Guarda, executa `npm run build` e publica novamente.

Uma aula usa esta estrutura (exemplo parcial):

```json
{
  "slug": "uma-caixa-maior",
  "title": "O que cabe nesta caixa?",
  "subtitle": "Descobre a diferença entre área e volume.",
  "topic": "Geometria",
  "years": [5, 6, 7],
  "minutes": 15,
  "image": "/images/caixa.svg",
  "imageAlt": "Uma caixa com as três dimensões assinaladas.",
  "accent": "purple",
  "date": "2026-11-01",
  "problem": "Uma caixa mede 4 cm por 3 cm por 5 cm. Qual é o volume?",
  "question": "Se duplicares a altura, o volume duplica?",
  "hints": ["Começa por calcular a área da base."],
  "tool": "volume",
  "toolConfig": { "initial": { "width": 4, "depth": 3, "height": 5 } },
  "steps": [
    {
      "title": "A área da base",
      "text": "Multiplicamos comprimento e largura.",
      "formula": "A=4\\times3=12"
    }
  ],
  "takeaways": ["O volume combina três dimensões."],
  "exercises": [
    {
      "question": "E se a altura for 10 cm?",
      "hint": "Mantém a base.",
      "answer": "120 cm³.",
      "explanation": "4 × 3 × 10 = 120."
    }
  ]
}
```

Em JSON, cada barra de um comando LaTeX precisa de ser duplicada. Por exemplo, escreve `"formula": "A=4\\times3"`. O valor lido pelo programa será `A=4\times3`. Não uses `$...$` dentro do campo `formula`: o componente já escolhe o modo matemático.

Os textos simples são tratados como texto pelo React. Não coloques HTML nem código JavaScript no JSON. Para matemática com formatação, usa `formula` nos passos.

## Roteiro pedagógico

A página já organiza o percurso: problema → pistas → exploração → resolução → ideias → exercícios → dúvida.

- Escreve uma pergunta que possa ser compreendida antes da teoria.
- Faz cada pista acrescentar só uma ideia.
- Usa passos curtos com uma razão clara para cada operação.
- Distingue experiência/conjectura de demonstração.
- Introduz unidades e limitações do modelo quando necessário.
- Os anos são sugestões: ajusta ao programa e ao aluno, sem anunciar cobertura curricular que ainda não existe.

A data determina a ordem do catálogo (mais recente primeiro). `minutes` é o tempo aproximado de exploração da página, não a duração da tua live.

## Imagens

As duas imagens incluídas são SVG originais editáveis, com resolução independente do tamanho e sem imagens externas. Para novas imagens raster, usa preferencialmente WebP, proporção próxima de 800:440, com pelo menos 1200 × 660 px e tamanho reduzido. Escreve sempre um `imageAlt` descritivo.

Não uses imagens de terceiros sem autorização/licença adequada. O site não precisa de imagens para desenhar as experiências: as figuras reativas são SVG gerados pelos modelos.

## Próxima live e apresentação

Em `src/data/site.ts`, edita nome, biografia, email e ligação TikTok. Não foi inventada uma fotografia tua: a página de explicações usa uma inicial ilustrada, que podes substituir.

Para anunciar uma live:

```ts
nextLive: {
  title: 'Uma percentagem pode enganar-te?',
  date: '2026-11-10T19:00:00+00:00',
  url: 'https://www.tiktok.com/@TEU_UTILIZADOR'
}
```

Usa uma data real com fuso/offset explícito. A apresentação usa o fuso Europe/Lisbon. Para retirar o anúncio, usa `nextLive: null` e publica outra vez. Não há remoção automática de eventos passados nesta versão.

## Perguntas e respostas

Os botões de dúvida registam aula e passo. No painel, lês a mensagem e respondes pelo teu email. Para transformar uma dúvida recorrente num exemplo público, adiciona um passo ou exercício ao JSON, sem copiar dados pessoais.
