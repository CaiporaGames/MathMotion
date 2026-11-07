export type TrapezoidState = { small: number; extra: number; height: number; stage: number; separation: number };
export const trapezoidDefaults: TrapezoidState = { small: 12, extra: 8, height: 6, stage: 2, separation: 0 };
export function normalizeTrapezoid(s: TrapezoidState): TrapezoidState {
  const n=(x:number,min:number,max:number,fallback:number)=>Number.isFinite(x)?Math.max(min,Math.min(max,x)):fallback;
  return {small:n(s.small,2,20,12),extra:n(s.extra,0,16,8),height:n(s.height,1,12,6),stage:Math.round(n(s.stage,0,2,2)),separation:n(s.separation,0,1,0)};
}
export function trapezoidModel(input:TrapezoidState){
  const s=normalizeTrapezoid(input), big=s.small+s.extra;
  const scale=Math.min(14,350/big,165/s.height), left=45, bottom=230, top=bottom-s.height*scale;
  const split=left+s.small*scale, right=left+big*scale, gap=s.separation*42;
  const rectArea=s.small*s.height, triArea=s.extra*s.height/2;
  return {s,big,left,bottom,top,split,right,gap,rectArea,triArea,total:rectArea+triArea,
    rectangle:`${left},${bottom} ${split},${bottom} ${split},${top} ${left},${top}`,
    triangle:`${split+gap},${bottom} ${right+gap},${bottom} ${split+gap},${top}`,
    missing:`${split+gap},${top} ${right+gap},${top} ${right+gap},${bottom}`,
    formula:s.stage===0?`A_R=bh=${s.small}\\cdot${s.height}=${rectArea}`:s.stage===1?`A_T=\\frac{dh}{2}=\\frac{${s.extra}\\cdot${s.height}}2=${triArea}`:`A=bh+\\frac{(B-b)h}{2}=\\frac{(B+b)h}{2}=${rectArea+triArea}`,
  };
}
export type TrapezoidModel=ReturnType<typeof trapezoidModel>;
