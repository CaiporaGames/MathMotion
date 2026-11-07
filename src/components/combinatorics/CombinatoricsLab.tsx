import type { LabModel, LabControl, LabCell } from '@/types/combinatorics';
import { cellLabels } from '@/services/combinatorics.service';
import s from './CombinatoricsLab.module.scss';
interface Props {
  model: LabModel; selectedN: number; selectedR: number; showPascal: boolean; canReveal: boolean;
  onControl: (key: LabControl['key'], value: string) => void;
  onCell: (cell: LabCell) => void; onBit: (index: number) => void;
  onPascal: (n: number, r: number) => void; onRevealPascal: () => void;
}
export function CombinatoricsLab({ model: m, selectedN, selectedR, showPascal, canReveal, onControl, onCell, onBit, onPascal, onRevealPascal }: Props) {
  return <div className={s.lab}>
    <div className={s.labHeading}><span>EXPERIMENTA</span><span>Laboratório {String(m.id).padStart(2, '0')}</span></div>
    <p>{m.context}</p>
    <div className={s.controls}>{m.controls.map(c => <label key={c.key}>{c.label}
      <select value={c.value} onChange={e => onControl(c.key, e.target.value)}>{c.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
    </label>)}</div>
    <div className={m.id === 9 ? s.planes : ''}>{m.grids.map(g => <div className={s.plane} key={g.title}>
      <h4>{g.title}</h4><div className={s.scroll} role="region" aria-label={g.title} tabIndex={0}>
        <table className={s.matrix}><caption className="srOnly">{g.title}. Linhas e colunas identificam as coordenadas livres.</caption>
          <thead><tr><th scope="col">↓ / →</th>{g.cols.map(c => <th scope="col" key={c}>{c}</th>)}</tr></thead>
          <tbody>{g.rows.map((row, ri) => <tr key={row}><th scope="row">{row}</th>{g.cols.map((col, ci) => {
            const c = g.cells[ri * g.cols.length + ci];
            return <td key={col}><button type="button" className={`${s.cell} ${s[c.kind]} ${c.highlighted ? s.highlighted : ''}`} onClick={() => onCell(c)} aria-pressed={c.highlighted} aria-label={`${c.label}: ${c.detail ?? ''} ${cellLabels[c.kind]}`}>
              <span>{c.label}</span>{c.detail && <small>{c.detail}</small>}<small>{cellLabels[c.kind]}</small>
            </button></td>;
          })}</tr>)}</tbody>
        </table>
      </div>
    </div>)}</div>
    {m.factors && <div><h4>Escolhas sucessivas, posição a posição</h4><div className={s.pills}>{m.factors.map((v, i) => <span className={s.factor} key={i}><small>Posição {i + 1}</small><strong>{v}</strong> opções</span>)}</div>
      <p>{m.factors.length ? m.factors.join(' × ') : 'Produto sem fatores: 1'}</p>
      <h4>Uma escolha fixa, diferentes sequências</h4><div className={s.pills}>{m.permutations?.map((p, i) => <span className={s.word} key={i}>({p.join(', ')})</span>)}</div>
    </div>}
    {m.bits && <div className={s.bits}>{m.bits.map((bit, i) => <button type="button" key={bit.label} aria-pressed={Boolean(bit.value)} aria-label={`${bit.label}: ${bit.value ? 'incluído, clicar para excluir' : 'excluído, clicar para incluir'}`} className={bit.value ? s.included : ''} onClick={() => onBit(i)}><span>{bit.label}</span><strong>{bit.value}</strong><small>{bit.value ? 'incluído' : 'excluído'}</small></button>)}</div>}
    {m.binaryGroups && <div className={s.planes}>{m.binaryGroups.map(g => <div className={s.plane} key={g.title}><h4>{g.title}</h4><div className={s.pills}>{g.words.length ? g.words.map(w => <span className={s.word} key={w}>{w}</span>) : <p>Nenhuma palavra aceite.</p>}</div></div>)}</div>}
    <div className={s.stats} aria-live="polite" aria-atomic="true">{m.stats.map(st => <div key={st.label}><strong>{st.value}</strong><span>{st.label}</span></div>)}</div>
    {m.selection && <p className={s.selection} role="status">{m.selection}</p>}
    <p className={s.note}>{m.note}</p>
    {m.pascal && <div className={s.pascalPanel}>
      <button type="button" className="button secondary" disabled={!canReveal} onClick={onRevealPascal} aria-expanded={showPascal}>{showPascal ? 'Fechar a tabela de contagens' : 'Já explorei as camadas: organizar as contagens'}</button>
      {!canReveal && <p className={s.note}>Muda uma opção ou seleciona uma palavra para começar.</p>}
      {showPascal && <><h4>Que desenho aparece ao organizar as contagens?</h4><p>Escolhe uma célula. Os termos da linha anterior correspondem às duas camadas que acabámos de separar.</p>
        <div className={s.scroll} role="region" aria-label="Triângulo de contagens selecionável" tabIndex={0}><div className={s.pascal}>
          {m.pascal.map((row, n) => <div key={n} className={s.pascalRow}><span className={s.rowLabel}>n = {n}</span><div>{row.map((v, r) => {
            const chosen = n === selectedN && r === selectedR;
            const parent = n === selectedN - 1 && (r === selectedR || r === selectedR - 1);
            return <button key={r} type="button" aria-pressed={chosen} aria-label={`T(${n}, ${r}) = ${v}${parent ? ', termo da camada anterior' : ''}`} className={chosen ? s.chosen : parent ? s.parent : ''} onClick={() => onPascal(n, r)}>{v}{parent && <small>camada</small>}</button>;
          })}</div><span className={s.rowSum}>soma {row.reduce((a, b) => a + b, 0)}</span></div>)}
        </div></div>
        <p className={s.note}>Verde: contagem escolhida. Amarelo e rótulo «camada»: termos anteriores. Nas bordas, o termo que está fora da tabela vale zero; na origem há uma palavra vazia.</p>
      </>}
    </div>}
  </div>;
}
