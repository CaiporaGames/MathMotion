import {
    BalancePageController,
} from "@/features/balance/controllers/BalancePageController";

import styles
    from "./page.module.scss";

export default function BalancePage() {

    return (
        <main
            className={
                styles.page
            }
        >
            <BalancePageController />
        </main>
    );
}