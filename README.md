# LogiCodem MVP Templates

Repositorio com 60 modelos MVP prontos para demonstracao, venda e adaptacao comercial pela LogiCodem. Cada modelo foi criado com React, Vite, TypeScript, CSS moderno, dados mockados, fluxos simulados no frontend, responsividade e documentacao propria.

Pagina principal dos projetos publicados:

[https://allisonjoanine.github.io/LogiCodem-MVP-Templates/](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/)

Todos os MVPs exibem a assinatura `by LogiCodem` com link para:

[https://www.linkedin.com/in/allison-joanine-ti](https://www.linkedin.com/in/allison-joanine-ti)

## Como rodar localmente

```bash
npm install
npm run generate:mvps
npm run build:all
```

Para abrir uma opcao especifica:

```bash
cd 09-mvp-chatbot-ia/opcao-01-chatbot-site
npm run dev
```

## Como o GitHub Pages funciona

O workflow `.github/workflows/pages.yml` executa:

1. Instala dependencias com `npm ci`.
2. Regenera os 60 MVPs com `npm run generate:mvps`.
3. Compila todos com `npm run build:all`.
4. Monta o artefato em `pages-dist` com `npm run build:pages`.
5. Publica o conteudo no GitHub Pages.

Cada projeto e publicado mantendo o mesmo caminho da pasta. Exemplo:

`09-mvp-chatbot-ia/opcao-01-chatbot-site` vira:

[https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/)

## Estrutura de cada opcao

Cada opcao possui:

- `package.json`: scripts e dependencias do app.
- `index.html`: entrada Vite.
- `src/`: aplicacao React, dados mockados, tipos e estilos.
- `public/`: assets publicos, favicon e card de marca.
- `README.md`: explicacao tecnica da opcao.
- `PROMPT-CODEX.md`: prompt de continuidade para adaptar o projeto.
- `ESCOPO-MVP.md`: escopo funcional entregue.
- `DIFERENCIAIS.md`: argumentos comerciais para vender/adaptar.

## Pastas e projetos

### 01-mvp-site-institucional

Sites institucionais para empresas, prestadores e marcas que precisam transmitir confianca, apresentar servicos e gerar contatos qualificados. Indicado para pequenas e medias empresas, consultorias, negocios locais e empresas B2B.

- `opcao-01-empresa-moderna`: site claro, moderno e comercial para apresentar empresa, servicos, prova social, formulario de contato e CTA de diagnostico. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-01-empresa-moderna/)
- `opcao-02-corporativo-premium`: site premium para empresas que querem uma presenca mais institucional, elegante e confiavel. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-02-corporativo-premium/)
- `opcao-03-servicos-locais`: site direto para servicos locais com foco em conversao, contato rapido e apresentacao objetiva. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-03-servicos-locais/)

### 02-mvp-landing-page-saas

Landing pages para validacao de produtos SaaS, softwares B2B e ofertas digitais. Indicado para testar proposta de valor, capturar interessados, apresentar planos, FAQ e CTAs comerciais.

- `opcao-01-saas-tecnologico`: landing para SaaS com visual tecnologico, proposta clara, planos e formulario de interesse. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-01-saas-tecnologico/)
- `opcao-02-produto-digital`: pagina para curso, ferramenta, infoproduto ou produto digital com foco em beneficios e conversao. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-02-produto-digital/)
- `opcao-03-alta-conversao`: landing objetiva para campanha, trafego pago ou validacao rapida de demanda. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-03-alta-conversao/)

### 03-mvp-portfolio-profissional

Portfolios para profissionais, freelancers, consultores e especialistas que precisam mostrar autoridade, projetos, servicos e formas de contato. Indicado para venda pessoal e posicionamento profissional.

- `opcao-01-dev-premium`: portfolio premium para desenvolvedor ou especialista tecnico, com metricas, cases e CTA de contato. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-01-dev-premium/)
- `opcao-02-freelancer-criativo`: portfolio visual para freelancer criativo, designer, social media ou prestador digital. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-02-freelancer-criativo/)
- `opcao-03-curriculo-online`: curriculo online interativo para apresentar experiencia, competencias e contato profissional. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-03-curriculo-online/)

### 04-mvp-admin-dashboard

Dashboards administrativos para acompanhamento de indicadores, atividades, filtros e dados operacionais. Indicado para demonstrar paineis de gestao para empresas que precisam de visao executiva.

- `opcao-01-dashboard-clean`: painel limpo para indicadores, cards, tabelas e filtros basicos de gestao. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-01-dashboard-clean/)
- `opcao-02-dashboard-dark-tech`: dashboard escuro, tecnologico e premium para operacoes digitais ou SaaS. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-02-dashboard-dark-tech/)
- `opcao-03-dashboard-corporativo`: painel corporativo para gestao, acompanhamento de metas e leitura rapida de dados. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-03-dashboard-corporativo/)

### 05-mvp-sistema-chamados

Sistemas de chamados para suporte tecnico, atendimento ao cliente e demandas internas. Indicado para empresas que precisam criar chamados, filtrar, mudar status e acompanhar SLA.

- `opcao-01-helpdesk-ti`: helpdesk de TI com criacao de chamados, status, filtros e detalhes. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-01-helpdesk-ti/)
- `opcao-02-suporte-cliente`: painel de suporte ao cliente para organizar solicitacoes, prioridades e retorno. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-02-suporte-cliente/)
- `opcao-03-chamados-internos`: sistema para demandas internas de empresas, setores e equipes operacionais. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-03-chamados-internos/)

### 06-mvp-sistema-agendamento

Sistemas de agenda para servicos, horarios, profissionais e confirmacoes. Indicado para clinicas, saloes, barbearias, consultorias e prestadores recorrentes.

- `opcao-01-clinica-consultorio`: agenda para clinicas e consultorios com servico, data, horario e confirmacao simulada. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-01-clinica-consultorio/)
- `opcao-02-barbearia-estetica`: agenda para barbearia, estetica e beleza com fluxo simples de reserva. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-02-barbearia-estetica/)
- `opcao-03-prestador-servico`: agenda para prestador autonomo, equipes externas ou atendimento por disponibilidade. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-03-prestador-servico/)

### 07-mvp-controle-estoque

Controles de estoque para produtos, entradas, saidas, reposicao e visao operacional. Indicado para lojas, manutencao, almoxarifado e compras.

- `opcao-01-estoque-loja`: controle de produtos de loja com cadastro, filtros e simulacao de movimentacao. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-01-estoque-loja/)
- `opcao-02-estoque-manutencao`: estoque para pecas, insumos e manutencao com alertas e controle operacional. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-02-estoque-manutencao/)
- `opcao-03-estoque-compras`: controle voltado a compras, reposicao, itens criticos e planejamento de entrada. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-03-estoque-compras/)

### 08-mvp-crm-simples

CRMs simples para leads, vendas, funil e atendimento comercial. Indicado para equipes que precisam organizar oportunidades sem um sistema complexo.

- `opcao-01-crm-vendas`: CRM de vendas com leads, funil, cards e movimentacao simulada. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-01-crm-vendas/)
- `opcao-02-crm-leads`: CRM focado em captacao e qualificacao de leads, com filtros e acompanhamento. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-02-crm-leads/)
- `opcao-03-crm-atendimento`: CRM para relacionamento e atendimento, historico e priorizacao de contatos. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-03-crm-atendimento/)

### 09-mvp-chatbot-ia

Chatbots simulados para atendimento, triagem e base de conhecimento. Indicado para empresas que querem demonstrar atendimento automatizado antes de integrar IA real ou WhatsApp.

- `opcao-01-chatbot-site`: chatbot para site com conversa simulada, respostas rapidas e contexto comercial. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/)
- `opcao-02-chatbot-atendimento`: chatbot para suporte e atendimento ao cliente com triagem de demandas. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-02-chatbot-atendimento/)
- `opcao-03-chatbot-base-conhecimento`: chatbot para consulta de base de conhecimento, FAQ e respostas padronizadas. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-03-chatbot-base-conhecimento/)

### 10-mvp-gerador-email-chamados

Geradores de e-mail para padronizar comunicacoes de suporte, comercial e cobranca. Indicado para equipes que precisam responder clientes com consistencia e velocidade.

- `opcao-01-email-suporte-tecnico`: gerador de e-mails tecnicos para chamados, status, orientacoes e encerramentos. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-01-email-suporte-tecnico/)
- `opcao-02-email-comercial`: gerador de mensagens comerciais, follow-ups e propostas simples. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-02-email-comercial/)
- `opcao-03-email-cobranca-retorno`: gerador para cobranca, retorno pendente e comunicacoes administrativas. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-03-email-cobranca-retorno/)

### 11-mvp-sistema-os-servicos

Sistemas de ordem de servico para controle de execucao, prioridades, historico e atendimento em campo. Indicado para assistencias, manutencao e prestadores tecnicos.

- `opcao-01-ordem-servico-ti`: OS para suporte tecnico e TI com acompanhamento de execucao e status. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-01-ordem-servico-ti/)
- `opcao-02-ordem-servico-manutencao`: OS para manutencao predial, equipamentos ou assistencia tecnica. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-02-ordem-servico-manutencao/)
- `opcao-03-ordem-servico-campo`: OS para equipes externas, visitas tecnicas e operacao em campo. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-03-ordem-servico-campo/)

### 12-mvp-catalogo-produtos

Catalogos para produtos, servicos e venda assistida. Indicado para lojas, pequenos negocios e prestadores que vendem por WhatsApp ou precisam apresentar ofertas rapidamente.

- `opcao-01-catalogo-whatsapp`: catalogo com filtros e simulacao de envio de pedido pelo WhatsApp. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-01-catalogo-whatsapp/)
- `opcao-02-catalogo-loja`: catalogo para loja com produtos, categorias e simulacao de carrinho. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-02-catalogo-loja/)
- `opcao-03-catalogo-servicos`: catalogo para prestadores apresentarem pacotes, planos e servicos. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-03-catalogo-servicos/)

### 13-mvp-painel-financeiro

Paineis financeiros para contas, caixa, recebiveis, despesas e resumo de indicadores. Indicado para negocios que precisam visualizar saude financeira sem ERP completo.

- `opcao-01-contas-pagar-receber`: painel de contas a pagar e receber com lancamentos, filtros e resumo. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-01-contas-pagar-receber/)
- `opcao-02-fluxo-caixa`: visao de fluxo de caixa para entradas, saidas e saldo projetado. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-02-fluxo-caixa/)
- `opcao-03-financeiro-freelancer`: painel financeiro para freelancer controlar recebimentos, despesas e metas. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-03-financeiro-freelancer/)

### 14-mvp-sistema-clientes

Sistemas para cadastro, area do cliente e historico de atendimentos. Indicado para empresas que precisam organizar relacionamento e informacoes de clientes.

- `opcao-01-cadastro-clientes`: cadastro de clientes com busca, estados e detalhes simulados. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-01-cadastro-clientes/)
- `opcao-02-area-cliente`: area do cliente para simular acesso, informacoes e servicos disponiveis. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-02-area-cliente/)
- `opcao-03-historico-atendimentos`: historico de atendimentos, interacoes e registro de acompanhamento. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-03-historico-atendimentos/)

### 15-mvp-sistema-login-auth

Modelos de login e autenticacao simulada para produtos digitais. Indicado para demonstrar acesso protegido, perfis, tenant e experiencia inicial de sistemas privados.

- `opcao-01-login-simples`: tela e fluxo de login simples com estados simulados. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-01-login-simples/)
- `opcao-02-login-com-perfis`: login com selecao de perfis, acesso e experiencia por tipo de usuario. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-02-login-com-perfis/)
- `opcao-03-login-saas-multitenant`: demonstracao de login SaaS com organizacao, tenant e acesso protegido. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-03-login-saas-multitenant/)

### 16-mvp-blog-noticias

Blogs, noticias e centrais de conteudo para marcas que publicam artigos, educam mercado e capturam interesse. Indicado para empresas, tecnologia e conteudo institucional.

- `opcao-01-blog-empresa`: blog corporativo para artigos, novidades, busca e detalhes de posts. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-01-blog-empresa/)
- `opcao-02-blog-tecnologia`: blog de tecnologia com visual mais digital, pesquisa e conteudos segmentados. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-02-blog-tecnologia/)
- `opcao-03-central-conteudo`: central de conteudo para organizar posts, materiais e comunicacoes. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-03-central-conteudo/)

### 17-mvp-painel-relatorios

Paineis de relatorios para vendas, operacao e graficos gerenciais. Indicado para gestores que precisam filtrar, comparar e apresentar indicadores de forma visual.

- `opcao-01-relatorios-vendas`: relatorios de vendas com cards, filtros e leitura comercial. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-01-relatorios-vendas/)
- `opcao-02-relatorios-operacionais`: relatorios de operacao para acompanhar volume, status e eficiencia. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-02-relatorios-operacionais/)
- `opcao-03-relatorios-graficos`: painel grafico com dados simulados, comparativos e visual executivo. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-03-relatorios-graficos/)

### 18-mvp-sistema-condominio

Sistemas para administracao de condominios, moradores, visitantes e ocorrencias. Indicado para portarias, administradoras e sindicos que precisam organizar rotinas.

- `opcao-01-controle-moradores`: controle de moradores, unidades, contatos e registros simulados. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-01-controle-moradores/)
- `opcao-02-controle-visitantes`: controle de visitantes para entrada, autorizacao e historico. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-02-controle-visitantes/)
- `opcao-03-ocorrencias-condominio`: registro de ocorrencias, prioridade, status e acompanhamento condominial. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-03-ocorrencias-condominio/)

### 19-mvp-sistema-delivery

Sistemas de delivery para cardapio, pedidos via WhatsApp e painel de entregas. Indicado para restaurantes, lanchonetes e operacoes locais.

- `opcao-01-cardapio-online`: cardapio online com categorias, produtos e simulacao de pedido. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-01-cardapio-online/)
- `opcao-02-pedidos-whatsapp`: fluxo de pedido com foco em envio e atendimento pelo WhatsApp. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-02-pedidos-whatsapp/)
- `opcao-03-painel-entregas`: painel de entregas para acompanhar pedidos, status e operacao. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-03-painel-entregas/)

### 20-mvp-sistema-clinica

Sistemas para clinicas, consultorios, pacientes, agenda e atendimento. Indicado para saude, estetica clinica, pequenos consultorios e gestao de recepcao.

- `opcao-01-agendamento-pacientes`: agenda de pacientes com servicos, datas, horarios e confirmacao simulada. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-01-agendamento-pacientes/)
- `opcao-02-prontuario-simples`: prontuario simples para demonstrar historico, dados do paciente e acompanhamento. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-02-prontuario-simples/)
- `opcao-03-gestao-consultorio`: gestao de consultorio com visao de atendimentos, pacientes e rotina administrativa. Link: [abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-03-gestao-consultorio/)
