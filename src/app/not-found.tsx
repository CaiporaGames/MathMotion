import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container section">
      <span className="eyebrow">404 · Caminho por descobrir</span>
      <h1>Esta página não está aqui.</h1>
      <p>Continua a explorar um problema ou uma experiência.</p>
      <Link className="button" href="/aulas/">
        Ver aulas
      </Link>
    </div>
  );
}
