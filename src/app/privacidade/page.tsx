import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/data/site';
import s from './page.module.scss';
export const metadata: Metadata = { title: 'Privacidade' };
export default function Page() {
  return (
    <div className={`container bodyCopy ${s.page}`}>
      <div className="pageIntro">
        <span className="eyebrow">OS TEUS DADOS</span>
        <h1>Privacidade, com clareza.</h1>
        <p>Informação sobre o funcionamento dos formulários e o progresso das aulas.</p>
      </div>
      <h2>Quem recebe a mensagem</h2>
      <p>
        As mensagens são destinadas a {site.tutor}, responsável por este site. Não são publicadas
        nas aulas nem partilhadas com outros alunos.
      </p>
      <h2>Dados pedidos</h2>
      <p>
        Nas perguntas, recolhemos a mensagem, a aula e o passo a que se refere, e o nome e email se
        os indicares. Nos pedidos de explicação, recolhemos o nome, email, nível, tema, modalidade,
        disponibilidade, mensagem e telefone opcional. Guardamos também a data, o estado do pedido e
        um identificador técnico usado para controlar os envios.
      </p>
      <h2>Finalidade e armazenamento</h2>
      <p>
        Os dados servem para responder à tua pergunta ou combinar explicações. Os formulários
        utilizam Firebase Authentication e Cloud Firestore, serviços da Google. Não são usados neste
        projeto para publicidade ou listas de marketing.
      </p>
      <h2>Tempo de conservação</h2>
      <p>
        O responsável deve rever os pedidos regularmente e eliminar as mensagens quando deixarem de
        ser necessárias. Podes solicitar a eliminação da tua mensagem pelo contacto abaixo.
      </p>
      <h2>Progresso neste dispositivo</h2>
      <p>
        Ao marcar uma aula como concluída, esse estado fica no armazenamento local do navegador. Não
        é enviado para o professor. Para o apagar, limpa os dados deste site no navegador. O
        formulário utiliza uma sessão técnica para permitir o envio sem criar uma conta de aluno.
      </p>
      <h2>Proteção dos formulários</h2>
      <p>
        Se a proteção App Check com reCAPTCHA estiver ativa, o serviço da Google poderá processar
        informação técnica do navegador para ajudar a detetar utilização abusiva. O site não inclui
        ferramentas de análise de visitas nesta versão.
      </p>
      <h2>Alunos menores</h2>
      <p>
        Os pedidos de explicação para menores devem ser enviados pelo responsável, com os seus
        próprios contactos. Não envies documentos de identificação ou outros dados sensíveis.
      </p>
      <h2>Contacto e pedidos sobre os dados</h2>
      {site.email ? (
        <p>
          Escreve para{' '}
          <a className="textLink" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : (
        <p>
          Podes usar o{' '}
          <Link className="textLink" href="/explicacoes/">
            formulário de contacto
          </Link>{' '}
          para pedir informação ou a eliminação de uma mensagem, identificando o email usado no
          envio.
        </p>
      )}
    </div>
  );
}
