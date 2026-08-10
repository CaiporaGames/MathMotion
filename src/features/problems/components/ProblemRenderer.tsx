import {
    TextBlock,
} from "./blocks/TextBlock";

import {
    MathBlock,
} from "./blocks/MathBlock";

import {
    QuestionBlockController,
} from "../controllers/blocks/QuestionBlockController";

import {
    DiscoveryBlockController,
} from "../controllers/blocks/DiscoveryBlockController";

import {
    ProblemBalanceBlockController,
} from "../controllers/blocks/ProblemBalanceBlockController";

import type {
    ProblemBlock,
} from "../types/problem.types";

type Props = {
    block:
        ProblemBlock;
};
import {
    ProblemGeometryBlockController,
} from "../controllers/blocks/ProblemGeometryBlockController";

export function ProblemRenderer({
    block,
}: Props) {

    switch (block.type) {

        case "text":

            return (
                <TextBlock
                    block={block}
                />
            );

        case "question":

            return (
                <QuestionBlockController
                    block={block}
                />
            );

        case "math":

            return (
                <MathBlock
                    block={block}
                />
            );

        case "discovery":

            return (
                <DiscoveryBlockController
                    block={block}
                />
            );

        case "balance":

            return (
                <ProblemBalanceBlockController
                    block={block}
                />
            );
        case "geometry":

            return (
                <ProblemGeometryBlockController
                    block={block}
                />
            );
    }
}