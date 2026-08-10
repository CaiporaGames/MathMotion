"use client";

import {
    QuestionBlock,
} from "../../components/blocks/QuestionBlock";

import {
    ProblemService,
} from "../../services/problem.service";

import {
    useProblemProgressStore,
} from "../../store/problemProgress.store";

import type {
    QuestionProblemBlock,
} from "../../types/problem.types";

type Props = {
    block: QuestionProblemBlock;
};

export function QuestionBlockController({
    block,
}: Props) {

    const answer =
        useProblemProgressStore(
            state =>
                state.answers[
                    block.id
                ] ?? ""
        );

    const result =
        useProblemProgressStore(
            state =>
                state.results[
                    block.id
                ] ?? null
        );

    const setAnswer =
        useProblemProgressStore(
            state =>
                state.setAnswer
        );

    const setResult =
        useProblemProgressStore(
            state =>
                state.setResult
        );

    function handleAnswerChange(
    value: string
) {
    setAnswer(
        block.id,
        value
    );

    setResult(
        block.id,
        null
    );
}

    function handleCheck() {

        const isCorrect =
            ProblemService
                .checkAnswer(
                    block,
                    answer
                );

        setResult(
            block.id,
            isCorrect
        );
    }

    return (
        <QuestionBlock
            block={block}
            answer={answer}
            result={result}
            onAnswerChange={
                handleAnswerChange
            }
            onCheck={
                handleCheck
            }
        />
    );
}