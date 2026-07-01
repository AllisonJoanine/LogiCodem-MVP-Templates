import type { AppData } from './types';

export const appData: AppData = {
  "kind": "finance",
  "categoryTitle": "Painel Financeiro",
  "optionTitle": "Contas Pagar Receber",
  "brandName": "Nido Financeiro",
  "tagline": "Painel financeiro para lancamentos, filtros e visao clara de saldo projetado.",
  "summary": "Painel Financeiro para negocios que precisam ver caixa, recebiveis e despesas, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.",
  "audience": "negocios que precisam ver caixa, recebiveis e despesas",
  "styleName": "Editorial claro",
  "parentSlug": "13-mvp-painel-financeiro",
  "optionSlug": "opcao-01-contas-pagar-receber",
  "visual": {
    "name": "Editorial claro",
    "layout": "editorial",
    "texture": "linen",
    "density": "air",
    "radius": "0.7rem",
    "cta": "Comecar diagnostico"
  },
  "theme": {
    "name": "Editorial claro",
    "bg": "#f0f7f5",
    "surface": "#ffffff",
    "surfaceAlt": "#dcece7",
    "text": "#08251c",
    "muted": "#667872",
    "primary": "#047857",
    "secondary": "#2563eb",
    "accent": "#d97706",
    "border": "#afd4c9",
    "shadow": "0 18px 48px rgba(8, 37, 28, 0.12)",
    "onPrimary": "#ffffff",
    "heroOverlay": "rgba(8, 37, 28, 0.14)",
    "heroTint": "rgba(4, 120, 87, 0.16)",
    "pattern": "rgba(4, 120, 87, 0.12)",
    "radius": "0.7rem"
  },
  "heroImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "metrics": [
    {
      "label": "Saldo projetado",
      "value": "R$ 48k",
      "trend": "+13%",
      "note": "Indicador chave para Contas Pagar Receber",
      "tone": "primary"
    },
    {
      "label": "A receber",
      "value": "R$ 32k",
      "trend": "+9%",
      "note": "Atualizado com dados mockados",
      "tone": "secondary"
    },
    {
      "label": "A pagar",
      "value": "R$ 18k",
      "trend": "-4%",
      "note": "Indicador chave para Contas Pagar Receber",
      "tone": "accent"
    },
    {
      "label": "Inadimplencia",
      "value": "5%",
      "trend": "-2%",
      "note": "Atualizado com dados mockados",
      "tone": "neutral"
    }
  ],
  "records": [
    {
      "id": "FIN-1040",
      "title": "Recebimento de mensalidade",
      "owner": "Ana Martins",
      "email": "ana@empresa.com.br",
      "phone": "(11) 98888-1122",
      "status": "Pago",
      "stage": "Pago",
      "priority": "Alta",
      "amount": 1270,
      "date": "2026-07-01",
      "category": "Contas Pagar Receber",
      "description": "Registro demo para Contas Pagar Receber, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 24,
      "meta": "Unidade Centro",
      "tags": [
        "SLA",
        "Prioridade"
      ]
    },
    {
      "id": "FIN-1041",
      "title": "Pagamento de fornecedor",
      "owner": "Bruno Costa",
      "email": "bruno@empresa.com.br",
      "phone": "(21) 97777-3344",
      "status": "Pendente",
      "stage": "Pendente",
      "priority": "Media",
      "amount": 1640,
      "date": "2026-07-02",
      "category": "Operacao",
      "description": "Registro demo para Contas Pagar Receber, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 48,
      "meta": "Canal WhatsApp",
      "tags": [
        "Cliente ativo"
      ]
    },
    {
      "id": "FIN-1042",
      "title": "Comissao comercial",
      "owner": "Carla Nogueira",
      "email": "carla@empresa.com.br",
      "phone": "(31) 96666-5566",
      "status": "Previsto",
      "stage": "Previsto",
      "priority": "Baixa",
      "amount": 2010,
      "date": "2026-07-03",
      "category": "Comercial",
      "description": "Registro demo para Contas Pagar Receber, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 76,
      "meta": "Plano Pro",
      "tags": [
        "Automacao"
      ]
    },
    {
      "id": "FIN-1043",
      "title": "Assinatura de software",
      "owner": "Diego Ramos",
      "email": "diego@empresa.com.br",
      "phone": "(41) 95555-7788",
      "status": "Atrasado",
      "stage": "Atrasado",
      "priority": "Critica",
      "amount": 2380,
      "date": "2026-07-04",
      "category": "Relacionamento",
      "description": "Registro demo para Contas Pagar Receber, com dados realistas para apresentacao comercial e adaptacao rapida.",
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
      "name": "Diagnostico consultivo Contas Pagar Receber",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Implantacao MVP",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Plano mensal",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Treinamento da equipe",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "products": [
    {
      "id": "ITEM-1",
      "name": "Diagnostico consultivo Contas Pagar Receber",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Implantacao MVP",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Plano mensal",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Treinamento da equipe",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Contas Pagar Receber.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "plans": [
    {
      "name": "Start",
      "price": "R$ 497",
      "description": "Base enxuta para validar Contas Pagar Receber.",
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
      "answer": "Sim. Contas Pagar Receber foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista."
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
      "quote": "Contas Pagar Receber mostra valor rapido e facilita a conversa com decisores."
    },
    {
      "name": "Rafael Lima",
      "role": "Gestor Comercial",
      "quote": "A estrutura tem cara de produto pronto, nao de tela estatica."
    }
  ],
  "proofPoints": [
    {
      "title": "Resumo de caixa claro",
      "text": "Contas Pagar Receber ganha uma camada comercial pronta para demonstracao 1."
    },
    {
      "title": "Lancamentos editaveis",
      "text": "Contas Pagar Receber ganha uma camada comercial pronta para demonstracao 2."
    },
    {
      "title": "Saldo projetado visivel",
      "text": "Contas Pagar Receber ganha uma camada comercial pronta para demonstracao 3."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "label": "Lancar"
    },
    {
      "step": "02",
      "label": "Conferir"
    },
    {
      "step": "03",
      "label": "Projetar"
    },
    {
      "step": "04",
      "label": "Decidir"
    }
  ],
  "posts": [
    {
      "id": "POST-1",
      "title": "Como organizar a operacao sem planilhas soltas",
      "category": "Contas Pagar Receber",
      "excerpt": "Conteudo demonstrativo para Contas Pagar Receber, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Contas Pagar Receber pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Equipe LogiCodem",
      "date": "2026-06-29",
      "readTime": "4 min"
    },
    {
      "id": "POST-2",
      "title": "Indicadores que aceleram decisoes comerciais",
      "category": "Estrategia",
      "excerpt": "Conteudo demonstrativo para Contas Pagar Receber, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Contas Pagar Receber pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Produto",
      "date": "2026-06-30",
      "readTime": "5 min"
    },
    {
      "id": "POST-3",
      "title": "Checklist para adaptar um MVP ao cliente real",
      "category": "Produto",
      "excerpt": "Conteudo demonstrativo para Contas Pagar Receber, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Contas Pagar Receber pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Operacoes",
      "date": "2026-07-01",
      "readTime": "6 min"
    },
    {
      "id": "POST-4",
      "title": "Automacoes simples para ganhar produtividade",
      "category": "Operacao",
      "excerpt": "Conteudo demonstrativo para Contas Pagar Receber, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Contas Pagar Receber pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Comercial",
      "date": "2026-07-02",
      "readTime": "7 min"
    }
  ],
  "messages": [
    {
      "role": "assistant",
      "text": "Ola! Sou o assistente demo do Nido Financeiro. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano."
    },
    {
      "role": "user",
      "text": "Quero entender como funciona."
    },
    {
      "role": "assistant",
      "text": "Este MVP simula a jornada principal de Contas Pagar Receber com dados editaveis e acoes no frontend."
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
  "prompt": "Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de Contas Pagar Receber, mantenha a identidade Editorial claro e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.",
  "scopeBullets": [
    "Projeto React + Vite + TypeScript funcional",
    "Layout responsivo para celular, tablet e desktop",
    "Dados mockados organizados e editaveis",
    "Estados de carregamento, vazio, erro e sucesso quando aplicavel",
    "Lancamentos",
    "Resumo financeiro",
    "Filtros por status"
  ],
  "differentialBullets": [
    "Identidade visual editorial claro pensada para negocios que precisam ver caixa, recebiveis e despesas.",
    "Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.",
    "Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.",
    "Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.",
    "Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada."
  ]
};
