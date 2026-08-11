import Link
    from "next/link";

import type {
    CatalogViewItem,
} from "../types/catalog.types";

import styles
    from "./CatalogItemCard.module.scss";

type Props = {
    item:
        CatalogViewItem;
};

export function CatalogItemCard({
    item,
}: Props) {

    return (
        <Link
            href={
                item.href
            }

            className={
                styles.card
            }
        >

            <div
                className={
                    styles.content
                }
            >

                <div
                    className={
                        styles.meta
                    }
                >

                    <span
                        className={
                            styles.category
                        }
                    >
                        {
                            item.category
                        }
                    </span>

                    <span
                        className={
                            styles.date
                        }
                    >
                        {
                            item.dateLabel
                        }
                    </span>

                </div>

                <h2>
                    {item.title}
                </h2>

                <p>
                    {
                        item.description
                    }
                </p>

                {
                    item.tags &&
                    item.tags.length >
                    0 &&
                    (
                        <div
                            className={
                                styles.tags
                            }
                        >

                            {
                                item.tags.map(
                                    tag => (

                                        <span
                                            key={
                                                tag
                                            }
                                        >
                                            {tag}
                                        </span>

                                    )
                                )
                            }

                        </div>
                    )
                }

            </div>

            <div
                className={
                    styles.arrow
                }
            >
                →
            </div>

        </Link>
    );
}