"use client";

import { useFunctionGraphStore }
    from "../store/functionGraph.store";

import { FunctionGraphService }
    from "../services/functionGraph.service";

export function useFunctionGraphController() {

    const expression =
        useFunctionGraphStore(
            state => state.expression
        );

    const points =
        useFunctionGraphStore(
            state => state.points
        );

    const viewport =
        useFunctionGraphStore(
            state => state.viewport
        );

    const error =
        useFunctionGraphStore(
            state => state.error
        );

    const setExpression =
        useFunctionGraphStore(
            state => state.setExpression
        );

    const setPoints =
        useFunctionGraphStore(
            state => state.setPoints
        );

    const setError =
        useFunctionGraphStore(
            state => state.setError
        );

  function draw(): void {
    try {
        const newPoints =
            FunctionGraphService.sample(
                expression,
                viewport
            );

        setPoints(
            newPoints
        );

        setError(
            null
        );
    }
    catch (error) {
        console.error(
            "Function graph error:",
            error
        );

        setPoints([]);

        setError(
            "Não conseguimos interpretar essa expressão."
        );
    }
}

    return {

        expression,

        points,

        viewport,

        error,

        onExpressionChange:
            setExpression,

        onDraw:
            draw,
    };
}