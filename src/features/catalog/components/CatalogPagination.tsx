import styles
    from "./CatalogPagination.module.scss";

type Props = {

    page:
        number;

    totalPages:
        number;

    hasPreviousPage:
        boolean;

    hasNextPage:
        boolean;

    onPageChange:
        (page: number) =>
            void;
};

export function CatalogPagination({
    page,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    onPageChange,
}: Props) {

    if (
        totalPages <= 1
    ) {
        return null;
    }

    const pages =
        createPages(
            page,
            totalPages
        );

    return (
        <nav
            className={
                styles.pagination
            }

            aria-label={
                "Paginação"
            }
        >

            <button
                type="button"

                disabled={
                    !hasPreviousPage
                }

                onClick={
                    () =>
                        onPageChange(
                            page - 1
                        )
                }
            >
                ←
            </button>

            {
                pages.map(
                    pageNumber => (

                        <button
                            key={
                                pageNumber
                            }

                            type="button"

                            className={
                                pageNumber ===
                                page
                                    ? styles.active
                                    : ""
                            }

                            onClick={
                                () =>
                                    onPageChange(
                                        pageNumber
                                    )
                            }
                        >
                            {
                                pageNumber
                            }
                        </button>

                    )
                )
            }

            <button
                type="button"

                disabled={
                    !hasNextPage
                }

                onClick={
                    () =>
                        onPageChange(
                            page + 1
                        )
                }
            >
                →
            </button>

        </nav>
    );
}

function createPages(
    current:
        number,

    total:
        number,
): number[] {

    const maximumVisible =
        5;

    if (
        total <=
        maximumVisible
    ) {

        return Array
            .from(
                {
                    length:
                        total,
                },

                (
                    _,
                    index
                ) =>
                    index + 1
            );
    }

    const start =
        Math.max(
            1,
            Math.min(
                current - 2,
                total -
                maximumVisible +
                1
            )
        );

    return Array
        .from(
            {
                length:
                    maximumVisible,
            },

            (
                _,
                index
            ) =>
                start +
                index
        );
}