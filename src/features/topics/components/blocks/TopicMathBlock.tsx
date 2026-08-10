import katex
    from "katex";

import type {
    TopicMathBlock as TopicMathBlockType,
} from "../../types/topic.types";

import styles
    from "./TopicMathBlock.module.scss";

type Props = {
    block:
        TopicMathBlockType;
};

export function TopicMathBlock({
    block,
}: Props) {

    const html =
        katex.renderToString(
            block.latex,
            {
                displayMode:
                    true,

                throwOnError:
                    false,
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
                    __html:
                        html,
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