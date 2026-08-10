import katex
    from "katex";

import type {
    MathProblemBlock,
} from "../../types/problem.types";

import styles
    from "./MathBlock.module.scss";

type Props = {
    block: MathProblemBlock;
};

export function MathBlock({
    block,
}: Props) {

    const html =
        katex.renderToString(
            block.latex,
            {
                displayMode: true,

                throwOnError: false,
            }
        );

    return (
        <section
            className={
                styles.block
            }
        >

            <div
                className={
                    styles.formula
                }
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />

            {
                block.explanation &&
                (
                    <p>
                        {
                            block
                                .explanation
                        }
                    </p>
                )
            }

        </section>
    );
}