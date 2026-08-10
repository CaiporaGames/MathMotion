import type {
    TopicDefinition,
} from "@/features/topics/types/topic.types";

export const fermatMaximumTopic:
    TopicDefinition = {

    id:
        "fermat-maximum",

    slug:
        "problema-de-fermat",

    title:
        "O problema de Fermat",

    area:
        "Cálculo",

    description:
        "Como procurar um máximo antes mesmo de existir o conceito moderno de derivada?",

    blocks: [

        {
            id:
                "fermat-problem",

            type:
                "text",

            title:
                "O problema",

            paragraphs: [

                "Considere um segmento contínuo AB de comprimento L.",

                "Escolha um ponto P entre A e B.",

                "Queremos descobrir para qual posição de P o produto AP · PB é máximo.",
            ],
        },

        {
            id:
                "fermat-main-question",

            type:
                "callout",

            tone:
                "question",

            title:
                "Onde devemos colocar P?",

            text:
                "Entre todas as divisões possíveis do segmento, qual delas produz o maior produto entre os dois comprimentos?",
        },

        {
            id:
                "fermat-model",

            type:
                "text",

            title:
                "Transformando a geometria em uma função",

            paragraphs: [

                "Se chamarmos AP de x, então o restante do segmento possui comprimento L - x.",

                "Portanto, o produto que queremos maximizar pode ser descrito por uma função.",
            ],
        },

        {
            id:
                "fermat-function",

            type:
                "math",

            latex:
                "f(x)=x(L-x)",
        },

        {
            id:
                "fermat-historical",

            type:
                "callout",

            tone:
                "historical",

            title:
                "Ainda não temos derivadas",

            text:
                "Em vez de começar impondo f'(x)=0, vamos tentar comparar o valor da função em x com o valor obtido depois de uma pequena perturbação.",
        },

        {
            id:
                "fermat-perturbation",

            type:
                "text",

            title:
                "Perturbando o ponto",

            paragraphs: [

                "Escolha uma posição x que suspeitamos estar próxima do máximo.",

                "Agora deslocamos esse ponto por uma pequena quantidade e, que chamaremos de e.",

                "Passamos então a comparar f(x) com f(x+e).",
            ],
        },

        {
            id:
                "fermat-perturbed-expression",

            type:
                "math",

            latex:
                "f(x+e)=(x+e)(L-x-e)",
        },

        {
            id:
                "fermat-explorer",

            type:
                "derivative-explorer",

            title:
                "Veja essa perturbação no gráfico",

            text:
                "Neste exemplo fixamos L = 10. Mova x e depois diminua e. Observe especialmente o que acontece perto de x = 5.",

            config: {

                expression:
                    "x * (L - x)",

                variable:
                    "x",

                parameters: {
                    L: 10,
                },

                viewport: {
                    minX: 0,
                    maxX: 10,

                    minY: 0,
                    maxY: 28,
                },

                xRange: {
                    min: 0,
                    max: 10,
                    step: 0.05,
                },

                hRange: {
                    min: 0.05,
                    max: 3,
                    step: 0.05,
                },

                initialX:
                    3,

                initialH:
                    2,

                perturbationSymbol:
                    "e",
            },
        },

        {
            id:
                "fermat-nearly-equal",

            type:
                "callout",

            tone:
                "idea",

            title:
                "O que esperamos perto do máximo?",

            text:
                "Se x estiver no máximo e e for muito pequeno, os valores f(x) e f(x+e) tornam-se extremamente próximos. Essa é a pista que vamos explorar algebricamente.",
        },

        {
            id:
                "fermat-expand",

            type:
                "text",

            title:
                "Expandindo a perturbação",

            paragraphs: [

                "Vamos agora abrir o produto de f(x+e).",
            ],
        },

        {
            id:
                "fermat-expansion",

            type:
                "math",

            latex:
                "(x+e)(L-x-e)=x(L-x)+e(L-2x)-e^2",
        },

        {
            id:
                "fermat-adequality",

            type:
                "text",

            paragraphs: [

                "No ponto procurado, comparamos f(x) e f(x+e) como quantidades quase iguais.",

                "Substituindo a expansão e cancelando o termo x(L-x), que aparece nos dois lados, sobra a parte provocada pela pequena perturbação.",
            ],
        },

        {
            id:
                "fermat-after-cancel",

            type:
                "math",

            latex:
                "0\\approx e(L-2x)-e^2",
        },

        {
            id:
                "fermat-divide-e",

            type:
                "text",

            paragraphs: [

                "Como estamos considerando uma perturbação e diferente de zero, podemos dividir a expressão por e.",
            ],
        },

        {
            id:
                "fermat-after-divide",

            type:
                "math",

            latex:
                "0\\approx L-2x-e",
        },

        {
            id:
                "fermat-small-e",

            type:
                "text",

            paragraphs: [

                "Agora fazemos a perturbação tornar-se cada vez menor.",

                "O termo e desaparece da condição restante.",
            ],
        },

        {
            id:
                "fermat-condition",

            type:
                "math",

            latex:
                "L-2x=0",
        },

        {
            id:
                "fermat-result",

            type:
                "math",

            latex:
                "x=\\frac{L}{2}",
        },

        {
            id:
                "fermat-discovery",

            type:
                "callout",

            tone:
                "idea",

            title:
                "A divisão ótima é simétrica",

            text:
                "O produto é máximo quando P divide o segmento exatamente ao meio.",
        },

        {
            id:
                "fermat-modern",

            type:
                "text",

            title:
                "A visão moderna",

            paragraphs: [

                "Hoje podemos reinterpretar a mesma situação usando derivadas.",

                "A derivada mede a taxa de variação instantânea da função. No ponto máximo da parábola, a reta tangente é horizontal.",
            ],
        },

        {
            id:
                "fermat-derivative",

            type:
                "math",

            latex:
                "f'(x)=L-2x",
        },

        {
            id:
                "fermat-derivative-zero",

            type:
                "math",

            latex:
                "f'(x)=0",
        },

        {
            id:
                "fermat-modern-result",

            type:
                "math",

            latex:
                "L-2x=0\\quad\\Longrightarrow\\quad x=\\frac{L}{2}",
        },

        {
            id:
                "fermat-modern-callout",

            type:
                "callout",

            tone:
                "modern",

            title:
                "O que o gráfico revelou",

            text:
                "Quando e diminui, a reta secante entre x e x+e aproxima-se da reta tangente. No máximo, essa tangente torna-se horizontal e sua inclinação é zero.",
        },
    ],
};