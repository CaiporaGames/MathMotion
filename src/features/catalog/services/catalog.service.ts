import type {
    CatalogItem,
    CatalogKind,
    CatalogPageResult,
    CatalogSort,
} from "../types/catalog.types";

type GetPageOptions = {
    kind: CatalogKind;

    sort: CatalogSort;

    page: number;

    pageSize: number;
};

export class CatalogService {

    static getPage(
        allItems: CatalogItem[],
        options: GetPageOptions,
    ): CatalogPageResult {

        const filteredItems =
            allItems.filter(
                item =>
                    item.kind ===
                    options.kind
            );

        const sortedItems =
            this.sort(
                filteredItems,
                options.sort
            );

        const totalItems =
            sortedItems.length;

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    totalItems /
                    options.pageSize
                )
            );

        const safePage =
            Math.max(
                1,
                Math.min(
                    options.page,
                    totalPages
                )
            );

        const start =
            (
                safePage -
                1
            ) *
            options.pageSize;

        const end =
            start +
            options.pageSize;

        const pageItems =
            sortedItems.slice(
                start,
                end
            );

        return {
            items:
                pageItems,

            page:
                safePage,

            pageSize:
                options.pageSize,

            totalItems,

            totalPages,

            hasPreviousPage:
                safePage > 1,

            hasNextPage:
                safePage <
                totalPages,
        };
    }

    static formatDate(
        date:
            string
    ): string {

        const parsedDate =
            new Date(
                `${date}T12:00:00`
            );

        return new Intl
            .DateTimeFormat(
                "pt-PT",
                {
                    day:
                        "2-digit",

                    month:
                        "short",

                    year:
                        "numeric",
                }
            )
            .format(
                parsedDate
            );
    }

    private static sort(
        items:
            CatalogItem[],

        sort:
            CatalogSort,
    ): CatalogItem[] {

        return [
            ...items,
        ].sort(
            (
                first,
                second
            ) => {

                const firstDate =
                    new Date(
                        first.publishedAt
                    )
                    .getTime();

                const secondDate =
                    new Date(
                        second.publishedAt
                    )
                    .getTime();

                if (
                    sort ===
                    "oldest"
                ) {
                    return (
                        firstDate -
                        secondDate
                    );
                }

                return (
                    secondDate -
                    firstDate
                );
            }
        );
    }
}