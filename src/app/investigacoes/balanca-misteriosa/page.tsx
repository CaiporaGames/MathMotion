import {
    balanceMysteryProblem,
} from "@/content/problems/balanceMystery.problem";

import {
    ProblemPage,
} from "@/features/problems/components/ProblemPage";

import styles
    from "./page.module.scss";

export default function BalanceMysteryPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <ProblemPage
                problem={
                    balanceMysteryProblem
                }
            />

        </main>
    );
}