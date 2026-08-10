"use client";

import { FunctionGraphPage }
    from "../components/FunctionGraphPage";

import { useFunctionGraphController }
    from "./useFunctionGraphController";

export function FunctionGraphPageController() {
    const controller =
        useFunctionGraphController();

    return (
        <FunctionGraphPage
            expression={controller.expression}
            points={controller.points}
            viewport={controller.viewport}
            error={controller.error}
            onExpressionChange={
                controller.onExpressionChange
            }
            onDraw={
                controller.onDraw
            }
        />
    );
}