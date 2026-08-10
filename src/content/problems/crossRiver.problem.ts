import type {
    ProblemDefinition,
} from "@/features/problems/types/problem.types";

export const crossRiverProblem:
    ProblemDefinition = {

    id:
        "cross-river",

    slug:
        "como-atravessar-o-rio",

    title:
        "Como atravessar o rio?",

    level:
        "2.º e 3.º ciclos",

    description:
        "Duas tábuas parecem pequenas demais para atravessar o rio. Será que a curva do rio pode nos ajudar?",

    blocks: [

        {
            id:
                "river-introduction",

            type:
                "text",

            title:
                "Situação inicial",

            paragraphs: [

                "Um rio faz uma curva formando um ângulo reto.",

                "A largura do rio é de 4 metros.",

                "Temos apenas duas tábuas, e cada uma mede 3 metros.",

                "As tábuas não podem ser cortadas, dobradas ou aumentadas. Também não podemos entrar na água.",
            ],
        },

        {
            id:
                "river-direct-crossing",

            type:
                "math",

            latex:
                "3<4",

            explanation:
                "Uma única tábua colocada diretamente de uma margem à outra não consegue atravessar os 4 metros.",
        },

        {
            id:
                "river-question-direct",

            type:
                "question",

            prompt:
                "Uma única tábua de 3 m consegue atravessar diretamente um trecho de rio com 4 m de largura?",

            inputType:
                "multiple-choice",

            correctAnswer:
                "no",

            options: [

                {
                    id:
                        "yes",

                    label:
                        "Sim",

                    value:
                        "yes",
                },

                {
                    id:
                        "no",

                    label:
                        "Não",

                    value:
                        "no",
                },
            ],

            successMessage:
                "Exato. Diretamente não funciona, pois 3 < 4.",

            errorMessage:
                "Compare o comprimento da tábua com a largura do rio.",
        },

        {
            id:
                "river-experiment",

            type:
                "geometry",

            geometryType:
                "river-crossing",

            title:
                "Tente encontrar uma passagem",

            instruction:
                "Arraste e rode as duas tábuas. Tente diferentes posições. Será que o canto do rio pode ser usado de alguma maneira?",

            scenario: {

                width:
                    12,

                height:
                    10,

                riverWidth:
                    4,

                margin:
                    2,

                planks: [

                    {
                        id:
                            "plank-a",

                        label:
                            "Tábua A · 3 m",

                        length:
                            3,

                        center: {
                            x: 8,
                            y: 7.3,
                        },

                        angle:
                            0,
                    },

                    {
                        id:
                            "plank-b",

                        label:
                            "Tábua B · 3 m",

                        length:
                            3,

                        center: {
                            x: 9.2,
                            y: 8.3,
                        },

                        angle:
                            0,
                    },
                ],
            },
        },

        {
            id:
                "river-corner-discovery",

            type:
                "discovery",

            title:
                "O canto muda o problema",

            text:
                "Não somos obrigados a atravessar pela parte reta do rio. A curva cria uma nova geometria e permite procurar um ponto de apoio intermédio para as duas tábuas.",
        },

        {
            id:
                "river-distance-transition",

            type:
                "text",

            title:
                "Mas como saber se uma posição funciona?",

            paragraphs: [

                "Agora aparece uma dificuldade nova.",

                "Podemos posicionar as tábuas diagonalmente, mas precisamos saber qual é a distância entre dois pontos quando os deslocamentos horizontal e vertical são conhecidos.",

                "Antes de voltar ao rio, vamos investigar um problema mais simples.",
            ],
        },

        {
            id:
                "river-345-introduction",

            type:
                "text",

            title:
                "Um problema mais simples",

            paragraphs: [

                "Imagine que caminhamos 3 metros numa direção e depois 4 metros numa direção perpendicular.",

                "Queremos saber a distância direta entre o ponto inicial e o ponto final.",
            ],
        },

        {
            id:
                "river-345-question",

            type:
                "question",

            prompt:
                "Se os dois deslocamentos perpendiculares medem 3 m e 4 m, qual é a distância direta entre os pontos?",

            inputType:
                "number",

            correctAnswer:
                5,

            tolerance:
                0.01,

            successMessage:
                "Isso mesmo: a distância direta é 5 m.",

            errorMessage:
                "Experimente desenhar um triângulo retângulo ou pensar numa relação entre 3, 4 e a distância desconhecida.",
        },

        {
            id:
                "river-square-3",

            type:
                "math",

            latex:
                "3^2=9",
        },

        {
            id:
                "river-square-4",

            type:
                "math",

            latex:
                "4^2=16",
        },

        {
            id:
                "river-sum",

            type:
                "math",

            latex:
                "3^2+4^2=9+16=25",
        },

        {
            id:
                "river-square-5",

            type:
                "math",

            latex:
                "25=5^2",
        },

        {
            id:
                "river-discovery-pythagoras",

            type:
                "discovery",

            title:
                "Uma relação apareceu",

            text:
                "No triângulo retângulo formado pelos deslocamentos, o quadrado do comprimento da diagonal é igual à soma dos quadrados dos dois lados perpendiculares.",
        },

        {
            id:
                "river-pythagoras",

            type:
                "math",

            latex:
                "a^2+b^2=c^2",

            explanation:
                "Essa relação é o Teorema de Pitágoras.",
        },

        {
            id:
                "river-pythagoras-distance",

            type:
                "math",

            latex:
                "c=\\sqrt{a^2+b^2}",
        },

        {
            id:
                "river-return",

            type:
                "text",

            title:
                "Voltando ao rio",

            paragraphs: [

                "Agora o desenho das tábuas deixou de ser apenas uma tentativa visual.",

                "Para qualquer posição diagonal de uma tábua, podemos decompor o seu deslocamento em duas direções perpendiculares.",

                "Como cada tábua mede 3 metros, esses deslocamentos precisam respeitar uma condição.",
            ],
        },

        {
            id:
                "river-plank-equation",

            type:
                "math",

            latex:
                "x^2+y^2=3^2",
        },

        {
            id:
                "river-plank-equation-2",

            type:
                "math",

            latex:
                "x^2+y^2=9",
        },

        {
            id:
                "river-final-discovery",

            type:
                "discovery",

            title:
                "A geometria virou uma ferramenta",

            text:
                "Quando conhecemos deslocamentos em duas direções perpendiculares, o Teorema de Pitágoras permite determinar a distância direta entre os pontos. Agora podemos usar essa relação para estudar quais posições das tábuas são realmente possíveis.",
        },
    ],
};