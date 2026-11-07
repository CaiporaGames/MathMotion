import Link from 'next/link';
import { Orbit, ArrowUpRight } from 'lucide-react';
import s from './Footer.module.scss';
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.row}`}>
        <div>
          <Link href="/" className={s.brand}>
            <Orbit size={22} /> mathmotion
          </Link>
          <p>Menos decorar. Mais descobrir.</p>
        </div>
        <div className={s.links}>
          <Link href="/aulas/">Aulas</Link>
          <Link href="/laboratorio/">Laboratório</Link>
          <Link href="/descobertas/">Descobertas</Link>
          <Link href="/explicacoes/">
            Falar com o Timóteo <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className={`container ${s.bottom}`}>
        <span>Matemática, uma pergunta de cada vez.</span>
        <Link href="/privacidade/">Privacidade</Link>
        <Link href="/admin/">Área do professor</Link>
      </div>
    </footer>
  );
}
