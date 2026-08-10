import type {
    BalanceSideId,
    BalanceSideState,
} from "../types/balance.types";

import styles
    from "./BalanceControls.module.scss";

type Props = {

    left: BalanceSideState;

    right: BalanceSideState;

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
};

export function BalanceControls({
    left,
    right,
    onAddBox,
    onRemoveBox,
    onChangeWeight,
}: Props) {

    return (
        <div className={styles.controls}>

            <SideControls
                title="Prato esquerdo"
                sideId="left"
                state={left}
                onAddBox={onAddBox}
                onRemoveBox={onRemoveBox}
                onChangeWeight={
                    onChangeWeight
                }
            />

            <SideControls
                title="Prato direito"
                sideId="right"
                state={right}
                onAddBox={onAddBox}
                onRemoveBox={onRemoveBox}
                onChangeWeight={
                    onChangeWeight
                }
            />

        </div>
    );
}

type SideControlsProps = {

    title: string;

    sideId: BalanceSideId;

    state: BalanceSideState;

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
};

function SideControls({
    title,
    sideId,
    state,
    onAddBox,
    onRemoveBox,
    onChangeWeight,
}: SideControlsProps) {

    return (
        <section
            className={styles.side}
        >

            <div
                className={
                    styles.sideHeader
                }
            >
                <h3>
                    {title}
                </h3>

                <span>
                    {state.boxCount}
                    {" "}
                    {
                        state.boxCount ===
                        1
                            ? "caixa"
                            : "caixas"
                    }
                    {" · "}
                    {state.knownWeight}
                    {" kg"}
                </span>
            </div>

            <div
                className={
                    styles.operationGroup
                }
            >

                <span>
                    Caixas
                </span>

                <div
                    className={
                        styles.buttons
                    }
                >
                    <button
                        type="button"
                        onClick={() =>
                            onRemoveBox(
                                sideId
                            )
                        }
                    >
                        − caixa
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onAddBox(
                                sideId
                            )
                        }
                    >
                        + caixa
                    </button>
                </div>

            </div>

            <div
                className={
                    styles.operationGroup
                }
            >

                <span>
                    Peso conhecido
                </span>

                <div
                    className={
                        styles.buttons
                    }
                >

                    <button
                        type="button"
                        onClick={() =>
                            onChangeWeight(
                                sideId,
                                -2
                            )
                        }
                    >
                        − 2 kg
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onChangeWeight(
                                sideId,
                                -1
                            )
                        }
                    >
                        − 1 kg
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onChangeWeight(
                                sideId,
                                1
                            )
                        }
                    >
                        + 1 kg
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onChangeWeight(
                                sideId,
                                2
                            )
                        }
                    >
                        + 2 kg
                    </button>

                </div>

            </div>

        </section>
    );
}