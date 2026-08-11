"use client";

import {
    catalogItems,
} from "@/content/catalog/catalogItems";

import {
    CatalogPage,
} from "../components/CatalogPage";

import {
    CatalogService,
} from "../services/catalog.service";

import {
    useCatalogStore,
} from "../store/catalog.store";

import type {
    CatalogKind,
} from "../types/catalog.types";

type Props = {
    kind: CatalogKind;
};

const PAGE_SIZE = 6;

export function CatalogPageController({
    kind,
}: Props) {

    const settings =
        useCatalogStore(
            state =>
                state.settings[
                    kind
                ]
        );

    const setPage =
        useCatalogStore(
            state =>
                state.setPage
        );

    const setSort =
        useCatalogStore(
            state =>
                state.setSort
        );

    const result =
        CatalogService.getPage(
            catalogItems,
            {
                kind,

                sort:
                    settings.sort,

                page:
                    settings.page,

                pageSize:
                    PAGE_SIZE,
            }
        );

    const items =
        result.items.map(
            item => ({
                ...item,

                dateLabel:
                    CatalogService
                        .formatDate(
                            item.publishedAt
                        ),
            })
        );

    const pageConfig =
        getPageConfig(
            kind
        );

    return (
        <CatalogPage
            title={
                pageConfig.title
            }

            eyebrow={
                pageConfig.eyebrow
            }

            description={
                pageConfig.description
            }

            items={
                items
            }

            sort={
                settings.sort
            }

            page={
                result.page
            }

            totalPages={
                result.totalPages
            }

            totalItems={
                result.totalItems
            }

            hasPreviousPage={
                result
                    .hasPreviousPage
            }

            hasNextPage={
                result
                    .hasNextPage
            }

            onSortChange={
                sort =>
                    setSort(
                        kind,
                        sort
                    )
            }

            onPageChange={
                page =>
                    setPage(
                        kind,
                        page
                    )
            }
        />
    );
}

function getPageConfig(
    kind: CatalogKind
) {

    switch (
        kind
    ) {

        case "tool":

            return {
                eyebrow:
                    "Explore",

                title:
                    "Laboratório",

                description:
                    "Ferramentas matemáticas para experimentar ideias livremente.",
            };

        case "investigation":

            return {
                eyebrow:
                    "Descubra",

                title:
                    "Investigações",

                description:
                    "Problemas construídos para começar pela pergunta, experimentar e descobrir a matemática.",
            };

        case "topic":

            return {
                eyebrow:
                    "Estude",

                title:
                    "Tópicos",

                description:
                    "Capítulos de matemática com texto, fórmulas e ferramentas interativas.",
            };
    }
}