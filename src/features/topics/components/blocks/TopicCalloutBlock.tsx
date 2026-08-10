import type {
    TopicCalloutBlock as TopicCalloutBlockType,
} from "../../types/topic.types";

import styles
    from "./TopicCalloutBlock.module.scss";

type Props = {
    block:
        TopicCalloutBlockType;
};

export function TopicCalloutBlock({
    block,
}: Props) {

    const tone =
        block.tone ??
        "idea";

    return (
        <aside
            className={
                `${styles.callout} ${styles[tone]}`
            }
        >

            <span>
                {
                    getLabel(
                        tone
                    )
                }
            </span>

            <h3>
                {
                    block.title
                }
            </h3>

            <p>
                {
                    block.text
                }
            </p>

        </aside>
    );
}

function getLabel(
    tone:
        "idea" |
        "question" |
        "historical" |
        "modern"
): string {

    switch (
        tone
    ) {

        case "question":
            return "Pergunta";

        case "historical":
            return "Contexto histórico";

        case "modern":
            return "Visão moderna";

        default:
            return "Ideia importante";
    }
}