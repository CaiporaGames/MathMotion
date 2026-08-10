"use client";

import {
    useEffect,
    useRef,
} from "react";

import type {
    GraphPoint,
    GraphViewport,
} from "../types/functionGraph.types";

import styles
    from "./GraphCanvas.module.scss";

type Props = {
    points: GraphPoint[];

    viewport: GraphViewport;
};

export function GraphCanvas({
    points,
    viewport,
}: Props) {

    const canvasRef =
        useRef<HTMLCanvasElement | null>(
            null
        );

    useEffect(() => {

        const canvas =
            canvasRef.current;

        if (!canvas) {
            return;
        }

        const container =
            canvas.parentElement;

        if (!container) {
            return;
        }

        function render() {

            if (!canvas) {
                return;
            }

            const width =
                container?.clientWidth;

            const height =
                container?.clientHeight;

            const dpr =
                window.devicePixelRatio || 1;

            canvas.width =
                Math.floor(width! * dpr);

            canvas.height =
                Math.floor(height! * dpr);

            canvas.style.width =
                `${width}px`;

            canvas.style.height =
                `${height}px`;

            const context =
                canvas.getContext("2d");

            if (!context) {
                return;
            }

            /*
             * Trabalhamos em pixels CSS,
             * independentemente da densidade
             * física da tela.
             */
            context.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

            context.clearRect(
                0,
                0,
                width!,
                height!
            );

            drawBackground(
                context,
                width!,
                height!
            );

            drawGrid(
                context,
                width!,
                height!,
                viewport
            );

            drawAxes(
                context,
                width!,
                height!,
                viewport
            );

            drawFunction(
                context,
                width!,
                height!,
                viewport,
                points
            );
        }

        render();

        /*
         * Se o utilizador alterar o tamanho
         * da janela, redesenhamos o gráfico.
         */
        const resizeObserver =
            new ResizeObserver(render);

        resizeObserver.observe(
            container
        );

        return () => {
            resizeObserver.disconnect();
        };

    }, [
        points,
        viewport,
    ]);

    return (
        <div className={styles.wrapper}>

            <canvas
                ref={canvasRef}
                className={styles.canvas}
                role="img"
                aria-label="Gráfico da função"
            />

            {points.length === 0 && (
                <div
                    className={styles.empty}
                >
                    <strong>
                        Escreva uma função
                    </strong>

                    <span>
                        e clique em Desenhar função
                    </span>
                </div>
            )}

        </div>
    );
}

function drawBackground(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
) {
    context.fillStyle =
        "#ffffff";

    context.fillRect(
        0,
        0,
        width,
        height
    );
}

function drawGrid(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: GraphViewport,
) {
    context.save();

    context.strokeStyle =
        "#e2e8f0";

    context.lineWidth =
        1;

    /*
     * Neste MVP:
     * uma linha a cada unidade matemática.
     */
    const firstX =
        Math.ceil(viewport.minX);

    const lastX =
        Math.floor(viewport.maxX);

    for (
        let x = firstX;
        x <= lastX;
        x++
    ) {
        const screenX =
            toScreenX(
                x,
                width,
                viewport
            );

        context.beginPath();

        context.moveTo(
            screenX,
            0
        );

        context.lineTo(
            screenX,
            height
        );

        context.stroke();
    }

    const firstY =
        Math.ceil(viewport.minY);

    const lastY =
        Math.floor(viewport.maxY);

    for (
        let y = firstY;
        y <= lastY;
        y++
    ) {
        const screenY =
            toScreenY(
                y,
                height,
                viewport
            );

        context.beginPath();

        context.moveTo(
            0,
            screenY
        );

        context.lineTo(
            width,
            screenY
        );

        context.stroke();
    }

    context.restore();
}

function drawAxes(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: GraphViewport,
) {
    context.save();

    context.strokeStyle =
        "#64748b";

    context.lineWidth =
        1.5;

    /*
     * Eixo Y, onde x = 0.
     */
    if (
        viewport.minX <= 0 &&
        viewport.maxX >= 0
    ) {
        const axisX =
            toScreenX(
                0,
                width,
                viewport
            );

        context.beginPath();

        context.moveTo(
            axisX,
            0
        );

        context.lineTo(
            axisX,
            height
        );

        context.stroke();
    }

    /*
     * Eixo X, onde y = 0.
     */
    if (
        viewport.minY <= 0 &&
        viewport.maxY >= 0
    ) {
        const axisY =
            toScreenY(
                0,
                height,
                viewport
            );

        context.beginPath();

        context.moveTo(
            0,
            axisY
        );

        context.lineTo(
            width,
            axisY
        );

        context.stroke();
    }

    drawAxisNumbers(
        context,
        width,
        height,
        viewport
    );

    context.restore();
}

function drawAxisNumbers(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: GraphViewport,
) {
    context.fillStyle =
        "#94a3b8";

    context.font =
        "11px sans-serif";

    const zeroY =
        toScreenY(
            0,
            height,
            viewport
        );

    const zeroX =
        toScreenX(
            0,
            width,
            viewport
        );

    /*
     * Para não poluir demais,
     * mostramos números de 2 em 2.
     */
    for (
        let x = Math.ceil(viewport.minX);
        x <= viewport.maxX;
        x++
    ) {
        if (
            x === 0 ||
            x % 2 !== 0
        ) {
            continue;
        }

        const screenX =
            toScreenX(
                x,
                width,
                viewport
            );

        context.fillText(
            x.toString(),
            screenX + 4,
            Math.min(
                Math.max(
                    zeroY + 15,
                    15
                ),
                height - 5
            )
        );
    }

    for (
        let y = Math.ceil(viewport.minY);
        y <= viewport.maxY;
        y++
    ) {
        if (
            y === 0 ||
            y % 2 !== 0
        ) {
            continue;
        }

        const screenY =
            toScreenY(
                y,
                height,
                viewport
            );

        context.fillText(
            y.toString(),
            Math.min(
                Math.max(
                    zeroX + 6,
                    5
                ),
                width - 25
            ),
            screenY - 5
        );
    }
}

function drawFunction(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: GraphViewport,
    points: GraphPoint[],
) {
    if (points.length < 2) {
        return;
    }

    context.save();

    context.strokeStyle =
        "#4f46e5";

    context.lineWidth =
        2.5;

    context.lineJoin =
        "round";

    context.lineCap =
        "round";

    context.beginPath();

    let hasPreviousPoint =
        false;

    let previousY =
        0;

    const visibleHeight =
        viewport.maxY -
        viewport.minY;

    for (
        const point of points
    ) {
        if (
            !Number.isFinite(point.x) ||
            !Number.isFinite(point.y)
        ) {
            hasPreviousPoint = false;
            continue;
        }

        /*
         * Evita ligar visualmente duas regiões
         * separadas por uma assíntota,
         * como acontece em 1/x.
         */
        if (
            hasPreviousPoint &&
            Math.abs(
                point.y - previousY
            ) > visibleHeight
        ) {
            hasPreviousPoint = false;
        }

        const screenX =
            toScreenX(
                point.x,
                width,
                viewport
            );

        const screenY =
            toScreenY(
                point.y,
                height,
                viewport
            );

        if (!hasPreviousPoint) {
            context.moveTo(
                screenX,
                screenY
            );

            hasPreviousPoint = true;
        }
        else {
            context.lineTo(
                screenX,
                screenY
            );
        }

        previousY =
            point.y;
    }

    context.stroke();

    context.restore();
}

function toScreenX(
    x: number,
    width: number,
    viewport: GraphViewport,
): number {

    const mathematicalWidth =
        viewport.maxX -
        viewport.minX;

    return (
        (x - viewport.minX) /
        mathematicalWidth
    ) * width;
}

function toScreenY(
    y: number,
    height: number,
    viewport: GraphViewport,
): number {

    const mathematicalHeight =
        viewport.maxY -
        viewport.minY;

    /*
     * Canvas cresce para baixo.
     *
     * Por isso invertemos Y.
     */
    return height -
        (
            (y - viewport.minY) /
            mathematicalHeight
        ) * height;
}