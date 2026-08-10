export type GeometryPoint = {
    x: number;
    y: number;
};

export type PlankState = {
    id: string;

    label: string;

    center: GeometryPoint;

    /**
     * Comprimento matemático em metros.
     */
    length: number;

    /**
     * Ângulo em graus.
     */
    angle: number;
};

export type RiverCrossingScenario = {
    width: number;

    height: number;

    /**
     * Largura do rio em metros.
     */
    riverWidth: number;

    /**
     * Espaço de terra antes de começar o rio.
     *
     * Isso permite desenharmos o rio em L
     * dentro da área visível.
     */
    margin: number;

    planks: PlankState[];
};