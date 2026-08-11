import type {
    MeasurementGrowthAnalysis,
    MeasurementGrowthConfig,
    MeasurementShape,
    ShapeMetrics,
} from "../types/measurementGrowth.types";

export class MeasurementGrowthService {

    static analyze(
        config: MeasurementGrowthConfig,
        sizeA: number,
        sizeB: number,
    ): MeasurementGrowthAnalysis {

        const metricsA =
            this.calculateMetrics(
                config.shape,
                sizeA
            );

        const metricsB =
            this.calculateMetrics(
                config.shape,
                sizeB
            );

        const scaleFactor =
            sizeA === 0
                ? Number.NaN
                : sizeB / sizeA;

        const analysis:
            MeasurementGrowthAnalysis = {

            metricsA,

            metricsB,

            scaleFactor,

            linearFactor:
                scaleFactor,

            quadraticFactor:
                scaleFactor ** 2,

            cubicFactor:
                scaleFactor ** 3,
        };

        /*
         * Se o objeto possui área
         * e recebemos preços,
         * podemos calcular custo por área.
         */
        if (
            metricsA.area &&
            config.priceA !== undefined
        ) {
            analysis.pricePerAreaA =
                config.priceA /
                metricsA.area;
        }

        if (
            metricsB.area &&
            config.priceB !== undefined
        ) {
            analysis.pricePerAreaB =
                config.priceB /
                metricsB.area;
        }

        return analysis;
    }

    static calculateMetrics(
        shape: MeasurementShape,
        size: number,
    ): ShapeMetrics {

        switch (shape) {

            /*
             * Para círculo e esfera,
             * size representa o DIÂMETRO.
             */
            case "circle": {

                const radius =
                    size / 2;

                return {
                    size,

                    perimeter:
                        Math.PI *
                        size,

                    area:
                        Math.PI *
                        radius *
                        radius,
                };
            }

            /*
             * Para quadrado:
             * size representa o lado.
             */
            case "square":

                return {
                    size,

                    perimeter:
                        4 * size,

                    area:
                        size ** 2,
                };

            /*
             * Para cubo:
             * size representa a aresta.
             */
            case "cube":

                return {
                    size,

                    surfaceArea:
                        6 *
                        size ** 2,

                    volume:
                        size ** 3,
                };

            /*
             * Para esfera:
             * size representa o diâmetro.
             */
            case "sphere": {

                const radius =
                    size / 2;

                return {
                    size,

                    surfaceArea:
                        4 *
                        Math.PI *
                        radius ** 2,

                    volume:
                        (
                            4 /
                            3
                        ) *
                        Math.PI *
                        radius ** 3,
                };
            }
        }
    }
}