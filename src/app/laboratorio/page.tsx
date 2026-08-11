import {
    CatalogPageController,
} from "@/features/catalog/controllers/CatalogPageController";

import styles
    from "./page.module.scss";

export default function LaboratoryPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <CatalogPageController
                kind="tool"
            />

        </main>
    );
}