import {
    create,
} from "zustand";

import type {
    GeometryPoint,
    PlankState,
} from "../types/geometry.types";

type DragState = {
    plankId: string;

    /**
     * Diferença entre onde clicámos
     * e o centro da tábua.
     *
     * Isso impede a tábua de "saltar"
     * para o cursor ao começar o drag.
     */
    offset: GeometryPoint;
};

type GeometryInstance = {
    planks: PlankState[];

    selectedPlankId:
        string | null;

    drag:
        DragState | null;
};

type GeometryStore = {

    instances:
        Record<
            string,
            GeometryInstance
        >;

    setInstance:
        (
            blockId: string,
            instance: GeometryInstance
        ) => void;
};

export const useGeometryStore =
    create<GeometryStore>()(
        (set) => ({

            instances: {},

            setInstance:
                (
                    blockId,
                    instance
                ) =>
                    set(
                        state => ({
                            instances: {
                                ...state.instances,

                                [blockId]:
                                    instance,
                            },
                        })
                    ),
        })
    );