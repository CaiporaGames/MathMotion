import {
    CatalogPageController,
} from "@/features/catalog/controllers/CatalogPageController";

import styles
    from "./page.module.scss";

export default function InvestigationsPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <CatalogPageController
                kind="investigation"
            />

        </main>
    );
}