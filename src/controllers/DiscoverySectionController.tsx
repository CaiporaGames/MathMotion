'use client';
import { useId, useState, type ReactNode } from 'react';
import type { CombinatoricsLabId } from '@/types/discovery';
import { CombinatoricsLabController } from './CombinatoricsLabController';
import s from '@/components/discoveries/DiscoveryArticle.module.scss';
export function DiscoverySectionController({ lab, children }: { lab: CombinatoricsLabId; children: ReactNode }) {
  const [tried, setTried] = useState(false);
  const [open, setOpen] = useState(false);
  const regionId = useId();
  return <>
    <CombinatoricsLabController lab={lab} onInteract={() => setTried(true)} />
    <div className={s.reveal}>
      <button type="button" className="button" disabled={!tried} aria-expanded={open} aria-controls={regionId} onClick={() => setOpen(value => !value)}>{open ? 'Fechar a leitura da descoberta' : 'Já experimentei. O que descobrimos?'}</button>
      {!tried && <p>Seleciona uma célula ou altera uma opção para começar. Depois, compara a tua ideia com a descoberta.</p>}
      <div id={regionId} hidden={!open} className={s.conclusion}>{children}</div>
    </div>
  </>;
}
