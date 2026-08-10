import type {
    ProblemDefinition,
} from "@/features/problems/types/problem.types";

export const balanceMysteryProblem:
    ProblemDefinition = {

    id:
        "balance-mystery",

    slug:
        "balanca-misteriosa",

    title:
        "A balança misteriosa",

    level:
        "2.º e 3.º ciclos",

    description:
        "Descubra como o equilíbrio de uma balança pode nos levar naturalmente à ideia de equação.",

    blocks: [

        {
            id:
                "balance-intro",

            type:
                "text",

            title:
                "Situação inicial",

            paragraphs: [

                "Diante de nós existe uma balança perfeitamente equilibrada.",

                "Em um dos pratos temos duas caixas idênticas e um peso de 2 kg. No outro prato temos um peso de 10 kg.",

                "As duas caixas possuem exatamente o mesmo peso, mas não sabemos qual é esse peso.",
            ],
        },

        {
            id:
                "balance-question-1",

            type:
                "question",

            prompt:
                "Quanto pesa cada caixa?",

            inputType:
                "number",

            correctAnswer:
                4,

            successMessage:
                "Sim. Cada caixa pesa 4 kg.",

            errorMessage:
                "Ainda não. Experimente manipular a balança antes de tentar novamente.",
        },

        {
            id:
                "balance-experiment-1",

            type:
                "balance",

            title:
                "Experimente a balança",

            instruction:
                "Tente retirar os 2 kg somente do lado esquerdo. Depois pense no que precisaria fazer para recuperar o equilíbrio.",

            showEquation:
                true,

            scenario: {

                left: {
                    boxCount:
                        2,

                    knownWeight:
                        2,
                },

                right: {
                    boxCount:
                        0,

                    knownWeight:
                        10,
                },

                hiddenBoxWeight:
                    4,
            },
        },

        {
            id:
                "balance-discovery-1",

            type:
                "discovery",

            title:
                "Preservando o equilíbrio",

            text:
                "Se realizarmos a mesma operação nos dois lados de uma balança equilibrada, o equilíbrio é preservado.",
        },

        {
            id:
                "balance-transition",

            type:
                "text",

            title:
                "Da balança para a matemática",

            paragraphs: [

                "Agora podemos dar um nome ao peso desconhecido de cada caixa.",

                "Vamos chamar esse peso de x.",

                "A balança pode então deixar de ser apenas um desenho e passar a ser representada por uma igualdade matemática.",
            ],
        },

        {
            id:
                "balance-equation-1",

            type:
                "math",

            latex:
                "x+x+2=10",

            explanation:
                "As duas caixas são representadas pelo mesmo x porque possuem o mesmo peso.",
        },

        {
            id:
                "balance-equation-2",

            type:
                "math",

            latex:
                "2x+2=10",
        },

        {
            id:
                "balance-remove-two",

            type:
                "text",

            paragraphs: [

                "Na experiência com a balança descobrimos que não podemos retirar 2 kg apenas de um lado se quisermos conservar o equilíbrio.",

                "Portanto, fazemos a mesma operação dos dois lados.",
            ],
        },

        {
            id:
                "balance-equation-3",

            type:
                "math",

            latex:
                "2x+2-2=10-2",
        },

        {
            id:
                "balance-equation-4",

            type:
                "math",

            latex:
                "2x=8",
        },

        {
            id:
                "balance-divide",

            type:
                "text",

            paragraphs: [

                "Agora temos duas caixas iguais que juntas pesam 8 kg.",

                "Dividimos então os dois lados em duas partes iguais.",
            ],
        },

        {
            id:
                "balance-equation-5",

            type:
                "math",

            latex:
                "\\frac{2x}{2}=\\frac{8}{2}",
        },

        {
            id:
                "balance-equation-6",

            type:
                "math",

            latex:
                "x=4",
        },

        {
            id:
                "balance-discovery-2",

            type:
                "discovery",

            title:
                "A ideia de equação",

            text:
                "Uma equação representa um equilíbrio. Para transformar a equação sem alterar as suas soluções, realizamos transformações que preservam esse equilíbrio.",
        },
    ],
};