import {
    BalanceScale,
} from "@/features/balance/components/BalanceScale";

import {
    BalanceControls,
} from "@/features/balance/components/BalanceControls";

import type {
    BalanceSideId,
    BalanceSideState,
    BalanceStatus,
} from "@/features/balance/types/balance.types";

import type {
    BalanceProblemBlock,
} from "../../types/problem.types";

import styles
    from "./ProblemBalanceBlock.module.scss";

type Props = {

    block:
        BalanceProblemBlock;

    left:
        BalanceSideState;

    right:
        BalanceSideState;

    status:
        BalanceStatus;

    tiltAngle:
        number;

    equationText:
        string;

    onAddBox:
        (
            side:
                BalanceSideId
        ) => void;

    onRemoveBox:
        (
            side:
                BalanceSideId
        ) => void;

    onChangeWeight:
        (
            side:
                BalanceSideId,

            delta:
                number
        ) => void;

    onReset:
        () => void;
};

export function ProblemBalanceBlock({
    block,
    left,
    right,
    status,
    tiltAngle,
    equationText,
    onAddBox,
    onRemoveBox,
    onChangeWeight,
    onReset,
}: Props) {

    return (
        <section
            className={
                styles.block
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <div>
                    <span>
                        Experimente
                    </span>

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
                        block
                            .instruction &&
                        (
                            <p>
                                {
                                    block
                                        .instruction
                                }
                            </p>
                        )
                    }
                </div>

                <button
                    type="button"
                    onClick={
                        onReset
                    }
                >
                    Reiniciar
                </button>

            </header>

            {
                block.showEquation &&
                (
                    <div
                        className={
                            styles
                                .equation
                        }
                    >
                        {
                            equationText
                        }
                    </div>
                )
            }

            <BalanceScale
                left={left}
                right={right}
                status={status}
                tiltAngle={
                    tiltAngle
                }
            />

            <BalanceControls
                left={left}
                right={right}
                onAddBox={
                    onAddBox
                }
                onRemoveBox={
                    onRemoveBox
                }
                onChangeWeight={
                    onChangeWeight
                }
            />

        </section>
    );
}