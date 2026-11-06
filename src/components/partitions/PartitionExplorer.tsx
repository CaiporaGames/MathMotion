import { useId } from 'react';
import { MathFormula } from '@/components/ui/Math';
import { partitionColors, type PartitionKind, type PartitionState, type PartitionModel } from '@/services/partition.service';
import s from './PartitionExplorer.module.scss';
type Props={kind:PartitionKind;state:PartitionState;model:PartitionModel;onChange:(patch:Partial<PartitionState>)=>void;onReset:()=>void};
export function PartitionExplorer({kind,state,model,onChange,onReset}:Props){
  const id=useId();
  function slider(key:'size'|'height'|'offset'|'angle'|'spread',label:string,min:number,max:number,step=1){return <div className={s.control}><label htmlFor={`${id}-${key}`}>{label} <strong>{state[key]}</strong></label><input id={`${id}-${key}`} type="range" min={min} max={max} step={step} value={state[key]} onChange={e=>onChange({[key]:Number(e.target.value)})}/></div>;}
  return <div className={s.explorer}>
    <header><span className="eyebrow">RECONSTRÓI A FÓRMULA</span><button type="button" onClick={onReset}>Recomeçar</button></header>
    <h3>{model.title}</h3>
    <div className={s.tabs}><button type="button" aria-pressed={!state.general} onClick={()=>onChange({general:false})}>{kind==='square'?'Quadrado dividido':'Cubo dividido'}</button><button type="button" aria-pressed={state.general} onClick={()=>onChange({general:true})}>{kind==='square'?'Triângulo geral':'Pirâmide independente'}</button></div>
    <div className={s.body}><div>
      <svg viewBox="0 0 420 350" role="img" aria-label={`${model.title}. ${model.metrics.map(x=>x.label+': '+x.value).join('. ')}`}>
        {model.polygons.map((p,i)=><polygon key={i} points={p.points} fill={p.fill} fillOpacity={p.opacity} stroke="#34483e" strokeWidth="1" strokeOpacity="0.55"/>)}
        {model.segments.map((l,i)=><line key={i} x1={l.from[0]} y1={l.from[1]} x2={l.to[0]} y2={l.to[1]} stroke="#172f25" strokeWidth="2" strokeDasharray={l.dashed?'5 4':undefined}/>)}
        {model.labels.map((l,i)=><text key={i} x={l.point[0]} y={l.point[1]} textAnchor="middle" fontSize="12" fill="#172f25" stroke="white" strokeWidth="3" paintOrder="stroke">{l.text}</text>)}
      </svg>
    </div><div>
      {slider('size',kind==='square'?'Base / lado (cm)':'Lado da base (cm)',2,12)}
      {state.general ? slider('height','Altura perpendicular (cm)',1,12):<p>Altura vinculada ao centro: <strong>h = a/2 = {state.size/2} cm</strong>.</p>}
      {kind==='square'&&state.general&&slider('offset','Posição lateral do vértice (%)',-30,130,5)}
      {kind==='cube'&&slider('angle','Rodar vista (graus)',0,360,5)}
      {kind==='cube'&&!state.general&&slider('spread','Separar peças',0,1,0.05)}
      {!state.general&&<div className={s.pieces} aria-label="Selecionar uma peça">{Array.from({length:kind==='square'?4:6},(_,i)=><button type="button" key={i} aria-pressed={state.selected%(kind==='square'?4:6)===i} onClick={()=>onChange({selected:i})}><span style={{background:partitionColors[i]}}/>{i+1}</button>)}</div>}
    </div></div>
    <dl className={s.metrics} aria-live="polite">{model.metrics.map(x=><div key={x.label}><dt>{x.label}</dt><dd>{x.value}</dd></div>)}</dl>
    <div className={s.formula}><MathFormula value={model.formula}/></div><p className={s.note}>{model.note}</p>
  </div>;
}
