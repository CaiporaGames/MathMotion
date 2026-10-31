'use client';
import { useState } from 'react';
import { DecimalExplorer } from '@/components/decimals/DecimalExplorer';
import { divideExactly, ninesModel } from '@/services/decimal.service';
const examples = [
  { label: '1/3', numerator: 1, denominator: 3 },
  { label: '1/6', numerator: 1, denominator: 6 },
  { label: '1/8', numerator: 1, denominator: 8 },
  { label: '−7/51 · opção A', numerator: -7, denominator: 51 },
];
export function DecimalExplorerController({ initialExample = 0, initialNines = 2 }: {
  initialExample?: number; initialNines?: number;
}) {
  const [selected, setSelected] = useState(Math.max(0, Math.min(3, Math.round(initialExample) || 0)));
  const [count, setCount] = useState(Math.max(1, Math.min(10, Math.round(initialNines) || 1)));
  const example = examples[selected];
  return <DecimalExplorer examples={examples} selected={selected} onSelect={setSelected}
    model={divideExactly(example.numerator, example.denominator)} denominator={example.denominator}
    nines={ninesModel(count)} onNinesChange={setCount} />;
}
