import type {
    BalanceSideState,
    BalanceStatus,
} from "../types/balance.types";

import styles
    from "./BalanceScale.module.scss";

type Props = {

    left: BalanceSideState;

    right: BalanceSideState;

    status: BalanceStatus;

    tiltAngle: number;
};

export function BalanceScale({
    left,
    right,
    status,
    tiltAngle,
}: Props) {

    const pivotX = 450;
    const pivotY = 180;

    const halfBeam = 280;

    const angleRadians =
        tiltAngle *
        Math.PI /
        180;

    const leftX =
        pivotX -
        halfBeam *
        Math.cos(angleRadians);

    const leftY =
        pivotY -
        halfBeam *
        Math.sin(angleRadians);

    const rightX =
        pivotX +
        halfBeam *
        Math.cos(angleRadians);

    const rightY =
        pivotY +
        halfBeam *
        Math.sin(angleRadians);

    const leftPanY =
        leftY + 105;

    const rightPanY =
        rightY + 105;

    return (
        <div className={styles.wrapper}>

            <svg
                className={styles.scale}
                viewBox="0 0 900 520"
                role="img"
                aria-label={
                    getAccessibilityText(
                        status
                    )
                }
            >

                {/* chão */}
                <line
                    x1="310"
                    y1="475"
                    x2="590"
                    y2="475"
                    className={
                        styles.ground
                    }
                />

                {/* coluna central */}
                <path
                    d="
                        M 450 185
                        L 450 430
                        L 365 475
                        L 535 475
                        Z
                    "
                    className={
                        styles.support
                    }
                />

                {/* pivô */}
                <circle
                    cx={pivotX}
                    cy={pivotY}
                    r="23"
                    className={
                        styles.pivot
                    }
                />

                {/* braço */}
                <line
                    x1={leftX}
                    y1={leftY}
                    x2={rightX}
                    y2={rightY}
                    className={
                        styles.beam
                    }
                />

                {/* cordas esquerda */}
                <line
                    x1={leftX}
                    y1={leftY}
                    x2={leftX - 90}
                    y2={leftPanY}
                    className={
                        styles.rope
                    }
                />

                <line
                    x1={leftX}
                    y1={leftY}
                    x2={leftX + 90}
                    y2={leftPanY}
                    className={
                        styles.rope
                    }
                />

                {/* prato esquerdo */}
                <path
                    d={`
                        M ${leftX - 125} ${leftPanY}
                        Q ${leftX} ${leftPanY + 45}
                          ${leftX + 125} ${leftPanY}
                    `}
                    className={
                        styles.pan
                    }
                />

                {/* cordas direita */}
                <line
                    x1={rightX}
                    y1={rightY}
                    x2={rightX - 90}
                    y2={rightPanY}
                    className={
                        styles.rope
                    }
                />

                <line
                    x1={rightX}
                    y1={rightY}
                    x2={rightX + 90}
                    y2={rightPanY}
                    className={
                        styles.rope
                    }
                />

                {/* prato direito */}
                <path
                    d={`
                        M ${rightX - 125} ${rightPanY}
                        Q ${rightX} ${rightPanY + 45}
                          ${rightX + 125} ${rightPanY}
                    `}
                    className={
                        styles.pan
                    }
                />

                <BalanceItems
                    side={left}
                    centerX={leftX}
                    panY={leftPanY}
                />

                <BalanceItems
                    side={right}
                    centerX={rightX}
                    panY={rightPanY}
                />

            </svg>

        </div>
    );
}

type BalanceItemsProps = {

    side: BalanceSideState;

    centerX: number;

    panY: number;
};

function BalanceItems({
    side,
    centerX,
    panY,
}: BalanceItemsProps) {

    const items: Array<
        {
            kind: "box";
            id: string;
        } |
        {
            kind: "weight";
            id: string;
        }
    > = [];

    for (
        let index = 0;
        index < side.boxCount;
        index++
    ) {
        items.push({
            kind: "box",
            id: `box-${index}`,
        });
    }

    if (side.knownWeight > 0) {
        items.push({
            kind: "weight",
            id: "weight",
        });
    }

    const itemWidth = 56;
    const gap = 10;

    const totalWidth =
        items.length *
        itemWidth +
        Math.max(
            0,
            items.length - 1
        ) *
        gap;

    const startX =
        centerX -
        totalWidth / 2;

    return (
        <>
            {items.map(
                (
                    item,
                    index
                ) => {

                    const x =
                        startX +
                        index *
                        (
                            itemWidth +
                            gap
                        );

                    const y =
                        panY - 61;

                    if (
                        item.kind ===
                        "box"
                    ) {
                        return (
                            <g
                                key={
                                    item.id
                                }
                            >

                                <rect
                                    x={x}
                                    y={y}
                                    width="56"
                                    height="52"
                                    rx="7"
                                    className={
                                        styles.box
                                    }
                                />

                                <text
                                    x={
                                        x +
                                        28
                                    }
                                    y={
                                        y +
                                        32
                                    }
                                    textAnchor="middle"
                                    className={
                                        styles.boxText
                                    }
                                >
                                    ?
                                </text>

                            </g>
                        );
                    }

                    return (
                        <g
                            key={
                                item.id
                            }
                        >

                            <rect
                                x={x}
                                y={y}
                                width="56"
                                height="52"
                                rx="10"
                                className={
                                    styles.weight
                                }
                            />

                            <text
                                x={
                                    x +
                                    28
                                }
                                y={
                                    y +
                                    24
                                }
                                textAnchor="middle"
                                className={
                                    styles.weightNumber
                                }
                            >
                                {
                                    side.knownWeight
                                }
                            </text>

                            <text
                                x={
                                    x +
                                    28
                                }
                                y={
                                    y +
                                    40
                                }
                                textAnchor="middle"
                                className={
                                    styles.weightUnit
                                }
                            >
                                kg
                            </text>

                        </g>
                    );
                }
            )}
        </>
    );
}

function getAccessibilityText(
    status: BalanceStatus,
): string {

    switch (status) {

        case "balanced":
            return "Balança equilibrada.";

        case "left-heavy":
            return "Prato esquerdo mais pesado.";

        case "right-heavy":
            return "Prato direito mais pesado.";
    }
}