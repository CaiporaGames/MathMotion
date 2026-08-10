import {
    create,
} from "zustand";

import type {
    BalanceSideState,
} from "@/features/balance/types/balance.types";

type BalanceInstance = {

    left:
        BalanceSideState;

    right:
        BalanceSideState;
};

type ProblemBalanceState = {

    instances:
        Record<
            string,
            BalanceInstance
        >;

    setInstance:
        (
            id: string,
            instance:
                BalanceInstance
        ) => void;
};

export const useProblemBalanceStore =
    create<ProblemBalanceState>()(
        (set) => ({

            instances: {},

            setInstance:
                (
                    id,
                    instance
                ) =>
                    set(
                        state => ({
                            instances: {
                                ...state
                                    .instances,

                                [id]:
                                    instance,
                            },
                        })
                    ),
        })
    );