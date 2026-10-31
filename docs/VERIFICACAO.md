# Verificação da entrega

Verificações efetuadas em 31 de outubro de 2026:

- Build de produção Next.js com exportação estática: concluído.
- TypeScript: validado durante o build.
- Nove testes de cálculos, dados de aulas e validação dos formulários: passaram.
- Cinco testes de autorização e escrita no emulador Firestore: passaram. Incluem bloqueio de leitura por visitantes, bloqueio de autopromoção a administrador, intervalo entre submissões, rejeição de UID falso e gestão por professor.
- As ilustrações SVG são locais e as fontes de fórmulas KaTeX são empacotadas. Não é necessário descarregar fontes externas para ver as aulas.

## Limites da verificação

A infraestrutura de pré-visualização deste ambiente não estava disponível. Por isso, não foi feita uma inspeção visual no navegador, nem foram simulados cliques em dispositivos reais. A interface inclui estilos responsivos e controlos acessíveis, mas deve ser conferida no teu telemóvel antes da divulgação.

Não foram usados um projeto Firebase real, credenciais de administrador ou dados pessoais. O envio e o login devem ser confirmados na tua instalação, seguindo docs/FIREBASE.md. App Check, email externo, domínio e quotas dependem da tua configuração. O emulador valida regras e não substitui esses testes de integração.

## Repetir os testes

```bash
npm test
npm run typecheck
npm run build
```

Para regras, instala Java 21 ou superior e executa:

```bash
npm run test:rules
```

O projeto usado pelo emulador é demo-mathmotion. Não é necessário autenticar no Firebase para esse teste; não há escrita numa base real. Mensagens PERMISSION_DENIED no log de testes negativos são esperadas; verifica o resumo final.

## Verificação manual antes de publicar

- Abrir uma aula, revelar pistas e respostas e usar o botão de dúvida de um passo.
- Arrastar sliders, repor valores e abrir duas instâncias de uma experiência.
- Marcar uma aula como concluída e atualizar a página.
- Pesquisar sem acentos e testar filtros que não têm resultados.
- Enviar e ler uma dúvida real de teste; confirmar que uma janela sem sessão de professor não vê os dados.
- Testar teclado e largura de telemóvel, verificando as fórmulas e os botões.
