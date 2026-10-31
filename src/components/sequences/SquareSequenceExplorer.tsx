import { useId } from 'react';
import type { SquareSequenceModel } from '@/services/square-sequence.service';
import { MathFormula } from '@/components/ui/Math';
import s from './SquareSequenceExplorer.module.scss';
type Props = {
  model: SquareSequenceModel; onOrderChange: (value: number) => void;
  onTargetChange: (value: number) => void; onReset: () => void;
};
export function SquareSequenceExplorer({ model, onOrderChange, onTargetChange, onReset }: Props) {
  const id = useId(), { current: c } = model;
  return <div className={s.explorer}>
    <header className={s.header}><div><span className="eyebrow">DESCOBRE A REGULARIDADE</span><h3>Duas cores. Um total fixo.</h3></div><button type="button" onClick={onReset}>Recomeçar</button></header>
    <p>Avança uma figura de cada vez. Compara a posição da figura com a quantidade de quadrados de cada cor.</p>
    <div className={s.body}>
      <figure className={s.figure}>
        <svg viewBox="0 0 320 320" role="img" aria-label={`${c.order}.º termo: ${c.gray} quadrados cinzentos e ${c.white} brancos.`}>
          {model.cells.map((gray, i) => <rect key={i} x={10 + i % 10 * 30} y={10 + Math.floor(i / 10) * 30}
            width="30" height="30" fill={gray ? '#83878c' : '#fff'} stroke="#34443b" strokeWidth="1" />)}
        </svg>
        <figcaption>{c.order}.º termo · 100 quadrados</figcaption>
      </figure>
      <div className={s.controls}>
        <label htmlFor={`${id}-order`}>Ordem do termo <strong>{c.order}</strong></label>
        <input id={`${id}-order`} type="range" min="1" max="51" step="1" value={c.order} onChange={e => onOrderChange(Number(e.target.value))} />
        <div className={s.buttons}><button type="button" disabled={c.order === 1} onClick={() => onOrderChange(c.order - 1)}>← Anterior</button><button type="button" disabled={c.order === 51} onClick={() => onOrderChange(c.order + 1)}>Seguinte →</button></div>
        <dl className={s.metrics} aria-live="polite"><div><dt>Brancos</dt><dd>{c.white}</dd></div><div><dt>Cinzentos</dt><dd>{c.gray}</dd></div><div><dt>Total</dt><dd>100</dd></div></dl>
        <p className={s.sum}>{c.white} brancos + {c.gray} cinzentos = 100</p>
        <label htmlFor={`${id}-target`}>Desafio: procura uma figura com <strong>{model.targetWhite} brancos</strong></label>
        <input id={`${id}-target`} type="range" min="0" max="100" step="1" value={model.targetWhite} onChange={e => onTargetChange(Number(e.target.value))} />
        <p className={model.matches ? s.success : s.prompt} aria-live="polite">{model.matches ? `Encontraste: ${c.order}.º termo! Explica como chegarias aqui sem percorrer todas as figuras.` : `A figura atual tem ${c.white} brancos. Consegues encontrar ${model.targetWhite}? Nem todos os desafios têm solução.`}</p>
      </div>
    </div>
    <details className={s.details} open>
      <summary>Os primeiros dez termos: procura o padrão</summary>
      <p>Cada coluna é uma figura. Clica numa ordem para a observar. As reticências continuam a regra até ao limite da grelha.</p>
      <div className={s.tableWrap}><table><caption>Ordem e quantidades: grandezas diferentes</caption><thead><tr><th scope="col">Ordem</th>{model.firstTen.map(t => <th scope="col" key={t.order}><button type="button" aria-label={`Mostrar o ${t.order}.º termo`} aria-pressed={t.order === c.order} onClick={() => onOrderChange(t.order)}>{t.order}.º</button></th>)}<th scope="col">…</th></tr></thead><tbody>
        <tr><th scope="row">Brancos</th>{model.firstTen.map(t => <td key={t.order}>{t.white}</td>)}<td>…</td></tr>
        <tr><th scope="row">Cinzentos</th>{model.firstTen.map(t => <td key={t.order}>{t.gray}</td>)}<td>…</td></tr>
        <tr><th scope="row">Total</th>{model.firstTen.map(t => <td key={t.order}>100</td>)}<td>…</td></tr>
      </tbody></table></div>
    </details>
    <details className={s.details}>
      <summary>Quantidade, contador ou ordem?</summary>
      <p>No termo atual, a ordem é <strong>{c.order}</strong> e a quantidade de cinzentos é <strong>{c.gray}</strong>. A partir do primeiro termo fizemos <strong>{c.changes}</strong> aumentos.</p>
      {c.counter === null ? <p>O contador k da expressão 2k + 2 começa no segundo termo, com k = 0. O primeiro termo fica fora desta contagem a partir de zero.</p> : <>
        <p>Começando no segundo termo, fizemos k = {c.counter} aumentos. Por isso:</p>
        <MathFormula value={`${c.gray}=2\\cdot ${c.counter}+2\\qquad m=${c.counter}+2=${c.order}`} />
      </>}
    </details>
    <details className={s.details}>
      <summary>Conferir o desafio e ligar à PA</summary>
      <p>Precisamos de 100 − {model.targetWhite} = {model.targetGray} quadrados cinzentos.</p>
      {model.targetOrder === null
        ? <p>Não existe esse termo: {model.targetGray} é ímpar e a sequência dos cinzentos só contém números pares. Uma ordem fracionária não identifica uma figura da sequência.</p>
        : <p>São {model.targetGray / 2} aumentos a partir do primeiro termo. A ordem é {model.targetGray / 2} + 1 = <strong>{model.targetOrder}</strong>.</p>}
      <MathFormula value="c_m=0+2(m-1)\qquad b_m=100-2(m-1)" />
      <p>Na PA dos cinzentos, o primeiro termo é 0 e a razão é 2. O termo de ordem 51 enche a grelha. O 52.º exigiria 102 quadrados cinzentos e já não representa uma figura válida.</p>
    </details>
  </div>;
}
