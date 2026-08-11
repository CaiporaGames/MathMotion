"use client";

import {
    MeasurementGrowthExplorer,
} from "../components/MeasurementGrowthExplorer";

import {
    MeasurementGrowthService,
} from "../services/measurementGrowth.service";

import {
    useMeasurementGrowthStore,
} from "../store/measurementGrowth.store";

import type {
    MeasurementGrowthConfig,
} from "../types/measurementGrowth.types";

type Props = {
    id: string;

    config:
        MeasurementGrowthConfig;
};

export function MeasurementGrowthExplorerController({
    id,
    config,
}: Props) {

    const instance =
        useMeasurementGrowthStore(
            state =>
                state.instances[id]
        );

    const setInstance =
        useMeasurementGrowthStore(
            state =>
                state.setInstance
        );

    const sizeA =
        instance?.sizeA ??
        config.initialA;

    const sizeB =
        instance?.sizeB ??
        config.initialB;

    const analysis =
        MeasurementGrowthService
            .analyze(
                config,
                sizeA,
                sizeB
            );

    function setSizeA(
        value: number
    ) {

        setInstance(
            id,
            {
                sizeA:
                    value,

                sizeB,
            }
        );
    }

    function setSizeB(
        value: number
    ) {

        setInstance(
            id,
            {
                sizeA,

                sizeB:
                    value,
            }
        );
    }

    function reset() {

        setInstance(
            id,
            {
                sizeA:
                    config.initialA,

                sizeB:
                    config.initialB,
            }
        );
    }

    return (
        <MeasurementGrowthExplorer
            config={config}

            sizeA={sizeA}

            sizeB={sizeB}

            analysis={
                analysis
            }

            onSizeAChange={
                setSizeA
            }

            onSizeBChange={
                setSizeB
            }

            onReset={
                reset
            }
        />
    );
}