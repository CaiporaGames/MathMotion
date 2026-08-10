"use client";

import {
    useRef,
} from "react";

import type {
    PointerEvent as ReactPointerEvent,
} from "react";

import type {
    GeometryPoint,
    PlankState,
    RiverCrossingScenario,
} from "../types/geometry.types";

import styles
    from "./RiverCrossingBoard.module.scss";

type Props = {

    scenario:
        RiverCrossingScenario;

    planks:
        PlankState[];

    selectedPlankId:
        string | null;

    onPlankPointerDown:
        (
            plankId: string,
            point: GeometryPoint
        ) => void;

    onPointerMove:
        (
            point: GeometryPoint
        ) => void;

    onPointerUp:
        () => void;

    onSelectPlank:
        (
            plankId: string
        ) => void;
};

export function RiverCrossingBoard({
    scenario,
    planks,
    selectedPlankId,
    onPlankPointerDown,
    onPointerMove,
    onPointerUp,
    onSelectPlank,
}: Props) {

    const svgRef =
        useRef<SVGSVGElement | null>(
            null
        );

    const outer =
        scenario.margin;

    const inner =
        scenario.margin +
        scenario.riverWidth;

    /*
     * O polígono forma um rio em L:
     *
     *   ~~~~~~~~~~~~~
     *   ~~~~~~~~~~~~~
     *   ~~~
     *   ~~~
     *   ~~~
     *
     * A distância entre outer e inner
     * representa os 4 metros.
     */
    const waterPath = `
        M ${outer} ${scenario.height}
        L ${outer} ${outer}
        L ${scenario.width} ${outer}
        L ${scenario.width} ${inner}
        L ${inner} ${inner}
        L ${inner} ${scenario.height}
        Z
    `;

    function toWorldPoint(
        clientX: number,
        clientY: number,
    ): GeometryPoint {

        const svg =
            svgRef.current;

        if (!svg) {
            return {
                x: 0,
                y: 0,
            };
        }

        const screenPoint =
            svg.createSVGPoint();

        screenPoint.x =
            clientX;

        screenPoint.y =
            clientY;

        const matrix =
            svg
                .getScreenCTM()
                ?.inverse();

        if (!matrix) {
            return {
                x: 0,
                y: 0,
            };
        }

        const result =
            screenPoint.matrixTransform(
                matrix
            );

        return {
            x: result.x,
            y: result.y,
        };
    }

    function handlePointerMove(
        event:
            ReactPointerEvent<
                SVGSVGElement
            >
    ) {

        onPointerMove(
            toWorldPoint(
                event.clientX,
                event.clientY
            )
        );
    }

    function handlePointerUp() {

        onPointerUp();
    }

    return (
        <div
            className={
                styles.wrapper
            }
        >

            <svg
                ref={svgRef}

                className={
                    styles.board
                }

                viewBox={
                    `0 0 ${
                        scenario.width
                    } ${
                        scenario.height
                    }`
                }

                role="img"

                aria-label={
                    "Rio em forma de L com duas tábuas móveis"
                }

                onPointerMove={
                    handlePointerMove
                }

                onPointerUp={
                    handlePointerUp
                }

                onPointerCancel={
                    handlePointerUp
                }

                onPointerLeave={
                    handlePointerUp
                }
            >

                {/* Terra */}
                <rect
                    x="0"
                    y="0"
                    width={
                        scenario.width
                    }
                    height={
                        scenario.height
                    }
                    className={
                        styles.land
                    }
                />

                {/* Água */}
                <path
                    d={waterPath}
                    className={
                        styles.water
                    }
                />

                {/* Margem exterior */}
                <path
                    d={`
                        M ${outer} ${scenario.height}
                        L ${outer} ${outer}
                        L ${scenario.width} ${outer}
                    `}
                    className={
                        styles.bank
                    }
                />

                {/* Margem interior */}
                <path
                    d={`
                        M ${inner} ${scenario.height}
                        L ${inner} ${inner}
                        L ${scenario.width} ${inner}
                    `}
                    className={
                        styles.bank
                    }
                />

                {/* Medida dos 4 metros */}
                <line
                    x1={outer}
                    y1={scenario.height - 0.65}
                    x2={inner}
                    y2={scenario.height - 0.65}
                    className={
                        styles.measure
                    }
                />

                <line
                    x1={outer}
                    y1={scenario.height - 0.85}
                    x2={outer}
                    y2={scenario.height - 0.45}
                    className={
                        styles.measure
                    }
                />

                <line
                    x1={inner}
                    y1={scenario.height - 0.85}
                    x2={inner}
                    y2={scenario.height - 0.45}
                    className={
                        styles.measure
                    }
                />

                <text
                    x={
                        (
                            outer +
                            inner
                        ) / 2
                    }
                    y={
                        scenario.height -
                        0.85
                    }
                    textAnchor="middle"
                    className={
                        styles.measureText
                    }
                >
                    4 m
                </text>

                {/* Canto importante */}
                <circle
                    cx={inner}
                    cy={inner}
                    r="0.12"
                    className={
                        styles.corner
                    }
                />

                <text
                    x={inner + 0.25}
                    y={inner - 0.25}
                    className={
                        styles.cornerText
                    }
                >
                    canto
                </text>

                {
                    planks.map(
                        plank => (

                            <Plank
                                key={
                                    plank.id
                                }

                                plank={
                                    plank
                                }

                                selected={
                                    selectedPlankId ===
                                    plank.id
                                }

                                onPointerDown={
                                    event => {

                                        event
                                            .stopPropagation();

                                        const svg =
                                            svgRef.current;

                                        svg
                                            ?.setPointerCapture(
                                                event.pointerId
                                            );

                                        onSelectPlank(
                                            plank.id
                                        );

                                        onPlankPointerDown(
                                            plank.id,

                                            toWorldPoint(
                                                event.clientX,
                                                event.clientY
                                            )
                                        );
                                    }
                                }
                            />

                        )
                    )
                }

            </svg>

        </div>
    );
}

type PlankProps = {

    plank:
        PlankState;

    selected:
        boolean;

    onPointerDown:
        (
            event:
                ReactPointerEvent<
                    SVGGElement
                >
        ) => void;
};

function Plank({
    plank,
    selected,
    onPointerDown,
}: PlankProps) {

    const thickness =
        0.32;

    return (
        <g
            transform={`
                translate(
                    ${plank.center.x}
                    ${plank.center.y}
                )
                rotate(${plank.angle})
            `}

            className={
                selected
                    ? styles
                        .selectedPlank
                    : styles.plank
            }

            onPointerDown={
                onPointerDown
            }
        >

            <rect
                x={
                    -plank.length / 2
                }
                y={
                    -thickness / 2
                }
                width={
                    plank.length
                }
                height={
                    thickness
                }
                rx="0.08"
            />

            <text
                x="0"
                y="-0.28"
                textAnchor="middle"
                className={
                    styles.plankText
                }
            >
                {plank.label}
            </text>

        </g>
    );
}