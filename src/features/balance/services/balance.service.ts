import type {
    BalanceSideState,
    BalanceStatus,
} from "../types/balance.types";

export class BalanceService {

    static calculateTotalWeight(
        side: BalanceSideState,
        hiddenBoxWeight: number,
    ): number {

        return (
            side.boxCount *
            hiddenBoxWeight
        ) + side.knownWeight;
    }

    static getStatus(
        left: BalanceSideState,
        right: BalanceSideState,
        hiddenBoxWeight: number,
    ): BalanceStatus {

        const leftWeight =
            this.calculateTotalWeight(
                left,
                hiddenBoxWeight
            );

        const rightWeight =
            this.calculateTotalWeight(
                right,
                hiddenBoxWeight
            );

        const difference =
            leftWeight -
            rightWeight;

        if (
            Math.abs(difference) <
            0.0001
        ) {
            return "balanced";
        }

        if (difference > 0) {
            return "left-heavy";
        }

        return "right-heavy";
    }

    static calculateTiltAngle(
        left: BalanceSideState,
        right: BalanceSideState,
        hiddenBoxWeight: number,
    ): number {

        const leftWeight =
            this.calculateTotalWeight(
                left,
                hiddenBoxWeight
            );

        const rightWeight =
            this.calculateTotalWeight(
                right,
                hiddenBoxWeight
            );

        const difference =
            leftWeight -
            rightWeight;

        /*
         * Limitamos visualmente a inclinação
         * para a balança não girar demais.
         */
        const rawAngle =
            -difference * 1.5;

        return Math.max(
            -8,
            Math.min(
                8,
                rawAngle
            )
        );
    }

    static changeKnownWeight(
        side: BalanceSideState,
        delta: number,
    ): BalanceSideState {

        return {
            ...side,

            knownWeight:
                Math.max(
                    0,
                    side.knownWeight +
                    delta
                ),
        };
    }

    static changeBoxCount(
        side: BalanceSideState,
        delta: number,
    ): BalanceSideState {

        return {
            ...side,

            boxCount:
                Math.max(
                    0,
                    Math.min(
                        3,
                        side.boxCount +
                        delta
                    )
                ),
        };
    }
}