import {
    TopicRenderer,
} from "./TopicRenderer";

import type {
    TopicDefinition,
} from "../types/topic.types";

import styles
    from "./TopicPage.module.scss";

type Props = {
    topic:
        TopicDefinition;
};

export function TopicPage({
    topic,
}: Props) {

    return (
        <article
            className={
                styles.topic
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <span
                    className={
                        styles.area
                    }
                >
                    {
                        topic.area
                    }
                </span>

                <h1>
                    {
                        topic.title
                    }
                </h1>

                <p>
                    {
                        topic.description
                    }
                </p>

            </header>

            <div
                className={
                    styles.content
                }
            >

                {
                    topic
                        .blocks
                        .map(
                            block => (

                                <TopicRenderer
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