import {
    fermatMaximumTopic,
} from "@/content/topics/fermatMaximum.topic";

import {
    TopicPage,
} from "@/features/topics/components/TopicPage";

import styles
    from "./page.module.scss";

export default function FermatProblemPage() {

    return (
        <main
            className={
                styles.page
            }
        >

            <TopicPage
                topic={
                    fermatMaximumTopic
                }
            />

        </main>
    );
}