import type {
    DerivativeExplorerConfig,
} from "@/features/derivative-explorer/types/derivativeExplorer.types";

export type TopicDefinition = {
    id: string;

    slug: string;

    title: string;

    area: string;

    description: string;

    blocks:
        TopicBlock[];
};

export type TopicBlock =
    | TopicTextBlock
    | TopicMathBlock
    | TopicCalloutBlock
    | TopicDerivativeExplorerBlock;

export type TopicTextBlock = {
    id: string;

    type: "text";

    title?: string;

    paragraphs: string[];
};

export type TopicMathBlock = {
    id: string;

    type: "math";

    latex: string;

    explanation?: string;
};

export type TopicCalloutBlock = {
    id: string;

    type: "callout";

    title: string;

    text: string;

    tone?:
        | "idea"
        | "question"
        | "historical"
        | "modern";
};

export type TopicDerivativeExplorerBlock = {
    id: string;

    type:
        "derivative-explorer";

    title?: string;

    text?: string;

    config:
        DerivativeExplorerConfig;
};