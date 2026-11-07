'use client';
import { useState } from 'react';
import type { CombinatoricsLabId } from '@/types/discovery';
import type { LabState, LabControl, LabCell } from '@/types/combinatorics';
import { initialLabState, normalizeLabState, getCombinatoricsModel } from '@/services/combinatorics.service';
import { CombinatoricsLab } from '@/components/combinatorics/CombinatoricsLab';
export function CombinatoricsLabController({ lab, initial, onInteract }: { lab: CombinatoricsLabId; initial?: Partial<LabState>; onInteract?: () => void }) {
  const [state, setState] = useState(() => initialLabState(lab, initial));
  const [touched, setTouched] = useState(false);
  const [showPascal, setShowPascal] = useState(false);
  function update(patch: Partial<LabState>) {
    setState(previous => normalizeLabState(lab, { ...previous, ...patch }));
    setTouched(true); onInteract?.();
  }
  function control(key: LabControl['key'], value: string) {
    const parsed = ['n', 'r', 'layer', 'preset'].includes(key) ? Number(value) : value;
    update({ [key]: parsed, ...(key === 'mode' || key === 'preset' ? { selected: [], layer: 0 } : {}) });
  }
  function select(cell: LabCell) {
    update({ selected: cell.coordinates, ...(lab === 1 || lab === 2 ? { row: cell.coordinates[0] } : {}) });
  }
  return <CombinatoricsLab model={getCombinatoricsModel(lab, state)} selectedN={state.n} selectedR={state.r} showPascal={showPascal} canReveal={touched}
    onControl={control} onCell={select} onBit={i => update({ bits: state.bits.map((bit, j) => i === j ? 1 - bit : bit) })}
    onPascal={(n, r) => update({ n, r })} onRevealPascal={() => setShowPascal(value => !value)} />;
}
