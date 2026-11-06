export type PartitionKind = 'square' | 'cube';
export type PartitionState = { size: number; height: number; offset: number; angle: number; spread: number; selected: number; general: boolean };
export type Point = [number, number];
export type PartitionModel = {
  title: string; description: string; polygons: { points: string; fill: string; opacity: number }[];
  segments: { from: Point; to: Point; dashed?: boolean }[];
  labels: { point: Point; text: string }[];
  metrics: { label: string; value: string }[]; formula: string; note: string;
};
export const partitionColors = ['#40916c', '#9c79ca', '#e9a34a', '#438bb6', '#d66a86', '#8c9150'];
export const partitionDefaults: PartitionState = { size: 8, height: 4, offset: 50, angle: 35, spread: 0, selected: 0, general: false };
export function normalizePartition(state: PartitionState): PartitionState {
  const clamp = (v: number, lo: number, hi: number, fallback: number) => Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : fallback;
  return { ...state, size: clamp(state.size, 2, 12, 8), height: clamp(state.height, 1, 12, 4), offset: clamp(state.offset, -30, 130, 50), angle: clamp(state.angle, 0, 360, 35), spread: clamp(state.spread, 0, 1, 0), selected: Math.round(clamp(state.selected, 0, 5, 0)) };
}
export function partitionModel(kind: PartitionKind, input: PartitionState): PartitionModel {
  const v = normalizePartition(input), a = v.size, h = v.general ? v.height : a / 2;
  const fmt = (n: number) => n.toLocaleString('pt-PT', { maximumFractionDigits: 3 });
  const m: PartitionModel = { title: '', description: '', polygons: [], segments: [], labels: [], metrics: [], formula: '', note: '' };
  const polygon = (points: Point[], fill: string, opacity = 1) => m.polygons.push({ points: points.map(p => p.join(',')).join(' '), fill, opacity });
  if (kind === 'square') {
    m.title = v.general ? 'A mesma base. Outra altura.' : 'Quatro triângulos num quadrado';
    m.description = 'A altura é perpendicular à reta da base.';
    if (!v.general) {
      const length = a * 18, left = 210 - length / 2, top = 150 - length / 2;
      const corners: Point[] = [[left,top],[left+length,top],[left+length,top+length],[left,top+length]];
      const center: Point = [210,150];
      for(let i=0;i<4;i++) polygon([corners[i],corners[(i+1)%4],center],partitionColors[i],i === v.selected%4 ? 0.9 : 0.24);
      m.segments.push({from:center,to:[210,top+length],dashed:true});
      m.labels.push({point:[220,150+length/4],text:`h = ${fmt(h)} cm`},{point:[210,top+length+25],text:`a = ${fmt(a)} cm`});
    } else {
      const scale = 16, baseY = 270, left = 100, right = left+a*scale, x=left+a*scale*v.offset/100;
      polygon([[left,baseY],[right,baseY],[x,baseY-h*scale]],partitionColors[0],0.65);
      m.segments.push({from:[Math.min(left,x)-12,baseY],to:[Math.max(right,x)+12,baseY],dashed:true},{from:[x,baseY-h*scale],to:[x,baseY],dashed:true});
      m.labels.push({point:[(left+right)/2,baseY+25],text:`b = ${fmt(a)} cm`},{point:[x+12,baseY-h*scale/2],text:`h = ${fmt(h)} cm`});
    }
    m.metrics = [{label:'Base',value:`${fmt(a)} cm`},{label:'Altura',value:`${fmt(h)} cm`},{label:'Área do triângulo',value:`${fmt(a*h/2)} cm²`}];
    m.formula = v.general ? `A=\\frac{bh}{2}=\\frac{${a}\\cdot ${h}}2` : `A=\\frac{a^2}{4}=\\frac{a(a/2)}2=\\frac{${a*a}}4`;
    m.note = v.general ? 'Desloca o vértice: a área mantém-se se a base e a altura não mudarem. Fora da base, a altura encontra o seu prolongamento.' : `Área do quadrado: ${fmt(a*a)} cm². Cada região ocupa um quarto. Aqui h = a/2; muda de modo para tornar a altura independente.`;
  } else {
    type P3 = [number,number,number];
    const theta=v.angle*Math.PI/180;
    const project=(p:P3):Point=>{const x=p[0]*Math.cos(theta)-p[1]*Math.sin(theta), depth=p[0]*Math.sin(theta)+p[1]*Math.cos(theta);return [210+54*x,170+26*depth-54*p[2]];};
    const depth=(p:P3)=>p[0]*Math.sin(theta)+p[1]*Math.cos(theta)+p[2]*0.2;
    const bases:P3[][]=[[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],[[-1,1,-1],[-1,-1,-1],[-1,-1,1],[-1,1,1]],[[-1,1,-1],[1,1,-1],[1,1,1],[-1,1,1]],[[1,-1,-1],[-1,-1,-1],[-1,-1,1],[1,-1,1]],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],[[-1,1,-1],[1,1,-1],[1,-1,-1],[-1,-1,-1]]];
    const normals:P3[]=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
    if(v.general){
      const s=a/8, base:P3[]=[[-s,-s,-1.2],[s,-s,-1.2],[s,s,-1.2],[-s,s,-1.2]], apex:P3=[0,0,-1.2+h/4];
      polygon(base.map(project),partitionColors[1],0.22);
      for(let i=0;i<4;i++)polygon([base[i],base[(i+1)%4],apex].map(project),partitionColors[1],0.25);
      m.segments.push({from:project(apex),to:project([0,0,-1.2]),dashed:true});
      m.labels.push({point:[310,70],text:`h = ${fmt(h)} cm`},{point:[210,310],text:`base quadrada: lado ${fmt(a)} cm`});
    }else{
      // Each piece is translated rigidly; separation does not change its volume.
      const indices=[0,1,2,3,4,5].sort((i,j)=>depth(normals[i])-depth(normals[j]));
      for(const i of indices){
        const shift=normals[i].map(n=>n*v.spread*1.2) as P3;
        const move=(p:P3):P3=>[p[0]+shift[0],p[1]+shift[1],p[2]+shift[2]];
        const base=bases[i].map(move), apex=move([0,0,0]);
        polygon(base.map(project),partitionColors[i],i===v.selected?0.55:0.08);
        for(let k=0;k<4;k++)polygon([base[k],base[(k+1)%4],apex].map(project),partitionColors[i],i===v.selected?0.25:0.035);
        if(i===v.selected){m.segments.push({from:project(apex),to:project(move(normals[i])),dashed:true});}
      }
      m.labels.push({point:[210,25],text:`Pirâmide ${v.selected+1}: h = a/2 = ${fmt(h)} cm`},{point:[210,325],text:`Cubo de aresta ${fmt(a)} cm · esquema reescalado`});
    }
    m.title = v.general ? 'Uma pirâmide com altura independente' : 'Seis pirâmides. Um cubo.';
    m.description = 'Roda a vista e separa as peças para observar as bases e o vértice comum.';
    m.metrics=[{label:'Área da base',value:`${fmt(a*a)} cm²`},{label:'Altura',value:`${fmt(h)} cm`},{label:'Volume de uma pirâmide',value:`${fmt(a*a*h/3)} cm³`}];
    m.formula=v.general?`V=\\frac{A_bh}{3}=\\frac{${a*a}\\cdot ${h}}3`:`V=\\frac{a^3}{6}=\\frac{a^2(a/2)}3=\\frac{${a*a*a}}6`;
    m.note=v.general?'A base continua quadrada. Para outras formas de base, substitui a² pela área A_b. Valores decimais apresentados podem estar arredondados.':`Volume do cubo: ${fmt(a*a*a)} cm³. São seis peças congruentes. A separação é apenas visual; aproxima as peças para recuperar o cubo. A linha tracejada marca a altura da peça selecionada.`;
  }
  return m;
}
