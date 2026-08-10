export type DerivativePoint = {
    x: number;
    y: number;
};

export type DerivativeViewport = {
    minX: number;
    maxX: number;

    minY: number;
    maxY: number;
};

export type SliderRange = {
    min: number;
    max: number;
    step: number;
};

export type DerivativeExplorerConfig = {
    expression: string;

    variable: string;

    parameters?: Record<
        string,
        number
    >;

    viewport: DerivativeViewport;

    xRange: SliderRange;

    hRange: SliderRange;

    initialX: number;

    initialH: number;

    perturbationSymbol?: string;
};

export type DerivativeAnalysis = {
    curve: DerivativePoint[];

    pointP: DerivativePoint;

    pointQ: DerivativePoint;

    secantSlope: number;

    tangentSlope: number;

    derivativeExpression: string;
};