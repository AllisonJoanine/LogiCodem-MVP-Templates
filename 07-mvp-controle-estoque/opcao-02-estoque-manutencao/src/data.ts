import type { AppData } from './types';

export const appData: AppData = {
  "kind": "inventory",
  "categoryTitle": "Controle de Estoque",
  "optionTitle": "Estoque Manutencao",
  "brandName": "Auge Estoque",
  "tagline": "Controle de estoque com cadastro, movimentacoes e alertas para operacoes enxutas.",
  "summary": "Controle de Estoque para negocios que controlam produtos, entradas, saidas e reposicao, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.",
  "audience": "negocios que controlam produtos, entradas, saidas e reposicao",
  "styleName": "Command center premium",
  "parentSlug": "07-mvp-controle-estoque",
  "optionSlug": "opcao-02-estoque-manutencao",
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
    "bg": "#0c180f",
    "surface": "#101f13",
    "surfaceAlt": "#0e353a",
    "text": "#ecf5ef",
    "muted": "#9ba39d",
    "primary": "#3f9760",
    "secondary": "#1c78aa",
    "accent": "#d09822",
    "border": "#134a26",
    "shadow": "0 24px 60px rgba(0, 0, 0, 0.38)",
    "onPrimary": "#ffffff",
    "heroOverlay": "rgba(18, 35, 22, 0.52)",
    "heroTint": "rgba(21, 128, 61, 0.22)",
    "pattern": "rgba(21, 128, 61, 0.16)",
    "radius": "0.55rem"
  },
  "heroImage": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  "metrics": [
    {
      "label": "Itens cadastrados",
      "value": "248",
      "trend": "+32",
      "note": "Indicador chave para Estoque Manutencao",
      "tone": "primary"
    },
    {
      "label": "Estoque baixo",
      "value": "11",
      "trend": "-4",
      "note": "Atualizado com dados mockados",
      "tone": "secondary"
    },
    {
      "label": "Giro mensal",
      "value": "3,8x",
      "trend": "+0,6",
      "note": "Indicador chave para Estoque Manutencao",
      "tone": "accent"
    },
    {
      "label": "Valor em estoque",
      "value": "R$ 74k",
      "trend": "+8%",
      "note": "Atualizado com dados mockados",
      "tone": "neutral"
    }
  ],
  "records": [
    {
      "id": "INV-1040",
      "title": "Reposicao de itens campeoes",
      "owner": "Ana Martins",
      "email": "ana@empresa.com.br",
      "phone": "(11) 98888-1122",
      "status": "Novo",
      "stage": "Novo",
      "priority": "Alta",
      "amount": 2170,
      "date": "2026-07-01",
      "category": "Estoque Manutencao",
      "description": "Registro demo para Estoque Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 24,
      "meta": "Unidade Centro",
      "tags": [
        "SLA",
        "Prioridade"
      ]
    },
    {
      "id": "INV-1041",
      "title": "Entrada de lote fornecedor",
      "owner": "Bruno Costa",
      "email": "bruno@empresa.com.br",
      "phone": "(21) 97777-3344",
      "status": "Em andamento",
      "stage": "Em andamento",
      "priority": "Media",
      "amount": 2540,
      "date": "2026-07-02",
      "category": "Operacao",
      "description": "Registro demo para Estoque Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 48,
      "meta": "Canal WhatsApp",
      "tags": [
        "Cliente ativo"
      ]
    },
    {
      "id": "INV-1042",
      "title": "Saida para venda balcão",
      "owner": "Carla Nogueira",
      "email": "carla@empresa.com.br",
      "phone": "(31) 96666-5566",
      "status": "Concluido",
      "stage": "Concluido",
      "priority": "Baixa",
      "amount": 2910,
      "date": "2026-07-03",
      "category": "Comercial",
      "description": "Registro demo para Estoque Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 76,
      "meta": "Plano Pro",
      "tags": [
        "Automacao"
      ]
    },
    {
      "id": "INV-1043",
      "title": "Auditoria de estoque baixo",
      "owner": "Diego Ramos",
      "email": "diego@empresa.com.br",
      "phone": "(41) 95555-7788",
      "status": "Risco",
      "stage": "Risco",
      "priority": "Critica",
      "amount": 3280,
      "date": "2026-07-04",
      "category": "Relacionamento",
      "description": "Registro demo para Estoque Manutencao, com dados realistas para apresentacao comercial e adaptacao rapida.",
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
      "name": "Kit reposicao premium Estoque Manutencao",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Sensor inteligente",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Pacote de etiquetas",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Caixa organizadora",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "products": [
    {
      "id": "ITEM-1",
      "name": "Kit reposicao premium Estoque Manutencao",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Sensor inteligente",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Pacote de etiquetas",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Caixa organizadora",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Estoque Manutencao.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "plans": [
    {
      "name": "Start",
      "price": "R$ 497",
      "description": "Base enxuta para validar Estoque Manutencao.",
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
      "answer": "Sim. Estoque Manutencao foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista."
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
      "quote": "Estoque Manutencao mostra valor rapido e facilita a conversa com decisores."
    },
    {
      "name": "Rafael Lima",
      "role": "Gestor Comercial",
      "quote": "A estrutura tem cara de produto pronto, nao de tela estatica."
    }
  ],
  "proofPoints": [
    {
      "title": "Giro e reposicao em foco",
      "text": "Estoque Manutencao ganha uma camada comercial pronta para demonstracao 1."
    },
    {
      "title": "Movimentacao sem backend",
      "text": "Estoque Manutencao ganha uma camada comercial pronta para demonstracao 2."
    },
    {
      "title": "Alertas de risco claros",
      "text": "Estoque Manutencao ganha uma camada comercial pronta para demonstracao 3."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "label": "Cadastrar"
    },
    {
      "step": "02",
      "label": "Movimentar"
    },
    {
      "step": "03",
      "label": "Alertar"
    },
    {
      "step": "04",
      "label": "Repor"
    }
  ],
  "posts": [
    {
      "id": "POST-1",
      "title": "Como organizar a operacao sem planilhas soltas",
      "category": "Estoque Manutencao",
      "excerpt": "Conteudo demonstrativo para Estoque Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Estoque Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Equipe LogiCodem",
      "date": "2026-06-29",
      "readTime": "4 min"
    },
    {
      "id": "POST-2",
      "title": "Indicadores que aceleram decisoes comerciais",
      "category": "Estrategia",
      "excerpt": "Conteudo demonstrativo para Estoque Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Estoque Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Produto",
      "date": "2026-06-30",
      "readTime": "5 min"
    },
    {
      "id": "POST-3",
      "title": "Checklist para adaptar um MVP ao cliente real",
      "category": "Produto",
      "excerpt": "Conteudo demonstrativo para Estoque Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Estoque Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Operacoes",
      "date": "2026-07-01",
      "readTime": "6 min"
    },
    {
      "id": "POST-4",
      "title": "Automacoes simples para ganhar produtividade",
      "category": "Operacao",
      "excerpt": "Conteudo demonstrativo para Estoque Manutencao, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Estoque Manutencao pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Comercial",
      "date": "2026-07-02",
      "readTime": "7 min"
    }
  ],
  "messages": [
    {
      "role": "assistant",
      "text": "Ola! Sou o assistente demo do Auge Estoque. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano."
    },
    {
      "role": "user",
      "text": "Quero entender como funciona."
    },
    {
      "role": "assistant",
      "text": "Este MVP simula a jornada principal de Estoque Manutencao com dados editaveis e acoes no frontend."
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
  "prompt": "Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de Estoque Manutencao, mantenha a identidade Command center premium e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.",
  "scopeBullets": [
    "Projeto React + Vite + TypeScript funcional",
    "Layout responsivo para celular, tablet e desktop",
    "Dados mockados organizados e editaveis",
    "Estados de carregamento, vazio, erro e sucesso quando aplicavel",
    "Cadastro de produto",
    "Entrada e saida de estoque",
    "Alertas de baixo estoque"
  ],
  "differentialBullets": [
    "Identidade visual command center premium pensada para negocios que controlam produtos, entradas, saidas e reposicao.",
    "Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.",
    "Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.",
    "Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.",
    "Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada."
  ]
};
