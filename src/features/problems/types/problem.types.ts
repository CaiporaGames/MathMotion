import type {
    BalanceScenario,
} from "@/features/balance/types/balance.types";
import type {
    RiverCrossingScenario,
} from "@/features/geometry/types/geometry.types";

export type ProblemDefinition = {
    id: string;

    slug: string;

    title: string;

    level: string;

    description: string;

    blocks: ProblemBlock[];
};

export type ProblemBlock =
    | TextProblemBlock
    | QuestionProblemBlock
    | MathProblemBlock
    | DiscoveryProblemBlock
    | BalanceProblemBlock
    | GeometryProblemBlock;

export type TextProblemBlock = {
    id: string;

    type: "text";

    title?: string;

    paragraphs: string[];
};

export type QuestionProblemBlock = {
    id: string;

    type: "question";

    prompt: string;

    inputType:
        | "number"
        | "multiple-choice";

    correctAnswer:
        string |
        number;

    tolerance?: number;

    options?: {
        id: string;
        label: string;
        value: string;
    }[];

    successMessage?: string;

    errorMessage?: string;
};

export type MathProblemBlock = {
    id: string;

    type: "math";

    latex: string;

    explanation?: string;
};

export type DiscoveryProblemBlock = {
    id: string;

    type: "discovery";

    title: string;

    text: string;
};

export type BalanceProblemBlock = {
    id: string;

    type: "balance";

    title?: string;

    instruction?: string;

    scenario: BalanceScenario;

    showEquation?: boolean;
};

export type GeometryProblemBlock = {
    id: string;

    type: "geometry";

    geometryType:
        "river-crossing";

    title?: string;

    instruction?: string;

    scenario:
        RiverCrossingScenario;
};