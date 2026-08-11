import {
    create,
} from "zustand";

import type {
    CatalogKind,
    CatalogSort,
} from "../types/catalog.types";

type CatalogSettings = {
    page: number;

    sort:
        CatalogSort;
};

type CatalogStore = {

    settings:
        Record<
            CatalogKind,
            CatalogSettings
        >;

    setPage:
        (
            kind: CatalogKind,
            page: number
        ) => void;

    setSort:
        (
            kind: CatalogKind,
            sort: CatalogSort
        ) => void;
};

export const useCatalogStore =
    create<CatalogStore>()(
        (set) => ({

            settings: {

                tool: {
                    page: 1,
                    sort: "newest",
                },

                investigation: {
                    page: 1,
                    sort: "newest",
                },

                topic: {
                    page: 1,
                    sort: "newest",
                },
            },

            setPage:
                (
                    kind,
                    page
                ) =>
                    set(
                        state => ({
                            settings: {
                                ...state.settings,

                                [kind]: {
                                    ...state
                                        .settings[
                                        kind
                                    ],

                                    page,
                                },
                            },
                        })
                    ),

            setSort:
                (
                    kind,
                    sort
                ) =>
                    set(
                        state => ({
                            settings: {
                                ...state.settings,

                                [kind]: {
                                    ...state
                                        .settings[
                                        kind
                                    ],

                                    /*
                                     * Quando mudamos
                                     * a ordenação,
                                     * voltamos à
                                     * primeira página.
                                     */
                                    page: 1,

                                    sort,
                                },
                            },
                        })
                    ),
        })
    );