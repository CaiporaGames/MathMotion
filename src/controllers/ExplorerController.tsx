'use client';
import { useState } from 'react';
import type { ToolKind, ToolConfig } from '@/types/content';
import {
  getExplorerModel,
  initialValues,
  normalizeValues,
  equationSolution,
} from '@/services/explorer.service';
import { Explorer } from '@/components/explorers/Explorer';
export function ExplorerController({
  kind,
  config = {},
  compact = false,
}: {
  kind: ToolKind;
  config?: ToolConfig;
  compact?: boolean;
}) {
  const [values, setValues] = useState(() => initialValues(kind, config));
  const [roll, setRoll] = useState<{ a: number; b: number; total: number; hits: number } | null>(
    null,
  );
  const model = getExplorerModel(kind, values, config);
  function change(key: string, value: number) {
    setValues((v) => normalizeValues(kind, { ...v, [key]: value }, config));
    if (key === 'sum') setRoll(null);
  }
  function reset() {
    setValues(initialValues(kind, config));
    setRoll(null);
  }
  function rollDice() {
    const a = 1 + Math.floor(Math.random() * 6),
      b = 1 + Math.floor(Math.random() * 6);
    setRoll((r) => ({
      a,
      b,
      total: (r?.total || 0) + 1,
      hits: (r?.hits || 0) + Number(a + b === model.values.sum),
    }));
  }
  return (
    <Explorer
      compact={compact}
      model={model}
      onChange={change}
      onReset={reset}
      onSolve={
        kind === 'equation'
          ? () =>
              setValues((v) => ({
                ...v,
                x: equationSolution(model.values.a, model.values.b, model.values.c),
              }))
          : undefined
      }
      onRoll={kind === 'probability' ? rollDice : undefined}
      rollText={
        roll
          ? `${roll.a} + ${roll.b} = ${roll.a + roll.b}. ${roll.hits} acertos em ${roll.total} lançamentos. Uma experiência curta pode diferir da probabilidade teórica.`
          : undefined
      }
    />
  );
}
