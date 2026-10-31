import type { Metadata } from 'next';
import { AdminController } from '@/controllers/AdminController';
import s from './page.module.scss';
export const metadata: Metadata = {
  title: 'Área do professor',
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <div className={`container ${s.page}`}>
      <div className="pageIntro">
        <span className="eyebrow">ÁREA PRIVADA</span>
        <h1>As conversas começam aqui.</h1>
        <p>Perguntas das aulas e pedidos de explicações.</p>
      </div>
      <AdminController />
    </div>
  );
}
