import type {
    GeometryPoint,
    PlankState,
} from "../types/geometry.types";

export class GeometryService {

    static movePlank(
        plank: PlankState,
        center: GeometryPoint,
        boardWidth: number,
        boardHeight: number,
    ): PlankState {

        return {
            ...plank,

            center: {
                x: this.clamp(
                    center.x,
                    0,
                    boardWidth
                ),

                y: this.clamp(
                    center.y,
                    0,
                    boardHeight
                ),
            },
        };
    }

    static rotatePlank(
        plank: PlankState,
        deltaAngle: number,
    ): PlankState {

        return {
            ...plank,

            angle:
                this.normalizeAngle(
                    plank.angle +
                    deltaAngle
                ),
        };
    }

    static getPlankEndpoints(
        plank: PlankState,
    ): {
        start: GeometryPoint;
        end: GeometryPoint;
    } {

        const radians =
            plank.angle *
            Math.PI /
            180;

        const halfLength =
            plank.length / 2;

        const dx =
            Math.cos(radians) *
            halfLength;

        const dy =
            Math.sin(radians) *
            halfLength;

        return {
            start: {
                x:
                    plank.center.x -
                    dx,

                y:
                    plank.center.y -
                    dy,
            },

            end: {
                x:
                    plank.center.x +
                    dx,

                y:
                    plank.center.y +
                    dy,
            },
        };
    }

    static distance(
        a: GeometryPoint,
        b: GeometryPoint,
    ): number {

        const dx =
            b.x - a.x;

        const dy =
            b.y - a.y;

        return Math.sqrt(
            dx * dx +
            dy * dy
        );
    }

    private static normalizeAngle(
        angle: number
    ): number {

        let result =
            angle % 360;

        if (result < 0) {
            result += 360;
        }

        return result;
    }

    private static clamp(
        value: number,
        minimum: number,
        maximum: number,
    ): number {

        return Math.max(
            minimum,
            Math.min(
                maximum,
                value
            )
        );
    }
}