import type { AppData } from './types';

export const appData: AppData = {
  "kind": "scheduler",
  "categoryTitle": "Sistema de Agendamento",
  "optionTitle": "Clinica Consultorio",
  "brandName": "Riva Agenda",
  "tagline": "Agenda digital com servicos, datas, horarios e confirmacao simulada em poucos cliques.",
  "summary": "Sistema de Agendamento para servicos com horarios, profissionais e confirmacoes, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.",
  "audience": "servicos com horarios, profissionais e confirmacoes",
  "styleName": "Editorial claro",
  "parentSlug": "06-mvp-sistema-agendamento",
  "optionSlug": "opcao-01-clinica-consultorio",
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
    "bg": "#f1f7f6",
    "surface": "#ffffff",
    "surfaceAlt": "#ddeceb",
    "text": "#12332f",
    "muted": "#6c817e",
    "primary": "#0f766e",
    "secondary": "#7c3aed",
    "accent": "#f59e0b",
    "border": "#b2d3d1",
    "shadow": "0 18px 48px rgba(18, 51, 47, 0.12)",
    "onPrimary": "#ffffff",
    "heroOverlay": "rgba(18, 51, 47, 0.14)",
    "heroTint": "rgba(15, 118, 110, 0.16)",
    "pattern": "rgba(15, 118, 110, 0.12)",
    "radius": "0.7rem"
  },
  "heroImage": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
  "metrics": [
    {
      "label": "Agendamentos",
      "value": "64",
      "trend": "+21%",
      "note": "Indicador chave para Clinica Consultorio",
      "tone": "primary"
    },
    {
      "label": "Horarios livres",
      "value": "18",
      "trend": "-6",
      "note": "Atualizado com dados mockados",
      "tone": "secondary"
    },
    {
      "label": "Comparecimento",
      "value": "91%",
      "trend": "+5%",
      "note": "Indicador chave para Clinica Consultorio",
      "tone": "accent"
    },
    {
      "label": "Receita prevista",
      "value": "R$ 12,8k",
      "trend": "+9%",
      "note": "Atualizado com dados mockados",
      "tone": "neutral"
    }
  ],
  "records": [
    {
      "id": "SCH-1040",
      "title": "Consulta inicial confirmada",
      "owner": "Ana Martins",
      "email": "ana@empresa.com.br",
      "phone": "(11) 98888-1122",
      "status": "Novo",
      "stage": "Novo",
      "priority": "Alta",
      "amount": 2170,
      "date": "2026-07-01",
      "category": "Clinica Consultorio",
      "description": "Registro demo para Clinica Consultorio, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 24,
      "meta": "Unidade Centro",
      "tags": [
        "SLA",
        "Prioridade"
      ]
    },
    {
      "id": "SCH-1041",
      "title": "Retorno de avaliacao",
      "owner": "Bruno Costa",
      "email": "bruno@empresa.com.br",
      "phone": "(21) 97777-3344",
      "status": "Em andamento",
      "stage": "Em andamento",
      "priority": "Media",
      "amount": 2540,
      "date": "2026-07-02",
      "category": "Operacao",
      "description": "Registro demo para Clinica Consultorio, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 48,
      "meta": "Canal WhatsApp",
      "tags": [
        "Cliente ativo"
      ]
    },
    {
      "id": "SCH-1042",
      "title": "Horario premium reservado",
      "owner": "Carla Nogueira",
      "email": "carla@empresa.com.br",
      "phone": "(31) 96666-5566",
      "status": "Concluido",
      "stage": "Concluido",
      "priority": "Baixa",
      "amount": 2910,
      "date": "2026-07-03",
      "category": "Comercial",
      "description": "Registro demo para Clinica Consultorio, com dados realistas para apresentacao comercial e adaptacao rapida.",
      "progress": 76,
      "meta": "Plano Pro",
      "tags": [
        "Automacao"
      ]
    },
    {
      "id": "SCH-1043",
      "title": "Lista de espera para encaixe",
      "owner": "Diego Ramos",
      "email": "diego@empresa.com.br",
      "phone": "(41) 95555-7788",
      "status": "Risco",
      "stage": "Risco",
      "priority": "Critica",
      "amount": 3280,
      "date": "2026-07-04",
      "category": "Relacionamento",
      "description": "Registro demo para Clinica Consultorio, com dados realistas para apresentacao comercial e adaptacao rapida.",
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
      "name": "Atendimento inicial Clinica Consultorio",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Sessao premium",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Avaliacao rapida",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Retorno programado",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "products": [
    {
      "id": "ITEM-1",
      "name": "Atendimento inicial Clinica Consultorio",
      "category": "Essencial",
      "price": 590,
      "stock": 18,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-2",
      "name": "Sessao premium",
      "category": "Mais vendido",
      "price": 960,
      "stock": 7,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-3",
      "name": "Avaliacao rapida",
      "category": "Premium",
      "price": 1330,
      "stock": 32,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "ITEM-4",
      "name": "Retorno programado",
      "category": "Recorrente",
      "price": 1700,
      "stock": 12,
      "description": "Oferta mockada para demonstrar selecao, filtros e simulacao de compra em Clinica Consultorio.",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "plans": [
    {
      "name": "Start",
      "price": "R$ 497",
      "description": "Base enxuta para validar Clinica Consultorio.",
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
      "answer": "Sim. Clinica Consultorio foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista."
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
      "quote": "Clinica Consultorio mostra valor rapido e facilita a conversa com decisores."
    },
    {
      "name": "Rafael Lima",
      "role": "Gestor Comercial",
      "quote": "A estrutura tem cara de produto pronto, nao de tela estatica."
    }
  ],
  "proofPoints": [
    {
      "title": "Agenda com disponibilidade",
      "text": "Clinica Consultorio ganha uma camada comercial pronta para demonstracao 1."
    },
    {
      "title": "Escolha de servico sem atrito",
      "text": "Clinica Consultorio ganha uma camada comercial pronta para demonstracao 2."
    },
    {
      "title": "Confirmacao visivel",
      "text": "Clinica Consultorio ganha uma camada comercial pronta para demonstracao 3."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "label": "Escolher"
    },
    {
      "step": "02",
      "label": "Reservar"
    },
    {
      "step": "03",
      "label": "Confirmar"
    },
    {
      "step": "04",
      "label": "Atender"
    }
  ],
  "posts": [
    {
      "id": "POST-1",
      "title": "Como organizar a operacao sem planilhas soltas",
      "category": "Clinica Consultorio",
      "excerpt": "Conteudo demonstrativo para Clinica Consultorio, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Clinica Consultorio pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Equipe LogiCodem",
      "date": "2026-06-29",
      "readTime": "4 min"
    },
    {
      "id": "POST-2",
      "title": "Indicadores que aceleram decisoes comerciais",
      "category": "Estrategia",
      "excerpt": "Conteudo demonstrativo para Clinica Consultorio, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Clinica Consultorio pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Produto",
      "date": "2026-06-30",
      "readTime": "5 min"
    },
    {
      "id": "POST-3",
      "title": "Checklist para adaptar um MVP ao cliente real",
      "category": "Produto",
      "excerpt": "Conteudo demonstrativo para Clinica Consultorio, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Clinica Consultorio pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Operacoes",
      "date": "2026-07-01",
      "readTime": "6 min"
    },
    {
      "id": "POST-4",
      "title": "Automacoes simples para ganhar produtividade",
      "category": "Operacao",
      "excerpt": "Conteudo demonstrativo para Clinica Consultorio, com texto editavel e busca funcional.",
      "body": "Este artigo mostra como Clinica Consultorio pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.",
      "author": "Comercial",
      "date": "2026-07-02",
      "readTime": "7 min"
    }
  ],
  "messages": [
    {
      "role": "assistant",
      "text": "Ola! Sou o assistente demo do Riva Agenda. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano."
    },
    {
      "role": "user",
      "text": "Quero entender como funciona."
    },
    {
      "role": "assistant",
      "text": "Este MVP simula a jornada principal de Clinica Consultorio com dados editaveis e acoes no frontend."
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
  "prompt": "Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de Clinica Consultorio, mantenha a identidade Editorial claro e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.",
  "scopeBullets": [
    "Projeto React + Vite + TypeScript funcional",
    "Layout responsivo para celular, tablet e desktop",
    "Dados mockados organizados e editaveis",
    "Estados de carregamento, vazio, erro e sucesso quando aplicavel",
    "Selecao de servico",
    "Data e horario",
    "Confirmacao e lista de agendamentos"
  ],
  "differentialBullets": [
    "Identidade visual editorial claro pensada para servicos com horarios, profissionais e confirmacoes.",
    "Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.",
    "Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.",
    "Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.",
    "Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada."
  ]
};
