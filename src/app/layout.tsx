import type { Metadata } from 'next';
import '@/styles/globals.scss';
import 'katex/dist/katex.min.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export const metadata: Metadata = {
  title: { default: 'MathMotion · Matemática com Timóteo', template: '%s · MathMotion' },
  description:
    'Aprende matemática a partir de problemas. Aulas passo a passo, experiências interativas e explicações com Timóteo.',
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body>
        <a className="skip" href="#conteudo">
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
