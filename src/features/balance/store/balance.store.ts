import { create } from "zustand";

import {
    balanceLabScenario,
} from "../config/balanceLab.config";

import type {
    BalanceSideState,
} from "../types/balance.types";

type BalanceStore = {

    left: BalanceSideState;

    right: BalanceSideState;

    setLeft:
        (side: BalanceSideState) =>
            void;

    setRight:
        (side: BalanceSideState) =>
            void;
};

export const useBalanceStore =
    create<BalanceStore>()(
        (set) => ({

            left: {
                ...balanceLabScenario.left,
            },

            right: {
                ...balanceLabScenario.right,
            },

            setLeft: (left) =>
                set({ left }),

            setRight: (right) =>
                set({ right }),
        })
    );