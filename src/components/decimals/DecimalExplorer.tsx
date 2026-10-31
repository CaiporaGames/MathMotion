import { useId } from 'react';
import type { DecimalModel } from '@/services/decimal.service';
import s from './DecimalExplorer.module.scss';
type Props = {
  examples: { label: string }[]; selected: number; onSelect: (index: number) => void;
  model: DecimalModel; denominator: number;
  nines: { n: number; decimal: string; gap: string }; onNinesChange: (n: number) => void;
};
export function DecimalExplorer({ examples, selected, onSelect, model, denominator, nines, onNinesChange }: Props) {
  const id = useId();
  return <div className={s.explorer}>
    <span className="eyebrow">LABORATÓRIO DOS DECIMAIS</span>
    <h3>O segredo está no resto.</h3>
    <p>Escolhe uma fração. Segue os restos até aparecer zero ou regressarmos a um resto anterior.</p>
    <div className={s.choices} aria-label="Fração para explorar">
      {examples.map((example, i) => <button type="button" key={example.label}
        aria-pressed={selected === i} onClick={() => onSelect(i)}>{example.label}</button>)}
    </div>
    <div className={s.result} aria-live="polite">
      <strong>{model.negative ? '−' : ''}{model.integer}{(model.prefix || model.period) && ','}{model.prefix}<span className={s.period}>{model.period}</span>{model.period && '…'}</strong>
      <p>{model.period ? `O bloco ${model.period} repete-se sem fim. A barra marca o período.` : 'O resto chegou a zero. Esta expansão termina.'}</p>
    </div>
    <details className={s.details}>
      <summary>Ver a divisão: onde começa o ciclo?</summary>
      <p>Dividimos o valor absoluto. Em cada linha, multiplicamos o resto por 10 e dividimos por {denominator}. O sinal negativo, quando existe, aplica-se ao resultado todo.</p>
      <div className={s.tableWrap}><table><caption>Divisão decimal por restos</caption><thead><tr><th>Passo</th><th>Resto × 10</th><th>Algarismo</th><th>Novo resto</th></tr></thead>
        <tbody>{model.rows.map((row, i) => <tr key={i} className={model.repeatAt === i ? s.cycle : undefined}>
          <td>{i + 1}{model.repeatAt === i && ' · início do período'}</td><td>{row.before} × 10</td><td>{row.digit}</td><td>{row.after}</td>
        </tr>)}</tbody></table></div>
      {model.repeatAt !== null && <p>O último resto é igual ao resto de entrada do passo {model.repeatAt + 1}. A partir daqui, repetem-se os mesmos passos.</p>}
    </details>
    <div className={s.nines}>
      <h3>Quantos noves cabem antes de 1?</h3>
      <label htmlFor={id}>Número finito de noves: <strong>{nines.n}</strong></label>
      <input id={id} type="range" min="1" max="10" step="1" value={nines.n}
        onChange={event => onNinesChange(Number(event.target.value))} />
      <svg viewBox="0 0 600 130" role="img" aria-label={`Em dez posições, ${nines.n} contêm noves. Cada posição acrescentada divide por dez a distância até um.`}>
        {Array.from({ length: 10 }, (_, i) => <g key={i}>
          <rect x={i * 59 + 5} y="12" width="51" height="62" rx="12" fill={i < nines.n ? '#254a3b' : '#e6e1f2'} />
          <text x={i * 59 + 30.5} y="54" textAnchor="middle" fontSize="28" fill={i < nines.n ? '#fff' : '#685e7e'}>{i < nines.n ? '9' : '·'}</text>
          <text x={i * 59 + 30.5} y="102" textAnchor="middle" fontSize="14" fill="#435849">{i + 1}.ª</text>
        </g>)}
      </svg>
      <div className={s.values} aria-live="polite"><div><small>Aproximação finita</small><strong>{nines.decimal}</strong></div><div><small>Distância exata até 1</small><strong>{nines.gap}</strong></div></div>
      <p>Falta 10<sup>−{nines.n}</sup>. Os cartões mostram posições decimais, não uma escala de distâncias. Cada novo nove divide a distância por 10.</p>
      <p className={s.note}><strong>O infinito não é a última posição do slider.</strong> Todas estas aproximações são menores do que 1. A escrita infinita 0,999… representa o limite e é exatamente igual a 1.</p>
    </div>
  </div>;
}
