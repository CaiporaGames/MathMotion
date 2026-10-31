# MathMotion — Matemática com Timóteo

Um projeto Next.js + React + TypeScript para aulas investigativas, experiências visuais e pedidos de explicações. Interface em português, adaptada a telemóvel. O código é entregue para usar e modificar no teu computador e publicar na tua conta Firebase.

## Deploy when you are ready

From the project folder:

```bash
npm ci
npm run build
npx firebase-tools login
npx firebase-tools use --add
npx firebase-tools deploy --only hosting
```

4. Abre `http://localhost:3000`.

Sem Firebase, as aulas, as imagens, as treze ferramentas, a pesquisa e o progresso local funcionam. Os formulários ficam desativados com uma mensagem explícita: não simulam um envio bem-sucedido. Não há dados fictícios no painel.

## O que vem pronto

- Página inicial, catálogo de aulas, laboratório, página de explicações, privacidade e painel `/admin/`.
- Duas aulas completas: jardim de maior área e percentagens sucessivas.
- Duas ilustrações SVG locais, editáveis e leves, sem downloads de imagens em tempo de execução.
- Pistas progressivas, passos com fórmulas KaTeX, exercícios com respostas recolhidas e progresso local.
- Treze experiências SVG com sliders: área, volume, frações, razões, percentagens, equações, funções, dados, Pitágoras, movimento uniforme, reta numérica, trigonometria e derivadas.
- Formulários de dúvidas e de pedidos de aulas; associação automática à aula e ao passo.
- Painel com autenticação, leitura paginada, filtro por estado, alteração de estado, email manual e eliminação confirmada.
- Regras Firestore: dados privados, validação do esquema, criação atómica e intervalo mínimo de 60 segundos por UID.
- Configuração para Firebase Hosting estático. Sem servidor Next.js, Functions, Storage, App Hosting ou ligação a pagamentos.

## Guias

- [Configurar e publicar no Firebase](docs/FIREBASE.md)
- [Adicionar aulas, imagens e lives](docs/CONTEUDO.md)
- [Reutilizar as experiências](docs/COMPONENTES.md)
- [Arquitetura e responsabilidades](docs/ARQUITETURA.md)
- [Verificação e limitações](docs/VERIFICACAO.md)

## Comandos

| Comando                     | Função                                                      |
| --------------------------- | ----------------------------------------------------------- |
| `npm run dev`               | Desenvolvimento local                                       |
| `npm run build`             | Gera o site estático em `out/`                              |
| `npm run typecheck`         | Verifica TypeScript                                         |
| `npm test`                  | Verifica cálculos e validação dos formulários               |
| `npm run firebase -- login` | Liga a ferramenta Firebase à tua conta                      |
| `npm run deploy`            | Faz build e publica Hosting e regras no projeto selecionado |
| `npm run test:rules`        | Testa regras num emulador local; requer Java 21+            |

Não uses `next start`: este projeto usa exportação estática. Para testar a versão final localmente, faz `npm run build` e `npm run firebase -- emulators:start --only hosting`.

## Personalização rápida

- Nome, biografia, contacto e próxima live: `src/data/site.ts`.
- Aulas: `src/data/lessons.json`.
- Cores: `src/styles/_tokens.scss`.
- Estilos por página: `src/app/**/page.module.scss`.
- Estilos por componente: ficheiros `.module.scss` junto aos componentes.

A identidade MathMotion é editável. Este é um projeto independente: não altera automaticamente o teu site MathMotion anterior nem a configuração desse Firebase.

## Escopo desta versão

Os anos indicados são sugestões pedagógicas editáveis, não um mapeamento oficial de todo o currículo. São treze componentes de base reutilizáveis, não cursos completos de todas as disciplinas e anos. Novas aulas, modelos e áreas podem ser adicionados sem reescrever a interface.

O Firebase precisa de ser configurado por ti: não foram criadas contas, bases de dados ou publicações externas. Não há email automático, reserva de horários, upload de documentos, conta de aluno ou sincronização do progresso entre dispositivos. O botão de email do painel abre o teu programa de email.
