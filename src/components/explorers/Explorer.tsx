import { useId } from 'react';
import { RotateCcw, SlidersHorizontal, Lightbulb, Dices } from 'lucide-react';
import type { ExplorerModel } from '@/types/explorer';
import { Diagram } from './Diagram';
import { MathFormula } from '@/components/ui/Math';
import s from './Explorer.module.scss';
type Props = {
  model: ExplorerModel;
  onChange: (key: string, value: number) => void;
  onReset: () => void;
  onSolve?: () => void;
  onRoll?: () => void;
  rollText?: string;
  compact?: boolean;
};
export function Explorer({
  model: m,
  onChange,
  onReset,
  onSolve,
  onRoll,
  rollText,
  compact = false,
}: Props) {
  const id = useId();
  return (
    <section className={`${s.explorer} ${compact ? s.compact : ''}`} aria-label={m.title}>
      <header className={s.header}>
        <div>
          <span className={s.label}>
            <SlidersHorizontal size={13} /> EXPLORA A IDEIA
          </span>
          <h3>{m.title}</h3>
          <p>{m.prompt}</p>
        </div>
        <button
          type="button"
          className={s.reset}
          onClick={onReset}
          aria-label="Repor valores iniciais"
          title="Repor valores"
        >
          <RotateCcw size={17} />
        </button>
      </header>
      <div className={s.body}>
        <div className={s.visual}>
          <Diagram shapes={m.shapes} description={m.description} />
          <div className={s.metrics}>
            {m.metrics.map((x) => (
              <div key={x.label}>
                <small>{x.label}</small>
                <strong>{x.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className={s.controls}>
          {m.controls.map((c) => (
            <div className={s.control} key={c.key}>
              <label htmlFor={`${id}-${c.key}`}>
                {c.label}
                <output>
                  {Number(m.values[c.key].toFixed(3)).toLocaleString('pt-PT')} {c.unit}
                </output>
              </label>
              <input
                id={`${id}-${c.key}`}
                type="range"
                min={c.min}
                max={c.max}
                step={c.step}
                value={m.values[c.key]}
                onChange={(e) => onChange(c.key, Number(e.target.value))}
              />
              <div className={s.range}>
                <span>
                  {c.min} {c.unit}
                </span>
                <span>
                  {c.max} {c.unit}
                </span>
              </div>
            </div>
          ))}
          {onSolve && (
            <button className="button secondary small" type="button" onClick={onSolve}>
              Mostrar solução
            </button>
          )}
          {onRoll && (
            <button className="button secondary small" type="button" onClick={onRoll}>
              <Dices size={16} /> Lançar os dados
            </button>
          )}
          {rollText && (
            <p role="status" className={s.roll}>
              {rollText}
            </p>
          )}
        </div>
      </div>
      <div className={s.formula}>
        <MathFormula value={m.formula} />
      </div>
      <div className={s.insight}>
        <Lightbulb size={18} />
        <p>{m.insight}</p>
      </div>
    </section>
  );
}
