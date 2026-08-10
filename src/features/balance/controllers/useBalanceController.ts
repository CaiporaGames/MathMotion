"use client";

import {
    balanceLabScenario,
} from "../config/balanceLab.config";

import {
    BalanceService,
} from "../services/balance.service";

import {
    useBalanceStore,
} from "../store/balance.store";

import type {
    BalanceSideId,
    BalanceSideState,
} from "../types/balance.types";

export function useBalanceController() {

    const left =
        useBalanceStore(
            state => state.left
        );

    const right =
        useBalanceStore(
            state => state.right
        );

    const setLeft =
        useBalanceStore(
            state => state.setLeft
        );

    const setRight =
        useBalanceStore(
            state => state.setRight
        );

    const status =
        BalanceService.getStatus(
            left,
            right,
            balanceLabScenario.hiddenBoxWeight
        );

    const tiltAngle =
        BalanceService.calculateTiltAngle(
            left,
            right,
            balanceLabScenario.hiddenBoxWeight
        );

    function updateSide(
        sideId: BalanceSideId,
        side: BalanceSideState,
    ) {

        if (sideId === "left") {
            setLeft(side);
            return;
        }

        setRight(side);
    }

    function getSide(
        sideId: BalanceSideId,
    ): BalanceSideState {

        if (sideId === "left") {
            return left;
        }

        return right;
    }

    function changeWeight(
        sideId: BalanceSideId,
        delta: number,
    ) {

        const currentSide =
            getSide(sideId);

        const newSide =
            BalanceService.changeKnownWeight(
                currentSide,
                delta
            );

        updateSide(
            sideId,
            newSide
        );
    }

    function changeBoxes(
        sideId: BalanceSideId,
        delta: number,
    ) {

        const currentSide =
            getSide(sideId);

        const newSide =
            BalanceService.changeBoxCount(
                currentSide,
                delta
            );

        updateSide(
            sideId,
            newSide
        );
    }

    function reset() {

        setLeft({
            ...balanceLabScenario.left,
        });

        setRight({
            ...balanceLabScenario.right,
        });
    }

    return {

        left,

        right,

        status,

        tiltAngle,

        statusText:
            getStatusText(status),

        equationText:
            `${formatSide(left)} = ${formatSide(right)}`,

        onAddBox: (
            side: BalanceSideId
        ) =>
            changeBoxes(
                side,
                1
            ),

        onRemoveBox: (
            side: BalanceSideId
        ) =>
            changeBoxes(
                side,
                -1
            ),

        onChangeWeight:
            changeWeight,

        onReset:
            reset,
    };
}

function getStatusText(
    status:
        "balanced" |
        "left-heavy" |
        "right-heavy"
): string {

    switch (status) {

        case "balanced":
            return "A balança está equilibrada.";

        case "left-heavy":
            return "O prato esquerdo está mais pesado.";

        case "right-heavy":
            return "O prato direito está mais pesado.";
    }
}

function formatSide(
    side: BalanceSideState,
): string {

    const parts: string[] = [];

    if (side.boxCount === 1) {
        parts.push("□");
    }

    if (side.boxCount > 1) {
        parts.push(
            `${side.boxCount}□`
        );
    }

    if (side.knownWeight > 0) {
        parts.push(
            `${side.knownWeight} kg`
        );
    }

    if (parts.length === 0) {
        return "0";
    }

    return parts.join(" + ");
}
