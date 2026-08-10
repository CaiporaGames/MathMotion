import type {
    BalanceSideId,
    BalanceSideState,
    BalanceStatus,
} from "../types/balance.types";

import {
    BalanceScale,
} from "./BalanceScale";

import {
    BalanceControls,
} from "./BalanceControls";

import styles
    from "./BalanceLabPage.module.scss";

type Props = {

    left: BalanceSideState;

    right: BalanceSideState;

    status: BalanceStatus;

    tiltAngle: number;

    statusText: string;

    equationText: string;

    onAddBox:
        (side: BalanceSideId) =>
            void;

    onRemoveBox:
        (side: BalanceSideId) =>
            void;

    onChangeWeight:
        (
            side: BalanceSideId,
            delta: number
        ) =>
            void;

    onReset:
        () =>
            void;
};

export function BalanceLabPage({
    left,
    right,
    status,
    tiltAngle,
    statusText,
    equationText,
    onAddBox,
    onRemoveBox,
    onChangeWeight,
    onReset,
}: Props) {

    return (
        <section
            className={
                styles.container
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <div>
                    <span
                        className={
                            styles.eyebrow
                        }
                    >
                        Laboratório
                    </span>

                    <h1>
                        Balança
                    </h1>

                    <p>
                        Experimente retirar
                        ou acrescentar caixas
                        e pesos. Observe o que
                        acontece com o equilíbrio.
                    </p>
                </div>

                <button
                    type="button"
                    className={
                        styles.resetButton
                    }
                    onClick={onReset}
                >
                    Reiniciar
                </button>

            </header>

            <div
                className={
                    styles.workspace
                }
            >

                <div
                    className={
                        styles.scaleCard
                    }
                >

                    <div
                        className={
                            styles.equation
                        }
                    >
                        <span>
                            Situação atual
                        </span>

                        <strong>
                            {equationText}
                        </strong>
                    </div>

                    <BalanceScale
                        left={left}
                        right={right}
                        status={status}
                        tiltAngle={
                            tiltAngle
                        }
                    />

                    <div
                        className={
                            `${styles.status} ${
                                styles[status]
                            }`
                        }
                    >
                        <span
                            className={
                                styles.statusDot
                            }
                        />

                        {statusText}
                    </div>

                </div>

                <div
                    className={
                        styles.experiment
                    }
                >

                    <div
                        className={
                            styles.question
                        }
                    >

                        <span>
                            Investigue
                        </span>

                        <h2>
                            O que precisamos
                            fazer para manter
                            a balança equilibrada?
                        </h2>

                        <p>
                            Experimente fazer
                            uma operação num
                            único prato e observe
                            o resultado.
                        </p>

                    </div>

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

                </div>

            </div>

        </section>
    );
}