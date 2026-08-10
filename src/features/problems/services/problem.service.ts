import type {
    QuestionProblemBlock,
} from "../types/problem.types";

export class ProblemService {

    static checkAnswer(
        question: QuestionProblemBlock,
        answer: string,
    ): boolean {

        if (
            question.inputType ===
            "number"
        ) {
            return this.checkNumberAnswer(
                question,
                answer
            );
        }

        return (
            answer ===
            String(
                question.correctAnswer
            )
        );
    }

    private static checkNumberAnswer(
        question: QuestionProblemBlock,
        answer: string,
    ): boolean {

        /*
         * Aceitamos tanto:
         *
         * 4.5
         *
         * quanto:
         *
         * 4,5
         */
        const normalized =
            answer.replace(
                ",",
                "."
            );

        const numericAnswer =
            Number(normalized);

        if (
            !Number.isFinite(
                numericAnswer
            )
        ) {
            return false;
        }

        const correctAnswer =
            Number(
                question.correctAnswer
            );

        const tolerance =
            question.tolerance ??
            0.0001;

        return (
            Math.abs(
                numericAnswer -
                correctAnswer
            ) <= tolerance
        );
    }
}