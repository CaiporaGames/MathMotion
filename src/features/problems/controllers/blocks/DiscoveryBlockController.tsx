"use client";

import {
    DiscoveryBlock,
} from "../../components/blocks/DiscoveryBlock";

import {
    useProblemProgressStore,
} from "../../store/problemProgress.store";

import type {
    DiscoveryProblemBlock,
} from "../../types/problem.types";

type Props = {
    block:
        DiscoveryProblemBlock;
};

export function DiscoveryBlockController({
    block,
}: Props) {

    const revealed =
        useProblemProgressStore(
            state =>
                state
                    .revealedBlocks[
                    block.id
                ] ?? false
        );

    const revealBlock =
        useProblemProgressStore(
            state =>
                state.revealBlock
        );

    return (
        <DiscoveryBlock
            block={block}
            revealed={revealed}
            onReveal={
                () =>
                    revealBlock(
                        block.id
                    )
            }
        />
    );
}