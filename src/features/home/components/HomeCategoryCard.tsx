import Link from "next/link";

import type {
    HomeCategory,
} from "../types/home.types";

import styles
    from "./HomeCategoryCard.module.scss";

type Props = {
    category: HomeCategory;
};

export function HomeCategoryCard({
    category,
}: Props) {

    return (
        <section
            className={
                styles.card
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <span
                    className={
                        styles.eyebrow
                    }
                >
                    {
                        category.eyebrow
                    }
                </span>

                <h2>
                    {
                        category.title
                    }
                </h2>

                <p>
                    {
                        category.description
                    }
                </p>

            </header>

            <div
                className={
                    styles.items
                }
            >

                {
                    category.links.map(
                        item => (

                            <Link
                                key={
                                    item.href
                                }

                                href={
                                    item.href
                                }

                                className={
                                    styles.item
                                }
                            >

                                <div>
                                    <div
                                        className={
                                            styles.itemTitle
                                        }
                                    >

                                        <strong>
                                            {
                                                item.title
                                            }
                                        </strong>

                                        {
                                            item.tag &&
                                            (
                                                <span>
                                                    {
                                                        item.tag
                                                    }
                                                </span>
                                            )
                                        }

                                    </div>

                                    <p>
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>

                                <span
                                    className={
                                        styles.arrow
                                    }
                                >
                                    →
                                </span>

                            </Link>

                        )
                    )
                }

            </div>

            <Link
                href={
                    category.href
                }

                className={
                    styles.action
                }
            >
                {
                    category.actionLabel
                }

                <span>
                    →
                </span>
            </Link>

        </section>
    );
}