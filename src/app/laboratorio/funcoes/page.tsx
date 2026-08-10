import { FunctionGraphPageController }
    from "@/features/function-graph/controllers/FunctionGraphPageController";

import styles from "./page.module.scss";

export default function FunctionsLabPage() {
    return (
        <main className={styles.page}>
            <FunctionGraphPageController />
        </main>
    );
}