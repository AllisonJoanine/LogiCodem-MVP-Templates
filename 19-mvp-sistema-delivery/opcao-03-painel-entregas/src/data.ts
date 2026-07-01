import type { AppData } from './types';

export const appData: AppData = {
  "kind": "delivery",
  "categoryTitle": "Sistema Delivery",
  "optionTitle": "Painel Entregas",
  "brandName": "Savia Delivery",
  "tagline": "Sistema delivery com cardapio, carrinho, pedidos e status de entrega.",
  "summary": "Sistema Delivery para restaurantes e operacoes locais com pedidos e entregas, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.",
  "audience": "restaurantes e operacoes locais com pedidos e entregas",
  "styleName": "Conversao objetiva",
  "parentSlug": "19-mvp-sistema-delivery",
  "optionSlug": "opcao-03-painel-entregas",
  "visual": {
    "name": "Conversao objetiva",
    "layout": "conversion",
    "texture": "stripes",
    "density": "sales",
    "radius": "0.45rem",
    "cta": "Simular proposta"
  },
  "theme": {
    "name": "Conversao objetiva",
    "bg": "#fef5e7",
    "surface": "#ffffff",
    "surfaceAlt": "#fdeac9",
    "text": "#26100d",
    "muted": "#70615f",
    "primary": "#f59e0b",
    "secondary": "#dc2626",
    "accent": "#16a34a",
    "border": "#fbdaa2",
    "shadow": "0 18px 46px rgba(38, 16, 13, 0.14)",
    "onPrimary": "#07111f",
    "heroOverlay": "rgba(38, 16, 13, 0.18)",
    "heroTint": "rgba(245, 158, 11, 0.2)",
    "pattern": "rgba(38, 16, 13, 0.1)",
    "radius": "0.45rem"
  },
  "heroImage": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "metrics": [
    {
      "label": "Pedidos hoje",
      "value": "89",
      "trend": "+24%",
      "note": "Indicador chave para Painel Entregas",
      "tone": "primary"
    },
    {
      "label": "Tempo medio",
      "value": "31min",
      "trend": "-7min",
      "note": "Atualizado com dados mockados",
      "tone": "secondary"
    },
    {
      "label": "Ticket medio",
      "value": "R$ 68",
      "trend": "+12%",
      "note": "Indicador chave para Painel Entregas",
      "tone": "accent"
    },
    {
      "label": "Entregas ativas",
      "value": "14",
      "trend": "+6",
      "note": "Atualizado com dados mockados",
      "tone": "neutral"
    }
  ],
  "records": [
    {
      "id": "DEL-1040",
      "title": "Pedido recebido pelo WhatsApp",
      "owner": "Ana Martins",
      "email": "ana@empresa.com.br",
      "phone": "(11) 98888-1122",
      "status": "Novo",
      "stage": "Novo",
      "priority": "Alta",
      "amount": 2170,
      "date": "2026-07-01",
      "category": "Painel Entregas",
      "description": "Registro demo para Painel Entregas, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 24,
      "meta": "Unidade Centro",
      "tags": [
        "SLA",
        "Prioridade"
      ]
    },
    {
      "id": "DEL-1041",
      "title": "Combo em preparo",
      "owner": "Bruno Costa",
      "email": "bruno@empresa.com.br",
      "phone": "(21) 97777-3344",
      "status": "Em andamento",
      "stage": "Em andamento",
      "priority": "Media",
      "amount": 2540,
      "date": "2026-07-02",
      "category": "Operacao",
      "description": "Registro demo para Painel Entregas, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 48,
      "meta": "Canal WhatsApp",
      "tags": [
        "Cliente ativo"
      ]
    },
    {
      "id": "DEL-1042",
      "title": "Entrega saiu para rota",
      "owner": "Carla Nogueira",
      "email": "carla@empresa.com.br",
      "phone": "(31) 96666-5566",
      "status": "Concluido",
      "stage": "Concluido",
      "priority": "Baixa",
      "amount": 2910,
      "date": "2026-07-03",
      "category": "Comercial",
      "description": "Registro demo para Painel Entregas, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 76,
      "meta": "Plano Pro",
      "tags": [
        "Automacao"
      ]
    },
    {
      "id": "DEL-1043",
      "title": "Cliente avaliou atendimento",
      "owner": "Diego Ramos",
      "email": "diego@empresa.com.br",
      "phone": "(41) 95555-7788",
      "status": "Risco",
      "stage": "Risco",
      "priority": "Critica",
      "amount": 3280,
      "date": "2026-07-04",
      "category": "Relacionamento",
      "description": "Registro demo para Painel Entregas, com dados realistas para apresentacao comercial e adaptacao rapida.",
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
      "name": "Combo artesanal Painel Entregas",
      "category": "Essencial",
      "price": 394,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Prato executivo",
      "category": "Mais vendido",
      "price": 764,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Bebida gelada",
      "category": "Premium",
      "price": 1134,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Sobremesa da casa",
      "category": "Recorrente",
      "price": 1504,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "products": [
    {
      "id": "ITEM-1",
      "name": "Combo artesanal Painel Entregas",
      "category": "Essencial",
      "price": 394,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Prato executivo",
      "category": "Mais vendido",
      "price": 764,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Bebida gelada",
      "category": "Premium",
      "price": 1134,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Sobremesa da casa",
      "category": "Recorrente",
      "price": 1504,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Painel Entregas.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "plans": [
    {
      "name": "Start",
      "price": "R$ 497",
      "description": "Base enxuta para validar Painel Entregas.",
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
      "answer": "Sim. Painel Entregas foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista."
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
      "quote": "Painel Entregas mostra valor rapido e facilita a conversa com decisores."
    },
    {
      "name": "Rafael Lima",
      "role": "Gestor Comercial",
      "quote": "A estrutura tem cara de produto pronto, nao de tela estatica."
    }
  ],
  "proofPoints": [
    {
      "title": "Cardapio com pedido",
      "text": "Painel Entregas ganha uma camada comercial pronta para demonstracao 1."
    },
    {
      "title": "Carrinho vivo",
      "text": "Painel Entregas ganha uma camada comercial pronta para demonstracao 2."
    },
    {
      "title": "Status de entrega",
      "text": "Painel Entregas ganha uma camada comercial pronta para demonstracao 3."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "label": "Escolher"
    },
    {
      "step": "02",
      "label": "Pedir"
    },
    {
      "step": "03",
      "label": "Preparar"
    },
    {
      "step": "04",
      "label": "Entregar"
    }
  ],
  "posts": [
    {
      "id": "POST-1",
      "title": "Como organizar a operacao sem planilhas soltas",
      "category": "Painel Entregas",
      "excerpt": "Conteudo demonstrativo para Painel Entregas, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Painel Entregas pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Equipe LogiCodem",
      "date": "2026-06-29",
      "readTime": "4 min"
    },
    {
      "id": "POST-2",
      "title": "Indicadores que aceleram decisoes comerciais",
      "category": "Estrategia",
      "excerpt": "Conteudo demonstrativo para Painel Entregas, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Painel Entregas pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Produto",
      "date": "2026-06-30",
      "readTime": "5 min"
    },
    {
      "id": "POST-3",
      "title": "Checklist para adaptar um MVP ao cliente real",
      "category": "Produto",
      "excerpt": "Conteudo demonstrativo para Painel Entregas, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Painel Entregas pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Operacoes",
      "date": "2026-07-01",
      "readTime": "6 min"
    },
    {
      "id": "POST-4",
      "title": "Automacoes simples para ganhar produtividade",
      "category": "Operacao",
      "excerpt": "Conteudo demonstrativo para Painel Entregas, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Painel Entregas pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Comercial",
      "date": "2026-07-02",
      "readTime": "7 min"
    }
  ],
  "messages": [
    {
      "role": "assistant",
      "text": "Ola! Sou o assistente demo do Savia Delivery. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano."
    },
    {
      "role": "user",
      "text": "Quero entender como funciona."
    },
    {
      "role": "assistant",
      "text": "Este MVP simula a jornada principal de Painel Entregas com dados editaveis e acoes no frontend."
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
  "prompt": "Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de Painel Entregas, mantenha a identidade Conversao objetiva e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.",
  "scopeBullets": [
    "Projeto React + Vite + TypeScript funcional",
    "Layout responsivo para celular, tablet e desktop",
    "Dados mockados organizados e editaveis",
    "Estados de carregamento, vazio, erro e sucesso quando aplicavel",
    "Cardapio",
    "Carrinho",
    "Pedido e acompanhamento"
  ],
  "differentialBullets": [
    "Identidade visual conversao objetiva pensada para restaurantes e operacoes locais com pedidos e entregas.",
    "Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.",
    "Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.",
    "Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.",
    "Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada."
  ]
};
