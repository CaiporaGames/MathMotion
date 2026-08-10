import type {
    GraphPoint,
    GraphViewport,
} from "../types/functionGraph.types";

import { FunctionControls }
    from "./FunctionControls";

import { GraphCanvas }
    from "./GraphCanvas";

import styles
    from "./FunctionGraphPage.module.scss";

type Props = {
    expression: string;

    points: GraphPoint[];

    viewport: GraphViewport;

    error: string | null;

    onExpressionChange:
        (value: string) => void;

    onDraw:
        () => void;
};

export function FunctionGraphPage({
    expression,
    points,
    viewport,
    error,
    onExpressionChange,
    onDraw,
}: Props) {
    return (
        <section className={styles.container}>

            <header className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        Laboratório
                    </span>

                    <h1>
                        Funções
                    </h1>

                    <p>
                        Escreva uma função, visualize
                        o seu comportamento e explore
                        como os seus valores se relacionam.
                    </p>
                </div>

                <div className={styles.status}>
                    <span>
                        Plano cartesiano
                    </span>

                    <strong>
                        {points.length > 0
                            ? `${points.length} pontos`
                            : "Aguardando função"}
                    </strong>
                </div>
            </header>

            <div className={styles.workspace}>

                <aside className={styles.sidebar}>

                    <FunctionControls
                        expression={expression}
                        error={error}
                        onExpressionChange={
                            onExpressionChange
                        }
                        onDraw={onDraw}
                    />

                    <div className={styles.helpCard}>
                        <h2>
                            Experimente
                        </h2>

                        <code>x^2</code>
                        <code>sin(x)</code>
                        <code>2*x + 1</code>
                        <code>sqrt(x)</code>
                        <code>1/x</code>
                    </div>

                </aside>

                <section className={styles.graphArea}>

                    <div className={styles.graphHeader}>
                        <div>
                            <span>
                                Gráfico
                            </span>

                            <strong>
                                f(x) = {expression}
                            </strong>
                        </div>

                        <div
                            className={
                                styles.viewportInfo
                            }
                        >
                            x: {viewport.minX} até{" "}
                            {viewport.maxX}
                        </div>
                    </div>

                    <div className={styles.canvasContainer}>

                        <GraphCanvas
                            points={points}
                            viewport={viewport}
                        />

                    </div>

                </section>

            </div>

        </section>
    );
}