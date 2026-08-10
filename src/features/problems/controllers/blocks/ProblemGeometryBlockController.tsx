"use client";

import {
    GeometryService,
} from "@/features/geometry/services/geometry.service";

import {
    useGeometryStore,
} from "@/features/geometry/store/geometry.store";

import type {
    GeometryPoint,
    PlankState,
} from "@/features/geometry/types/geometry.types";

import {
    ProblemGeometryBlock,
} from "../../components/blocks/ProblemGeometryBlock";

import type {
    GeometryProblemBlock,
} from "../../types/problem.types";

type Props = {
    block:
        GeometryProblemBlock;
};

export function ProblemGeometryBlockController({
    block,
}: Props) {

    const instance =
        useGeometryStore(
            state =>
                state.instances[
                    block.id
                ]
        );

    const setInstance =
        useGeometryStore(
            state =>
                state.setInstance
        );

    const planks =
        instance?.planks ??
        block.scenario.planks;

    const selectedPlankId =
        instance
            ?.selectedPlankId ??
        null;

    const drag =
        instance?.drag ??
        null;

    function save(
        newPlanks:
            PlankState[],

        newSelectedPlankId:
            string | null =
                selectedPlankId,

        newDrag:
            typeof drag =
                drag,
    ) {

        setInstance(
            block.id,
            {
                planks:
                    newPlanks,

                selectedPlankId:
                    newSelectedPlankId,

                drag:
                    newDrag,
            }
        );
    }

    function selectPlank(
        plankId: string
    ) {

        save(
            planks,
            plankId,
            null
        );
    }

    function startDrag(
        plankId: string,
        point: GeometryPoint,
    ) {

        const plank =
            planks.find(
                current =>
                    current.id ===
                    plankId
            );

        if (!plank) {
            return;
        }

        save(
            planks,
            plankId,
            {
                plankId,

                offset: {
                    x:
                        plank.center.x -
                        point.x,

                    y:
                        plank.center.y -
                        point.y,
                },
            }
        );
    }

    function dragTo(
        point: GeometryPoint
    ) {

        if (!drag) {
            return;
        }

        const newPlanks =
            planks.map(
                plank => {

                    if (
                        plank.id !==
                        drag.plankId
                    ) {
                        return plank;
                    }

                    return GeometryService
                        .movePlank(
                            plank,

                            {
                                x:
                                    point.x +
                                    drag.offset.x,

                                y:
                                    point.y +
                                    drag.offset.y,
                            },

                            block
                                .scenario
                                .width,

                            block
                                .scenario
                                .height
                        );
                }
            );

        save(
            newPlanks,
            drag.plankId,
            drag
        );
    }

    function endDrag() {

        if (!drag) {
            return;
        }

        save(
            planks,
            selectedPlankId,
            null
        );
    }

    function rotate(
        plankId: string,
        deltaAngle: number,
    ) {

        const newPlanks =
            planks.map(
                plank => {

                    if (
                        plank.id !==
                        plankId
                    ) {
                        return plank;
                    }

                    return GeometryService
                        .rotatePlank(
                            plank,
                            deltaAngle
                        );
                }
            );

        save(
            newPlanks,
            plankId,
            null
        );
    }

    function reset() {

        setInstance(
            block.id,
            {
                planks:
                    block
                        .scenario
                        .planks
                        .map(
                            plank => ({
                                ...plank,

                                center: {
                                    ...plank.center,
                                },
                            })
                        ),

                selectedPlankId:
                    null,

                drag:
                    null,
            }
        );
    }

    return (
        <ProblemGeometryBlock
            block={block}

            planks={planks}

            selectedPlankId={
                selectedPlankId
            }

            onSelectPlank={
                selectPlank
            }

            onPlankPointerDown={
                startDrag
            }

            onPointerMove={
                dragTo
            }

            onPointerUp={
                endDrag
            }

            onRotate={
                rotate
            }

            onReset={
                reset
            }
        />
    );
}