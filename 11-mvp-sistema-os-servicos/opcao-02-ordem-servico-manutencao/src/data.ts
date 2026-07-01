import type { AppData } from './types';

export const appData: AppData = {
  "kind": "serviceOrders",
  "categoryTitle": "Sistema de OS",
  "optionTitle": "Ordem Servico Manutencao",
  "brandName": "Aster OS",
  "tagline": "Ordens de servico com etapas, responsaveis e progresso para operacoes de campo.",
  "summary": "Sistema de OS para prestadores que controlam ordens de servico e execucao em campo, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.",
  "audience": "prestadores que controlam ordens de servico e execucao em campo",
  "styleName": "Command center premium",
  "parentSlug": "11-mvp-sistema-os-servicos",
  "optionSlug": "opcao-02-ordem-servico-manutencao",
  "visual": {
    "name": "Command center premium",
    "layout": "command",
    "texture": "grid",
    "density": "dense",
    "radius": "0.55rem",
    "cta": "Abrir painel executivo"
  },
  "theme": {
    "name": "Command center premium",
    "bg": "#1d0f05",
    "surface": "#261306",
    "surfaceAlt": "#242f22",
    "text": "#fdf2ec",
    "muted": "#a69d97",
    "primary": "#ee7638",
    "secondary": "#27847d",
    "accent": "#3f76ed",
    "border": "#7b3209",
    "shadow": "0 24px 60px rgba(0, 0, 0, 0.38)",
    "onPrimary": "#ffffff",
    "heroOverlay": "rgba(43, 22, 7, 0.52)",
    "heroTint": "rgba(234, 88, 12, 0.22)",
    "pattern": "rgba(234, 88, 12, 0.16)",
    "radius": "0.55rem"
  },
  "heroImage": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  "metrics": [
    {
      "label": "OS em andamento",
      "value": "23",
      "trend": "+7",
      "note": "Indicador chave para Ordem Servico Manutencao",
      "tone": "primary"
    },
    {
      "label": "Concluidas no mes",
      "value": "118",
      "trend": "+16%",
      "note": "Atualizado com dados mockados",
      "tone": "secondary"
    },
    {
      "label": "Tecnicos ativos",
      "value": "9",
      "trend": "+2",
      "note": "Indicador chave para Ordem Servico Manutencao",
      "tone": "accent"
    },
    {
      "label": "Retrabalho",
      "value": "3%",
      "trend": "-4%",
      "note": "Atualizado com dados mockados",
      "tone": "neutral"
    }
  ],
  "records": [
    {
      "id": "SER-1040",
      "title": "Instalacao em campo",
      "owner": "Ana Martins",
      "email": "ana@empresa.com.br",
      "phone": "(11) 98888-1122",
      "status": "Novo",
      "stage": "Novo",
      "priority": "Alta",
      "amount": 2170,
      "date": "2026-07-01",
      "category": "Ordem Servico Manutencao",
      "description": "Registro demo para Ordem Servico Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 24,
      "meta": "Unidade Centro",
      "tags": [
        "SLA",
        "Prioridade"
      ]
    },
    {
      "id": "SER-1041",
      "title": "Manutencao preventiva",
      "owner": "Bruno Costa",
      "email": "bruno@empresa.com.br",
      "phone": "(21) 97777-3344",
      "status": "Em andamento",
      "stage": "Em andamento",
      "priority": "Media",
      "amount": 2540,
      "date": "2026-07-02",
      "category": "Operacao",
      "description": "Registro demo para Ordem Servico Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 48,
      "meta": "Canal WhatsApp",
      "tags": [
        "Cliente ativo"
      ]
    },
    {
      "id": "SER-1042",
      "title": "Vistoria tecnica",
      "owner": "Carla Nogueira",
      "email": "carla@empresa.com.br",
      "phone": "(31) 96666-5566",
      "status": "Concluido",
      "stage": "Concluido",
      "priority": "Baixa",
      "amount": 2910,
      "date": "2026-07-03",
      "category": "Comercial",
      "description": "Registro demo para Ordem Servico Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 76,
      "meta": "Plano Pro",
      "tags": [
        "Automacao"
      ]
    },
    {
      "id": "SER-1043",
      "title": "Retorno para validacao final",
      "owner": "Diego Ramos",
      "email": "diego@empresa.com.br",
      "phone": "(41) 95555-7788",
      "status": "Risco",
      "stage": "Risco",
      "priority": "Critica",
      "amount": 3280,
      "date": "2026-07-04",
      "category": "Relacionamento",
      "description": "Registro demo para Ordem Servico Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 92,
      "meta": "Equipe interna",
      "tags": [
        "Follow-up"
      ]
    }
  ],
  "services": [
    {
      "id": "ITEM-1",
      "name": "Diagnostico consultivo Ordem Servico Manutencao",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Implantacao MVP",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Plano mensal",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Treinamento da equipe",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "products": [
    {
      "id": "ITEM-1",
      "name": "Diagnostico consultivo Ordem Servico Manutencao",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Implantacao MVP",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Plano mensal",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Treinamento da equipe",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Ordem Servico Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "plans": [
    {
      "name": "Start",
      "price": "R$ 497",
      "description": "Base enxuta para validar Ordem Servico Manutencao.",
      "features": [
        "Layout responsivo",
        "Formulario funcional",
        "Dados mockados"
      ],
      "highlight": false
    },
    {
      "name": "Pro",
      "price": "R$ 997",
      "description": "Pacote ideal para demonstracao comercial completa.",
      "features": [
        "Fluxos completos",
        "Componentes reutilizaveis",
        "Painel demonstravel"
      ],
      "highlight": true
    },
    {
      "name": "Scale",
      "price": "Sob consulta",
      "description": "Adaptacao com regras, integracoes e identidade do cliente.",
      "features": [
        "Customizacao visual",
        "Arquitetura expansivel",
        "Preparado para backend"
      ],
      "highlight": false
    }
  ],
  "faq": [
    {
      "question": "Esse MVP ja pode ser apresentado a clientes?",
      "answer": "Sim. Ordem Servico Manutencao foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista."
    },
    {
      "question": "Como adaptar para um cliente real?",
      "answer": "Troque os dados mockados por uma API, ajuste identidade visual e conecte os formularios ao backend escolhido."
    },
    {
      "question": "O projeto funciona localmente?",
      "answer": "Sim. Basta instalar as dependencias e executar npm run dev dentro da pasta da opcao."
    }
  ],
  "testimonials": [
    {
      "name": "Mariana Lopes",
      "role": "Diretora de Operacoes",
      "quote": "Ordem Servico Manutencao mostra valor rapido e facilita a conversa com decisores."
    },
    {
      "name": "Rafael Lima",
      "role": "Gestor Comercial",
      "quote": "A estrutura tem cara de produto pronto, nao de tela estatica."
    }
  ],
  "proofPoints": [
    {
      "title": "OS com progresso",
      "text": "Ordem Servico Manutencao ganha uma camada comercial pronta para demonstracao 1."
    },
    {
      "title": "Responsaveis e datas",
      "text": "Ordem Servico Manutencao ganha uma camada comercial pronta para demonstracao 2."
    },
    {
      "title": "Execucao em campo simulada",
      "text": "Ordem Servico Manutencao ganha uma camada comercial pronta para demonstracao 3."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "label": "Solicitar"
    },
    {
      "step": "02",
      "label": "Planejar"
    },
    {
      "step": "03",
      "label": "Executar"
    },
    {
      "step": "04",
      "label": "Encerrar"
    }
  ],
  "posts": [
    {
      "id": "POST-1",
      "title": "Como organizar a operacao sem planilhas soltas",
      "category": "Ordem Servico Manutencao",
      "excerpt": "Conteudo demonstrativo para Ordem Servico Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Ordem Servico Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Equipe LogiCodem",
      "date": "2026-06-29",
      "readTime": "4 min"
    },
    {
      "id": "POST-2",
      "title": "Indicadores que aceleram decisoes comerciais",
      "category": "Estrategia",
      "excerpt": "Conteudo demonstrativo para Ordem Servico Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Ordem Servico Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Produto",
      "date": "2026-06-30",
      "readTime": "5 min"
    },
    {
      "id": "POST-3",
      "title": "Checklist para adaptar um MVP ao cliente real",
      "category": "Produto",
      "excerpt": "Conteudo demonstrativo para Ordem Servico Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Ordem Servico Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Operacoes",
      "date": "2026-07-01",
      "readTime": "6 min"
    },
    {
      "id": "POST-4",
      "title": "Automacoes simples para ganhar produtividade",
      "category": "Operacao",
      "excerpt": "Conteudo demonstrativo para Ordem Servico Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Ordem Servico Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Comercial",
      "date": "2026-07-02",
      "readTime": "7 min"
    }
  ],
  "messages": [
    {
      "role": "assistant",
      "text": "Ola! Sou o assistente demo do Aster OS. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano."
    },
    {
      "role": "user",
      "text": "Quero entender como funciona."
    },
    {
      "role": "assistant",
      "text": "Este MVP simula a jornada principal de Ordem Servico Manutencao com dados editaveis e acoes no frontend."
    }
  ],
  "timeSlots": [
    "08:30",
    "09:00",
    "10:30",
    "14:00",
    "15:30",
    "17:00"
  ],
  "prompt": "Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de Ordem Servico Manutencao, mantenha a identidade Command center premium e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.",
  "scopeBullets": [
    "Projeto React + Vite + TypeScript funcional",
    "Layout responsivo para celular, tablet e desktop",
    "Dados mockados organizados e editaveis",
    "Estados de carregamento, vazio, erro e sucesso quando aplicavel",
    "Criacao de OS",
    "Progresso por etapa",
    "Atualizacao de status"
  ],
  "differentialBullets": [
    "Identidade visual command center premium pensada para prestadores que controlam ordens de servico e execucao em campo.",
    "Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.",
    "Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.",
    "Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.",
    "Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada."
  ]
};
