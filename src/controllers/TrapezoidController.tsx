'use client';
import { useState } from 'react';
import { TrapezoidExplorer } from '@/components/trapezoid/TrapezoidExplorer';
import { normalizeTrapezoid, trapezoidDefaults, trapezoidModel, type TrapezoidState } from '@/services/trapezoid.service';
export function TrapezoidController({initial}: {initial?:Partial<TrapezoidState>}){
  const [state,setState]=useState(()=>normalizeTrapezoid({...trapezoidDefaults,...initial}));
  return <TrapezoidExplorer model={trapezoidModel(state)}
    onChange={patch=>setState(old=>normalizeTrapezoid({...old,...patch}))}
    onPreset={preset=>setState(preset==='garden'?{...trapezoidDefaults}:{small:6,extra:4,height:6,stage:0,separation:0})}/>;
}
