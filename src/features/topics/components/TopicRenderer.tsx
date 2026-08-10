import {
    DerivativeExplorerController,
} from "@/features/derivative-explorer/controllers/DerivativeExplorerController";

import {
    TopicCalloutBlock,
} from "./blocks/TopicCalloutBlock";

import {
    TopicMathBlock,
} from "./blocks/TopicMathBlock";

import {
    TopicTextBlock,
} from "./blocks/TopicTextBlock";

import type {
    TopicBlock,
} from "../types/topic.types";

type Props = {
    block:
        TopicBlock;
};

export function TopicRenderer({
    block,
}: Props) {

    switch (
        block.type
    ) {

        case "text":

            return (
                <TopicTextBlock
                    block={block}
                />
            );

        case "math":

            return (
                <TopicMathBlock
                    block={block}
                />
            );

        case "callout":

            return (
                <TopicCalloutBlock
                    block={block}
                />
            );

        case "derivative-explorer":

            return (
                <section>

                    {
                        block.title &&
                        (
                            <h2>
                                {
                                    block
                                        .title
                                }
                            </h2>
                        )
                    }

                    {
                        block.text &&
                        (
                            <p>
                                {
                                    block
                                        .text
                                }
                            </p>
                        )
                    }

                    <DerivativeExplorerController
                        id={
                            block.id
                        }

                        config={
                            block.config
                        }
                    />

                </section>
            );
    }
}