'use client';
import { useState } from 'react';
import { PartitionExplorer } from '@/components/partitions/PartitionExplorer';
import { normalizePartition, partitionDefaults, partitionModel, type PartitionKind, type PartitionState } from '@/services/partition.service';
export function PartitionController({kind, initialSize}: {kind: PartitionKind; initialSize?: number}) {
  const start = () => normalizePartition({...partitionDefaults,size:initialSize ?? (kind === 'cube' ? 6 : 8)});
  const [state,setState]=useState<PartitionState>(start);
  return <PartitionExplorer kind={kind} state={state} model={partitionModel(kind,state)}
    onChange={patch=>setState(old=>normalizePartition({...old,...patch}))} onReset={()=>setState(start())} />;
}
