import Link from 'next/link';
import { ArrowUpRight, Orbit } from 'lucide-react';
import s from './Header.module.scss';
export function Header() {
  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <Link className={s.brand} href="/" aria-label="MathMotion, início">
          <Orbit size={29} strokeWidth={2} />
          <span>
            math<span className={s.word}>motion</span>
            <small>COM TIMÓTEO</small>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/aulas/">Aulas</Link>
          <Link href="/laboratorio/">Laboratório</Link>
          <Link className={s.contact} href="/explicacoes/">
            Explicações <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
