import type {
    CatalogItem,
} from "@/features/catalog/types/catalog.types";

export const catalogItems:
    CatalogItem[] = [

    /*
     * LABORATÓRIO
     */

    {
        id:
            "function-graph",

        kind:
            "tool",

        title:
            "Funções",

        description:
            "Escreva funções e visualize os seus gráficos no plano cartesiano.",

        href:
            "/laboratorio/funcoes",

        category:
            "Funções",

        tags: [
            "Gráficos",
            "Funções",
        ],

        publishedAt:
            "2026-08-08",
    },

    {
        id:
            "balance-lab",

        kind:
            "tool",

        title:
            "Balança",

        description:
            "Explore igualdade e equações manipulando uma balança virtual.",

        href:
            "/laboratorio/balanca",

        category:
            "Álgebra",

        tags: [
            "Equações",
            "Igualdade",
        ],

        publishedAt:
            "2026-08-09",
    },

    {
        id:
            "measurement-growth",

        kind:
            "tool",

        title:
            "Escala e crescimento",

        description:
            "Compare como comprimentos, áreas e volumes mudam quando uma medida é alterada.",

        href:
            "/laboratorio/escala",

        category:
            "Geometria",

        tags: [
            "Área",
            "Volume",
            "Potências",
        ],

        publishedAt:
            "2026-08-11",
    },


    /*
     * INVESTIGAÇÕES
     */

    {
        id:
            "balance-mystery",

        kind:
            "investigation",

        title:
            "A balança misteriosa",

        description:
            "Descubra naturalmente a ideia de equação através do equilíbrio de uma balança.",

        href:
            "/investigacoes/balanca-misteriosa",

        category:
            "Álgebra",

        tags: [
            "Equações",
            "2.º ciclo",
            "3.º ciclo",
        ],

        publishedAt:
            "2026-08-09",
    },

    {
        id:
            "cross-river",

        kind:
            "investigation",

        title:
            "Como atravessar o rio?",

        description:
            "Experimente com duas tábuas e descubra por que precisamos do Teorema de Pitágoras.",

        href:
            "/investigacoes/como-atravessar-o-rio",

        category:
            "Geometria",

        tags: [
            "Pitágoras",
            "Distâncias",
        ],

        publishedAt:
            "2026-08-10",
    },


    /*
     * TÓPICOS
     */

    {
        id:
            "fermat-maximum",

        kind:
            "topic",

        title:
            "O problema de Fermat",

        description:
            "Veja como a procura de máximos conduz das ideias de Fermat à derivada moderna.",

        href:
            "/topicos/calculo/problema-de-fermat",

        category:
            "Cálculo",

        tags: [
            "Derivada",
            "Máximos",
            "Fermat",
        ],

        publishedAt:
            "2026-08-11",
    },
];