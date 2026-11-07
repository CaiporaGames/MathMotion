import { useId } from 'react';
import { MathFormula } from '@/components/ui/Math';
import type { TrapezoidModel, TrapezoidState } from '@/services/trapezoid.service';
import styles from './TrapezoidExplorer.module.scss';
type Props={model:TrapezoidModel;onChange:(patch:Partial<TrapezoidState>)=>void;onPreset:(preset:'garden'|'square')=>void};
export function TrapezoidExplorer({model:m,onChange,onPreset}:Props){
  const id=useId();
  function slider(key:'small'|'extra'|'height'|'separation',label:string,min:number,max:number,step=1){return <div className={styles.control}><label htmlFor={`${id}-${key}`}>{label}<strong>{m.s[key]}</strong></label><input id={`${id}-${key}`} type="range" min={min} max={max} step={step} value={m.s[key]} onChange={e=>onChange({[key]:Number(e.target.value)})}/></div>;}
  return <div className={styles.explorer}>
    <span className="eyebrow">CONSTRÓI ANTES DE CALCULAR</span><h3>Uma soma de áreas.</h3>
    <div className={styles.buttons}><button type="button" onClick={()=>onPreset('square')}>Começar pelo quadrado</button><button type="button" onClick={()=>onPreset('garden')}>Medidas da horta</button></div>
    <div className={styles.buttons} aria-label="Etapas da descoberta">{['1 · Retângulo','2 · Metade de outro retângulo','3 · Juntar as áreas'].map((name,i)=><button key={name} type="button" aria-pressed={m.s.stage===i} onClick={()=>onChange({stage:i})}>{name}</button>)}</div>
    <div className={styles.body}><div><svg viewBox="0 0 500 310" role="img" aria-label={`Decomposição: base menor ${m.s.small}, base maior ${m.big}, altura ${m.s.height} metros. Retângulo com área ${m.rectArea} e triângulo com área ${m.triArea} metros quadrados.`}>
      <polygon points={m.rectangle} fill="#91c5aa" fillOpacity={m.s.stage === 1 ? 0.25 : 0.85} stroke="#254a3b" strokeWidth="2"/>
      {m.s.stage>0&&<polygon points={m.triangle} fill="#d2b9ec" fillOpacity="0.85" stroke="#5e407f" strokeWidth="2"/>}
      {m.s.stage===1&&m.s.extra>0&&<polygon points={m.missing} fill="#d2b9ec" fillOpacity="0.15" stroke="#806493" strokeWidth="1.5" strokeDasharray="6 4"/>}
      <line x1={m.split} x2={m.split} y1={m.top} y2={m.bottom} stroke="#254a3b" strokeDasharray="5 5"/>
      <path d={`M${m.left} ${m.bottom-12} h12 v12`} fill="none" stroke="#254a3b"/>
      <g fontSize="13" fill="#223d30" textAnchor="middle" stroke="white" strokeWidth="3" paintOrder="stroke">
        <text x={(m.left+m.split)/2} y={m.top-15}>b = {m.s.small} m</text><text x={m.left-24} y={(m.top+m.bottom)/2}>h={m.s.height}</text>
        <text x={(m.left+m.split)/2} y={(m.top+m.bottom)/2+7}>{m.rectArea} m²</text>
        {m.s.stage>0&&<><text x={(2*(m.split+m.gap)+m.right+m.gap)/3} y={(2*m.bottom+m.top)/3}>{m.triArea} m²</text><text x={(m.split+m.right)/2+m.gap} y={m.bottom+23}>d={m.s.extra} m</text></>}
        <text x={m.left-8} y={m.bottom+22}>A</text><text x={m.left-8} y={m.top-15}>D</text>
        {m.s.stage>0&&<><text x={m.split+m.gap+9} y={m.top-15}>C</text><text x={m.right+m.gap+12} y={m.bottom+8}>B</text><text x={m.split-6} y={m.bottom+23}>E</text></>}
        <text x={250} y={292}>{m.s.stage===2?`Base maior B = b + d = ${m.big} m`:m.s.stage===1?'A diagonal cria duas metades iguais.':'Quando b = h, este retângulo é um quadrado.'}</text>
      </g>
    </svg></div><div>
      {slider('small','Base menor b (m)',2,20)}{slider('extra','Parte acrescentada d = B − b (m)',0,16)}{slider('height','Altura h (m)',1,12)}
      {m.s.stage>0&&slider('separation','Separar peças (apenas visual)',0,1,.05)}
      <p>Base maior calculada: <strong>B = {m.big} m</strong>. Ao separar as peças, o espaço entre elas não entra na área nem na base.</p>
    </div></div>
    <dl className={styles.metrics} aria-live="polite"><div><dt>Retângulo</dt><dd>{m.rectArea} m²</dd></div><div><dt>Triângulo</dt><dd>{m.triArea} m²</dd></div><div><dt>União das peças</dt><dd>{m.total} m²</dd></div></dl>
    <div className={styles.formula}><MathFormula value={m.formula}/></div>
    <p className={styles.note}>{m.s.extra===0?'A parte triangular tem largura zero: resta um retângulo. É o caso limite da construção.':m.s.stage===1?'A metade clara e tracejada completa o segundo retângulo, mas não pertence ao trapézio. Ao avançar para a etapa 3, guardamos apenas a metade inferior.':m.s.stage===0?'Muda a largura e a altura separadamente para passar do quadrado ao retângulo. As métricas antecipam as duas peças que vamos juntar.':'O retângulo tem base b. O triângulo tem base B − b. Somar as duas áreas produz (B + b)h/2.'}</p>
  </div>;
}
