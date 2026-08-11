import {
    create,
} from "zustand";

type MeasurementGrowthInstance = {
    sizeA: number;
    sizeB: number;
};

type MeasurementGrowthStore = {

    instances:
        Record<
            string,
            MeasurementGrowthInstance
        >;

    setInstance:
        (
            id: string,
            instance:
                MeasurementGrowthInstance
        ) => void;
};

export const useMeasurementGrowthStore =
    create<MeasurementGrowthStore>()(
        (set) => ({

            instances: {},

            setInstance:
                (
                    id,
                    instance
                ) =>
                    set(
                        state => ({
                            instances: {

                                ...state
                                    .instances,

                                [id]:
                                    instance,
                            },
                        })
                    ),
        })
    );