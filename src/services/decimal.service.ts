export type DivisionRow = { before: number; digit: number; after: number };
export type DecimalModel = {
  integer: number; prefix: string; period: string; rows: DivisionRow[];
  repeatAt: number | null; negative: boolean;
};
// Integer arithmetic: repetition is detected from remainders, not rounded decimals.
export function divideExactly(numerator: number, denominator: number): DecimalModel {
  if (!Number.isSafeInteger(numerator) || !Number.isSafeInteger(denominator)
    || Math.abs(numerator) > 10000 || denominator < 1 || denominator > 200) {
    throw new Error('Usa inteiros: numerador entre −10000 e 10000 e denominador entre 1 e 200.');
  }
  const n = Math.abs(numerator), rows: DivisionRow[] = [], seen = new Map<number, number>();
  let remainder = n % denominator;
  while (remainder !== 0 && !seen.has(remainder)) {
    seen.set(remainder, rows.length);
    const before = remainder, digit = Math.floor(before * 10 / denominator);
    remainder = before * 10 % denominator;
    rows.push({ before, digit, after: remainder });
  }
  const repeatAt = remainder === 0 ? null : seen.get(remainder)!;
  const digits = rows.map(row => row.digit).join('');
  return {
    integer: Math.floor(n / denominator), negative: numerator < 0,
    prefix: repeatAt === null ? digits : digits.slice(0, repeatAt),
    period: repeatAt === null ? '' : digits.slice(repeatAt), rows, repeatAt,
  };
}
export function ninesModel(count: number) {
  const n = Math.min(10, Math.max(1, Math.round(count)));
  return { n, decimal: '0,' + '9'.repeat(n), gap: '0,' + '0'.repeat(n - 1) + '1' };
}
