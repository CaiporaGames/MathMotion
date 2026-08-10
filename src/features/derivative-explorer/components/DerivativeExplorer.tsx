import type {
    DerivativeAnalysis,
    DerivativeExplorerConfig,
    DerivativePoint,
    DerivativeViewport,
} from "../types/derivativeExplorer.types";

import styles
    from "./DerivativeExplorer.module.scss";

type Props = {

    config:
        DerivativeExplorerConfig;

    x:
        number;

    h:
        number;

    analysis:
        DerivativeAnalysis;

    onXChange:
        (value: number) =>
            void;

    onHChange:
        (value: number) =>
            void;

    onReset:
        () =>
            void;
};

export function DerivativeExplorer({
    config,
    x,
    h,
    analysis,
    onXChange,
    onHChange,
    onReset,
}: Props) {

    const width =
        900;

    const height =
        500;

    const perturbationSymbol =
        config
            .perturbationSymbol ??
        "h";

    return (
        <section
            className={
                styles.explorer
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <div>
                    <span>
                        Exploração gráfica
                    </span>

                    <h3>
                        Derivada e
                        perturbação
                    </h3>

                    <p>
                        Compare o ponto
                        x com o ponto
                        x + {
                            perturbationSymbol
                        }.
                    </p>
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

            <div
                className={
                    styles.graph
                }
            >

                <svg
                    viewBox={
                        `0 0 ${width} ${height}`
                    }

                    role="img"

                    aria-label={
                        "Gráfico mostrando ponto, secante e tangente"
                    }
                >

                    <Grid
                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}
                    />

                    <Axes
                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}
                    />

                    <Curve
                        points={
                            analysis.curve
                        }

                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}
                    />

                    <MathematicalLine
                        point={
                            analysis.pointP
                        }

                        slope={
                            analysis
                                .tangentSlope
                        }

                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}

                        className={
                            styles.tangent
                        }
                    />

                    <MathematicalLine
                        point={
                            analysis.pointP
                        }

                        slope={
                            analysis
                                .secantSlope
                        }

                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}

                        className={
                            styles.secant
                        }
                    />

                    <GraphPoint
                        point={
                            analysis.pointP
                        }

                        label="P"

                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}

                        className={
                            styles.pointP
                        }
                    />

                    <GraphPoint
                        point={
                            analysis.pointQ
                        }

                        label="Q"

                        viewport={
                            config.viewport
                        }

                        width={width}

                        height={height}

                        className={
                            styles.pointQ
                        }
                    />

                </svg>

            </div>

            <div
                className={
                    styles.controls
                }
            >

                <label>
                    <div>
                        <span>
                            x
                        </span>

                        <strong>
                            {
                                x.toFixed(
                                    2
                                )
                            }
                        </strong>
                    </div>

                    <input
                        type="range"

                        min={
                            config
                                .xRange
                                .min
                        }

                        max={
                            config
                                .xRange
                                .max
                        }

                        step={
                            config
                                .xRange
                                .step
                        }

                        value={x}

                        onChange={
                            event =>
                                onXChange(
                                    Number(
                                        event
                                            .target
                                            .value
                                    )
                                )
                        }
                    />
                </label>

                <label>
                    <div>
                        <span>
                            {
                                perturbationSymbol
                            }
                        </span>

                        <strong>
                            {
                                h.toFixed(
                                    2
                                )
                            }
                        </strong>
                    </div>

                    <input
                        type="range"

                        min={
                            config
                                .hRange
                                .min
                        }

                        max={
                            config
                                .hRange
                                .max
                        }

                        step={
                            config
                                .hRange
                                .step
                        }

                        value={h}

                        onChange={
                            event =>
                                onHChange(
                                    Number(
                                        event
                                            .target
                                            .value
                                    )
                                )
                        }
                    />
                </label>

            </div>

            <div
                className={
                    styles.values
                }
            >

                <ValueCard
                    label="f(x)"

                    value={
                        formatNumber(
                            analysis
                                .pointP
                                .y
                        )
                    }
                />

                <ValueCard
                    label={
                        `f(x + ${perturbationSymbol})`
                    }

                    value={
                        formatNumber(
                            analysis
                                .pointQ
                                .y
                        )
                    }
                />

                <ValueCard
                    label="Inclinação secante"

                    value={
                        formatNumber(
                            analysis
                                .secantSlope
                        )
                    }
                />

                <ValueCard
                    label="Inclinação tangente"

                    value={
                        formatNumber(
                            analysis
                                .tangentSlope
                        )
                    }
                />

            </div>

        </section>
    );
}

type ValueCardProps = {
    label: string;
    value: string;
};

function ValueCard({
    label,
    value,
}: ValueCardProps) {

    return (
        <div
            className={
                styles.valueCard
            }
        >
            <span>
                {label}
            </span>

            <strong>
                {value}
            </strong>
        </div>
    );
}

type GraphProps = {

    viewport:
        DerivativeViewport;

    width:
        number;

    height:
        number;
};

function Grid({
    viewport,
    width,
    height,
}: GraphProps) {

    const lines = [];

    for (
        let x =
            Math.ceil(
                viewport.minX
            );

        x <=
        viewport.maxX;

        x++
    ) {

        const screenX =
            toScreenX(
                x,
                width,
                viewport
            );

        lines.push(
            <line
                key={
                    `gx-${x}`
                }

                x1={
                    screenX
                }

                y1="0"

                x2={
                    screenX
                }

                y2={
                    height
                }

                className={
                    styles.gridLine
                }
            />
        );
    }

    for (
        let y =
            Math.ceil(
                viewport.minY
            );

        y <=
        viewport.maxY;

        y += 5
    ) {

        const screenY =
            toScreenY(
                y,
                height,
                viewport
            );

        lines.push(
            <line
                key={
                    `gy-${y}`
                }

                x1="0"

                y1={
                    screenY
                }

                x2={
                    width
                }

                y2={
                    screenY
                }

                className={
                    styles.gridLine
                }
            />
        );
    }

    return (
        <>
            {lines}
        </>
    );
}

function Axes({
    viewport,
    width,
    height,
}: GraphProps) {

    const axisX =
        toScreenX(
            0,
            width,
            viewport
        );

    const axisY =
        toScreenY(
            0,
            height,
            viewport
        );

    return (
        <>
            {
                viewport.minX <=
                0 &&
                viewport.maxX >=
                0 &&
                (
                    <line
                        x1={axisX}
                        y1="0"

                        x2={axisX}
                        y2={height}

                        className={
                            styles.axis
                        }
                    />
                )
            }

            {
                viewport.minY <=
                0 &&
                viewport.maxY >=
                0 &&
                (
                    <line
                        x1="0"
                        y1={axisY}

                        x2={width}
                        y2={axisY}

                        className={
                            styles.axis
                        }
                    />
                )
            }
        </>
    );
}

type CurveProps = GraphProps & {
    points:
        DerivativePoint[];
};

function Curve({
    points,
    viewport,
    width,
    height,
}: CurveProps) {

    let path =
        "";

    let started =
        false;

    for (
        const point
        of points
    ) {

        if (
            !Number.isFinite(
                point.y
            )
        ) {
            started =
                false;

            continue;
        }

        const screenX =
            toScreenX(
                point.x,
                width,
                viewport
            );

        const screenY =
            toScreenY(
                point.y,
                height,
                viewport
            );

        if (!started) {

            path +=
                `M ${screenX} ${screenY} `;

            started =
                true;

            continue;
        }

        path +=
            `L ${screenX} ${screenY} `;
    }

    return (
        <path
            d={path}

            className={
                styles.curve
            }
        />
    );
}

type MathematicalLineProps =
    GraphProps & {

        point:
            DerivativePoint;

        slope:
            number;

        className:
            string;
    };

function MathematicalLine({
    point,
    slope,
    viewport,
    width,
    height,
    className,
}: MathematicalLineProps) {

    if (
        !Number.isFinite(
            slope
        )
    ) {
        return null;
    }

    const x1 =
        viewport.minX;

    const x2 =
        viewport.maxX;

    const y1 =
        point.y +
        slope *
        (
            x1 -
            point.x
        );

    const y2 =
        point.y +
        slope *
        (
            x2 -
            point.x
        );

    return (
        <line
            x1={
                toScreenX(
                    x1,
                    width,
                    viewport
                )
            }

            y1={
                toScreenY(
                    y1,
                    height,
                    viewport
                )
            }

            x2={
                toScreenX(
                    x2,
                    width,
                    viewport
                )
            }

            y2={
                toScreenY(
                    y2,
                    height,
                    viewport
                )
            }

            className={
                className
            }
        />
    );
}

type GraphPointProps =
    GraphProps & {

        point:
            DerivativePoint;

        label:
            string;

        className:
            string;
    };

function GraphPoint({
    point,
    label,
    viewport,
    width,
    height,
    className,
}: GraphPointProps) {

    const x =
        toScreenX(
            point.x,
            width,
            viewport
        );

    const y =
        toScreenY(
            point.y,
            height,
            viewport
        );

    return (
        <g
            className={
                className
            }
        >

            <circle
                cx={x}
                cy={y}
                r="8"
            />

            <text
                x={
                    x + 13
                }

                y={
                    y - 13
                }
            >
                {label}
            </text>

        </g>
    );
}

function toScreenX(
    x:
        number,

    width:
        number,

    viewport:
        DerivativeViewport,
): number {

    return (
        (
            x -
            viewport.minX
        ) /
        (
            viewport.maxX -
            viewport.minX
        )
    ) * width;
}

function toScreenY(
    y:
        number,

    height:
        number,

    viewport:
        DerivativeViewport,
): number {

    return height -
        (
            (
                y -
                viewport.minY
            ) /
            (
                viewport.maxY -
                viewport.minY
            )
        ) *
        height;
}

function formatNumber(
    value:
        number
): string {

    if (
        !Number.isFinite(
            value
        )
    ) {
        return "—";
    }

    return value
        .toFixed(3)
        .replace(
            /\.?0+$/,
            ""
        );
}