import type { Metadata } from 'next';
import { tools } from '@/services/content.service';
import { LabController } from '@/controllers/LabController';
import s from './page.module.scss';
export const metadata: Metadata = { title: 'Laboratório interativo' };
export default function Page() {
  return (
    <div className={`container ${s.page}`}>
      <div className="pageIntro">
        <span className="eyebrow">MEXE. OBSERVA. PERGUNTA.</span>
        <h1>
          O teu laboratório
          <br />
          de «e se…?»
        </h1>
        <p>
          Treze experiências para tornar as ideias visíveis. Sem cronómetro e sem receio de
          experimentar.
        </p>
      </div>
      <LabController tools={tools} />
    </div>
  );
}
