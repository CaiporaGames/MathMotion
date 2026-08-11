export type MeasurementShape =
    | "circle"
    | "square"
    | "cube"
    | "sphere";

export type MeasurementRange = {
    min: number;
    max: number;
    step: number;
};

export type MeasurementGrowthConfig = {
    shape: MeasurementShape;

    unit: string;

    labelA: string;
    labelB: string;

    initialA: number;
    initialB: number;

    range: MeasurementRange;

    /**
     * Valores opcionais.
     *
     * Útil para o problema das pizzas:
     * podemos comparar preço por área.
     */
    priceA?: number;
    priceB?: number;

    currency?: string;
};

export type ShapeMetrics = {
    size: number;

    perimeter?: number;

    area?: number;

    surfaceArea?: number;

    volume?: number;
};

export type MeasurementGrowthAnalysis = {
    metricsA: ShapeMetrics;
    metricsB: ShapeMetrics;

    /**
     * k = tamanho B / tamanho A
     */
    scaleFactor: number;

    linearFactor: number;

    quadraticFactor: number;

    cubicFactor: number;

    pricePerAreaA?: number;

    pricePerAreaB?: number;
};