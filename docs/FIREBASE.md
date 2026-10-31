# Configurar o Firebase e publicar

Este projeto gera HTML/CSS/JavaScript estático. Usa **Firebase Hosting clássico**, Authentication e Cloud Firestore. Não usa Firebase App Hosting (que é outro serviço), Cloud Functions nem Firebase Storage.

## 1. Criar um projeto separado

1. Abre https://console.firebase.google.com/ e cria um projeto para este site.
2. Não precisas de ativar Google Analytics.
3. Mantém o plano sem faturação, Spark, se disponível na tua conta. Confirma no Console as quotas e condições atuais antes de publicar. O projeto foi desenhado para usar serviços que têm quotas gratuitas; não existe promessa de utilização ilimitada.
4. Em definições do projeto, adiciona uma aplicação Web (ícone `</>`).
5. Copia os valores de `firebaseConfig`. Não copies uma chave de serviço Admin SDK.

Recomendação: começa num novo projeto. `firebase deploy` pode substituir o site e as regras do projeto selecionado. Não seleciones LaundryGo ou outro projeto com dados/regras existentes sem preparar essa integração.

## 2. Configuração local

Copia `.env.example` para `.env.local`. No PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Ou no Git Bash:

```bash
cp .env.example .env.local
```

Preenche:

```dotenv
NEXT_PUBLIC_FIREBASE_API_KEY=valor-da-configuracao-web
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=teu-projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=teu-projeto
NEXT_PUBLIC_FIREBASE_APP_ID=valor-da-app-web
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
NEXT_PUBLIC_SITE_URL=https://teu-projeto.web.app
```

Os valores da configuração Web são públicos por natureza. A proteção dos dados está nas regras Firestore, Authentication e, se ativado, App Check. Nunca coloques chaves de serviço, palavras-passe ou segredos em variáveis `NEXT_PUBLIC_`.

Após alterar estas variáveis, reinicia `npm run dev`. Para produção, faz sempre um novo build: são incorporadas nos ficheiros estáticos.

## 3. Ativar os métodos de autenticação

No Console, abre Authentication → Sign-in method e ativa:

- **Anonymous**: permite ao visitante enviar sem preencher um registo. A sessão só é criada quando tenta enviar.
- **Email/Password**: para a tua conta de professor.

Em Settings → Authorized domains, verifica os domínios da publicação. Acrescenta `localhost` se necessário para desenvolvimento. Não existe botão público para criar contas de professor.

## 4. Criar o Cloud Firestore

1. Cria a base de dados **(default)**, em modo produção.
2. Escolhe uma localização adequada antes de confirmar; considera uma região europeia se os teus utilizadores estiverem em Portugal.
3. Não publiques regras de teste que permitam acesso a todos.
4. Usa o ficheiro `firestore.rules` incluído no projeto.

Não precisas de criar `submissions` e `submissionLimits` manualmente: surgem no primeiro envio válido. O ficheiro de índices também está incluído; a listagem atual só precisa do índice simples de `createdAt`.

## 5. Criar a tua conta de professor

1. Authentication → Users → Add user.
2. Cria a conta com o teu email e uma palavra-passe forte.
3. Copia o UID criado.
4. Firestore → Start collection → `admins`.
5. Como ID do documento, coloca **exatamente esse UID**.
6. Adiciona, por exemplo, o campo `role` com o valor de texto `owner`.

O acesso depende da existência de `admins/UID`. Só o Console/Admin SDK deve gerir essa coleção; as regras proíbem escrevê-la a partir do site. Não uses o email como ID e não coloques a palavra-passe em nenhum ficheiro do projeto.

Abre `/admin/` e entra. A página é estática e o endereço é conhecido, mas os dados são protegidos pelas regras no servidor. Uma conta sem o documento de administrador não consegue ler as mensagens, mesmo através do SDK.

## 6. Selecionar o projeto e publicar

A ferramenta de linha de comandos está incluída nas dependências de desenvolvimento; não precisas de instalação global.

```bash
npm run firebase -- login
npm run firebase -- use --add
```

Seleciona o projeto novo e dá-lhe o alias `default`. Isto cria `.firebaserc` com o ID escolhido.

Antes de publicar, confirma o alvo:

```bash
npm run firebase -- use
```

Depois:

```bash
npm run deploy
```

Esse comando faz `npm run build` e publica `out/`, as regras e os índices. Não é necessário executar `firebase init`: os ficheiros já estão preparados. Se o fizeres, não sobrescrevas `firebase.json` ou `firestore.rules`; a pasta pública é **out**, e este site **não** é uma SPA com tudo reescrito para `/index.html`.

O Console/CLI mostra o endereço `https://ID-DO-PROJETO.web.app`. Não precisas de comprar um domínio.

## 7. Confirmar o fluxo real

1. Abre uma aula e envia uma dúvida de teste com um email teu.
2. Verifica que surge “Mensagem recebida”.
3. Abre `/admin/` e confirma que a mensagem aparece.
4. Altera o estado para “Em contacto”.
5. Testa o botão de email (ele apenas abre o teu cliente, não envia por ti).
6. Elimina a mensagem de teste.
7. Testa uma janela anónima: visitar `/admin/` não deve mostrar dados.
8. Testa também o formulário de explicações.

A leitura é paginada em lotes de 30, sem listeners permanentes. O botão Atualizar carrega as mensagens recentes; Carregar mais consulta as anteriores. Os filtros de estado atuam sobre os lotes já carregados.

## 8. Proteção contra abuso

Já incluído:

- Validação no formulário e nas regras de campos, tamanhos, estados e UID.
- Proibição de leitura pública e de edição dos dados pessoais pelos visitantes.
- Mensagem e registo de intervalo gravados na mesma transação.
- Intervalo de 60 segundos entre envios do mesmo UID, verificado pelo servidor.
- Campo escondido de deteção simples de bots e bloqueio de cliques repetidos.

**Isto não é uma proteção completa contra spam.** Limpar a sessão/criar outro UID pode contornar um limite por utilizador. O honeypot e as validações do cliente também não travam pedidos feitos diretamente à API.

O projeto permite App Check com reCAPTCHA v3:

1. Regista a aplicação Web em App Check no Firebase Console, com um fornecedor compatível.
2. Configura os domínios e copia a chave pública reCAPTCHA v3 para `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
3. Faz novo build e publicação.
4. Verifica as métricas de pedidos válidos no Console.
5. Só depois ativa **enforcement para Firestore**. Apenas preencher a chave não bloqueia pedidos sem atestado.

Confirma disponibilidade, quotas e condições do fornecedor escolhido. Se precisares de limitação forte por IP ou moderação automática, será necessária uma camada de backend adicional; não está simulada neste projeto.

## 9. Privacidade e manutenção

- Preenche `site.email` com um contacto válido antes da publicação.
- Revê a página `/privacidade/` e adapta-a à tua operação real. É um texto inicial sobre o comportamento do projeto, não uma garantia de conformidade jurídica.
- O painel permite apagar a mensagem e os dados que contém. O registo técnico de intervalo e a conta anónima não são apagados automaticamente; podem ser geridos pelo Console.
- Não há política de eliminação automática implementada. Faz revisões periódicas das mensagens que já não precisas de conservar.
- Não atives faturação nem serviços adicionais se o teu objetivo for evitar custos. Confirma sempre as quotas no Console: planos sem faturação podem interromper operações ao atingir limites.

## Problemas comuns

| Mensagem                          | Verificação                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------- |
| Formulário indisponível           | Preenche as quatro variáveis Firebase e reinicia/recompila                   |
| `auth/operation-not-allowed`      | Ativa Anonymous e Email/Password                                             |
| Envio recusado                    | Espera 60 segundos; confirma regras, base (default) e configuração App Check |
| Conta sem acesso                  | Confirma `admins/UID` para o UID autenticado                                 |
| Página de aula dá 404             | Faz novo build após adicionar aulas; publica `out/` e mantém `trailingSlash` |
| Dados antigos                     | Usa Atualizar; confirma se estás no projeto certo                            |
| Firebase CLI não encontra projeto | Executa `npm run firebase -- use --add`                                      |
| Edições no .env não aparecem      | Faz novo build e publicação                                                  |

Referências oficiais para consulta atualizada: https://firebase.google.com/docs/hosting/quickstart · https://firebase.google.com/docs/auth/web/anonymous-auth · https://firebase.google.com/docs/firestore/security/get-started · https://firebase.google.com/docs/app-check/web/recaptcha-provider · https://firebase.google.com/pricing
