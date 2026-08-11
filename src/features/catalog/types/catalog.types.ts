export type CatalogKind =
    | "tool"
    | "investigation"
    | "topic";

export type CatalogSort =
    | "newest"
    | "oldest";

export type CatalogItem = {
    id: string;

    kind: CatalogKind;

    title: string;

    description: string;

    href: string;

    category: string;

    tags?: string[];

    /**
     * Data editorial/publicação.
     *
     * Depois este campo poderá vir
     * diretamente do Firestore.
     */
    publishedAt: string;
};

export type CatalogViewItem =
    CatalogItem & {
        dateLabel: string;
    };

export type CatalogPageResult = {
    items: CatalogItem[];

    page: number;

    pageSize: number;

    totalItems: number;

    totalPages: number;

    hasPreviousPage: boolean;

    hasNextPage: boolean;
};