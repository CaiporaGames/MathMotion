"use client";

import {
    DerivativeExplorer,
} from "../components/DerivativeExplorer";

import {
    DerivativeExplorerService,
} from "../services/derivativeExplorer.service";

import {
    useDerivativeExplorerStore,
} from "../store/derivativeExplorer.store";

import type {
    DerivativeExplorerConfig,
} from "../types/derivativeExplorer.types";

type Props = {
    id: string;

    config:
        DerivativeExplorerConfig;
};

export function DerivativeExplorerController({
    id,
    config,
}: Props) {

    const instance =
        useDerivativeExplorerStore(
            state =>
                state.instances[
                    id
                ]
        );

    const setInstance =
        useDerivativeExplorerStore(
            state =>
                state.setInstance
        );

    const x =
        instance?.x ??
        config.initialX;

    const h =
        instance?.h ??
        config.initialH;

    const analysis =
        DerivativeExplorerService
            .analyze(
                config,
                x,
                h
            );

    function setX(
        newX:
            number
    ) {

        setInstance(
            id,
            {
                x:
                    newX,

                h,
            }
        );
    }

    function setH(
        newH:
            number
    ) {

        setInstance(
            id,
            {
                x,

                h:
                    newH,
            }
        );
    }

    function reset() {

        setInstance(
            id,
            {
                x:
                    config.initialX,

                h:
                    config.initialH,
            }
        );
    }

    return (
        <DerivativeExplorer
            config={config}

            x={x}

            h={h}

            analysis={
                analysis
            }

            onXChange={
                setX
            }

            onHChange={
                setH
            }

            onReset={
                reset
            }
        />
    );
}