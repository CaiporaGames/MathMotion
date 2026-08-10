"use client";

import {
    BalanceLabPage,
} from "../components/BalanceLabPage";

import {
    useBalanceController,
} from "./useBalanceController";

export function BalancePageController() {

    const controller =
        useBalanceController();

    return (
        <BalanceLabPage
            left={
                controller.left
            }

            right={
                controller.right
            }

            status={
                controller.status
            }

            tiltAngle={
                controller.tiltAngle
            }

            statusText={
                controller.statusText
            }

            equationText={
                controller.equationText
            }

            onAddBox={
                controller.onAddBox
            }

            onRemoveBox={
                controller.onRemoveBox
            }

            onChangeWeight={
                controller.onChangeWeight
            }

            onReset={
                controller.onReset
            }
        />
    );
}