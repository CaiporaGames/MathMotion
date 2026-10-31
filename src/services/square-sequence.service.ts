export type SquareTerm = { order: number; gray: number; white: number; changes: number; counter: number | null };
export type SquareSequenceModel = {
  current: SquareTerm; firstTen: SquareTerm[]; cells: boolean[];
  targetWhite: number; targetGray: number; targetOrder: number | null; matches: boolean;
};
function boundedInteger(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.max(min, Math.min(max, Math.round(value))) : fallback;
}
export function squareTerm(order: number): SquareTerm {
  const m = boundedInteger(order, 1, 51, 1), gray = 2 * (m - 1);
  return { order: m, gray, white: 100 - gray, changes: m - 1, counter: m >= 2 ? m - 2 : null };
}
export function squareSequenceModel(order: number, targetWhite = 26): SquareSequenceModel {
  const current = squareTerm(order), target = boundedInteger(targetWhite, 0, 100, 26);
  const targetGray = 100 - target;
  return {
    current, targetWhite: target, targetGray,
    targetOrder: targetGray % 2 === 0 ? targetGray / 2 + 1 : null,
    firstTen: Array.from({ length: 10 }, (_, i) => squareTerm(i + 1)),
    cells: Array.from({ length: 100 }, (_, i) => i >= 100 - current.gray),
    matches: current.white === target,
  };
}
