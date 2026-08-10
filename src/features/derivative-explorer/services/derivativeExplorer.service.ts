import {
    compile,
    derivative,
} from "mathjs";

import type {
    DerivativeAnalysis,
    DerivativeExplorerConfig,
    DerivativePoint,
} from "../types/derivativeExplorer.types";

type PreparedExpression = {
    evaluate:
        (
            scope:
                Record<string, number>
        ) => unknown;

    evaluateDerivative:
        (
            scope:
                Record<string, number>
        ) => unknown;

    derivativeExpression:
        string;
};

export class DerivativeExplorerService {

    private static cache =
        new Map<
            string,
            PreparedExpression
        >();

    static analyze(
        config:
            DerivativeExplorerConfig,

        x:
            number,

        h:
            number,
    ): DerivativeAnalysis {

        const prepared =
            this.prepare(
                config.expression,
                config.variable
            );

        const evaluate =
            (
                variableValue:
                    number
            ) => {

                const scope = {
                    ...(config.parameters ?? {}),

                    [config.variable]:
                        variableValue,
                };

                return this.toNumber(
                    prepared.evaluate(
                        scope
                    )
                );
            };

        const evaluateDerivative =
            (
                variableValue:
                    number
            ) => {

                const scope = {
                    ...(config.parameters ?? {}),

                    [config.variable]:
                        variableValue,
                };

                return this.toNumber(
                    prepared
                        .evaluateDerivative(
                            scope
                        )
                );
            };

        const pointP = {
            x,
            y: evaluate(x),
        };

        const pointQ = {
            x: x + h,
            y: evaluate(
                x + h
            ),
        };

        const secantSlope =
            Math.abs(h) <
            1e-10
                ? Number.NaN
                : (
                    pointQ.y -
                    pointP.y
                ) / h;

        const tangentSlope =
            evaluateDerivative(
                x
            );

        const curve =
            this.sampleCurve(
                config,
                evaluate
            );

        return {
            curve,

            pointP,

            pointQ,

            secantSlope,

            tangentSlope,

            derivativeExpression:
                prepared
                    .derivativeExpression,
        };
    }

    private static prepare(
        expression:
            string,

        variable:
            string,
    ): PreparedExpression {

        const cacheKey =
            `${variable}:${expression}`;

        const cached =
            this.cache.get(
                cacheKey
            );

        if (cached) {
            return cached;
        }

        const compiledExpression =
            compile(
                expression
            );

        const derivativeNode =
            derivative(
                expression,
                variable
            );

        const compiledDerivative =
            derivativeNode.compile();

        const prepared:
            PreparedExpression = {

            evaluate:
                scope =>
                    compiledExpression
                        .evaluate(
                            scope
                        ),

            evaluateDerivative:
                scope =>
                    compiledDerivative
                        .evaluate(
                            scope
                        ),

            derivativeExpression:
                derivativeNode
                    .toString(),
        };

        this.cache.set(
            cacheKey,
            prepared
        );

        return prepared;
    }

    private static sampleCurve(
        config:
            DerivativeExplorerConfig,

        evaluate:
            (x: number) =>
                number,
    ): DerivativePoint[] {

        const points:
            DerivativePoint[] = [];

        const samples =
            700;

        const width =
            config.viewport.maxX -
            config.viewport.minX;

        const step =
            width /
            samples;

        for (
            let x =
                config.viewport.minX;

            x <=
            config.viewport.maxX;

            x += step
        ) {

            const y =
                evaluate(x);

            points.push({
                x,
                y,
            });
        }

        return points;
    }

    private static toNumber(
        value:
            unknown,
    ): number {

        if (
            typeof value !==
            "number"
        ) {
            return Number.NaN;
        }

        if (
            !Number.isFinite(
                value
            )
        ) {
            return Number.NaN;
        }

        return value;
    }
}