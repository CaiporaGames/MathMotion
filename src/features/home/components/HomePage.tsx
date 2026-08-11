import Link from "next/link";

import {
    HomeCategoryCard,
} from "./HomeCategoryCard";

import type {
    HomeCategory,
} from "../types/home.types";

import styles
    from "./HomePage.module.scss";

const categories:
    HomeCategory[] = [

    {
        id:
            "laboratory",

        eyebrow:
            "Explore",

        title:
            "Laboratório",

        description:
            "Manipule objetos matemáticos livremente e observe o que acontece.",

        href:
            "/laboratorio",

        actionLabel:
            "Ver ferramentas",

        links: [

            {
                title:
                    "Funções",

                description:
                    "Escreva funções e visualize os seus gráficos.",

                href:
                    "/laboratorio/funcoes",

                tag:
                    "Gráficos",
            },

            {
                title:
                    "Balança",

                description:
                    "Explore igualdade e equações através do equilíbrio.",

                href:
                    "/laboratorio/balanca",

                tag:
                    "Álgebra",
            },

            {
                title:
                    "Escala e crescimento",

                description:
                    "Compare comprimento, área e volume.",

                href:
                    "/laboratorio/escala",

                tag:
                    "Geometria",
            },
        ],
    },

    {
        id:
            "investigations",

        eyebrow:
            "Descubra",

        title:
            "Investigações",

        description:
            "Comece com um problema, experimente ideias e descubra a matemática necessária.",

        href:
            "/investigacoes",

        actionLabel:
            "Ver investigações",

        links: [

            {
                title:
                    "A balança misteriosa",

                description:
                    "Descubra equações começando pelo equilíbrio de uma balança.",

                href:
                    "/investigacoes/balanca-misteriosa",

                tag:
                    "Equações",
            },

            {
                title:
                    "Como atravessar o rio?",

                description:
                    "Experimente com duas tábuas e descubra a geometria escondida.",

                href:
                    "/investigacoes/como-atravessar-o-rio",

                tag:
                    "Pitágoras",
            },
        ],
    },

    {
        id:
            "topics",

        eyebrow:
            "Entenda",

        title:
            "Tópicos",

        description:
            "Estude matemática como num livro, mas com gráficos, experiências e ferramentas interativas.",

        href:
            "/topicos",

        actionLabel:
            "Ver tópicos",

        links: [

            {
                title:
                    "O problema de Fermat",

                description:
                    "Procure um máximo antes de existir a derivada moderna.",

                href:
                    "/topicos/calculo/problema-de-fermat",

                tag:
                    "Cálculo",
            },
        ],
    },
];

export function HomePage() {

    return (
        <div
            className={
                styles.home
            }
        >

            <section
                className={
                    styles.hero
                }
            >

                <div
                    className={
                        styles.heroContent
                    }
                >

                    <div
                        className={
                            styles.logo
                        }
                    >
                        Math
                        <span>
                            Motion
                        </span>
                    </div>

                    <span
                        className={
                            styles.heroEyebrow
                        }
                    >
                        Matemática para explorar
                    </span>

                    <h1>
                        Não comece pela fórmula.
                        <br />

                        <span>
                            Comece pela pergunta.
                        </span>
                    </h1>

                    <p>
                        Explore ideias, manipule
                        objetos e descubra por que
                        a matemática funciona antes
                        de apenas memorizar regras.
                    </p>

                    <div
                        className={
                            styles.heroActions
                        }
                    >

                        <Link
                            href={
                                "/investigacoes/balanca-misteriosa"
                            }

                            className={
                                styles.primaryButton
                            }
                        >
                            Começar uma investigação

                            <span>
                                →
                            </span>
                        </Link>

                        <Link
                            href={
                                "/laboratorio/funcoes"
                            }

                            className={
                                styles.secondaryButton
                            }
                        >
                            Explorar ferramentas
                        </Link>

                    </div>

                </div>

                <div
                    className={
                        styles.heroVisual
                    }
                >

                    <div
                        className={
                            styles.visualCard
                        }
                    >

                        <span
                            className={
                                styles.visualLabel
                            }
                        >
                            Uma pergunta
                        </span>

                        <div
                            className={
                                styles.visualQuestion
                            }
                        >
                            ?
                        </div>

                    </div>

                    <div
                        className={
                            styles.flowArrow
                        }
                    >
                        ↓
                    </div>

                    <div
                        className={
                            `${styles.visualCard}
                             ${styles.visualCardMiddle}`
                        }
                    >

                        <span
                            className={
                                styles.visualLabel
                            }
                        >
                            Experimente
                        </span>

                        <div
                            className={
                                styles.balanceVisual
                            }
                        >
                            <span>
                                □ □ + 2
                            </span>

                            <div />

                            <span>
                                10
                            </span>
                        </div>

                    </div>

                    <div
                        className={
                            styles.flowArrow
                        }
                    >
                        ↓
                    </div>

                    <div
                        className={
                            `${styles.visualCard}
                             ${styles.visualCardFinal}`
                        }
                    >

                        <span
                            className={
                                styles.visualLabel
                            }
                        >
                            Descubra
                        </span>

                        <strong>
                            2x + 2 = 10
                        </strong>

                    </div>

                </div>

            </section>

            <section
                className={
                    styles.introduction
                }
            >

                <span>
                    Três formas de aprender
                </span>

                <h2>
                    Escolha como quer
                    entrar na matemática.
                </h2>

                <p>
                    Você pode explorar livremente,
                    enfrentar um problema ou seguir
                    um tópico passo a passo.
                </p>

            </section>

            <section
                className={
                    styles.categories
                }
            >

                {
                    categories.map(
                        category => (

                            <HomeCategoryCard
                                key={
                                    category.id
                                }

                                category={
                                    category
                                }
                            />

                        )
                    )
                }

            </section>

            <section
                className={
                    styles.philosophy
                }
            >

                <div
                    className={
                        styles.philosophyLabel
                    }
                >
                    Como aprendemos
                </div>

                <div
                    className={
                        styles.philosophyFlow
                    }
                >

                    <FlowStep
                        number="01"
                        label="Problema"
                    />

                    <FlowArrow />

                    <FlowStep
                        number="02"
                        label="Tentativa"
                    />

                    <FlowArrow />

                    <FlowStep
                        number="03"
                        label="Necessidade"
                    />

                    <FlowArrow />

                    <FlowStep
                        number="04"
                        label="Descoberta"
                    />

                    <FlowArrow />

                    <FlowStep
                        number="05"
                        label="Matemática"
                    />

                </div>

            </section>

        </div>
    );
}

function FlowStep({
    number,
    label,
}: {
    number: string;
    label: string;
}) {

    return (
        <div
            className={
                styles.flowStep
            }
        >
            <span>
                {number}
            </span>

            <strong>
                {label}
            </strong>
        </div>
    );
}

function FlowArrow() {

    return (
        <div
            className={
                styles.philosophyArrow
            }
        >
            →
        </div>
    );
}