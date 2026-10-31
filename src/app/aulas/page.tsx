import type { Metadata } from 'next';
import { getLessons } from '@/services/content.service';
import { CatalogController } from '@/controllers/CatalogController';
import s from './page.module.scss';
export const metadata: Metadata = { title: 'Aulas para descobrir' };
export default function Page() {
  return (
    <div className={`container ${s.page}`}>
      <div className="pageIntro">
        <span className="eyebrow">AULAS PARA DESCOBRIR</span>
        <h1>
          Uma pergunta.
          <br />
          Muitas descobertas.
        </h1>
        <p>
          Problemas reais, pistas ao teu ritmo e ideias que ficam contigo. Escolhe por onde começar.
        </p>
      </div>
      <CatalogController lessons={getLessons()} />
    </div>
  );
}
