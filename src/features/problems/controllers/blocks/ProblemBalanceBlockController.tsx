"use client";

import {
    BalanceService,
} from "@/features/balance/services/balance.service";

import type {
    BalanceSideId,
    BalanceSideState,
} from "@/features/balance/types/balance.types";

import {
    ProblemBalanceBlock,
} from "../../components/blocks/ProblemBalanceBlock";

import {
    useProblemBalanceStore,
} from "../../store/problemBalance.store";

import type {
    BalanceProblemBlock,
} from "../../types/problem.types";

type Props = {
    block:
        BalanceProblemBlock;
};

export function ProblemBalanceBlockController({
    block,
}: Props) {

    const instance =
        useProblemBalanceStore(
            state =>
                state.instances[
                    block.id
                ]
        );

    const setInstance =
        useProblemBalanceStore(
            state =>
                state.setInstance
        );

    /*
     * Se ainda não existe estado salvo
     * para esta balança, usamos o cenário
     * inicial do problema.
     */
    const left =
        instance?.left ??
        block.scenario.left;

    const right =
        instance?.right ??
        block.scenario.right;

    const status =
        BalanceService.getStatus(
            left,
            right,
            block
                .scenario
                .hiddenBoxWeight
        );

    const tiltAngle =
        BalanceService
            .calculateTiltAngle(
                left,
                right,
                block
                    .scenario
                    .hiddenBoxWeight
            );

    function updateSide(
        sideId:
            BalanceSideId,

        newSide:
            BalanceSideState,
    ) {

        setInstance(
            block.id,
            {
                left:
                    sideId ===
                    "left"
                        ? newSide
                        : left,

                right:
                    sideId ===
                    "right"
                        ? newSide
                        : right,
            }
        );
    }

    function changeWeight(
        sideId:
            BalanceSideId,

        delta:
            number,
    ) {

        const side =
            sideId ===
            "left"
                ? left
                : right;

        const newSide =
            BalanceService
                .changeKnownWeight(
                    side,
                    delta
                );

        updateSide(
            sideId,
            newSide
        );
    }

    function changeBoxes(
        sideId:
            BalanceSideId,

        delta:
            number,
    ) {

        const side =
            sideId ===
            "left"
                ? left
                : right;

        const newSide =
            BalanceService
                .changeBoxCount(
                    side,
                    delta
                );

        updateSide(
            sideId,
            newSide
        );
    }

    function reset() {

        setInstance(
            block.id,
            {
                left: {
                    ...block
                        .scenario
                        .left,
                },

                right: {
                    ...block
                        .scenario
                        .right,
                },
            }
        );
    }

    const equationText =
        `${
            BalanceService
                .formatSide(
                    left
                )
        } = ${
            BalanceService
                .formatSide(
                    right
                )
        }`;

    return (
        <ProblemBalanceBlock
            block={block}

            left={left}

            right={right}

            status={status}

            tiltAngle={
                tiltAngle
            }

            equationText={
                equationText
            }

            onAddBox={
                side =>
                    changeBoxes(
                        side,
                        1
                    )
            }

            onRemoveBox={
                side =>
                    changeBoxes(
                        side,
                        -1
                    )
            }

            onChangeWeight={
                changeWeight
            }

            onReset={
                reset
            }
        />
    );
}