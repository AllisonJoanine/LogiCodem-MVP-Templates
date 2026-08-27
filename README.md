# LogiCodem MVP Templates

<div align="center">

  <h3>63 MVPs prontos para vender, apresentar e adaptar para clientes reais.</h3>

  <p>
    Uma biblioteca comercial da <strong>LogiCodem</strong> com modelos de sites, dashboards, sistemas operacionais, CRMs,
    chatbots, catálogos, painéis e aplicações de gestão. Cada opção já vem com design próprio, dados mockados,
    interações simuladas, responsividade e documentação para acelerar propostas e entregas.
  </p>

  <p>
    <a href="https://allisonjoanine.github.io/LogiCodem-MVP-Templates/"><strong>Abrir vitrine online</strong></a>
    ·
    <a href="https://github.com/AllisonJoanine/LogiCodem-MVP-Templates"><strong>Ver repositório</strong></a>
    ·
    <a href="https://www.linkedin.com/in/allison-joanine-ti"><strong>by LogiCodem</strong></a>
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-ready-3178c6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-online-222?style=for-the-badge&logo=github&logoColor=white">
    <img alt="MVPs" src="https://img.shields.io/badge/63-MVPs-0f766e?style=for-the-badge">
  </p>

</div>

## Visão Geral

Este repositório foi criado para funcionar como uma prateleira de produtos digitais vendáveis. Em vez de telas vazias ou templates genéricos, cada MVP simula uma experiência real de uso no frontend: formulários, filtros, estados de sucesso, mensagens, listas, dashboards, ações de cadastro, fluxos de atendimento e dados de exemplo.

| Destaque | O que entrega |
| --- | --- |
| 60 projetos completos | 20 categorias com 3 opções comerciais em cada uma |
| Frontend demonstrável | React, Vite, TypeScript, CSS moderno e componentes reutilizáveis |
| Design próprio por opção | Visual limpo, premium, tecnológico, operacional ou focado em conversão |
| Simulação funcional | Dados mockados, formulários, validações, filtros, toasts e estados visuais |
| Pronto para venda | README, escopo, diferenciais comerciais e prompt de adaptação por MVP |
| Publicação automática | GitHub Pages com vitrine e links individuais para todos os projetos |

## Links Rápidos

| Recurso | Link |
| --- | --- |
| Vitrine principal | [Abrir todos os MVPs publicados](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/) |
| Repositório GitHub | [AllisonJoanine/LogiCodem-MVP-Templates](https://github.com/AllisonJoanine/LogiCodem-MVP-Templates) |
| LinkedIn LogiCodem | [Allison Joanine](https://www.linkedin.com/in/allison-joanine-ti) |
| Workflow de deploy | [GitHub Actions](https://github.com/AllisonJoanine/LogiCodem-MVP-Templates/actions) |

## Como Rodar

Instale as dependências, gere os projetos e valide todos os builds:

```bash
npm install
npm run generate:mvps
npm run build:all
```

Para abrir uma opção específica em desenvolvimento:

```bash
cd 09-mvp-chatbot-ia/opcao-01-chatbot-site
npm run dev
```

Para gerar a vitrine usada no GitHub Pages:

```bash
npm run build:all
npm run build:pages
```

## Como o Deploy Funciona

O arquivo `.github/workflows/pages.yml` publica automaticamente a vitrine no GitHub Pages sempre que há push na branch `main`.

| Etapa | Comando/ação |
| --- | --- |
| Instala dependências | `npm ci` |
| Regenera os MVPs | `npm run generate:mvps` |
| Compila todos os projetos | `npm run build:all` |
| Monta o pacote do Pages | `npm run build:pages` |
| Publica no GitHub Pages | `actions/deploy-pages` |

Cada projeto é publicado mantendo o mesmo caminho da pasta. Exemplo:

```text
09-mvp-chatbot-ia/opcao-01-chatbot-site
```

fica disponível em:

[https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/)

## Estrutura de Cada MVP

Cada opção foi pensada como uma base de projeto real, com documentação de venda e adaptação.

| Arquivo/pasta | Função |
| --- | --- |
| `package.json` | Scripts e dependências do app |
| `index.html` | Entrada do Vite |
| `src/App.tsx` | Experiência principal e componentes do MVP |
| `src/data.ts` | Dados mockados, tema visual e conteúdo editável |
| `src/styles.css` | Layout, responsividade, identidade visual e estados |
| `public/` | Favicon e assets públicos |
| `README.md` | Explicação técnica da opção |
| `ESCOPO-MVP.md` | Funcionalidades entregues e limites do MVP |
| `DIFERENCIAIS.md` | Argumentos comerciais para vender/adaptar |
| `PROMPT-CODEX.md` | Prompt para evoluir o projeto com Codex |

## Catálogo Comercial

### 01. Site Institucional

Para empresas, consultorias, prestadores e marcas que precisam transmitir confiança, apresentar serviços e gerar contatos qualificados.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Empresa Moderna | Apresentar empresa, serviços, prova social, formulário de contato e CTA comercial | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-01-empresa-moderna/) |
| Corporativo Premium | Empresas que querem presença institucional elegante, confiável e mais sofisticada | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-02-corporativo-premium/) |
| Serviços Locais | Negócios locais que precisam de página objetiva, contato rápido e conversão | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/opcao-03-servicos-locais/) |
| Dr Pet Clínica Veterinária | Site institucional demonstrativo para clínica veterinária com serviços, localização e contato pelo WhatsApp | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/dr-pet-clinica-veterinaria/) |

### 02. Landing Page SaaS

Para validação de produtos SaaS, softwares B2B, infoprodutos e ofertas digitais com foco em captação e conversão.

| Opção | Ideal para | Link |
| --- | --- | --- |
| SaaS Tecnológico | Startups e softwares B2B com proposta de valor, planos e formulário de interesse | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-01-saas-tecnologico/) |
| Produto Digital | Cursos, ferramentas, comunidades, infoprodutos ou produtos digitais | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-02-produto-digital/) |
| Alta Conversão | Campanhas, tráfego pago, lista de espera e validação rápida de demanda | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/02-mvp-landing-page-saas/opcao-03-alta-conversao/) |

### 03. Portfólio Profissional

Para profissionais, freelancers, consultores e especialistas que precisam vender autoridade, agenda e repertório.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Dev Premium | Desenvolvedores e especialistas técnicos com cases, métricas e CTA de contato | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-01-dev-premium/) |
| Freelancer Criativo | Designers, social media, criadores, consultores e prestadores digitais | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-02-freelancer-criativo/) |
| Currículo Online | Profissionais que querem uma apresentação interativa de experiência e competências | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/03-mvp-portfolio-profissional/opcao-03-curriculo-online/) |

### 04. Admin Dashboard

Para empresas que precisam acompanhar indicadores, atividades, filtros e dados operacionais em uma interface executiva.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Dashboard Clean | Gestão diária com cards, tabelas, filtros e leitura rápida | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-01-dashboard-clean/) |
| Dashboard Dark Tech | Operações digitais, SaaS e produtos que pedem visual tecnológico premium | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-02-dashboard-dark-tech/) |
| Dashboard Corporativo | Empresas que querem painel de metas, operação e indicadores gerenciais | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/04-mvp-admin-dashboard/opcao-03-dashboard-corporativo/) |

### 05. Sistema de Chamados

Para suporte técnico, atendimento ao cliente e demandas internas com criação, filtros, status e acompanhamento.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Helpdesk TI | Times de TI que precisam controlar chamados, prioridade, status e SLA | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-01-helpdesk-ti/) |
| Suporte Cliente | Empresas que centralizam solicitações, retornos e relacionamento com clientes | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-02-suporte-cliente/) |
| Chamados Internos | Demandas entre setores, solicitações administrativas e controle interno | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/05-mvp-sistema-chamados/opcao-03-chamados-internos/) |

### 06. Sistema de Agendamento

Para serviços que dependem de horários, profissionais, confirmações e organização de agenda.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Clínica Consultório | Clínicas e consultórios com serviço, data, horário e confirmação simulada | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-01-clinica-consultorio/) |
| Barbearia Estética | Beleza, barbearias, estética e reservas simples de atendimento | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-02-barbearia-estetica/) |
| Prestador Serviço | Autônomos, equipes externas, visitas técnicas e agenda por disponibilidade | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/06-mvp-sistema-agendamento/opcao-03-prestador-servico/) |

### 07. Controle de Estoque

Para lojas, compras, manutenção e almoxarifados que precisam controlar produtos, entradas, saídas e reposição.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Estoque Loja | Cadastro de produtos, filtros, níveis e simulação de movimentação | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-01-estoque-loja/) |
| Estoque Manutenção | Peças, insumos, alertas e controle operacional de manutenção | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-02-estoque-manutencao/) |
| Estoque Compras | Reposição, itens críticos e planejamento de entrada de produtos | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/07-mvp-controle-estoque/opcao-03-estoque-compras/) |

### 08. CRM Simples

Para equipes comerciais que precisam organizar leads, oportunidades, funil e relacionamento sem um CRM pesado.

| Opção | Ideal para | Link |
| --- | --- | --- |
| CRM Vendas | Leads, oportunidades, funil comercial e movimentação simulada | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-01-crm-vendas/) |
| CRM Leads | Captação, qualificação, filtros e acompanhamento de interessados | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-02-crm-leads/) |
| CRM Atendimento | Relacionamento, histórico, prioridade e organização de contatos | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/08-mvp-crm-simples/opcao-03-crm-atendimento/) |

### 09. Chatbot IA

Para demonstrar atendimento automatizado, triagem, FAQ e base de conhecimento antes de integrar IA real ou WhatsApp.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Chatbot Site | Conversa simulada para site, respostas rápidas e contexto comercial | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-01-chatbot-site/) |
| Chatbot Atendimento | Suporte, triagem de demandas e experiência de atendimento automatizado | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-02-chatbot-atendimento/) |
| Chatbot Base Conhecimento | Consulta de FAQ, artigos e respostas padronizadas para clientes | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/09-mvp-chatbot-ia/opcao-03-chatbot-base-conhecimento/) |

### 10. Gerador de E-mail para Chamados

Para padronizar comunicações de suporte, comercial, cobrança e retorno com agilidade.

| Opção | Ideal para | Link |
| --- | --- | --- |
| E-mail Suporte Técnico | Respostas técnicas, status de chamado, orientação e encerramento | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-01-email-suporte-tecnico/) |
| E-mail Comercial | Follow-ups, propostas, retorno de interesse e comunicação comercial | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-02-email-comercial/) |
| E-mail Cobrança Retorno | Cobrança, pendências, retorno administrativo e mensagens padronizadas | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/10-mvp-gerador-email-chamados/opcao-03-email-cobranca-retorno/) |

### 11. Sistema de OS e Serviços

Para prestadores que controlam ordens de serviço, execução em campo, prioridade e histórico de atendimento.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Ordem Serviço TI | Suporte técnico e TI com OS, status e acompanhamento de execução | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-01-ordem-servico-ti/) |
| Ordem Serviço Manutenção | Manutenção predial, equipamentos, assistência técnica e tarefas recorrentes | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-02-ordem-servico-manutencao/) |
| Ordem Serviço Campo | Equipes externas, visitas técnicas, rotas e operação em campo | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/11-mvp-sistema-os-servicos/opcao-03-ordem-servico-campo/) |

### 12. Catálogo de Produtos

Para lojas, pequenos negócios e prestadores que vendem por catálogo, WhatsApp ou atendimento consultivo.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Catálogo WhatsApp | Produtos filtráveis e simulação de envio de pedido pelo WhatsApp | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-01-catalogo-whatsapp/) |
| Catálogo Loja | Produtos, categorias, seleção e simulação de carrinho | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-02-catalogo-loja/) |
| Catálogo Serviços | Pacotes, planos e serviços para venda consultiva | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/12-mvp-catalogo-produtos/opcao-03-catalogo-servicos/) |

### 13. Painel Financeiro

Para visualizar contas, caixa, recebíveis, despesas e resumo financeiro sem depender de um ERP completo.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Contas Pagar Receber | Lançamentos, filtros, resumo financeiro e visão de pendências | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-01-contas-pagar-receber/) |
| Fluxo Caixa | Entradas, saídas, saldo projetado e leitura de caixa | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-02-fluxo-caixa/) |
| Financeiro Freelancer | Recebimentos, despesas, metas e controle financeiro individual | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/13-mvp-painel-financeiro/opcao-03-financeiro-freelancer/) |

### 14. Sistema de Clientes

Para cadastro, área do cliente, histórico de atendimentos e relacionamento com a base.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Cadastro Clientes | Busca, cadastro, detalhes e estados simulados de clientes | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-01-cadastro-clientes/) |
| Área Cliente | Simulação de acesso do cliente, informações e serviços disponíveis | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-02-area-cliente/) |
| Histórico Atendimentos | Registro de interações, acompanhamento e relacionamento por cliente | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/14-mvp-sistema-clientes/opcao-03-historico-atendimentos/) |

### 15. Login e Autenticação

Para demonstrar acesso protegido, perfis, tenant e experiências iniciais de sistemas privados.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Login Simples | Fluxo básico de login com estados, validação e entrada simulada | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-01-login-simples/) |
| Login com Perfis | Acesso por perfil, seleção de usuário e experiência segmentada | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-02-login-com-perfis/) |
| Login SaaS Multitenant | Produto SaaS com organização, tenant e acesso protegido simulado | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/15-mvp-sistema-login-auth/opcao-03-login-saas-multitenant/) |

### 16. Blog e Notícias

Para marcas que publicam conteúdo, educam o mercado, compartilham novidades e capturam interesse.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Blog Empresa | Artigos corporativos, novidades, busca e detalhes de posts | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-01-blog-empresa/) |
| Blog Tecnologia | Conteúdo técnico, pesquisa, posts segmentados e visual digital | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-02-blog-tecnologia/) |
| Central Conteúdo | Materiais, comunicados, artigos e organização editorial | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/16-mvp-blog-noticias/opcao-03-central-conteudo/) |

### 17. Painel de Relatórios

Para gestores que precisam filtrar, comparar, apresentar indicadores e acompanhar performance.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Relatórios Vendas | Indicadores comerciais, filtros, cards e leitura de vendas | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-01-relatorios-vendas/) |
| Relatórios Operacionais | Volume, status, eficiência, operação e acompanhamento de rotina | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-02-relatorios-operacionais/) |
| Relatórios Gráficos | Visual executivo com gráficos simulados, comparativos e métricas | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/17-mvp-painel-relatorios/opcao-03-relatorios-graficos/) |

### 18. Sistema de Condomínio

Para portarias, administradoras e síndicos que precisam organizar moradores, visitantes e ocorrências.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Controle Moradores | Moradores, unidades, contatos e registros condominiais | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-01-controle-moradores/) |
| Controle Visitantes | Entrada, autorização, histórico e acompanhamento de visitantes | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-02-controle-visitantes/) |
| Ocorrências Condomínio | Registro de ocorrências, prioridade, status e acompanhamento | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/18-mvp-sistema-condominio/opcao-03-ocorrencias-condominio/) |

### 19. Sistema Delivery

Para restaurantes, lanchonetes e operações locais que precisam vender online, receber pedidos e acompanhar entregas.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Cardápio Online | Produtos, categorias, seleção e simulação de pedido | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-01-cardapio-online/) |
| Pedidos WhatsApp | Fluxo de pedido com foco em atendimento e envio pelo WhatsApp | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-02-pedidos-whatsapp/) |
| Painel Entregas | Acompanhamento de pedidos, status, operação e entregas | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/19-mvp-sistema-delivery/opcao-03-painel-entregas/) |

### 20. Sistema de Clínica

Para clínicas, consultórios, recepções e pequenos atendimentos de saúde que precisam organizar agenda, pacientes e rotina.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Agendamento Pacientes | Agenda de pacientes, serviços, datas, horários e confirmação | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-01-agendamento-pacientes/) |
| Prontuário Simples | Histórico, dados do paciente, registros e acompanhamento básico | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-02-prontuario-simples/) |
| Gestão Consultório | Visão de atendimentos, pacientes, agenda e rotina administrativa | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/20-mvp-sistema-clinica/opcao-03-gestao-consultorio/) |

### 21. Site para Canil

Para criadores responsáveis que desejam apresentar sua história, seus cães e organizar visitas com uma presença digital editorial e acolhedora.

| Opção | Ideal para | Link |
| --- | --- | --- |
| Alex • Boston Terriers — Editorial | Site responsivo com perfis, ninhadas, galeria, FAQ e contato pelo WhatsApp | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/21-mvp-site-canil/opcao-01-alex-boston-terriers/) |
| Alex • Boston Terriers — Wix-inspired | Segunda direção visual com hero fotográfico, grade de quatro histórias, apresentação, galeria, visitas e formulário para WhatsApp | [Abrir projeto](https://allisonjoanine.github.io/LogiCodem-MVP-Templates/21-mvp-site-canil/opcao-02-wix-boston-terriers/) |

## Como Adaptar Para um Cliente Real

1. Escolha a categoria mais próxima do nicho do cliente.
2. Ajuste conteúdo, métricas, planos e textos em `src/data.ts`.
3. Personalize cores, marca e imagens no tema do projeto.
4. Conecte formulários, listas, cadastros e ações simuladas a uma API real.
5. Evolua autenticação, banco de dados, integrações e permissões conforme o escopo vendido.

## Assinatura

Todos os projetos exibem `by LogiCodem` em destaque e direcionam para:

[https://www.linkedin.com/in/allison-joanine-ti](https://www.linkedin.com/in/allison-joanine-ti)

---

<div align="center">
  <strong>LogiCodem MVP Templates</strong><br>
  Projetos demonstráveis, bonitos e prontos para virar proposta.
</div>
