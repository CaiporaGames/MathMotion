import {
    create,
} from "zustand";

type ProblemProgressState = {

    answers:
        Record<string, string>;

    results:
        Record<
            string,
            boolean | null
        >;

    revealedBlocks:
        Record<
            string,
            boolean
        >;

    setAnswer:
        (
            blockId: string,
            answer: string
        ) => void;

    setResult:
        (
            blockId: string,
            result: boolean | null
        ) => void;

    revealBlock:
        (
            blockId: string
        ) => void;
};

export const useProblemProgressStore =
    create<ProblemProgressState>()(
        (set) => ({

            answers: {},

            results: {},

            revealedBlocks: {},

            setAnswer: (
                blockId,
                answer
            ) =>
                set(
                    state => ({
                        answers: {
                            ...state.answers,

                            [blockId]:
                                answer,
                        },
                    })
                ),

            setResult: (
                blockId,
                result
            ) =>
                set(
                    state => ({
                        results: {
                            ...state.results,

                            [blockId]:
                                result,
                        },
                    })
                ),

            revealBlock: (
                blockId
            ) =>
                set(
                    state => ({
                        revealedBlocks: {
                            ...state
                                .revealedBlocks,

                            [blockId]:
                                true,
                        },
                    })
                ),
        })
    );