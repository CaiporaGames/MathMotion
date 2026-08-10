import { compile } from "mathjs";

import type {
    GraphPoint,
    GraphViewport,
} from "../types/functionGraph.types";

export class FunctionGraphService {
    static sample(
        expression: string,
        viewport: GraphViewport,
        samples = 1000,
    ): GraphPoint[] {

        const compiledExpression = compile(expression);

        const points: GraphPoint[] = [];

        const width =
            viewport.maxX - viewport.minX;

        const step =
            width / samples;

        for (
            let x = viewport.minX;
            x <= viewport.maxX;
            x += step
        ) {
            try {
                const result =
                    compiledExpression.evaluate({ x });

                if (
                    typeof result !== "number" ||
                    !Number.isFinite(result)
                ) {
                    points.push({
                        x,
                        y: Number.NaN,
                    });

                    continue;
                }

                points.push({
                    x,
                    y: result,
                });
            }
            catch {
                points.push({
                    x,
                    y: Number.NaN,
                });
            }
        }

        return points;
    }
}