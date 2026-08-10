import type {
    DiscoveryProblemBlock,
} from "../../types/problem.types";

import styles
    from "./DiscoveryBlock.module.scss";

type Props = {

    block:
        DiscoveryProblemBlock;

    revealed:
        boolean;

    onReveal:
        () => void;
};

export function DiscoveryBlock({
    block,
    revealed,
    onReveal,
}: Props) {

    if (!revealed) {
        return (
            <section
                className={
                    styles.hidden
                }
            >

                <span>
                    Descoberta
                </span>

                <h2>
                    Antes de continuar...
                </h2>

                <p>
                    Tente explicar com
                    as suas próprias palavras
                    o que observou.
                </p>

                <button
                    type="button"
                    onClick={
                        onReveal
                    }
                >
                    Revelar descoberta
                </button>

            </section>
        );
    }

    return (
        <section
            className={
                styles.discovery
            }
        >

            <span>
                Descoberta
            </span>

            <h2>
                {block.title}
            </h2>

            <p>
                {block.text}
            </p>

        </section>
    );
}