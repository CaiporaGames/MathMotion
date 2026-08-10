import {
    RiverCrossingBoard,
} from "@/features/geometry/components/RiverCrossingBoard";

import type {
    GeometryPoint,
    PlankState,
} from "@/features/geometry/types/geometry.types";

import type {
    GeometryProblemBlock,
} from "../../types/problem.types";

import styles
    from "./ProblemGeometryBlock.module.scss";

type Props = {

    block:
        GeometryProblemBlock;

    planks:
        PlankState[];

    selectedPlankId:
        string | null;

    onSelectPlank:
        (
            plankId: string
        ) => void;

    onPlankPointerDown:
        (
            plankId: string,
            point: GeometryPoint
        ) => void;

    onPointerMove:
        (
            point: GeometryPoint
        ) => void;

    onPointerUp:
        () => void;

    onRotate:
        (
            plankId: string,
            deltaAngle: number
        ) => void;

    onReset:
        () => void;
};

export function ProblemGeometryBlock({
    block,
    planks,
    selectedPlankId,
    onSelectPlank,
    onPlankPointerDown,
    onPointerMove,
    onPointerUp,
    onRotate,
    onReset,
}: Props) {

    return (
        <section
            className={
                styles.block
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <div>
                    <span>
                        Explore
                    </span>

                    {
                        block.title &&
                        (
                            <h2>
                                {
                                    block
                                        .title
                                }
                            </h2>
                        )
                    }

                    {
                        block
                            .instruction &&
                        (
                            <p>
                                {
                                    block
                                        .instruction
                                }
                            </p>
                        )
                    }
                </div>

                <button
                    type="button"
                    onClick={
                        onReset
                    }
                >
                    Reiniciar
                </button>

            </header>

            <RiverCrossingBoard
                scenario={
                    block.scenario
                }

                planks={
                    planks
                }

                selectedPlankId={
                    selectedPlankId
                }

                onSelectPlank={
                    onSelectPlank
                }

                onPlankPointerDown={
                    onPlankPointerDown
                }

                onPointerMove={
                    onPointerMove
                }

                onPointerUp={
                    onPointerUp
                }
            />

            <div
                className={
                    styles.controls
                }
            >

                <span>
                    Rodar tábua:
                </span>

                {
                    planks.map(
                        plank => (

                            <div
                                key={
                                    plank.id
                                }
                                className={
                                    selectedPlankId ===
                                    plank.id
                                        ? styles
                                            .selectedControl
                                        : styles
                                            .plankControl
                                }
                            >

                                <strong>
                                    {
                                        plank.label
                                    }
                                </strong>

                                <button
                                    type="button"
                                    onClick={
                                        () =>
                                            onRotate(
                                                plank.id,
                                                -5
                                            )
                                    }
                                >
                                    ↺ 5°
                                </button>

                                <span>
                                    {
                                        Math.round(
                                            plank.angle
                                        )
                                    }
                                    °
                                </span>

                                <button
                                    type="button"
                                    onClick={
                                        () =>
                                            onRotate(
                                                plank.id,
                                                5
                                            )
                                    }
                                >
                                    5° ↻
                                </button>

                            </div>

                        )
                    )
                }

            </div>

            <div
                className={
                    styles.tip
                }
            >
                Arraste as tábuas pelo desenho
                e use os botões para rodá-las.
            </div>

        </section>
    );
}