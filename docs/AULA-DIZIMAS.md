# Aula: dízimas e irracionais

Baseada no enunciado enviado e no relato do professor sobre o vídeo. Não houve acesso ao vídeo completo. A imagem recebida não identifica prova/ano, por isso não atribuímos uma origem não confirmada.

## Instalar esta atualização

1. Faz uma cópia de segurança do teu projeto.
2. Extrai o ZIP numa pasta temporária.
3. Copia as pastas `src`, `public` e `docs` para a raiz do projeto (onde está `package.json`), mantendo a estrutura.
4. Há apenas três ficheiros existentes modificados: `src/services/content.service.ts`, `src/types/content.ts` e `src/controllers/LessonController.tsx`. Se os alteraste depois do projeto original, integra as pequenas alterações em vez de substituir as tuas versões. Procura no novo código `repeatingDecimals`, `decimalExplorer` e `DecimalExplorerController`.
5. Não substituas `.env.local`, regras, configurações Firebase ou `lessons.json`. Estes ficheiros não estão no pacote.
6. Executa `npm run dev` e visita `/aulas/dizimas-e-irracionais/` para veres a aula localmente.
7. Quando quiseres publicar, executa `npm run build`. Só se terminar sem erros, executa `npm run firebase -- deploy --only hosting --project mathmotion-860ce`.

Não há novas dependências. Não foram executados testes, build ou pré-visualização nesta atualização, conforme solicitado. Os ficheiros são baseados na versão original do projeto entregue; alterações locais posteriores não foram disponibilizadas.

## O que muda

- A nova aula aparece automaticamente no catálogo, na ordenação por data e nas rotas estáticas existentes, após o build.
- Perguntas por passo, formulário e progresso usam os mecanismos já existentes.
- `src/data/lessons/dizimas-e-irracionais.json` contém a aula nova, sem substituir as duas anteriores.
- `public/images/decimals.svg` é a ilustração original da aula.
- O serviço `decimal.service.ts` calcula períodos por repetição de restos inteiros, sem usar aproximações de ponto flutuante para decidir se um número é racional.
- A ferramenta permite comparar 1/3, 1/6, 1/8 e −7/51; a tabela revela a divisão inteira até terminar ou repetir um resto.
- O slider acrescenta noves a uma expansão FINITA. A diferença até 1 é construída como texto exato. Nunca representa o infinito como um último valor finito.

## Reutilizar a ferramenta

Em qualquer página ou componente:

```tsx
import { DecimalExplorerController } from '@/controllers/DecimalExplorerController';

<DecimalExplorerController initialExample={0} initialNines={3} />
```

`initialExample`: 0 = 1/3; 1 = 1/6; 2 = 1/8; 3 = −7/51. `initialNines`: inteiro de 1 a 10. Cada instância tem estado independente.

Para usar a ferramenta numa aula do catálogo, acrescenta `"decimalExplorer": true` ao objeto da aula. Mantém o campo `tool` exigido pelo modelo; quando a opção decimal está ativa, a ferramenta decimal ocupa o lugar do explorador habitual. Nas aulas sem esta opção, tudo continua como antes.

A apresentação `DecimalExplorer.tsx` recebe dados e callbacks. O controller mantém o estado; o serviço calcula; o SCSS fica junto ao componente. `useId` apenas assegura IDs acessíveis e independentes para os sliders.

## Roteiro para uma live de até 50 minutos

- 0–5 min: apresenta as quatro opções sem revelar a resposta. Pede uma escolha e uma justificação breve.
- 5–12 min: razão 1/3, igualdade exata e surpresa 0,999… = 1. Pergunta: “Se fosse diferente, quanto faltaria?” Distingue aproximação finita e limite.
- 12–20 min: explora restos em 1/3, 1/6 e 1/8; pede previsões antes de mudar a fração. Guarda a ideia: um resto repetido inicia um ciclo.
- 20–28 min: simplifica A e D e explica B com a hipótese do fator não nulo. Abre −7/51 na ferramenta para observar o período.
- 28–38 min: propõe √2 × √8 antes de analisar C. Recolhe palpites e mostra o quadrado perfeito. Em C, a fatorização organiza a expressão; elevar ao quadrado fornece a prova.
- 38–45 min: escolhe dois ou três desafios da aula e pede que expliquem, não apenas que respondam.
- 45–50 min: resume as ideias e indica a página para os restantes exercícios e perguntas por passo.

A página apresenta a resolução e os exercícios mais abaixo. Para não antecipar a resposta durante a live, fica primeiro nas secções “O problema” e “Experimenta”. Os participantes podem estudar os passos ao próprio ritmo depois.

## Precisões matemáticas

- Uma razão é um quociente; para ser uma representação racional por definição, os termos devem ser inteiros e o denominador não nulo. Por exemplo, π/1 não torna π racional.
- Irracionais têm expansão decimal infinita não periódica. A raiz quadrada real de um irracional positivo é irracional; raízes de inteiros podem ser racionais (√49) ou irracionais (√8).
- π vezes um racional não nulo é irracional. Zero é a exceção.
- Dois fatores irracionais podem dar um racional: √2√8 = 4. Também podem dar um irracional: √2√3 = √6.
- Na opção C, s² = 36 + 12√5. Se s fosse racional, √5 = (s² − 36)/12 também seria racional, contradição.
- A = −7/51 = −0,(1372549019607843). A fração é irredutível e o denominador tem fatores 3 e 17.
- A classificação “termina ou é periódica” usa a expansão usual, sem a cauda alternativa de noves. Decimais terminantes também admitem a segunda representação: 0,5 = 0,4999….
