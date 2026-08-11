import type {
    MeasurementGrowthAnalysis,
    MeasurementGrowthConfig,
    MeasurementShape,
    ShapeMetrics,
} from "../types/measurementGrowth.types";

import styles
    from "./MeasurementGrowthExplorer.module.scss";

type Props = {

    config:
        MeasurementGrowthConfig;

    sizeA:
        number;

    sizeB:
        number;

    analysis:
        MeasurementGrowthAnalysis;

    onSizeAChange:
        (value: number) =>
            void;

    onSizeBChange:
        (value: number) =>
            void;

    onReset:
        () =>
            void;
};

export function MeasurementGrowthExplorer({
    config,
    sizeA,
    sizeB,
    analysis,
    onSizeAChange,
    onSizeBChange,
    onReset,
}: Props) {

    const largestSize =
        Math.max(
            sizeA,
            sizeB
        );

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
                        Exploração de escala
                    </span>

                    <h3>
                        Comprimento, área
                        e volume
                    </h3>

                    <p>
                        Altere uma medida e
                        observe como as outras
                        grandezas crescem.
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
                    styles.comparison
                }
            >

                <ObjectPanel
                    label={
                        config.labelA
                    }

                    shape={
                        config.shape
                    }

                    size={
                        sizeA
                    }

                    largestSize={
                        largestSize
                    }

                    unit={
                        config.unit
                    }

                    price={
                        config.priceA
                    }

                    currency={
                        config.currency
                    }

                    metrics={
                        analysis
                            .metricsA
                    }
                />

                <div
                    className={
                        styles.versus
                    }
                >
                    ×
                </div>

                <ObjectPanel
                    label={
                        config.labelB
                    }

                    shape={
                        config.shape
                    }

                    size={
                        sizeB
                    }

                    largestSize={
                        largestSize
                    }

                    unit={
                        config.unit
                    }

                    price={
                        config.priceB
                    }

                    currency={
                        config.currency
                    }

                    metrics={
                        analysis
                            .metricsB
                    }
                />

            </div>

            <div
                className={
                    styles.sliders
                }
            >

                <SizeSlider
                    label={
                        config.labelA
                    }

                    value={
                        sizeA
                    }

                    config={
                        config
                    }

                    onChange={
                        onSizeAChange
                    }
                />

                <SizeSlider
                    label={
                        config.labelB
                    }

                    value={
                        sizeB
                    }

                    config={
                        config
                    }

                    onChange={
                        onSizeBChange
                    }
                />

            </div>

            <GrowthComparison
                analysis={
                    analysis
                }
            />

            <MetricsComparison
                config={
                    config
                }

                analysis={
                    analysis
                }
            />

        </section>
    );
}

type ObjectPanelProps = {

    label:
        string;

    shape:
        MeasurementShape;

    size:
        number;

    largestSize:
        number;

    unit:
        string;

    metrics:
        ShapeMetrics;

    price?:
        number;

    currency?:
        string;
};

function ObjectPanel({
    label,
    shape,
    size,
    largestSize,
    unit,
    price,
    currency,
}: ObjectPanelProps) {

    /*
     * O maior objeto ocupa aproximadamente
     * 75% da área de visualização.
     *
     * O menor mantém a proporção real.
     */
    const visualSize =
        largestSize <= 0
            ? 100
            : (
                size /
                largestSize
            ) *
            165;

    return (
        <div
            className={
                styles.objectPanel
            }
        >

            <div
                className={
                    styles.objectTitle
                }
            >

                <strong>
                    {label}
                </strong>

                {
                    price !== undefined &&
                    (
                        <span>
                            {
                                currency ??
                                "€"
                            }
                            {
                                formatNumber(
                                    price
                                )
                            }
                        </span>
                    )
                }

            </div>

            <div
                className={
                    styles.preview
                }
            >

                <ShapePreview
                    shape={
                        shape
                    }

                    visualSize={
                        visualSize
                    }
                />

            </div>

            <div
                className={
                    styles.dimension
                }
            >
                {
                    getSizeLabel(
                        shape
                    )
                }
                :
                {" "}
                <strong>
                    {
                        formatNumber(
                            size
                        )
                    }
                    {" "}
                    {unit}
                </strong>
            </div>

        </div>
    );
}

type ShapePreviewProps = {
    shape:
        MeasurementShape;

    visualSize:
        number;
};

function ShapePreview({
    shape,
    visualSize,
}: ShapePreviewProps) {

    const center =
        110;

    switch (
        shape
    ) {

        case "circle":

            return (
                <svg
                    viewBox="0 0 220 220"
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={
                            visualSize /
                            2
                        }
                        className={
                            styles.circle
                        }
                    />

                    <line
                        x1={
                            center -
                            visualSize /
                            2
                        }
                        y1={center}
                        x2={
                            center +
                            visualSize /
                            2
                        }
                        y2={center}
                        className={
                            styles.measureLine
                        }
                    />
                </svg>
            );

        case "square": {

            return (
                <svg
                    viewBox="0 0 220 220"
                >
                    <rect
                        x={
                            center -
                            visualSize /
                            2
                        }
                        y={
                            center -
                            visualSize /
                            2
                        }
                        width={
                            visualSize
                        }
                        height={
                            visualSize
                        }
                        rx="4"
                        className={
                            styles.square
                        }
                    />
                </svg>
            );
        }

        case "cube":

            return (
                <CubePreview
                    size={
                        visualSize
                    }
                />
            );

        case "sphere":

            return (
                <svg
                    viewBox="0 0 220 220"
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={
                            visualSize /
                            2
                        }
                        className={
                            styles.sphere
                        }
                    />

                    <ellipse
                        cx={center}
                        cy={center}
                        rx={
                            visualSize /
                            6
                        }
                        ry={
                            visualSize /
                            2
                        }
                        className={
                            styles.sphereGuide
                        }
                    />

                    <ellipse
                        cx={center}
                        cy={center}
                        rx={
                            visualSize /
                            2
                        }
                        ry={
                            visualSize /
                            6
                        }
                        className={
                            styles.sphereGuide
                        }
                    />
                </svg>
            );
    }
}

function CubePreview({
    size,
}: {
    size: number;
}) {

    const side =
        size * 0.7;

    const offset =
        Math.min(
            30,
            size * 0.18
        );

    const x =
        110 -
        side / 2;

    const y =
        110 -
        side / 2 +
        offset / 2;

    return (
        <svg
            viewBox="0 0 220 220"
        >

            {/* face traseira */}
            <rect
                x={
                    x + offset
                }
                y={
                    y - offset
                }
                width={side}
                height={side}
                className={
                    styles.cubeBack
                }
            />

            {/* face frontal */}
            <rect
                x={x}
                y={y}
                width={side}
                height={side}
                className={
                    styles.cubeFront
                }
            />

            <line
                x1={x}
                y1={y}
                x2={
                    x + offset
                }
                y2={
                    y - offset
                }
                className={
                    styles.cubeEdge
                }
            />

            <line
                x1={
                    x + side
                }
                y1={y}
                x2={
                    x +
                    side +
                    offset
                }
                y2={
                    y -
                    offset
                }
                className={
                    styles.cubeEdge
                }
            />

            <line
                x1={x}
                y1={
                    y + side
                }
                x2={
                    x + offset
                }
                y2={
                    y +
                    side -
                    offset
                }
                className={
                    styles.cubeEdge
                }
            />

            <line
                x1={
                    x + side
                }
                y1={
                    y + side
                }
                x2={
                    x +
                    side +
                    offset
                }
                y2={
                    y +
                    side -
                    offset
                }
                className={
                    styles.cubeEdge
                }
            />

        </svg>
    );
}

type SizeSliderProps = {

    label:
        string;

    value:
        number;

    config:
        MeasurementGrowthConfig;

    onChange:
        (value: number) =>
            void;
};

function SizeSlider({
    label,
    value,
    config,
    onChange,
}: SizeSliderProps) {

    return (
        <label
            className={
                styles.slider
            }
        >

            <div>
                <span>
                    {label}
                </span>

                <strong>
                    {
                        formatNumber(
                            value
                        )
                    }
                    {" "}
                    {config.unit}
                </strong>
            </div>

            <input
                type="range"

                min={
                    config.range.min
                }

                max={
                    config.range.max
                }

                step={
                    config.range.step
                }

                value={
                    value
                }

                onChange={
                    event =>
                        onChange(
                            Number(
                                event
                                    .target
                                    .value
                            )
                        )
                }
            />

        </label>
    );
}

function GrowthComparison({
    analysis,
}: {
    analysis:
        MeasurementGrowthAnalysis;
}) {

    return (
        <div
            className={
                styles.growth
            }
        >

            <GrowthCard
                exponent="1"

                title="Escala linear"

                formula="k"

                value={
                    analysis
                        .linearFactor
                }
            />

            <GrowthCard
                exponent="2"

                title="Crescimento quadrático"

                formula="k²"

                value={
                    analysis
                        .quadraticFactor
                }
            />

            <GrowthCard
                exponent="3"

                title="Crescimento cúbico"

                formula="k³"

                value={
                    analysis
                        .cubicFactor
                }
            />

        </div>
    );
}

type GrowthCardProps = {
    exponent:
        string;

    title:
        string;

    formula:
        string;

    value:
        number;
};

function GrowthCard({
    exponent,
    title,
    formula,
    value,
}: GrowthCardProps) {

    return (
        <div
            className={
                styles.growthCard
            }
        >

            <span
                className={
                    styles.exponent
                }
            >
                dimensão
                {" "}
                {exponent}
            </span>

            <strong>
                {title}
            </strong>

            <div>
                {formula}
                {" = "}
                {
                    formatFactor(
                        value
                    )
                }
            </div>

        </div>
    );
}

function MetricsComparison({
    config,
    analysis,
}: {
    config:
        MeasurementGrowthConfig;

    analysis:
        MeasurementGrowthAnalysis;
}) {

    const {
        metricsA,
        metricsB,
    } = analysis;

    return (
        <div
            className={
                styles.metrics
            }
        >

            {
                metricsA
                    .perimeter !==
                    undefined &&
                metricsB
                    .perimeter !==
                    undefined &&
                (
                    <MetricRow
                        name={
                            getPerimeterLabel(
                                config.shape
                            )
                        }

                        valueA={
                            metricsA
                                .perimeter
                        }

                        valueB={
                            metricsB
                                .perimeter
                        }

                        unit={
                            config.unit
                        }
                    />
                )
            }

            {
                metricsA.area !==
                    undefined &&
                metricsB.area !==
                    undefined &&
                (
                    <MetricRow
                        name="Área"

                        valueA={
                            metricsA.area
                        }

                        valueB={
                            metricsB.area
                        }

                        unit={
                            `${config.unit}²`
                        }
                    />
                )
            }

            {
                metricsA
                    .surfaceArea !==
                    undefined &&
                metricsB
                    .surfaceArea !==
                    undefined &&
                (
                    <MetricRow
                        name="Área da superfície"

                        valueA={
                            metricsA
                                .surfaceArea
                        }

                        valueB={
                            metricsB
                                .surfaceArea
                        }

                        unit={
                            `${config.unit}²`
                        }
                    />
                )
            }

            {
                metricsA.volume !==
                    undefined &&
                metricsB.volume !==
                    undefined &&
                (
                    <MetricRow
                        name="Volume"

                        valueA={
                            metricsA.volume
                        }

                        valueB={
                            metricsB.volume
                        }

                        unit={
                            `${config.unit}³`
                        }
                    />
                )
            }

            {
                analysis
                    .pricePerAreaA !==
                    undefined &&
                analysis
                    .pricePerAreaB !==
                    undefined &&
                (
                    <MetricRow
                        name="Preço por área"

                        valueA={
                            analysis
                                .pricePerAreaA
                        }

                        valueB={
                            analysis
                                .pricePerAreaB
                        }

                        unit={
                            `${
                                config.currency ??
                                "€"
                            }/${config.unit}²`
                        }
                    />
                )
            }

        </div>
    );
}

type MetricRowProps = {

    name:
        string;

    valueA:
        number;

    valueB:
        number;

    unit:
        string;
};

function MetricRow({
    name,
    valueA,
    valueB,
    unit,
}: MetricRowProps) {

    const factor =
        valueA === 0
            ? Number.NaN
            : valueB /
              valueA;

    return (
        <div
            className={
                styles.metricRow
            }
        >

            <span
                className={
                    styles.metricName
                }
            >
                {name}
            </span>

            <div>
                <strong>
                    {
                        formatNumber(
                            valueA
                        )
                    }
                </strong>

                <span>
                    {unit}
                </span>
            </div>

            <span
                className={
                    styles.metricFactor
                }
            >
                ×
                {
                    formatFactor(
                        factor
                    )
                }
            </span>

            <div>
                <strong>
                    {
                        formatNumber(
                            valueB
                        )
                    }
                </strong>

                <span>
                    {unit}
                </span>
            </div>

        </div>
    );
}

function getSizeLabel(
    shape: MeasurementShape
): string {

    switch (
        shape
    ) {

        case "circle":
        case "sphere":
            return "Diâmetro";

        case "square":
            return "Lado";

        case "cube":
            return "Aresta";
    }
}

function getPerimeterLabel(
    shape: MeasurementShape
): string {

    if (
        shape ===
        "circle"
    ) {
        return "Circunferência";
    }

    return "Perímetro";
}

function formatNumber(
    value: number
): string {

    return value
        .toFixed(2)
        .replace(
            /\.00$/,
            ""
        );
}

function formatFactor(
    value: number
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