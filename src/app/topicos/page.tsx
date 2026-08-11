import {
    CatalogPageController,
} from "@/features/catalog/controllers/CatalogPageController";

import styles
    from "./page.module.scss";

export default function TopicsPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <CatalogPageController
                kind="topic"
            />

        </main>
    );
}