import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ToolInfo } from '@/types/content';
import { ToolIcon } from '@/components/ui/Icon';
import s from './ToolCard.module.scss';
export function ToolCard({ tool: t }: { tool: ToolInfo }) {
  return (
    <Link href={`/laboratorio/${t.kind}/`} className={s.card}>
      <div className={s.top}>
        <span className={`${s.icon} ${s[t.color]}`}>
          <ToolIcon name={t.icon} />
        </span>
        <ArrowUpRight size={19} />
      </div>
      <h3>{t.title}</h3>
      <p>{t.description}</p>
      <div className={s.meta}>
        <span>{t.subject}</span>
        <span>
          {Math.min(...t.years)}.º–{Math.max(...t.years)}.º ano
        </span>
      </div>
    </Link>
  );
}
