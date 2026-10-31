'use client';
import { useState } from 'react';
import { SquareSequenceExplorer } from '@/components/sequences/SquareSequenceExplorer';
import { squareSequenceModel, squareTerm } from '@/services/square-sequence.service';
/** A reusable 100-square sequence, gaining two gray squares per term. */
export function SquareSequenceController({ initialOrder = 1, initialTargetWhite = 26 }: {
  initialOrder?: number; initialTargetWhite?: number;
}) {
  const [order, setOrder] = useState(() => squareTerm(initialOrder).order);
  const [targetWhite, setTargetWhite] = useState(() => squareSequenceModel(1, initialTargetWhite).targetWhite);
  return <SquareSequenceExplorer model={squareSequenceModel(order, targetWhite)}
    onOrderChange={value => setOrder(squareTerm(value).order)}
    onTargetChange={setTargetWhite}
    onReset={() => { setOrder(squareTerm(initialOrder).order); setTargetWhite(squareSequenceModel(1, initialTargetWhite).targetWhite); }} />;
}
