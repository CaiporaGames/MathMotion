import type {
    ProblemDefinition,
} from "../types/problem.types";

import {
    ProblemRenderer,
} from "./ProblemRenderer";

import styles
    from "./ProblemPage.module.scss";

type Props = {
    problem:
        ProblemDefinition;
};

export function ProblemPage({
    problem,
}: Props) {

    return (
        <article
            className={
                styles.problem
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <span
                    className={
                        styles.eyebrow
                    }
                >
                    Investigação matemática
                </span>

                <h1>
                    {
                        problem.title
                    }
                </h1>

                <p
                    className={
                        styles.description
                    }
                >
                    {
                        problem
                            .description
                    }
                </p>

                <div
                    className={
                        styles.metadata
                    }
                >
                    <span>
                        {
                            problem.level
                        }
                    </span>

                    <span>
                        {
                            problem
                                .blocks
                                .length
                        }
                        {" "}
                        etapas
                    </span>
                </div>

            </header>

            <div
                className={
                    styles.content
                }
            >

                {
                    problem
                        .blocks
                        .map(
                            block => (

                                <ProblemRenderer
                                    key={
                                        block.id
                                    }
                                    block={
                                        block
                                    }
                                />

                            )
                        )
                }

            </div>

        </article>
    );
}