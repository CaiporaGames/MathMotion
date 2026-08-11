import {
    CatalogItemCard,
} from "./CatalogItemCard";

import {
    CatalogPagination,
} from "./CatalogPagination";

import type {
    CatalogSort,
    CatalogViewItem,
} from "../types/catalog.types";

import styles
    from "./CatalogPage.module.scss";

type Props = {

    eyebrow:
        string;

    title:
        string;

    description:
        string;

    items:
        CatalogViewItem[];

    sort:
        CatalogSort;

    page:
        number;

    totalPages:
        number;

    totalItems:
        number;

    hasPreviousPage:
        boolean;

    hasNextPage:
        boolean;

    onSortChange:
        (
            sort:
                CatalogSort
        ) => void;

    onPageChange:
        (
            page:
                number
        ) => void;
};

export function CatalogPage({
    eyebrow,
    title,
    description,
    items,
    sort,
    page,
    totalPages,
    totalItems,
    hasPreviousPage,
    hasNextPage,
    onSortChange,
    onPageChange,
}: Props) {

    return (
        <section
            className={
                styles.catalog
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <div>

                    <span
                        className={
                            styles.eyebrow
                        }
                    >
                        {eyebrow}
                    </span>

                    <h1>
                        {title}
                    </h1>

                    <p>
                        {
                            description
                        }
                    </p>

                </div>

            </header>

            <div
                className={
                    styles.toolbar
                }
            >

                <span>
                    {totalItems}
                    {" "}
                    {
                        totalItems === 1
                            ? "item"
                            : "itens"
                    }
                </span>

                <label>

                    <span>
                        Ordenar por
                    </span>

                    <select
                        value={sort}
                        onChange={event => onSortChange(event.target.value as CatalogSort)}
                    >
                        <option
                            value="newest"
                        >
                            Mais recentes
                        </option>

                        <option
                            value="oldest"
                        >
                            Mais antigos
                        </option>
                    </select>

                </label>

            </div>

            <div
                className={
                    styles.list
                }
            >

                {
                    items.map(
                        item => (

                            <CatalogItemCard
                                key={
                                    item.id
                                }

                                item={
                                    item
                                }
                            />

                        )
                    )
                }

            </div>

            <CatalogPagination
                page={
                    page
                }

                totalPages={
                    totalPages
                }

                hasPreviousPage={
                    hasPreviousPage
                }

                hasNextPage={
                    hasNextPage
                }

                onPageChange={
                    onPageChange
                }
            />

        </section>
    );
}