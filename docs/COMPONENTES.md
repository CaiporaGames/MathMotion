# Experiências reutilizáveis

Todos os adaptadores estão em `src/components/explorers/index.tsx`.

## Inserir numa página

```tsx
import { AreaExplorer, VolumeExplorer, EquationExplorer } from '@/components/explorers';

export default function MinhaPagina() {
  return (
    <>
      <AreaExplorer config={{ perimeter: 24, initial: { a: 4 }, title: 'Um jardim novo' }} />
      <VolumeExplorer config={{ initial: { width: 4, depth: 3, height: 5 } }} />
      <EquationExplorer config={{ initial: { a: 3, b: 2, c: 14, x: 1 } }} />
    </>
  );
}
```

Cada instância tem estado independente. Podes colocar a mesma ferramenta várias vezes, com configurações diferentes. O controlador é um Client Component; uma página Server Component pode renderizar os adaptadores normalmente.

## Catálogo de componentes e parâmetros

| Componente            | `kind` no JSON | Parâmetros em `initial`    | Modelo                                                                          |
| --------------------- | -------------- | -------------------------- | ------------------------------------------------------------------------------- |
| `AreaExplorer`        | `area`         | `a`                        | Área de retângulo com perímetro fixo; `perimeter` é uma opção fora de `initial` |
| `VolumeExplorer`      | `volume`       | `width`, `depth`, `height` | Paralelepípedo retângulo                                                        |
| `FractionExplorer`    | `fractions`    | `n`, `d`                   | Fração de um todo, 0 ≤ n ≤ d                                                    |
| `RatioExplorer`       | `ratio`        | `a`, `b`, `k`              | Receita proporcional; cada unidade = 100 mL                                     |
| `PercentageExplorer`  | `percent`      | `price`, `up`, `down`      | Aumento seguido de desconto                                                     |
| `EquationExplorer`    | `equation`     | `a`, `b`, `c`, `x`         | ax + b = c, a entre 1 e 6                                                       |
| `FunctionExplorer`    | `function`     | `m`, `b`, `x`              | Função afim y = mx + b                                                          |
| `ProbabilityExplorer` | `probability`  | `sum`                      | Soma de dois dados justos independentes                                         |
| `PythagorasExplorer`  | `pythagoras`   | `a`, `b`                   | Catetos de triângulo retângulo                                                  |
| `MotionExplorer`      | `motion`       | `v`, `t`                   | Movimento com velocidade constante e posição inicial zero                       |

Todos aceitam `config.title`, `config.prompt` e `compact`. Valores fora dos intervalos são limitados pelo serviço. `config.initial` destina-se a valores numéricos; frações e contagens devem usar inteiros. Alterações em `kind`/`config` após a montagem podem ser feitas forçando uma nova instância com `key`.

```tsx
<PercentageExplorer
  compact
  config={{
    title: 'E se o desconto fosse diferente?',
    prompt: 'Muda uma taxa de cada vez.',
    initial: { price: 80, up: 25, down: 20 },
  }}
/>
```

## Mais três experiências para diferentes níveis

| Componente             | `kind`         | Parâmetros      | Modelo                                                            |
| ---------------------- | -------------- | --------------- | ----------------------------------------------------------------- |
| `NumberLineExplorer`   | `numberline`   | `start`, `jump` | Soma de inteiros; começa por valores positivos nos primeiros anos |
| `TrigonometryExplorer` | `trigonometry` | `angle`         | Seno e cosseno, ângulo em graus, círculo de raio 1                |
| `DerivativeExplorer`   | `derivative`   | `x`, `h`        | Secante e tangente para f(x) = x², h > 0                          |

## Onde vive cada responsabilidade

- **Serviço** `explorer.service.ts`: contas, limites dos sliders, valores iniciais, fórmulas e geometria dos SVG.
- **Controlador** `ExplorerController.tsx`: estado, eventos, reinício, mostrar solução e simulação dos dados.
- **Vista** `Explorer.tsx`: recebe modelo e callbacks; apresenta títulos, sliders, resultados e pistas.
- **Desenho** `Diagram.tsx`: recebe primitivas geométricas; desenha-as sem calcular a matemática.
- **Estilos** `Explorer.module.scss` e `Diagram.module.scss`: apresentação responsiva.

O sorteio dos dados usa `Math.random` apenas para ensino. Não é um gerador para aplicações de segurança. O gráfico de funções mostra uma janela fixa de −10 a 10 e informa se o ponto selecionado estiver fora dela. A balança é esquemática, pois os valores podem ser negativos; não representa massas físicas.

## Criar uma experiência nova

1. Adiciona um identificador a `ToolKind` em `types/content.ts`.
2. Acrescenta os valores iniciais e os controlos em `explorer.service.ts`.
3. Define os resultados, a fórmula, a pista e as primitivas SVG em `getExplorerModel`.
4. Regista a ferramenta em `tools`, no serviço de conteúdo.
5. Exporta um adaptador, se quiseres um nome próprio para reutilizar.
6. Adiciona um teste para a propriedade matemática principal.
7. Executa `npm run build`: a rota `/laboratorio/novo-identificador/` será gerada.

A infraestrutura serve para mais temas de matemática e ciências, mas cada modelo precisa de contas e explicações adequadas. Não há geração automática de conteúdos de todas as disciplinas.
