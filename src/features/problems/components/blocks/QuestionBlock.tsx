import type {
    QuestionProblemBlock,
} from "../../types/problem.types";

import styles
    from "./QuestionBlock.module.scss";

type Props = {

    block: QuestionProblemBlock;

    answer: string;

    result:
        boolean |
        null;

    onAnswerChange:
        (answer: string) =>
            void;

    onCheck:
        () =>
            void;
};

export function QuestionBlock({
    block,
    answer,
    result,
    onAnswerChange,
    onCheck,
}: Props) {

    return (
        <section
            className={
                styles.question
            }
        >

            <span
                className={
                    styles.label
                }
            >
                Sua vez
            </span>

            <h2>
                {block.prompt}
            </h2>

            {block.inputType ===
                "number" && (

                <div
                    className={
                        styles.answerRow
                    }
                >
                    <input
                        type="text"
                        inputMode="decimal"
                        value={answer}
                        placeholder="?"
                        onChange={
                            event =>
                                onAnswerChange(
                                    event
                                        .target
                                        .value
                                )
                        }
                    />

                    <button
                        type="button"
                        onClick={
                            onCheck
                        }
                    >
                        Verificar
                    </button>
                </div>
            )}

            {block.inputType ===
                "multiple-choice" && (

                <div
                    className={
                        styles.options
                    }
                >

                    {
                        block.options?.map(
                            option => (

                                <button
                                    key={
                                        option.id
                                    }
                                    type="button"
                                    className={
                                        answer ===
                                        option.value
                                            ? styles
                                                .selected
                                            : ""
                                    }
                                    onClick={
                                        () =>
                                            onAnswerChange(
                                                option
                                                    .value
                                            )
                                    }
                                >
                                    {
                                        option
                                            .label
                                    }
                                </button>

                            )
                        )
                    }

                    <button
                        type="button"
                        className={
                            styles.checkButton
                        }
                        onClick={
                            onCheck
                        }
                    >
                        Verificar
                    </button>

                </div>
            )}

            {result === true && (
                <div
                    className={
                        styles.correct
                    }
                >
                    {
                        block
                            .successMessage ??
                        "Correto!"
                    }
                </div>
            )}

            {result === false && (
                <div
                    className={
                        styles.incorrect
                    }
                >
                    {
                        block
                            .errorMessage ??
                        "Ainda não. Experimente outra ideia."
                    }
                </div>
            )}

        </section>
    );
}