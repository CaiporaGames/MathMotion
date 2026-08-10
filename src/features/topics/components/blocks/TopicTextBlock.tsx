import type {
    TopicTextBlock as TopicTextBlockType,
} from "../../types/topic.types";

import styles
    from "./TopicTextBlock.module.scss";

type Props = {
    block:
        TopicTextBlockType;
};

export function TopicTextBlock({
    block,
}: Props) {

    return (
        <section
            className={
                styles.block
            }
        >

            {
                block.title &&
                (
                    <h2>
                        {
                            block.title
                        }
                    </h2>
                )
            }

            {
                block
                    .paragraphs
                    .map(
                        (
                            paragraph,
                            index
                        ) => (

                            <p
                                key={
                                    `${block.id}-${index}`
                                }
                            >
                                {
                                    paragraph
                                }
                            </p>

                        )
                    )
            }

        </section>
    );
}