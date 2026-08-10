import type {
    TextProblemBlock,
} from "../../types/problem.types";

import styles
    from "./TextBlock.module.scss";

type Props = {
    block: TextProblemBlock;
};

export function TextBlock({
    block,
}: Props) {

    return (
        <section
            className={
                styles.block
            }
        >

            {block.title && (
                <h2>
                    {block.title}
                </h2>
            )}

            {
                block.paragraphs.map(
                    (
                        paragraph,
                        index
                    ) => (

                        <p
                            key={
                                `${block.id}-${index}`
                            }
                        >
                            {paragraph}
                        </p>

                    )
                )
            }

        </section>
    );
}