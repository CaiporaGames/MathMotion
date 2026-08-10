import { create } from "zustand";

import type {
    GraphPoint,
    GraphViewport,
} from "../types/functionGraph.types";

type FunctionGraphState = {

    expression: string;

    points: GraphPoint[];

    viewport: GraphViewport;

    error: string | null;

    setExpression: (
        expression: string
    ) => void;

    setPoints: (
        points: GraphPoint[]
    ) => void;

    setError: (
        error: string | null
    ) => void;
};

export const useFunctionGraphStore =
    create<FunctionGraphState>()(
        (set) => ({

            expression: "x^2",

            points: [],

            viewport: {
                minX: -10,
                maxX: 10,
                minY: -10,
                maxY: 10,
            },

            error: null,

            setExpression: (expression) =>
                set({ expression }),

            setPoints: (points) =>
                set({ points }),

            setError: (error) =>
                set({ error }),
        })
    );