# Arquitetura

## Fluxo principal

**Página → controlador → serviço → modelo → componente de apresentação**

A vista dispara callbacks; não consulta o Firestore nem calcula as regras matemáticas. Componentes podem usar `useId` para acessibilidade, mas os estados de negócio e efeitos ficam nos controladores.

| Pasta             | Responsabilidade                                                      |
| ----------------- | --------------------------------------------------------------------- |
| `src/app`         | Rotas App Router, metadados e composição de páginas                   |
| `src/components`  | Vistas e adaptadores reutilizáveis                                    |
| `src/controllers` | Estado, eventos, validação de fluxo e ligação entre serviços e vistas |
| `src/services`    | Conteúdo, cálculos, validações e operações Firebase                   |
| `src/lib`         | Inicialização/configuração Firebase                                   |
| `src/data`        | Aulas JSON e configuração editorial                                   |
| `src/stores`      | Progresso local em Zustand                                            |
| `src/types`       | Contratos TypeScript                                                  |
| `src/styles`      | Tokens e regras globais                                               |
| `public/images`   | Ilustrações SVG                                                       |
| `tests`           | Propriedades matemáticas, validação e regras de acesso                |

SCSS Modules mantêm os estilos isolados. Cada página tem `page.module.scss`; componentes visuais têm o seu módulo. Os ícones e o adaptador KaTeX usam os estilos do contexto/da biblioteca.

## Separação dos dados

- **Conteúdo público**: JSON compilado nas páginas. Sem consultas à base de dados para ler aulas.
- **Progresso**: Zustand + localStorage, apenas slugs concluídos. Não contém nomes/emails.
- **Perguntas/pedidos**: Firestore `submissions`, acessível para leitura só por administradores.
- **Permissões**: coleção `admins`, escrita apenas fora da aplicação pelo responsável.
- **Intervalo de envios**: `submissionLimits/uid`, ligado à transação da submissão.

O Firebase é iniciado no navegador quando necessário. O SDK de submissão é carregado dinamicamente ao enviar o formulário. Não há inicialização de sessão anónima durante uma simples visita às aulas.

## Exportação estática

`next.config.ts` usa `output: 'export'` e `trailingSlash: true`. `generateStaticParams` cria as páginas de aulas e ferramentas. Firebase Hosting serve `out/` diretamente.

Não há API Routes, Server Actions, SSR em produção, middleware de autenticação ou otimização de imagens num servidor. A segurança do painel está no Firestore, não em esconder a rota ou confiar numa flag de React.

## Funcionalidades deliberadamente manuais

- Publicar uma aula: alterar JSON, fazer build e deploy.
- Responder a um aluno: email externo ao site.
- Marcar uma live: editar `site.ts`.
- Criar professor: Firebase Console.
- Rever e apagar pedidos antigos: painel/Console.

Isto mantém a arquitetura pequena e evita dependências de serviços pagos para email ou processamento no servidor.
