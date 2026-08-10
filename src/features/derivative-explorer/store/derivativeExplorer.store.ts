import {
    create,
} from "zustand";

type DerivativeExplorerInstance = {
    x: number;
    h: number;
};

type DerivativeExplorerStore = {

    instances:
        Record<
            string,
            DerivativeExplorerInstance
        >;

    setInstance:
        (
            id: string,

            instance:
                DerivativeExplorerInstance
        ) => void;
};

export const useDerivativeExplorerStore =
    create<DerivativeExplorerStore>()(
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
                                ...state.instances,

                                [id]:
                                    instance,
                            },
                        })
                    ),
        })
    );