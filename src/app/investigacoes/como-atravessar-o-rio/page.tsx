import {
    crossRiverProblem,
} from "@/content/problems/crossRiver.problem";

import {
    ProblemPage,
} from "@/features/problems/components/ProblemPage";

import styles
    from "./page.module.scss";

export default function CrossRiverPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <ProblemPage
                problem={
                    crossRiverProblem
                }
            />

        </main>
    );
}