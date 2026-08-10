import type {
    FormEvent,
} from "react";

import styles
    from "./FunctionControls.module.scss";

type Props = {
    expression: string;

    error: string | null;

    onExpressionChange:
        (value: string) => void;

    onDraw:
        () => void;
};

export function FunctionControls({
    expression,
    error,
    onExpressionChange,
    onDraw,
}: Props) {

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        onDraw();
    }

    return (
        <form
            className={styles.panel}
            onSubmit={handleSubmit}
        >

            <div className={styles.title}>
                <span>
                    Função
                </span>

                <h2>
                    O que quer desenhar?
                </h2>
            </div>

            <label
                className={styles.label}
                htmlFor="function-expression"
            >
                Expressão
            </label>

            <div className={styles.inputGroup}>

                <span className={styles.prefix}>
                    f(x) =
                </span>

                <input
                    id="function-expression"
                    type="text"
                    value={expression}
                    placeholder="x^2"
                    autoComplete="off"
                    spellCheck={false}

                    onChange={(event) =>
                        onExpressionChange(
                            event.target.value
                        )
                    }
                />

            </div>

            {error && (
                <div
                    className={styles.error}
                    role="alert"
                >
                    {error}
                </div>
            )}

            <button
                className={styles.drawButton}
                type="submit"
            >
                Desenhar função
            </button>

        </form>
    );
}