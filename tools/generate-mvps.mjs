import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const categoryMap = {
  '01-mvp-site-institucional': { kind: 'marketing', title: 'Site Institucional', suffix: 'Site', audience: 'empresas de servicos que precisam gerar confianca e contatos qualificados' },
  '02-mvp-landing-page-saas': { kind: 'landing', title: 'Landing Page SaaS', suffix: 'SaaS', audience: 'startups e softwares B2B em fase de validacao comercial' },
  '03-mvp-portfolio-profissional': { kind: 'portfolio', title: 'Portfolio Profissional', suffix: 'Portfolio', audience: 'profissionais que vendem autoridade, repertorio e agenda' },
  '04-mvp-admin-dashboard': { kind: 'dashboard', title: 'Admin Dashboard', suffix: 'Dashboard', audience: 'operacoes que precisam acompanhar indicadores e decisoes do dia' },
  '05-mvp-sistema-chamados': { kind: 'tickets', title: 'Sistema de Chamados', suffix: 'Helpdesk', audience: 'times de suporte que precisam controlar SLA e atendimento' },
  '06-mvp-sistema-agendamento': { kind: 'scheduler', title: 'Sistema de Agendamento', suffix: 'Agenda', audience: 'servicos com horarios, profissionais e confirmacoes' },
  '07-mvp-controle-estoque': { kind: 'inventory', title: 'Controle de Estoque', suffix: 'Estoque', audience: 'negocios que controlam produtos, entradas, saidas e reposicao' },
  '08-mvp-crm-simples': { kind: 'crm', title: 'CRM Simples', suffix: 'CRM', audience: 'equipes comerciais que precisam organizar leads e oportunidades' },
  '09-mvp-chatbot-ia': { kind: 'chatbot', title: 'Chatbot IA', suffix: 'Bot', audience: 'empresas que querem atendimento simulado, triagem e respostas rapidas' },
  '10-mvp-gerador-email-chamados': { kind: 'email', title: 'Gerador de E-mail', suffix: 'Mail', audience: 'suportes que precisam padronizar comunicacoes de chamados' },
  '11-mvp-sistema-os-servicos': { kind: 'serviceOrders', title: 'Sistema de OS', suffix: 'OS', audience: 'prestadores que controlam ordens de servico e execucao em campo' },
  '12-mvp-catalogo-produtos': { kind: 'catalog', title: 'Catalogo de Produtos', suffix: 'Catalogo', audience: 'lojas e prestadores que vendem por catalogo e WhatsApp' },
  '13-mvp-painel-financeiro': { kind: 'finance', title: 'Painel Financeiro', suffix: 'Financeiro', audience: 'negocios que precisam ver caixa, recebiveis e despesas' },
  '14-mvp-sistema-clientes': { kind: 'clients', title: 'Sistema de Clientes', suffix: 'Clientes', audience: 'empresas que acompanham cadastro, historico e relacionamento' },
  '15-mvp-sistema-login-auth': { kind: 'auth', title: 'Login e Autenticacao', suffix: 'Auth', audience: 'produtos digitais que precisam demonstrar acesso protegido' },
  '16-mvp-blog-noticias': { kind: 'blog', title: 'Blog e Noticias', suffix: 'Conteudo', audience: 'marcas que publicam conteudo, capturam leads e educam mercado' },
  '17-mvp-painel-relatorios': { kind: 'reports', title: 'Painel de Relatorios', suffix: 'Relatorios', audience: 'gestores que precisam filtrar, comparar e exportar indicadores' },
  '18-mvp-sistema-condominio': { kind: 'condo', title: 'Sistema de Condominio', suffix: 'Condominio', audience: 'administradoras e condominios que organizam rotina e ocorrencias' },
  '19-mvp-sistema-delivery': { kind: 'delivery', title: 'Sistema Delivery', suffix: 'Delivery', audience: 'restaurantes e operacoes locais com pedidos e entregas' },
  '20-mvp-sistema-clinica': { kind: 'clinic', title: 'Sistema de Clinica', suffix: 'Clinica', audience: 'clinicas e consultorios que gerenciam agenda, pacientes e atendimentos' }
};

const stylePresets = [
  {
    name: 'Clean comercial',
    bg: '#f7fafc',
    surface: '#ffffff',
    surfaceAlt: '#eef7f6',
    text: '#102027',
    muted: '#60717a',
    primary: '#0f8f83',
    secondary: '#2563eb',
    accent: '#f2a900',
    border: '#dce7eb',
    shadow: '0 18px 45px rgba(15, 52, 68, 0.12)'
  },
  {
    name: 'Premium tecnologico',
    bg: '#08111f',
    surface: '#101b2e',
    surfaceAlt: '#17243a',
    text: '#edf5ff',
    muted: '#9fb2c7',
    primary: '#7dd3fc',
    secondary: '#a78bfa',
    accent: '#f7c873',
    border: '#28405f',
    shadow: '0 22px 55px rgba(0, 0, 0, 0.35)'
  },
  {
    name: 'Conversao direta',
    bg: '#fff8f1',
    surface: '#ffffff',
    surfaceAlt: '#fce8d5',
    text: '#221713',
    muted: '#715f56',
    primary: '#e4572e',
    secondary: '#1b998b',
    accent: '#2d3047',
    border: '#efd6c6',
    shadow: '0 16px 42px rgba(122, 69, 38, 0.14)'
  }
];

const brandPrefixes = [
  'Nexa', 'Vero', 'Atlas', 'Lume', 'Cora', 'Orion', 'Prisma', 'Vanta', 'Atria', 'Pulse',
  'Elo', 'Faro', 'Mira', 'Tera', 'Nova', 'Riva', 'Domo', 'Kair', 'Soma', 'Auge',
  'Iris', 'Vetta', 'Clara', 'Apex', 'Viva', 'Rumo', 'Pleno', 'Ciclo', 'Tria', 'Mobi',
  'Flux', 'Aster', 'Brix', 'Civis', 'Zelo', 'Modo', 'Nido', 'Raiz', 'Norte', 'Pacto',
  'Forma', 'Liv', 'Delta', 'Opera', 'Senda', 'Arco', 'Bela', 'Lira', 'Hera', 'Navi',
  'Tacto', 'Zion', 'Ares', 'Solvi', 'Move', 'Fina', 'Savia', 'Habita', 'Menu', 'Vital'
];

const imagePool = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80'
];

const categoryPalettes = {
  marketing: ['#0f8f83', '#2563eb', '#f2a900', '#102027'],
  landing: ['#5b6cff', '#00a6a6', '#ffb703', '#111827'],
  portfolio: ['#7c3aed', '#0f766e', '#f59e0b', '#171026'],
  dashboard: ['#2563eb', '#14b8a6', '#f97316', '#0f172a'],
  tickets: ['#0ea5e9', '#6366f1', '#f43f5e', '#0b1f33'],
  scheduler: ['#0f766e', '#7c3aed', '#f59e0b', '#12332f'],
  inventory: ['#15803d', '#0369a1', '#ca8a04', '#122316'],
  crm: ['#e11d48', '#2563eb', '#f59e0b', '#2a0f1b'],
  chatbot: ['#8b5cf6', '#06b6d4', '#facc15', '#160f2f'],
  email: ['#db2777', '#0f766e', '#f97316', '#29111f'],
  serviceOrders: ['#ea580c', '#0f766e', '#2563eb', '#2b1607'],
  catalog: ['#16a34a', '#0891b2', '#f97316', '#102015'],
  finance: ['#047857', '#2563eb', '#d97706', '#08251c'],
  clients: ['#2563eb', '#9333ea', '#f59e0b', '#111c31'],
  auth: ['#4f46e5', '#0f766e', '#f43f5e', '#111827'],
  blog: ['#be123c', '#0f766e', '#f59e0b', '#241018'],
  reports: ['#2563eb', '#7c3aed', '#14b8a6', '#101827'],
  condo: ['#0f766e', '#64748b', '#f59e0b', '#102421'],
  delivery: ['#dc2626', '#16a34a', '#f59e0b', '#26100d'],
  clinic: ['#0891b2', '#0f766e', '#a855f7', '#0d2530']
};

const visualProfiles = [
  { name: 'Editorial claro', layout: 'editorial', texture: 'linen', density: 'air', radius: '0.7rem', cta: 'Comecar diagnostico' },
  { name: 'Command center premium', layout: 'command', texture: 'grid', density: 'dense', radius: '0.55rem', cta: 'Abrir painel executivo' },
  { name: 'Conversao objetiva', layout: 'conversion', texture: 'stripes', density: 'sales', radius: '0.45rem', cta: 'Simular proposta' }
];

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  const value = Number.parseInt(normalized, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`;
}

function mixHex(a, b, weight = 0.5) {
  const left = hexToRgb(a);
  const right = hexToRgb(b);
  return rgbToHex({
    r: left.r * (1 - weight) + right.r * weight,
    g: left.g * (1 - weight) + right.g * weight,
    b: left.b * (1 - weight) + right.b * weight
  });
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function readableOn(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.58 ? '#07111f' : '#ffffff';
}

function buildTheme(kind, optionSlug) {
  const option = optionIndex(optionSlug);
  const [primary, secondary, accent, dark] = categoryPalettes[kind] ?? categoryPalettes.dashboard;
  const profile = visualProfiles[option - 1] ?? visualProfiles[0];

  if (option === 2) {
    const surface = mixHex(dark, '#000000', 0.12);
    const surfaceAlt = mixHex(secondary, dark, 0.74);
    const boostedPrimary = mixHex(primary, '#ffffff', 0.18);
    return {
      name: profile.name,
      bg: mixHex(dark, '#000000', 0.32),
      surface,
      surfaceAlt,
      text: mixHex('#ffffff', primary, 0.08),
      muted: mixHex('#ffffff', dark, 0.42),
      primary: boostedPrimary,
      secondary: mixHex(secondary, '#ffffff', 0.1),
      accent: mixHex(accent, '#ffffff', 0.12),
      border: mixHex(primary, dark, 0.58),
      shadow: '0 24px 60px rgba(0, 0, 0, 0.38)',
      onPrimary: readableOn(boostedPrimary),
      heroOverlay: rgba(dark, 0.52),
      heroTint: rgba(primary, 0.22),
      pattern: rgba(primary, 0.16),
      radius: profile.radius
    };
  }

  if (option === 3) {
    const warmBg = mixHex(accent, '#ffffff', 0.9);
    return {
      name: profile.name,
      bg: warmBg,
      surface: '#ffffff',
      surfaceAlt: mixHex(accent, '#ffffff', 0.78),
      text: dark,
      muted: mixHex(dark, '#ffffff', 0.34),
      primary: accent,
      secondary: primary,
      accent: secondary,
      border: mixHex(accent, '#ffffff', 0.62),
      shadow: `0 18px 46px ${rgba(dark, 0.14)}`,
      onPrimary: readableOn(accent),
      heroOverlay: rgba(dark, 0.18),
      heroTint: rgba(accent, 0.2),
      pattern: rgba(dark, 0.1),
      radius: profile.radius
    };
  }

  return {
    name: profile.name,
    bg: mixHex(primary, '#ffffff', 0.94),
    surface: '#ffffff',
    surfaceAlt: mixHex(primary, '#ffffff', 0.86),
    text: dark,
    muted: mixHex(dark, '#ffffff', 0.38),
    primary,
    secondary,
    accent,
    border: mixHex(primary, '#ffffff', 0.68),
    shadow: `0 18px 48px ${rgba(dark, 0.12)}`,
    onPrimary: readableOn(primary),
    heroOverlay: rgba(dark, 0.14),
    heroTint: rgba(primary, 0.16),
    pattern: rgba(primary, 0.12),
    radius: profile.radius
  };
}

function visualFor(optionSlug) {
  return visualProfiles[optionIndex(optionSlug) - 1] ?? visualProfiles[0];
}

function slugTitle(slug) {
  return slug
    .replace(/^opcao-\d+-/, '')
    .replace(/^\d{2}-mvp-/, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function packageName(parentSlug, optionSlug) {
  return `logicodem-${parentSlug}-${optionSlug}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

function optionIndex(optionSlug) {
  const match = optionSlug.match(/opcao-(\d+)/);
  return match ? Number(match[1]) : 1;
}

function todayOffset(days) {
  const date = new Date(Date.UTC(2026, 6, 1 + days));
  return date.toISOString().slice(0, 10);
}

function money(seed, base = 1400) {
  return base + seed * 370;
}

function makeMetrics(kind, optionTitle) {
  const byKind = {
    marketing: [['Leads no mes', '42', '+18%'], ['Taxa de contato', '31%', '+7%'], ['Propostas abertas', '9', '+3'], ['Tempo de resposta', '12min', '-22%']],
    landing: [['Conversoes', '18,4%', '+5,2%'], ['MRR simulado', 'R$ 28k', '+14%'], ['Trials ativos', '126', '+31'], ['CAC estimado', 'R$ 91', '-8%']],
    portfolio: [['Projetos destaque', '12', '+4'], ['Reunioes marcadas', '8', '+2'], ['Cases publicados', '5', '+1'], ['Tempo de resposta', '9min', '-18%']],
    dashboard: [['Receita monitorada', 'R$ 184k', '+12%'], ['Clientes ativos', '312', '+19'], ['Alertas criticos', '4', '-3'], ['Meta do mes', '87%', '+11%']],
    tickets: [['Chamados abertos', '37', '+6'], ['SLA cumprido', '92%', '+4%'], ['Tempo medio', '2h 10m', '-16%'], ['Satisfacao', '4,7/5', '+0,3']],
    scheduler: [['Agendamentos', '64', '+21%'], ['Horarios livres', '18', '-6'], ['Comparecimento', '91%', '+5%'], ['Receita prevista', 'R$ 12,8k', '+9%']],
    inventory: [['Itens cadastrados', '248', '+32'], ['Estoque baixo', '11', '-4'], ['Giro mensal', '3,8x', '+0,6'], ['Valor em estoque', 'R$ 74k', '+8%']],
    crm: [['Leads ativos', '86', '+17'], ['Pipeline', 'R$ 216k', '+22%'], ['Taxa de ganho', '28%', '+6%'], ['Follow-ups hoje', '14', '+5']],
    chatbot: [['Conversas hoje', '138', '+34%'], ['Resolucao automatica', '62%', '+12%'], ['Fila humana', '7', '-5'], ['Nota media', '4,6/5', '+0,4']],
    email: [['E-mails gerados', '52', '+15'], ['Modelos ativos', '9', '+2'], ['Tempo economizado', '6h', '+3h'], ['Retornos positivos', '41%', '+9%']],
    serviceOrders: [['OS em andamento', '23', '+7'], ['Concluidas no mes', '118', '+16%'], ['Tecnicos ativos', '9', '+2'], ['Retrabalho', '3%', '-4%']],
    catalog: [['Itens publicados', '96', '+18'], ['Pedidos simulados', '27', '+11'], ['Ticket medio', 'R$ 183', '+7%'], ['Cliques WhatsApp', '74', '+21%']],
    finance: [['Saldo projetado', 'R$ 48k', '+13%'], ['A receber', 'R$ 32k', '+9%'], ['A pagar', 'R$ 18k', '-4%'], ['Inadimplencia', '5%', '-2%']],
    clients: [['Clientes ativos', '214', '+24'], ['Novos cadastros', '31', '+8'], ['Atendimentos', '76', '+15'], ['NPS', '72', '+6']],
    auth: [['Sessoes ativas', '128', '+19'], ['Perfis criados', '6', '+2'], ['Tentativas bloqueadas', '3', '-5'], ['Tenants demo', '4', '+1']],
    blog: [['Posts publicados', '38', '+5'], ['Leitores mensais', '12,4k', '+18%'], ['Newsletter', '842', '+61'], ['Tempo medio', '3m 42s', '+28s']],
    reports: [['Relatorios gerados', '74', '+13'], ['Fontes ativas', '6', '+1'], ['Variacao positiva', '18%', '+4%'], ['Exportacoes', '29', '+9']],
    condo: [['Moradores ativos', '486', '+12'], ['Visitantes hoje', '34', '+8'], ['Ocorrencias abertas', '5', '-3'], ['Reservas no mes', '42', '+11']],
    delivery: [['Pedidos hoje', '89', '+24%'], ['Tempo medio', '31min', '-7min'], ['Ticket medio', 'R$ 68', '+12%'], ['Entregas ativas', '14', '+6']],
    clinic: [['Consultas hoje', '28', '+6'], ['Pacientes ativos', '1.248', '+37'], ['No-show', '6%', '-2%'], ['Receita prevista', 'R$ 36k', '+10%']]
  };
  return (byKind[kind] ?? byKind.dashboard).map(([label, value, trend], index) => ({
    label,
    value,
    trend,
    note: index % 2 === 0 ? `Indicador chave para ${optionTitle}` : 'Atualizado com dados mockados',
    tone: ['primary', 'secondary', 'accent', 'neutral'][index]
  }));
}

function makeRecords(kind, optionTitle) {
  const common = [
    ['Ana Martins', 'ana@empresa.com.br', '(11) 98888-1122'],
    ['Bruno Costa', 'bruno@empresa.com.br', '(21) 97777-3344'],
    ['Carla Nogueira', 'carla@empresa.com.br', '(31) 96666-5566'],
    ['Diego Ramos', 'diego@empresa.com.br', '(41) 95555-7788']
  ];
  const presets = {
    tickets: ['VPN bloqueada para equipe externa', 'Cliente sem acesso ao portal', 'Impressora fiscal parou de responder', 'Solicitacao de novo notebook'],
    scheduler: ['Consulta inicial confirmada', 'Retorno de avaliacao', 'Horario premium reservado', 'Lista de espera para encaixe'],
    inventory: ['Reposicao de itens campeoes', 'Entrada de lote fornecedor', 'Saida para venda balcão', 'Auditoria de estoque baixo'],
    crm: ['Lead inbound com urgencia', 'Proposta aguardando retorno', 'Reuniao de diagnostico marcada', 'Contrato em validacao juridica'],
    chatbot: ['Triagem automatica concluida', 'Pergunta sobre precos', 'Cliente pediu atendimento humano', 'Base de conhecimento atualizada'],
    email: ['Resposta de SLA para chamado aberto', 'Follow-up comercial de proposta', 'Cobranca amigavel de retorno', 'Encerramento com pesquisa de satisfacao'],
    serviceOrders: ['Instalacao em campo', 'Manutencao preventiva', 'Vistoria tecnica', 'Retorno para validacao final'],
    finance: ['Recebimento de mensalidade', 'Pagamento de fornecedor', 'Comissao comercial', 'Assinatura de software'],
    clients: ['Cadastro completo revisado', 'Historico de atendimento atualizado', 'Solicitacao do cliente prioritaria', 'Renovacao contratual proxima'],
    auth: ['Administrador acessou painel', 'Perfil financeiro criado', 'Convite enviado ao cliente', 'Tenant demo configurado'],
    reports: ['Relatorio semanal de vendas', 'Analise operacional por unidade', 'Comparativo de metas', 'Exportacao executiva solicitada'],
    condo: ['Visitante autorizado na portaria', 'Ocorrencia em area comum', 'Morador atualizado no cadastro', 'Reserva de salao confirmada'],
    delivery: ['Pedido recebido pelo WhatsApp', 'Combo em preparo', 'Entrega saiu para rota', 'Cliente avaliou atendimento'],
    clinic: ['Paciente em pre-atendimento', 'Exame anexado ao prontuario', 'Retorno medico agendado', 'Guia de convenio validada'],
    blog: ['Post em revisao editorial', 'Newsletter programada', 'Materia destaque publicada', 'Pesquisa de pauta aberta'],
    marketing: ['Lead de formulario institucional', 'Briefing recebido pelo site', 'Orcamento em elaboracao', 'Contato encaminhado ao comercial'],
    landing: ['Trial criado na landing', 'Lead capturado no plano Pro', 'Demo solicitada pelo CTA', 'Pergunta enviada no FAQ'],
    portfolio: ['Contato para projeto fechado', 'Case adicionado ao portfolio', 'Depoimento publicado', 'Agenda de reuniao preenchida'],
    dashboard: ['Alerta operacional tratado', 'Meta de vendas revisada', 'Cliente estrategico acompanhado', 'Indicador atualizado']
  };
  const titles = presets[kind] ?? presets.dashboard;
  const statuses = kind === 'finance'
    ? ['Pago', 'Pendente', 'Previsto', 'Atrasado']
    : kind === 'crm'
      ? ['Novo', 'Contato', 'Proposta', 'Fechado']
      : kind === 'blog'
        ? ['Publicado', 'Rascunho', 'Revisao', 'Agendado']
        : ['Novo', 'Em andamento', 'Concluido', 'Risco'];
  return titles.map((title, index) => ({
    id: `${kind.slice(0, 3).toUpperCase()}-${1040 + index}`,
    title,
    owner: common[index][0],
    email: common[index][1],
    phone: common[index][2],
    status: statuses[index % statuses.length],
    stage: statuses[index % statuses.length],
    priority: ['Alta', 'Media', 'Baixa', 'Critica'][index % 4],
    amount: money(index + 1, kind === 'finance' ? 900 : 1800),
    date: todayOffset(index),
    category: [optionTitle, 'Operacao', 'Comercial', 'Relacionamento'][index % 4],
    description: `Registro demo para ${optionTitle}, com dados realistas para apresentacao comercial e adaptacao rapida.`,
    progress: [24, 48, 76, 92][index],
    meta: ['Unidade Centro', 'Canal WhatsApp', 'Plano Pro', 'Equipe interna'][index],
    tags: [['SLA', 'Prioridade'], ['Cliente ativo'], ['Automacao'], ['Follow-up']][index]
  }));
}

function makeCatalogItems(kind, optionTitle) {
  const catalogTitles = {
    inventory: ['Kit reposicao premium', 'Sensor inteligente', 'Pacote de etiquetas', 'Caixa organizadora'],
    catalog: ['Produto destaque', 'Combo especial', 'Servico express', 'Assinatura mensal'],
    delivery: ['Combo artesanal', 'Prato executivo', 'Bebida gelada', 'Sobremesa da casa'],
    clinic: ['Consulta inicial', 'Retorno especializado', 'Exame preventivo', 'Pacote acompanhamento'],
    scheduler: ['Atendimento inicial', 'Sessao premium', 'Avaliacao rapida', 'Retorno programado']
  };
  const titles = catalogTitles[kind] ?? ['Diagnostico consultivo', 'Implantacao MVP', 'Plano mensal', 'Treinamento da equipe'];
  return titles.map((title, index) => ({
    id: `ITEM-${index + 1}`,
    name: `${title} ${index === 0 ? optionTitle : ''}`.trim(),
    category: ['Essencial', 'Mais vendido', 'Premium', 'Recorrente'][index],
    price: money(index + 1, kind === 'delivery' ? 24 : 220),
    stock: [18, 7, 32, 12][index],
    description: `Oferta mockada para demonstrar selecao, filtros e simulacao de compra em ${optionTitle}.`,
    featured: index === 1,
    image: imagePool[(index + 2) % imagePool.length]
  }));
}

function makePlans(optionTitle) {
  return ['Start', 'Pro', 'Scale'].map((name, index) => ({
    name,
    price: ['R$ 497', 'R$ 997', 'Sob consulta'][index],
    description: [
      `Base enxuta para validar ${optionTitle}.`,
      'Pacote ideal para demonstracao comercial completa.',
      'Adaptacao com regras, integracoes e identidade do cliente.'
    ][index],
    features: [
      ['Layout responsivo', 'Formulario funcional', 'Dados mockados'],
      ['Fluxos completos', 'Componentes reutilizaveis', 'Painel demonstravel'],
      ['Customizacao visual', 'Arquitetura expansivel', 'Preparado para backend']
    ][index],
    highlight: index === 1
  }));
}

function makeFaq(optionTitle) {
  return [
    ['Esse MVP ja pode ser apresentado a clientes?', `Sim. ${optionTitle} foi montado com dados mockados, estados visuais e textos comerciais para uma demo realista.`],
    ['Como adaptar para um cliente real?', 'Troque os dados mockados por uma API, ajuste identidade visual e conecte os formularios ao backend escolhido.'],
    ['O projeto funciona localmente?', 'Sim. Basta instalar as dependencias e executar npm run dev dentro da pasta da opcao.']
  ].map(([question, answer]) => ({ question, answer }));
}

function makeTestimonials(optionTitle) {
  return [
    { name: 'Mariana Lopes', role: 'Diretora de Operacoes', quote: `${optionTitle} mostra valor rapido e facilita a conversa com decisores.` },
    { name: 'Rafael Lima', role: 'Gestor Comercial', quote: 'A estrutura tem cara de produto pronto, nao de tela estatica.' }
  ];
}

function makeProofPoints(kind, optionTitle) {
  const map = {
    marketing: ['Contato qualificado em destaque', 'Narrativa comercial completa', 'Secoes prontas para oferta local'],
    landing: ['CTA em multiplos momentos', 'Planos comparaveis', 'Captura de interesse preparada'],
    portfolio: ['Cases com leitura rapida', 'Autoridade visual imediata', 'Contato orientado a projeto'],
    dashboard: ['Indicadores acima da dobra', 'Operacao escaneavel', 'Decisao com filtros reais'],
    tickets: ['Fila com SLA claro', 'Status atualizavel', 'Detalhe pronto para suporte'],
    scheduler: ['Agenda com disponibilidade', 'Escolha de servico sem atrito', 'Confirmacao visivel'],
    inventory: ['Giro e reposicao em foco', 'Movimentacao sem backend', 'Alertas de risco claros'],
    crm: ['Funil comercial clicavel', 'Oportunidades com valor', 'Avanco de etapa em um clique'],
    chatbot: ['Atendimento simulado natural', 'Atalhos de conhecimento', 'Transferencia humana demonstrada'],
    email: ['Texto pronto para copiar', 'Modelos por contexto', 'Padrao de resposta profissional'],
    serviceOrders: ['OS com progresso', 'Responsaveis e datas', 'Execucao em campo simulada'],
    catalog: ['Filtro e carrinho', 'Pedido por WhatsApp', 'Produtos com destaque comercial'],
    finance: ['Resumo de caixa claro', 'Lancamentos editaveis', 'Saldo projetado visivel'],
    clients: ['Historico centralizado', 'Cliente em contexto', 'Atendimento com prioridade'],
    auth: ['Login demo convincente', 'Perfis selecionaveis', 'Area protegida apresentavel'],
    blog: ['Busca editorial', 'Leitura de artigo', 'Newsletter funcional'],
    reports: ['Relatorios acionaveis', 'Exportacao simulada', 'Comparativos executivos'],
    condo: ['Rotina de portaria', 'Ocorrencias rastreaveis', 'Moradores e reservas'],
    delivery: ['Cardapio com pedido', 'Carrinho vivo', 'Status de entrega'],
    clinic: ['Agenda e prontuario', 'Paciente em contexto', 'Atendimento organizado']
  };
  return (map[kind] ?? map.dashboard).map((title, index) => ({
    title,
    text: `${optionTitle} ganha uma camada comercial pronta para demonstracao ${index + 1}.`
  }));
}

function makeWorkflow(kind) {
  const map = {
    marketing: ['Atrair', 'Qualificar', 'Converter', 'Retornar'],
    landing: ['Capturar', 'Nutrir', 'Ativar', 'Vender'],
    portfolio: ['Mostrar', 'Provar', 'Conversar', 'Fechar'],
    dashboard: ['Monitorar', 'Filtrar', 'Analisar', 'Agir'],
    tickets: ['Abrir', 'Priorizar', 'Resolver', 'Medir'],
    scheduler: ['Escolher', 'Reservar', 'Confirmar', 'Atender'],
    inventory: ['Cadastrar', 'Movimentar', 'Alertar', 'Repor'],
    crm: ['Capturar', 'Qualificar', 'Propor', 'Ganhar'],
    chatbot: ['Receber', 'Entender', 'Responder', 'Escalar'],
    email: ['Contextualizar', 'Gerar', 'Revisar', 'Enviar'],
    serviceOrders: ['Solicitar', 'Planejar', 'Executar', 'Encerrar'],
    catalog: ['Filtrar', 'Comparar', 'Adicionar', 'Enviar'],
    finance: ['Lancar', 'Conferir', 'Projetar', 'Decidir'],
    clients: ['Cadastrar', 'Acompanhar', 'Atender', 'Fidelizar'],
    auth: ['Entrar', 'Autorizar', 'Operar', 'Auditar'],
    blog: ['Pesquisar', 'Ler', 'Assinar', 'Relacionar'],
    reports: ['Selecionar', 'Cruzar', 'Visualizar', 'Exportar'],
    condo: ['Registrar', 'Autorizar', 'Acompanhar', 'Resolver'],
    delivery: ['Escolher', 'Pedir', 'Preparar', 'Entregar'],
    clinic: ['Agendar', 'Atender', 'Registrar', 'Retornar']
  };
  return (map[kind] ?? map.dashboard).map((label, index) => ({
    step: String(index + 1).padStart(2, '0'),
    label
  }));
}

function makePosts(optionTitle) {
  return ['Como organizar a operacao sem planilhas soltas', 'Indicadores que aceleram decisoes comerciais', 'Checklist para adaptar um MVP ao cliente real', 'Automacoes simples para ganhar produtividade'].map((title, index) => ({
    id: `POST-${index + 1}`,
    title,
    category: [optionTitle, 'Estrategia', 'Produto', 'Operacao'][index],
    excerpt: `Conteudo demonstrativo para ${optionTitle}, com texto editavel e busca funcional.`,
    body: `Este artigo mostra como ${optionTitle} pode ser apresentado como solucao inicial para clientes reais. O conteudo e mockado, mas ja organiza narrativa, valor e proximos passos para venda consultiva.`,
    author: ['Equipe LogiCodem', 'Produto', 'Operacoes', 'Comercial'][index],
    date: todayOffset(index - 2),
    readTime: `${4 + index} min`
  }));
}

function taglineFor(kind, optionTitle) {
  const map = {
    marketing: `Um site institucional completo para transformar ${optionTitle.toLowerCase()} em contatos qualificados.`,
    landing: `Landing SaaS com narrativa, planos e captura de interesse para vender antes do produto final.`,
    portfolio: `Portfolio profissional com cases, prova social e agenda comercial em uma experiencia elegante.`,
    dashboard: `Painel de controle com indicadores, filtros e dados acionaveis para tomada de decisao.`,
    tickets: `Central de chamados com abertura, status, filtros e detalhes para demonstrar suporte real.`,
    scheduler: `Agenda digital com servicos, datas, horarios e confirmacao simulada em poucos cliques.`,
    inventory: `Controle de estoque com cadastro, movimentacoes e alertas para operacoes enxutas.`,
    crm: `Funil comercial simples para cadastrar, acompanhar e mover oportunidades ate o fechamento.`,
    chatbot: `Chatbot demonstravel com respostas simuladas, atalhos e transferencia para atendimento humano.`,
    email: `Gerador de e-mails para chamados com modelos prontos, contexto e copia rapida.`,
    serviceOrders: `Ordens de servico com etapas, responsaveis e progresso para operacoes de campo.`,
    catalog: `Catalogo navegavel com filtros, carrinho e simulacao de envio pelo WhatsApp.`,
    finance: `Painel financeiro para lancamentos, filtros e visao clara de saldo projetado.`,
    clients: `Base de clientes com historico, cadastro e acompanhamento de relacionamento.`,
    auth: `Fluxo de login demonstravel com perfis, tenant e area protegida simulada.`,
    blog: `Blog funcional com busca, categorias, leitura de posts e captura de newsletter.`,
    reports: `Central de relatorios com filtros, graficos simples, tabelas e exportacao simulada.`,
    condo: `Rotina de condominio com moradores, visitantes e ocorrencias em um painel claro.`,
    delivery: `Sistema delivery com cardapio, carrinho, pedidos e status de entrega.`,
    clinic: `Gestao de clinica com pacientes, agenda e prontuario simplificado.`
  };
  return map[kind] ?? map.dashboard;
}

function scopeFor(kind) {
  const base = ['Projeto React + Vite + TypeScript funcional', 'Layout responsivo para celular, tablet e desktop', 'Dados mockados organizados e editaveis', 'Estados de carregamento, vazio, erro e sucesso quando aplicavel'];
  const map = {
    marketing: ['Hero comercial com imagem realista', 'Formulario de contato com validacao', 'Planos, FAQ, depoimentos e CTA funcional'],
    landing: ['CTA de trial e demo', 'Planos selecionaveis', 'Captura de interesse e FAQ funcional'],
    portfolio: ['Cases e depoimentos', 'Formulario de projeto', 'Agenda comercial simulada'],
    dashboard: ['Cards de KPI', 'Filtros, tabela e grafico CSS', 'Exportacao e refresh simulados'],
    tickets: ['Criacao de chamado', 'Filtro por status', 'Detalhes e alteracao de status'],
    scheduler: ['Selecao de servico', 'Data e horario', 'Confirmacao e lista de agendamentos'],
    inventory: ['Cadastro de produto', 'Entrada e saida de estoque', 'Alertas de baixo estoque'],
    crm: ['Cadastro de lead', 'Funil por etapas', 'Movimentacao de oportunidades'],
    chatbot: ['Conversa simulada', 'Respostas por palavra-chave', 'Atalhos e historico'],
    email: ['Geracao de texto', 'Modelos por contexto', 'Copia para area de transferencia'],
    serviceOrders: ['Criacao de OS', 'Progresso por etapa', 'Atualizacao de status'],
    catalog: ['Filtros de itens', 'Carrinho', 'Envio simulado pelo WhatsApp'],
    finance: ['Lancamentos', 'Resumo financeiro', 'Filtros por status'],
    clients: ['Cadastro de clientes', 'Historico de relacionamento', 'Detalhe do cliente'],
    auth: ['Login simulado', 'Perfis de acesso', 'Painel protegido'],
    blog: ['Busca de posts', 'Detalhe de artigo', 'Newsletter funcional'],
    reports: ['Filtros executivos', 'Graficos de barras', 'Exportacao simulada'],
    condo: ['Moradores', 'Visitantes', 'Ocorrencias e status'],
    delivery: ['Cardapio', 'Carrinho', 'Pedido e acompanhamento'],
    clinic: ['Pacientes', 'Agenda', 'Notas de atendimento']
  };
  return [...base, ...(map[kind] ?? [])];
}

function differentialsFor(kind, styleName, audience) {
  return [
    `Identidade visual ${styleName.toLowerCase()} pensada para ${audience}.`,
    'Fluxos clicaveis reduzem a percepcao de template vazio e ajudam na venda consultiva.',
    'Arquitetura simples facilita trocar mocks por API, banco de dados e autenticacao real.',
    'Textos comerciais e estados de interface ja preparam o material para demonstracoes da LogiCodem.',
    kind === 'landing' || kind === 'marketing'
      ? 'Boa base para ofertas rapidas de presenca digital, captura de leads e validacao de campanha.'
      : 'Boa base para sistemas internos, produtos SaaS e provas de conceito com operacao simulada.'
  ];
}

function promptFor(config) {
  return `Evolua este MVP da LogiCodem mantendo React, Vite e TypeScript. Preserve a proposta de ${config.optionTitle}, mantenha a identidade ${config.styleName} e transforme os dados mockados em servicos reais quando houver backend. Priorize fluxos demonstraveis, responsividade, textos comerciais claros e componentes reutilizaveis.`;
}

function buildData(parentSlug, optionSlug, categoryIndex, itemIndex) {
  const category = categoryMap[parentSlug];
  const style = buildTheme(category.kind, optionSlug);
  const visual = visualFor(optionSlug);
  const optionTitle = slugTitle(optionSlug);
  const brandName = `${brandPrefixes[itemIndex % brandPrefixes.length]} ${category.suffix}`;
  const kind = category.kind;
  return {
    kind,
    categoryTitle: category.title,
    optionTitle,
    brandName,
    tagline: taglineFor(kind, optionTitle),
    summary: `${category.title} para ${category.audience}, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.`,
    audience: category.audience,
    styleName: style.name,
    parentSlug,
    optionSlug,
    visual,
    theme: style,
    heroImage: imagePool[(categoryIndex + optionIndex(optionSlug)) % imagePool.length],
    metrics: makeMetrics(kind, optionTitle),
    records: makeRecords(kind, optionTitle),
    services: makeCatalogItems(kind === 'scheduler' ? 'scheduler' : kind, optionTitle),
    products: makeCatalogItems(kind, optionTitle),
    plans: makePlans(optionTitle),
    faq: makeFaq(optionTitle),
    testimonials: makeTestimonials(optionTitle),
    proofPoints: makeProofPoints(kind, optionTitle),
    workflow: makeWorkflow(kind),
    posts: makePosts(optionTitle),
    messages: [
      { role: 'assistant', text: `Ola! Sou o assistente demo do ${brandName}. Posso ajudar com prazos, valores, status ou encaminhar para atendimento humano.` },
      { role: 'user', text: 'Quero entender como funciona.' },
      { role: 'assistant', text: `Este MVP simula a jornada principal de ${optionTitle} com dados editaveis e acoes no frontend.` }
    ],
    timeSlots: ['08:30', '09:00', '10:30', '14:00', '15:30', '17:00'],
    prompt: '',
    scopeBullets: scopeFor(kind),
    differentialBullets: differentialsFor(kind, style.name, category.audience)
  };
}

function renderPackageJson(name) {
  return `${JSON.stringify({
    name,
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      dev: 'vite --host 0.0.0.0',
      build: 'tsc -b && vite build',
      preview: 'vite preview --host 0.0.0.0'
    },
    dependencies: {
      '@vitejs/plugin-react': 'latest',
      'lucide-react': 'latest',
      react: 'latest',
      'react-dom': 'latest',
      vite: 'latest'
    },
    devDependencies: {
      '@types/react': 'latest',
      '@types/react-dom': 'latest',
      typescript: 'latest'
    }
  }, null, 2)}\n`;
}

function renderIndexHtml(data) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(data.summary)}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>${escapeHtml(data.brandName)} | ${escapeHtml(data.optionTitle)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function renderTypes() {
  return `export type AppKind =
  | 'marketing'
  | 'landing'
  | 'portfolio'
  | 'dashboard'
  | 'tickets'
  | 'scheduler'
  | 'inventory'
  | 'crm'
  | 'chatbot'
  | 'email'
  | 'serviceOrders'
  | 'catalog'
  | 'finance'
  | 'clients'
  | 'auth'
  | 'blog'
  | 'reports'
  | 'condo'
  | 'delivery'
  | 'clinic';

export interface ThemeTokens {
  name: string;
  bg: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  muted: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  shadow: string;
  onPrimary: string;
  heroOverlay: string;
  heroTint: string;
  pattern: string;
  radius: string;
}

export interface VisualProfile {
  name: string;
  layout: string;
  texture: string;
  density: string;
  radius: string;
  cta: string;
}

export interface MetricItem {
  label: string;
  value: string;
  trend: string;
  note: string;
  tone: string;
}

export interface RecordItem {
  id: string;
  title: string;
  owner: string;
  email: string;
  phone: string;
  status: string;
  stage: string;
  priority: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  progress: number;
  meta: string;
  tags: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  featured: boolean;
  image: string;
}

export interface PlanItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface ProofPoint {
  title: string;
  text: string;
}

export interface WorkflowStep {
  step: string;
  label: string;
}

export interface PostItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ChatMessage {
  role: 'assistant' | 'user';
  text: string;
}

export interface AppData {
  kind: AppKind;
  categoryTitle: string;
  optionTitle: string;
  brandName: string;
  tagline: string;
  summary: string;
  audience: string;
  styleName: string;
  parentSlug: string;
  optionSlug: string;
  visual: VisualProfile;
  theme: ThemeTokens;
  heroImage: string;
  metrics: MetricItem[];
  records: RecordItem[];
  services: CatalogItem[];
  products: CatalogItem[];
  plans: PlanItem[];
  faq: FaqItem[];
  testimonials: TestimonialItem[];
  proofPoints: ProofPoint[];
  workflow: WorkflowStep[];
  posts: PostItem[];
  messages: ChatMessage[];
  timeSlots: string[];
  prompt: string;
  scopeBullets: string[];
  differentialBullets: string[];
}
`;
}

function renderData(data) {
  const withPrompt = { ...data, prompt: promptFor(data) };
  return `import type { AppData } from './types';

export const appData: AppData = ${JSON.stringify(withPrompt, null, 2)};
`;
}

function renderViteEnv() {
  return `/// <reference types="vite/client" />
`;
}

function renderMain() {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function renderViteConfig() {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()]
});
`;
}

function renderTsConfig() {
  return `${JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['DOM', 'DOM.Iterable', 'ES2020'],
      allowJs: false,
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      strict: true,
      forceConsistentCasingInFileNames: true,
      module: 'ESNext',
      moduleResolution: 'Bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx'
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }]
  }, null, 2)}\n`;
}

function renderTsNodeConfig() {
  return `${JSON.stringify({
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'Bundler',
      allowSyntheticDefaultImports: true
    },
    include: ['vite.config.ts']
  }, null, 2)}\n`;
}

function renderApp() {
  return `import type { CSSProperties, FormEvent, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Download,
  Filter,
  LayoutDashboard,
  LogIn,
  Mail,
  MessageCircle,
  PackagePlus,
  Phone,
  Plus,
  RefreshCcw,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UserPlus,
  Users,
  Wand2,
  X
} from 'lucide-react';
import { appData } from './data';
import type { CatalogItem, ChatMessage, RecordItem } from './types';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

type CssVars = CSSProperties & Record<string, string>;

function App() {
  const [records, setRecords] = useState<RecordItem[]>(() => appData.records);
  const [products, setProducts] = useState<CatalogItem[]>(() => appData.products);
  const [messages, setMessages] = useState<ChatMessage[]>(() => appData.messages);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [selectedId, setSelectedId] = useState(appData.records[0]?.id ?? '');
  const [toast, setToast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activePlan, setActivePlan] = useState(appData.plans[1]?.name ?? appData.plans[0]?.name ?? '');
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [quickForm, setQuickForm] = useState({ title: '', owner: '', amount: '', date: '2026-07-08' });
  const [appointment, setAppointment] = useState({ service: appData.services[0]?.name ?? '', date: '2026-07-08', time: appData.timeSlots[1] ?? '09:00', name: '' });
  const [productForm, setProductForm] = useState({ name: '', stock: '12', category: 'Novo item' });
  const [transactionForm, setTransactionForm] = useState({ title: '', amount: '1200', type: 'Receita' });
  const [cart, setCart] = useState<Record<string, number>>({});
  const [chatInput, setChatInput] = useState('');
  const [emailContext, setEmailContext] = useState('');
  const [emailDraft, setEmailDraft] = useState('');
  const [loggedProfile, setLoggedProfile] = useState('');
  const [selectedPost, setSelectedPost] = useState(appData.posts[0]?.id ?? '');

  const themeStyle: CssVars = {
    '--bg': appData.theme.bg,
    '--surface': appData.theme.surface,
    '--surface-alt': appData.theme.surfaceAlt,
    '--text': appData.theme.text,
    '--muted': appData.theme.muted,
    '--primary': appData.theme.primary,
    '--secondary': appData.theme.secondary,
    '--accent': appData.theme.accent,
    '--border': appData.theme.border,
    '--shadow': appData.theme.shadow,
    '--on-primary': appData.theme.onPrimary,
    '--hero-overlay': appData.theme.heroOverlay,
    '--hero-tint': appData.theme.heroTint,
    '--pattern': appData.theme.pattern,
    '--radius': appData.theme.radius
  };

  const selectedRecord = records.find((record) => record.id === selectedId) ?? records[0];
  const statuses = useMemo(() => ['Todos', ...Array.from(new Set(records.map((record) => record.status)))], [records]);
  const filteredRecords = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return records.filter((record) => {
      const matchesQuery = !normalized || [record.title, record.owner, record.category, record.status].join(' ').toLowerCase().includes(normalized);
      const matchesStatus = statusFilter === 'Todos' || record.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, records, statusFilter]);
  const cartItems = products.filter((item) => cart[item.id]);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * (cart[item.id] ?? 0), 0);
  const selectedBlogPost = appData.posts.find((post) => post.id === selectedPost) ?? appData.posts[0];
  const shellClass = ['app-shell', 'visual-' + appData.visual.layout, 'texture-' + appData.visual.texture, 'kind-' + appData.kind].join(' ');

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  }

  function scrollToWorkspace() {
    document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function addRecord(overrides: Partial<RecordItem>) {
    const base = records[0] ?? appData.records[0];
    const next: RecordItem = {
      ...base,
      id: appData.kind.slice(0, 3).toUpperCase() + '-' + (Math.floor(Math.random() * 8000) + 2000),
      title: overrides.title?.trim() || quickForm.title.trim() || 'Nova solicitacao registrada',
      owner: overrides.owner?.trim() || quickForm.owner.trim() || 'Cliente demo',
      email: overrides.email ?? 'contato@cliente.com.br',
      phone: overrides.phone ?? '(11) 90000-0000',
      status: overrides.status ?? 'Novo',
      stage: overrides.stage ?? 'Novo',
      priority: overrides.priority ?? 'Media',
      amount: overrides.amount ?? Number(quickForm.amount || base.amount),
      date: overrides.date ?? quickForm.date,
      category: overrides.category ?? appData.optionTitle,
      description: overrides.description ?? 'Criado pelo formulario do MVP para demonstrar fluxo real no frontend.',
      progress: overrides.progress ?? 12,
      meta: overrides.meta ?? 'Criado agora',
      tags: overrides.tags ?? ['Novo', 'Demo']
    };
    setRecords((current) => [next, ...current]);
    setSelectedId(next.id);
    setQuickForm({ title: '', owner: '', amount: '', date: '2026-07-08' });
    showToast('Registro criado com sucesso.');
  }

  function updateRecord(id: string, patch: Partial<RecordItem>) {
    setRecords((current) => current.map((record) => (record.id === id ? { ...record, ...patch } : record)));
    showToast('Registro atualizado.');
  }

  function submitQuickForm(event: FormEvent) {
    event.preventDefault();
    if (!quickForm.title.trim() || !quickForm.owner.trim()) {
      showToast('Preencha titulo e responsavel.');
      return;
    }
    addRecord({});
  }

  function submitLead(event: FormEvent) {
    event.preventDefault();
    if (!leadForm.name.trim() || !leadForm.email.includes('@')) {
      showToast('Informe nome e e-mail valido.');
      return;
    }
    addRecord({
      title: 'Novo lead: ' + leadForm.message.slice(0, 48),
      owner: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone || '(00) 00000-0000',
      status: 'Novo',
      category: 'Lead comercial',
      description: leadForm.message || 'Lead interessado na proposta do MVP.'
    });
    setLeadForm({ name: '', email: '', phone: '', message: '' });
  }

  function refreshData() {
    setIsLoading(true);
    setHasError(false);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast('Dados mockados atualizados.');
    }, 650);
  }

  function createAppointment(event: FormEvent) {
    event.preventDefault();
    if (!appointment.name.trim()) {
      showToast('Informe o nome do cliente.');
      return;
    }
    addRecord({
      title: appointment.service,
      owner: appointment.name,
      status: 'Agendado',
      stage: 'Agendado',
      date: appointment.date,
      meta: appointment.time,
      category: 'Agenda'
    });
    setAppointment((current) => ({ ...current, name: '' }));
  }

  function submitProduct(event: FormEvent) {
    event.preventDefault();
    if (!productForm.name.trim()) {
      showToast('Informe o nome do item.');
      return;
    }
    const next: CatalogItem = {
      id: 'ITEM-' + (products.length + 1),
      name: productForm.name,
      category: productForm.category,
      price: 189,
      stock: Number(productForm.stock || 0),
      description: 'Item criado no frontend para demonstrar cadastro e movimentacao.',
      featured: false,
      image: appData.heroImage
    };
    setProducts((current) => [next, ...current]);
    setProductForm({ name: '', stock: '12', category: 'Novo item' });
    showToast('Item cadastrado.');
  }

  function adjustStock(id: string, delta: number) {
    setProducts((current) => current.map((item) => (item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item)));
    showToast(delta > 0 ? 'Entrada registrada.' : 'Saida registrada.');
  }

  function submitTransaction(event: FormEvent) {
    event.preventDefault();
    if (!transactionForm.title.trim()) {
      showToast('Informe uma descricao.');
      return;
    }
    addRecord({
      title: transactionForm.title,
      amount: Number(transactionForm.amount || 0),
      status: transactionForm.type === 'Receita' ? 'Pago' : 'Pendente',
      category: transactionForm.type,
      progress: transactionForm.type === 'Receita' ? 100 : 45
    });
    setTransactionForm({ title: '', amount: '1200', type: 'Receita' });
  }

  function addToCart(id: string) {
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
    showToast('Item adicionado.');
  }

  function clearCart() {
    setCart({});
    showToast('Pedido enviado para simulacao.');
  }

  function sendChat(text = chatInput) {
    const clean = text.trim();
    if (!clean) {
      showToast('Digite uma mensagem.');
      return;
    }
    const lower = clean.toLowerCase();
    const response = lower.includes('preco') || lower.includes('valor')
      ? 'Os valores dependem da adaptacao, mas este template ja ajuda a vender uma primeira versao rapidamente.'
      : lower.includes('prazo')
        ? 'Um MVP como este pode virar proposta em poucos dias, conectando backend e identidade do cliente.'
        : lower.includes('humano')
          ? 'Perfeito, vou marcar esta conversa como prioridade para atendimento humano.'
          : 'Entendi. Esta resposta e simulada para demonstrar atendimento, triagem e continuidade de conversa.';
    setMessages((current) => [...current, { role: 'user', text: clean }, { role: 'assistant', text: response }]);
    setChatInput('');
  }

  function generateEmail(event?: FormEvent) {
    event?.preventDefault();
    const record = selectedRecord ?? records[0];
    const draft = [
      'Assunto: Atualizacao sobre ' + (record?.title ?? appData.optionTitle),
      '',
      'Ola, ' + (record?.owner ?? 'cliente') + '.',
      '',
      'Passando para atualizar o andamento de ' + appData.optionTitle + '. ' + (emailContext || 'Registramos sua solicitacao e ja estamos acompanhando os proximos passos.'),
      '',
      'Status atual: ' + (record?.status ?? 'Novo') + '.',
      'Proximo passo: nossa equipe retornara com uma orientacao objetiva e prazo estimado.',
      '',
      'Atenciosamente,',
      appData.brandName
    ].join('\\n');
    setEmailDraft(draft);
    showToast('E-mail gerado.');
  }

  async function copyEmail() {
    if (!emailDraft) {
      generateEmail();
      return;
    }
    await navigator.clipboard?.writeText(emailDraft);
    showToast('Texto copiado.');
  }

  function login(event: FormEvent) {
    event.preventDefault();
    if (!leadForm.email.includes('@') || leadForm.message.length < 4) {
      showToast('Use e-mail e senha demo com 4 caracteres.');
      return;
    }
    setLoggedProfile('Administrador');
    showToast('Sessao demo iniciada.');
  }

  function renderHeroPanel() {
    if (appData.kind === 'chatbot') {
      return (
        <div className="hero-widget chat-preview">
          <div className="widget-title"><MessageCircle size={18} /> Conversa demo</div>
          {messages.slice(-3).map((message, index) => (
            <div className={'bubble ' + message.role} key={message.text + index}>{message.text}</div>
          ))}
          <div className="inline-action">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Digite uma duvida" />
            <button className="icon-button" onClick={() => sendChat()} aria-label="Enviar mensagem"><Send size={18} /></button>
          </div>
        </div>
      );
    }

    if (appData.kind === 'auth') {
      return (
        <form className="hero-widget" onSubmit={login}>
          <div className="widget-title"><ShieldCheck size={18} /> Acesso protegido</div>
          <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="email@empresa.com.br" />
          <input value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Senha demo" type="password" />
          <button className="primary-button" type="submit"><LogIn size={18} /> Entrar no painel</button>
        </form>
      );
    }

    if (['marketing', 'landing', 'portfolio', 'blog'].includes(appData.kind)) {
      return (
        <form className="hero-widget" onSubmit={submitLead}>
          <div className="widget-title"><Sparkles size={18} /> Interesse comercial</div>
          <input value={leadForm.name} onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome" />
          <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="E-mail" />
          <textarea value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Conte rapidamente o que precisa" />
          <button className="primary-button" type="submit"><Send size={18} /> Enviar contato</button>
        </form>
      );
    }

    if (appData.kind === 'scheduler' || appData.kind === 'clinic') {
      return renderAppointmentForm('hero-widget');
    }

    if (appData.kind === 'catalog' || appData.kind === 'delivery') {
      return (
        <div className="hero-widget">
          <div className="widget-title"><ShoppingCart size={18} /> Pedido atual</div>
          <strong className="total">{currency.format(cartTotal)}</strong>
          <p>{cartItems.length ? cartItems.map((item) => item.name).join(', ') : 'Selecione itens no catalogo para montar uma simulacao.'}</p>
          <button className="primary-button" onClick={clearCart} disabled={!cartItems.length}><Send size={18} /> Simular envio</button>
        </div>
      );
    }

    if (appData.kind === 'email') {
      return (
        <form className="hero-widget" onSubmit={generateEmail}>
          <div className="widget-title"><Mail size={18} /> Gerador rapido</div>
          <textarea value={emailContext} onChange={(event) => setEmailContext(event.target.value)} placeholder="Contexto do chamado ou cliente" />
          <button className="primary-button" type="submit"><Wand2 size={18} /> Gerar e-mail</button>
        </form>
      );
    }

    return (
      <form className="hero-widget" onSubmit={submitQuickForm}>
        <div className="widget-title"><Plus size={18} /> Novo registro</div>
        <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Titulo" />
        <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Responsavel ou cliente" />
        <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Registrar</button>
      </form>
    );
  }

  function renderAppointmentForm(className = 'panel') {
    return (
      <form className={className} onSubmit={createAppointment}>
        <div className="widget-title"><CalendarDays size={18} /> Agendar atendimento</div>
        <select value={appointment.service} onChange={(event) => setAppointment((current) => ({ ...current, service: event.target.value }))}>
          {appData.services.map((service) => <option key={service.id}>{service.name}</option>)}
        </select>
        <div className="two-fields">
          <input type="date" value={appointment.date} onChange={(event) => setAppointment((current) => ({ ...current, date: event.target.value }))} />
          <select value={appointment.time} onChange={(event) => setAppointment((current) => ({ ...current, time: event.target.value }))}>
            {appData.timeSlots.map((slot) => <option key={slot}>{slot}</option>)}
          </select>
        </div>
        <input value={appointment.name} onChange={(event) => setAppointment((current) => ({ ...current, name: event.target.value }))} placeholder="Nome do cliente" />
        <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Confirmar horario</button>
      </form>
    );
  }

  function renderToolbar() {
    return (
      <div className="toolbar">
        <label className="search-field">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por cliente, status ou categoria" />
        </label>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {statuses.map((status) => <option key={status}>{status}</option>)}
        </select>
        <button className="secondary-button" onClick={refreshData}><RefreshCcw size={18} /> Atualizar</button>
        <button className="ghost-button" onClick={() => setHasError((current) => !current)}><Bell size={18} /> {hasError ? 'Limpar erro' : 'Simular erro'}</button>
      </div>
    );
  }

  function renderMetricGrid() {
    return (
      <div className="metric-grid">
        {appData.metrics.map((metric) => (
          <article className={'metric-card tone-' + metric.tone} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.trend} · {metric.note}</small>
          </article>
        ))}
      </div>
    );
  }

  function renderRecordList(title = 'Registros recentes') {
    if (hasError) {
      return <StateBlock icon={<X size={24} />} title="Nao foi possivel carregar" text="O erro e simulado. Limpe o estado para voltar aos dados mockados." />;
    }
    if (isLoading) {
      return <div className="skeleton-list"><span /><span /><span /></div>;
    }
    if (!filteredRecords.length) {
      return <StateBlock icon={<Filter size={24} />} title="Nada encontrado" text="Altere os filtros ou crie um novo registro para preencher a lista." />;
    }
    return (
      <div className="panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">{filteredRecords.length} itens</span>
            <h3>{title}</h3>
          </div>
          <button className="ghost-button" onClick={() => showToast('Exportacao CSV simulada.')}><Download size={18} /> Exportar</button>
        </div>
        <div className="record-list">
          {filteredRecords.map((record) => (
            <button className={'record-row ' + (record.id === selectedRecord?.id ? 'active' : '')} key={record.id} onClick={() => setSelectedId(record.id)}>
              <span>
                <strong>{record.title}</strong>
                <small>{record.owner} · {record.category}</small>
              </span>
              <StatusPill status={record.status} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  function renderRecordDetail(title = 'Detalhes') {
    if (!selectedRecord) {
      return <StateBlock icon={<ClipboardList size={24} />} title="Selecione um registro" text="A lista esta vazia no momento." />;
    }
    return (
      <aside className="panel detail-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">{selectedRecord.id}</span>
            <h3>{title}</h3>
          </div>
          <StatusPill status={selectedRecord.status} />
        </div>
        <h4>{selectedRecord.title}</h4>
        <p>{selectedRecord.description}</p>
        <div className="detail-grid">
          <span><strong>Responsavel</strong>{selectedRecord.owner}</span>
          <span><strong>Contato</strong>{selectedRecord.phone}</span>
          <span><strong>Data</strong>{selectedRecord.date}</span>
          <span><strong>Valor</strong>{currency.format(selectedRecord.amount)}</span>
        </div>
        <div className="progress-line"><span style={{ width: selectedRecord.progress + '%' }} /></div>
        <div className="tag-row">
          {selectedRecord.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="button-row">
          <button className="secondary-button" onClick={() => updateRecord(selectedRecord.id, { status: 'Em andamento', progress: Math.min(85, selectedRecord.progress + 20) })}>Mover</button>
          <button className="primary-button" onClick={() => updateRecord(selectedRecord.id, { status: 'Concluido', progress: 100 })}>Concluir</button>
        </div>
      </aside>
    );
  }

  function renderMarketingExperience() {
    return (
      <div className="experience-stack">
        <section className="split-section">
          <div>
            <span className="eyebrow">Oferta pronta para vender</span>
            <h2>Uma narrativa comercial com prova, CTA e captura de leads.</h2>
            <p>{appData.summary}</p>
            <div className="feature-list">
              {appData.scopeBullets.slice(0, 5).map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
            </div>
          </div>
          <form className="panel" onSubmit={submitLead}>
            <h3>Solicitar proposta</h3>
            <input value={leadForm.name} onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome completo" />
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="E-mail profissional" />
            <input value={leadForm.phone} onChange={(event) => setLeadForm((current) => ({ ...current, phone: event.target.value }))} placeholder="WhatsApp" />
            <textarea value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Objetivo do projeto" />
            <button className="primary-button" type="submit"><Send size={18} /> Enviar</button>
          </form>
        </section>
        <section className="plans-grid">
          {appData.plans.map((plan) => (
            <article className={'plan-card ' + (activePlan === plan.name ? 'selected' : '')} key={plan.name}>
              <span className="eyebrow">{plan.highlight ? 'Mais vendido' : 'Plano'}</span>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              {plan.features.map((feature) => <small key={feature}><CheckCircle2 size={15} /> {feature}</small>)}
              <button className="secondary-button" onClick={() => { setActivePlan(plan.name); showToast('Plano selecionado: ' + plan.name); }}>Selecionar</button>
            </article>
          ))}
        </section>
        <section className="faq-grid">
          {appData.faq.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </div>
    );
  }

  function renderDashboardExperience() {
    const max = Math.max(...records.map((record) => record.amount), 1);
    return (
      <div className="experience-stack">
        {renderToolbar()}
        {renderMetricGrid()}
        <section className="workspace-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Grafico mockado</span>
                <h3>Desempenho por registro</h3>
              </div>
              <BarChart3 />
            </div>
            <div className="bar-chart">
              {records.map((record) => (
                <div className="bar-row" key={record.id}>
                  <span>{record.owner.split(' ')[0]}</span>
                  <div><i style={{ width: Math.max(12, (record.amount / max) * 100) + '%' }} /></div>
                  <strong>{currency.format(record.amount)}</strong>
                </div>
              ))}
            </div>
          </div>
          {renderRecordList('Tabela operacional')}
        </section>
      </div>
    );
  }

  function renderOperationalExperience(label = 'Operacao') {
    return (
      <div className="experience-stack">
        {renderToolbar()}
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitQuickForm}>
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Novo fluxo</span>
                <h3>{label}</h3>
              </div>
              <Plus />
            </div>
            <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Titulo do registro" />
            <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Cliente ou responsavel" />
            <input type="date" value={quickForm.date} onChange={(event) => setQuickForm((current) => ({ ...current, date: event.target.value }))} />
            <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Criar</button>
          </form>
          {renderRecordDetail(label)}
        </section>
        {renderRecordList('Fila de trabalho')}
      </div>
    );
  }

  function renderSchedulerExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          {renderAppointmentForm()}
          <div className="panel">
            <div className="panel-heading"><h3>Servicos disponiveis</h3><CalendarDays /></div>
            <div className="service-grid">
              {appData.services.map((service) => (
                <button className="service-tile" key={service.id} onClick={() => setAppointment((current) => ({ ...current, service: service.name }))}>
                  <strong>{service.name}</strong>
                  <span>{currency.format(service.price)}</span>
                  <small>{service.description}</small>
                </button>
              ))}
            </div>
          </div>
        </section>
        {renderRecordList('Agendamentos confirmados')}
      </div>
    );
  }

  function renderInventoryExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitProduct}>
            <div className="panel-heading"><h3>Cadastrar item</h3><PackagePlus /></div>
            <input value={productForm.name} onChange={(event) => setProductForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome do produto" />
            <input value={productForm.category} onChange={(event) => setProductForm((current) => ({ ...current, category: event.target.value }))} placeholder="Categoria" />
            <input type="number" value={productForm.stock} onChange={(event) => setProductForm((current) => ({ ...current, stock: event.target.value }))} />
            <button className="primary-button" type="submit"><Plus size={18} /> Adicionar</button>
          </form>
          <div className="panel">
            <div className="panel-heading"><h3>Alertas de estoque</h3><Bell /></div>
            {products.filter((item) => item.stock <= 12).map((item) => (
              <div className="stock-row" key={item.id}>
                <span><strong>{item.name}</strong><small>{item.category}</small></span>
                <StatusPill status={item.stock <= 8 ? 'Risco' : 'Baixo'} />
              </div>
            ))}
          </div>
        </section>
        <section className="catalog-grid">
          {products.map((item) => (
            <article className="product-card" key={item.id}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <div className="stock-meter"><span style={{ width: Math.min(100, item.stock * 4) + '%' }} /></div>
              <small>{item.stock} unidades · {item.category}</small>
              <div className="button-row">
                <button className="secondary-button" onClick={() => adjustStock(item.id, 1)}>Entrada</button>
                <button className="ghost-button" onClick={() => adjustStock(item.id, -1)}>Saida</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderCrmExperience() {
    const stages = ['Novo', 'Contato', 'Proposta', 'Fechado'];
    return (
      <div className="experience-stack">
        <form className="inline-form" onSubmit={submitQuickForm}>
          <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Empresa ou oportunidade" />
          <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Responsavel" />
          <button className="primary-button" type="submit"><UserPlus size={18} /> Novo lead</button>
        </form>
        <section className="kanban">
          {stages.map((stage) => (
            <div className="kanban-column" key={stage}>
              <h3>{stage}</h3>
              {records.filter((record) => record.stage === stage || record.status === stage).map((record) => (
                <article className="kanban-card" key={record.id}>
                  <strong>{record.title}</strong>
                  <small>{record.owner} · {currency.format(record.amount)}</small>
                  <button className="ghost-button" onClick={() => updateRecord(record.id, { stage: stages[Math.min(stages.length - 1, stages.indexOf(stage) + 1)], status: stages[Math.min(stages.length - 1, stages.indexOf(stage) + 1)] })}>Avancar</button>
                </article>
              ))}
            </div>
          ))}
        </section>
      </div>
    );
  }

  function renderChatbotExperience() {
    return (
      <section className="chat-layout">
        <div className="panel knowledge-panel">
          <h3>Base simulada</h3>
          {['preco', 'prazo', 'status', 'humano'].map((keyword) => (
            <button className="quick-reply" key={keyword} onClick={() => sendChat(keyword)}>Perguntar sobre {keyword}</button>
          ))}
          <p>As respostas mudam por palavra-chave e mantem historico local durante a sessao.</p>
        </div>
        <div className="panel chat-window">
          <div className="message-list">
            {messages.map((message, index) => <div className={'bubble ' + message.role} key={message.text + index}>{message.text}</div>)}
          </div>
          <div className="inline-action">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Digite sua mensagem" />
            <button className="primary-button" onClick={() => sendChat()}><Send size={18} /> Enviar</button>
          </div>
        </div>
      </section>
    );
  }

  function renderEmailExperience() {
    return (
      <section className="workspace-grid">
        <form className="panel" onSubmit={generateEmail}>
          <div className="panel-heading"><h3>Contexto do e-mail</h3><Mail /></div>
          <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
            {records.map((record) => <option value={record.id} key={record.id}>{record.title}</option>)}
          </select>
          <textarea value={emailContext} onChange={(event) => setEmailContext(event.target.value)} placeholder="Detalhe o que precisa ser comunicado" />
          <button className="primary-button" type="submit"><Wand2 size={18} /> Gerar texto</button>
        </form>
        <div className="panel email-preview">
          <div className="panel-heading"><h3>Preview</h3><button className="ghost-button" onClick={copyEmail}>Copiar</button></div>
          <pre>{emailDraft || 'Gere um e-mail para visualizar o texto aqui.'}</pre>
        </div>
      </section>
    );
  }

  function renderCatalogExperience() {
    return (
      <div className="experience-stack">
        <div className="toolbar">
          <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no catalogo" /></label>
          <strong className="cart-total">{currency.format(cartTotal)}</strong>
          <button className="primary-button" onClick={clearCart} disabled={!cartItems.length}><Phone size={18} /> Enviar WhatsApp</button>
        </div>
        <section className="catalog-grid">
          {products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())).map((item) => (
            <article className="product-card with-image" key={item.id}>
              <img src={item.image} alt="" />
              <span className="eyebrow">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>{currency.format(item.price)}</strong>
              <button className="secondary-button" onClick={() => addToCart(item.id)}><ShoppingCart size={18} /> Adicionar</button>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderFinanceExperience() {
    const income = records.filter((record) => record.category === 'Receita' || record.status === 'Pago').reduce((total, record) => total + record.amount, 0);
    const outcome = records.filter((record) => record.category !== 'Receita' && record.status !== 'Pago').reduce((total, record) => total + record.amount, 0);
    return (
      <div className="experience-stack">
        <section className="metric-grid finance-summary">
          <article className="metric-card"><span>Entradas</span><strong>{currency.format(income)}</strong><small>Recebimentos confirmados</small></article>
          <article className="metric-card"><span>Saidas</span><strong>{currency.format(outcome)}</strong><small>Pagamentos e previsoes</small></article>
          <article className="metric-card"><span>Saldo</span><strong>{currency.format(income - outcome)}</strong><small>Resultado mockado</small></article>
        </section>
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitTransaction}>
            <h3>Novo lancamento</h3>
            <input value={transactionForm.title} onChange={(event) => setTransactionForm((current) => ({ ...current, title: event.target.value }))} placeholder="Descricao" />
            <input type="number" value={transactionForm.amount} onChange={(event) => setTransactionForm((current) => ({ ...current, amount: event.target.value }))} />
            <select value={transactionForm.type} onChange={(event) => setTransactionForm((current) => ({ ...current, type: event.target.value }))}>
              <option>Receita</option>
              <option>Despesa</option>
            </select>
            <button className="primary-button" type="submit"><CreditCard size={18} /> Adicionar</button>
          </form>
          {renderRecordList('Lancamentos')}
        </section>
      </div>
    );
  }

  function renderAuthExperience() {
    if (!loggedProfile) {
      return (
        <section className="auth-layout">
          <form className="panel auth-card" onSubmit={login}>
            <div className="panel-heading"><h3>Entrar no ambiente</h3><ShieldCheck /></div>
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="admin@demo.com.br" />
            <input type="password" value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Senha demo" />
            <button className="primary-button" type="submit"><LogIn size={18} /> Acessar</button>
          </form>
          <div className="panel">
            <h3>Perfis disponiveis</h3>
            {['Administrador', 'Financeiro', 'Atendimento'].map((role) => <button className="role-row" key={role} onClick={() => setLoggedProfile(role)}>{role}<ArrowRight size={17} /></button>)}
          </div>
        </section>
      );
    }
    return (
      <div className="experience-stack">
        <div className="session-banner"><ShieldCheck /> Sessao ativa como {loggedProfile}<button onClick={() => setLoggedProfile('')}>Sair</button></div>
        {renderDashboardExperience()}
      </div>
    );
  }

  function renderBlogExperience() {
    return (
      <section className="blog-layout">
        <div className="panel post-list">
          <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar conteudo" /></label>
          {appData.posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.category.toLowerCase().includes(query.toLowerCase())).map((post) => (
            <button className={'post-row ' + (post.id === selectedPost ? 'active' : '')} key={post.id} onClick={() => setSelectedPost(post.id)}>
              <strong>{post.title}</strong>
              <small>{post.category} · {post.readTime}</small>
            </button>
          ))}
        </div>
        <article className="panel article-panel">
          <span className="eyebrow">{selectedBlogPost.category}</span>
          <h2>{selectedBlogPost.title}</h2>
          <p>{selectedBlogPost.excerpt}</p>
          <p>{selectedBlogPost.body}</p>
          <form className="inline-form" onSubmit={submitLead}>
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value, name: current.name || 'Assinante' }))} placeholder="E-mail para newsletter" />
            <button className="primary-button" type="submit"><Mail size={18} /> Assinar</button>
          </form>
        </article>
      </section>
    );
  }

  function renderDeliveryExperience() {
    return (
      <div className="experience-stack">
        {renderCatalogExperience()}
        <section className="workspace-grid">
          {renderRecordList('Pedidos em andamento')}
          {renderRecordDetail('Detalhe do pedido')}
        </section>
      </div>
    );
  }

  function renderClinicExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          {renderAppointmentForm()}
          {renderRecordDetail('Prontuario resumido')}
        </section>
        {renderRecordList('Pacientes e atendimentos')}
      </div>
    );
  }

  function renderExperience() {
    if (['marketing', 'landing', 'portfolio'].includes(appData.kind)) return renderMarketingExperience();
    if (['dashboard', 'reports'].includes(appData.kind)) return renderDashboardExperience();
    if (appData.kind === 'tickets') return renderOperationalExperience('Central de chamados');
    if (appData.kind === 'scheduler') return renderSchedulerExperience();
    if (appData.kind === 'inventory') return renderInventoryExperience();
    if (appData.kind === 'crm') return renderCrmExperience();
    if (appData.kind === 'chatbot') return renderChatbotExperience();
    if (appData.kind === 'email') return renderEmailExperience();
    if (appData.kind === 'serviceOrders') return renderOperationalExperience('Ordem de servico');
    if (appData.kind === 'catalog') return renderCatalogExperience();
    if (appData.kind === 'finance') return renderFinanceExperience();
    if (appData.kind === 'clients') return renderOperationalExperience('Relacionamento com clientes');
    if (appData.kind === 'auth') return renderAuthExperience();
    if (appData.kind === 'blog') return renderBlogExperience();
    if (appData.kind === 'condo') return renderOperationalExperience('Rotina do condominio');
    if (appData.kind === 'delivery') return renderDeliveryExperience();
    if (appData.kind === 'clinic') return renderClinicExperience();
    return renderDashboardExperience();
  }

  function renderSignatureSection() {
    return (
      <section className="signature-section">
        <div className="signature-copy">
          <span className="eyebrow">Pronto para virar proposta</span>
          <h2>Uma base com aparencia de produto, nao de rascunho.</h2>
          <p>{appData.differentialBullets[0]}</p>
          <div className="workflow-track">
            {appData.workflow.map((item) => (
              <span key={item.step}><strong>{item.step}</strong>{item.label}</span>
            ))}
          </div>
        </div>
        <div className="proof-grid">
          {appData.proofPoints.map((item) => (
            <article className="proof-card" key={item.title}>
              <CheckCircle2 size={20} />
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
          {appData.testimonials.map((testimonial) => (
            <blockquote className="testimonial-card" key={testimonial.name}>
              <p>"{testimonial.quote}"</p>
              <footer>{testimonial.name} · {testimonial.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className={shellClass} style={themeStyle}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label={appData.brandName}>
          <span>{appData.brandName.slice(0, 1)}</span>
          <strong>{appData.brandName}</strong>
        </a>
        <nav>
          <a className="creator-link" href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">by LogiCodem</a>
          <button onClick={scrollToWorkspace}>MVP</button>
          <button onClick={() => document.getElementById('escopo')?.scrollIntoView({ behavior: 'smooth' })}>Escopo</button>
          <button onClick={() => showToast('Contato comercial simulado.')}>Contato</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">{appData.categoryTitle} · {appData.styleName}</span>
            <h1>{appData.optionTitle}</h1>
            <p>{appData.tagline}</p>
            <div className="hero-flow">
              {appData.workflow.map((item) => <span key={item.step}>{item.label}</span>)}
            </div>
            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToWorkspace}><LayoutDashboard size={18} /> {appData.visual.cta}</button>
              <button className="secondary-button" onClick={() => showToast('Proposta comercial preparada.')}>Preparar proposta <ArrowRight size={18} /></button>
            </div>
            <div className="hero-proofline">
              {appData.proofPoints.slice(0, 3).map((point) => <span key={point.title}><CheckCircle2 size={16} />{point.title}</span>)}
            </div>
            <a className="logicodem-signature" href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">
              <span>by</span>
              <strong>LogiCodem</strong>
              <small>Allison Joanine</small>
            </a>
            <div className="mini-metrics">
              {appData.metrics.slice(0, 3).map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}
            </div>
          </div>
          <div className="hero-panel">
            <img src={appData.heroImage} alt="" />
            <div className="hero-panel-overlay" />
            <div className="hero-rail">
              <span><strong>{appData.records.length}</strong> registros ativos</span>
              <span><strong>{appData.metrics[1]?.value}</strong> indicador-chave</span>
            </div>
            {renderHeroPanel()}
          </div>
        </section>

        <section className="workspace-section" id="workspace">
          <div className="section-heading">
            <span className="eyebrow">Experiencia demonstravel</span>
            <h2>{appData.brandName} pronto para apresentacao</h2>
            <p>{appData.summary}</p>
          </div>
          {renderExperience()}
        </section>

        {renderSignatureSection()}

        <section className="scope-section" id="escopo">
          <div className="section-heading">
            <span className="eyebrow">Escopo comercial</span>
            <h2>O que este MVP entrega</h2>
          </div>
          <div className="scope-grid">
            {appData.scopeBullets.map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">
          <span>by</span> <strong>LogiCodem</strong>
        </a>
      </footer>

      {toast && <div className="toast"><CheckCircle2 size={18} /> {toast}</div>}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  return <span className={'status-pill status-' + status.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}>{status}</span>;
}

function StateBlock({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="state-block">
      {icon}
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

export default App;
`;
}

function renderStyles() {
  return `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input,
select,
textarea {
  font: inherit;
  letter-spacing: 0;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
  color: var(--text);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--surface-alt) 76%, transparent), transparent 520px),
    linear-gradient(135deg, color-mix(in srgb, var(--primary) 8%, transparent), transparent 42%),
    var(--bg);
}

.app-shell::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  content: "";
  opacity: 0.6;
}

.texture-linen::before {
  background-image:
    repeating-linear-gradient(0deg, transparent 0 18px, var(--pattern) 19px 20px),
    repeating-linear-gradient(90deg, transparent 0 18px, var(--pattern) 19px 20px);
}

.texture-grid::before {
  background-image:
    linear-gradient(var(--pattern) 1px, transparent 1px),
    linear-gradient(90deg, var(--pattern) 1px, transparent 1px);
  background-size: 48px 48px;
}

.texture-stripes::before {
  background-image: repeating-linear-gradient(135deg, transparent 0 18px, var(--pattern) 19px 20px);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 5vw;
  border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text);
  text-decoration: none;
}

.brand span {
  display: grid;
  width: 2.35rem;
  height: 2.35rem;
  place-items: center;
  border-radius: var(--radius);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--on-primary);
  font-weight: 800;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--primary) 26%, transparent);
}

.topbar nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.topbar nav button,
.creator-link,
.ghost-button,
.secondary-button,
.primary-button,
.icon-button {
  display: inline-flex;
  min-height: 2.6rem;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: 1px solid transparent;
  border-radius: var(--radius);
  padding: 0.7rem 1rem;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.topbar nav button,
.ghost-button {
  border-color: var(--border);
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  color: var(--text);
}

.creator-link {
  border-color: color-mix(in srgb, var(--primary) 54%, var(--border));
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, var(--surface)), color-mix(in srgb, var(--accent) 16%, var(--surface)));
  color: var(--text);
  font-weight: 850;
  text-decoration: none;
  box-shadow: 0 10px 24px color-mix(in srgb, var(--primary) 16%, transparent);
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), color-mix(in srgb, var(--secondary) 74%, var(--primary)));
  color: var(--on-primary);
  font-weight: 750;
  box-shadow: 0 14px 28px color-mix(in srgb, var(--primary) 22%, transparent);
}

.secondary-button {
  border-color: var(--border);
  background: var(--surface);
  color: var(--text);
  font-weight: 700;
}

.icon-button {
  width: 2.8rem;
  padding: 0;
  background: var(--primary);
  color: var(--on-primary);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.topbar nav button:hover,
.creator-link:hover,
.icon-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 28px color-mix(in srgb, var(--primary) 18%, transparent);
}

main {
  width: min(1180px, 90vw);
  margin: 0 auto;
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.98fr);
  gap: 2.4rem;
  align-items: center;
  min-height: 78vh;
  padding: 4.5rem 0 2.5rem;
}

.hero-copy h1 {
  margin: 0.85rem 0 1rem;
  font-size: 4rem;
  line-height: 1;
  letter-spacing: 0;
}

.hero-copy p,
.section-heading p,
.split-section p,
.panel p,
.product-card p,
.article-panel p {
  color: var(--muted);
  line-height: 1.65;
}

.eyebrow {
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-actions,
.button-row,
.inline-action,
.inline-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.hero-flow,
.hero-proofline {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1rem 0 0;
}

.hero-flow span {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.44rem 0.68rem;
  background: color-mix(in srgb, var(--surface) 70%, transparent);
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 760;
}

.hero-proofline {
  margin-top: 1rem;
}

.hero-proofline span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 700;
}

.logicodem-signature {
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.12rem 0.45rem;
  width: fit-content;
  margin-top: 1rem;
  padding: 0.72rem 0.95rem;
  border: 1px solid color-mix(in srgb, var(--primary) 45%, var(--border));
  border-radius: 0.5rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), transparent 46%),
    color-mix(in srgb, var(--surface) 88%, transparent);
  color: var(--text);
  text-decoration: none;
  box-shadow: 0 16px 36px color-mix(in srgb, var(--primary) 18%, transparent);
}

.logicodem-signature span {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 750;
  text-transform: uppercase;
}

.logicodem-signature strong {
  font-size: 1.05rem;
  letter-spacing: 0;
}

.logicodem-signature small {
  grid-column: 1 / -1;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 650;
}

.logicodem-signature:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--primary) 70%, var(--border));
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.6rem;
}

.mini-metrics span {
  min-height: 5rem;
  padding: 0.9rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--surface) 84%, transparent);
  color: var(--muted);
  box-shadow: 0 10px 26px color-mix(in srgb, var(--text) 6%, transparent);
}

.mini-metrics strong {
  display: block;
  color: var(--text);
  font-size: 1.35rem;
}

.hero-panel {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 0.35rem);
  background: var(--surface);
  box-shadow: var(--shadow);
  isolation: isolate;
}

.hero-panel > img {
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: cover;
  filter: saturate(0.98) contrast(1.02);
  transform: scale(1.01);
}

.hero-panel-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, transparent 0%, var(--hero-overlay) 100%),
    linear-gradient(135deg, var(--hero-tint), transparent 58%);
}

.hero-rail {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.7rem;
}

.hero-rail span {
  min-width: 9rem;
  border: 1px solid color-mix(in srgb, white 42%, var(--border));
  border-radius: var(--radius);
  padding: 0.72rem 0.85rem;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  color: var(--muted);
  font-size: 0.84rem;
}

.hero-rail strong {
  display: block;
  color: var(--text);
  font-size: 1.1rem;
}

.hero-widget {
  position: absolute;
  right: 1.1rem;
  bottom: 1.1rem;
  left: 1.1rem;
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid color-mix(in srgb, var(--border) 78%, white);
  z-index: 3;
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
}

.widget-title,
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-weight: 800;
}

input,
select,
textarea {
  width: 100%;
  min-height: 2.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.72rem 0.85rem;
  background: color-mix(in srgb, var(--surface) 94%, white);
  color: var(--text);
  outline: none;
  transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

textarea {
  min-height: 6.5rem;
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent);
}

.workspace-section,
.scope-section {
  padding: 4rem 0;
}

.signature-section {
  display: grid;
  grid-template-columns: minmax(300px, 0.86fr) minmax(0, 1.14fr);
  gap: 1.2rem;
  align-items: stretch;
  padding: 3rem 0 1rem;
}

.signature-copy {
  position: sticky;
  top: 6rem;
  align-self: start;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 0.25rem);
  padding: 1.3rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--primary) 16%, transparent), transparent),
    color-mix(in srgb, var(--surface) 92%, transparent);
  box-shadow: var(--shadow);
}

.signature-copy h2 {
  margin: 0.5rem 0;
  font-size: 2.1rem;
  line-height: 1.13;
}

.workflow-track {
  display: grid;
  gap: 0.55rem;
  margin-top: 1rem;
}

.workflow-track span {
  display: grid;
  grid-template-columns: 3rem 1fr;
  align-items: center;
  gap: 0.7rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.72rem;
  background: color-mix(in srgb, var(--surface) 78%, transparent);
}

.workflow-track strong {
  color: var(--primary);
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.proof-card,
.testimonial-card {
  margin: 0;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 0.18rem);
  padding: 1rem;
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: var(--shadow);
}

.proof-card {
  display: grid;
  gap: 0.5rem;
}

.proof-card svg {
  color: var(--primary);
}

.proof-card p,
.testimonial-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.testimonial-card {
  display: grid;
  align-content: space-between;
  min-height: 11rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), transparent),
    var(--surface);
}

.testimonial-card footer {
  margin-top: 1rem;
  color: var(--text);
  font-weight: 750;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 1.5rem;
}

.section-heading h2,
.split-section h2 {
  margin: 0.5rem 0;
  font-size: 2.25rem;
  line-height: 1.15;
  letter-spacing: 0;
}

.experience-stack {
  display: grid;
  gap: 1.2rem;
}

.panel,
.metric-card,
.plan-card,
.product-card,
details,
.state-block,
.kanban-column,
.session-banner {
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 0.16rem);
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: var(--shadow);
}

.panel,
.metric-card,
.plan-card,
.product-card,
details,
.state-block {
  padding: 1.1rem;
}

.workspace-grid,
.split-section,
.chat-layout,
.blog-layout,
.auth-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 1.05fr);
  gap: 1rem;
  align-items: start;
}

.metric-grid,
.plans-grid,
.catalog-grid,
.scope-grid,
.faq-grid,
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.metric-card {
  min-height: 9rem;
  position: relative;
  overflow: hidden;
}

.metric-card::after {
  position: absolute;
  right: 1rem;
  bottom: 0.85rem;
  width: 4.5rem;
  height: 0.22rem;
  border: 1px solid color-mix(in srgb, var(--primary) 24%, transparent);
  border-radius: 999px;
  transform: rotate(-8deg);
  content: "";
}

.metric-card span,
.metric-card small,
.record-row small,
.kanban-card small,
.product-card small,
.stock-row small,
.post-row small {
  color: var(--muted);
}

.metric-card strong {
  display: block;
  margin: 0.4rem 0;
  font-size: 2rem;
}

.tone-primary {
  border-top: 4px solid var(--primary);
}

.tone-secondary {
  border-top: 4px solid var(--secondary);
}

.tone-accent {
  border-top: 4px solid var(--accent);
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 0.16rem);
  background: color-mix(in srgb, var(--surface-alt) 54%, transparent);
}

.search-field {
  position: relative;
  display: flex;
  min-width: min(100%, 360px);
  flex: 1;
  align-items: center;
}

.search-field svg {
  position: absolute;
  left: 0.8rem;
  color: var(--muted);
}

.search-field input {
  padding-left: 2.35rem;
}

.record-list {
  display: grid;
  gap: 0.65rem;
  margin-top: 1rem;
}

.record-row,
.post-row,
.role-row,
.service-tile,
.quick-reply {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.85rem;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  color: var(--text);
  text-align: left;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.record-row.active,
.post-row.active,
.service-tile:hover,
.role-row:hover {
  border-color: var(--primary);
  background: color-mix(in srgb, var(--primary) 10%, var(--surface));
  box-shadow: 0 12px 24px color-mix(in srgb, var(--primary) 13%, transparent);
  transform: translateY(-1px);
}

.record-row > span,
.stock-row > span,
.post-row > span {
  display: grid;
  gap: 0.18rem;
  min-width: 0;
}

.record-row strong,
.record-row small,
.stock-row strong,
.stock-row small,
.post-row strong,
.post-row small {
  overflow-wrap: anywhere;
}

.status-pill {
  display: inline-flex;
  min-width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.34rem 0.65rem;
  background: color-mix(in srgb, var(--secondary) 14%, var(--surface));
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 800;
}

.status-risco,
.status-atrasado,
.status-critica {
  background: color-mix(in srgb, #ef4444 18%, var(--surface));
  color: #b91c1c;
}

.status-concluido,
.status-pago,
.status-fechado,
.status-publicado {
  background: color-mix(in srgb, #22c55e 18%, var(--surface));
  color: #166534;
}

.detail-panel h4 {
  margin: 1rem 0 0.4rem;
  font-size: 1.3rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 1rem 0;
}

.detail-grid span {
  display: grid;
  gap: 0.25rem;
  padding: 0.8rem;
  border-radius: 0.6rem;
  background: var(--surface-alt);
}

.progress-line,
.stock-meter {
  height: 0.65rem;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--border) 70%, transparent);
}

.progress-line span,
.stock-meter span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.tag-row,
.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1rem 0;
}

.tag-row span,
.feature-list span,
.scope-grid span,
.plan-card small {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.42rem 0.7rem;
  background: color-mix(in srgb, var(--surface-alt) 66%, transparent);
}

.plans-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.plan-card {
  display: grid;
  gap: 0.7rem;
  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.plan-card.selected {
  border-color: var(--primary);
  outline: 3px solid color-mix(in srgb, var(--primary) 18%, transparent);
  transform: translateY(-2px);
}

.plan-card > strong {
  font-size: 1.8rem;
}

.faq-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

details summary {
  cursor: pointer;
  font-weight: 800;
}

.bar-chart {
  display: grid;
  gap: 0.9rem;
}

.bar-row {
  display: grid;
  grid-template-columns: 90px 1fr 110px;
  gap: 0.75rem;
  align-items: center;
}

.bar-row div {
  height: 0.85rem;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-alt);
}

.bar-row i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--primary);
}

.skeleton-list {
  display: grid;
  gap: 0.75rem;
}

.skeleton-list span {
  height: 4rem;
  border-radius: 0.7rem;
  background: linear-gradient(90deg, var(--surface-alt), var(--surface), var(--surface-alt));
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

.state-block {
  display: grid;
  min-height: 14rem;
  place-items: center;
  text-align: center;
}

.two-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}

.service-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.catalog-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.product-card {
  display: grid;
  gap: 0.7rem;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.product-card:hover,
.kanban-card:hover,
.proof-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 48px color-mix(in srgb, var(--text) 11%, transparent);
}

.product-card.with-image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius);
  object-fit: cover;
}

.stock-row {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--border);
}

.kanban {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.kanban-column {
  display: grid;
  gap: 0.75rem;
  align-content: start;
  padding: 0.9rem;
}

.kanban-column h3 {
  margin: 0;
}

.kanban-card {
  display: grid;
  gap: 0.6rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.85rem;
  background: var(--surface);
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.chat-layout {
  grid-template-columns: 320px 1fr;
}

.knowledge-panel {
  display: grid;
  gap: 0.75rem;
}

.chat-window {
  min-height: 560px;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1rem;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  overflow: auto;
  max-height: 470px;
  padding-right: 0.25rem;
}

.bubble {
  max-width: 82%;
  border-radius: 0.85rem;
  padding: 0.75rem 0.9rem;
  background: var(--surface-alt);
  line-height: 1.5;
}

.bubble.user {
  align-self: flex-end;
  background: var(--primary);
  color: var(--surface);
}

.email-preview pre {
  min-height: 360px;
  white-space: pre-wrap;
  color: var(--text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  line-height: 1.55;
}

.finance-summary {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.session-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
}

.session-banner button {
  border: 0;
  border-radius: 0.45rem;
  padding: 0.5rem 0.75rem;
}

.blog-layout {
  grid-template-columns: 360px 1fr;
}

.post-list {
  display: grid;
  gap: 0.7rem;
}

.article-panel h2 {
  font-size: 2.2rem;
  line-height: 1.15;
}

.scope-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cart-total,
.total {
  color: var(--primary);
  font-size: 1.5rem;
}

.site-footer {
  width: min(1180px, 90vw);
  margin: 2.2rem auto 0;
  padding: 0 0 2.4rem;
  display: flex;
  justify-content: center;
}

.site-footer a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.72rem 1rem;
  border: 1px solid color-mix(in srgb, var(--primary) 40%, var(--border));
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--surface) 84%, transparent);
  color: var(--text);
  text-decoration: none;
  box-shadow: 0 14px 30px color-mix(in srgb, var(--primary) 14%, transparent);
}

.site-footer span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 750;
  text-transform: uppercase;
}

.site-footer strong {
  font-size: 1rem;
}

.toast {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  max-width: min(420px, calc(100vw - 2rem));
  border: 1px solid var(--border);
  border-radius: 0.7rem;
  padding: 0.9rem 1rem;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.visual-command .hero-section {
  grid-template-columns: minmax(360px, 0.8fr) minmax(0, 1.2fr);
}

.visual-command .hero-panel {
  min-height: 620px;
  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
}

.visual-command .panel,
.visual-command .metric-card,
.visual-command .kanban-column,
.visual-command .toolbar {
  background: color-mix(in srgb, var(--surface) 82%, transparent);
}

.visual-command .workspace-section {
  border-top: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
}

.visual-conversion .hero-section {
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  min-height: 72vh;
}

.visual-conversion .hero-copy h1 {
  font-size: 3.55rem;
}

.visual-conversion .hero-flow span,
.visual-conversion .tag-row span,
.visual-conversion .feature-list span {
  border-radius: var(--radius);
}

.visual-conversion .primary-button {
  min-height: 3rem;
}

.visual-editorial .hero-copy {
  padding-top: 1rem;
}

.visual-editorial .section-heading h2,
.visual-editorial .signature-copy h2 {
  max-width: 820px;
}

@media (max-width: 980px) {
  .hero-section,
  .workspace-grid,
  .split-section,
  .chat-layout,
  .blog-layout,
  .auth-layout,
  .signature-section {
    grid-template-columns: 1fr;
  }

  .signature-copy {
    position: static;
  }

  .hero-section {
    min-height: auto;
  }

  .hero-copy h1 {
    font-size: 3rem;
  }

  .metric-grid,
  .catalog-grid,
  .scope-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .plans-grid,
  .faq-grid,
  .proof-grid {
    grid-template-columns: 1fr;
  }

  .hero-panel,
  .hero-panel > img {
    min-height: 480px;
  }
}

@media (max-width: 680px) {
  main {
    width: min(100% - 1.25rem, 1180px);
  }

  .topbar {
    align-items: flex-start;
    flex-direction: column;
    padding: 0.85rem;
  }

  .topbar nav {
    width: 100%;
  }

  .topbar nav button,
  .creator-link {
    flex: 1;
  }

  .hero-section {
    padding-top: 2rem;
  }

  .hero-copy h1 {
    font-size: 2.35rem;
  }

  .mini-metrics,
  .metric-grid,
  .catalog-grid,
  .scope-grid,
  .service-grid,
  .finance-summary {
    grid-template-columns: 1fr;
  }

  .hero-panel,
  .hero-panel > img {
    min-height: 560px;
  }

  .bar-row,
  .detail-grid,
  .two-fields {
    grid-template-columns: 1fr;
  }

  .toolbar,
  .inline-form,
  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    width: 100%;
  }
}
`;
}

function renderReadme(data, packageNameValue) {
  return `# ${data.brandName} - ${data.optionTitle}

${data.summary}

## Como rodar

\`\`\`bash
npm install
npm run dev
\`\`\`

Para gerar a versao de producao:

\`\`\`bash
npm run build
npm run preview
\`\`\`

## O que o MVP faz

${data.scopeBullets.map((item) => `- ${item}`).join('\n')}

## Como adaptar para um cliente real

- Troque os dados em \`src/data.ts\` por chamadas a uma API ou banco de dados.
- Ajuste as cores em \`src/data.ts\` dentro de \`theme\`.
- Conecte formularios, login, carrinho ou fluxos operacionais ao backend do cliente.
- Use os componentes e secoes de \`src/App.tsx\` como base para novas telas.

## Identidade

- Categoria: ${data.categoryTitle}
- Opcao: ${data.optionTitle}
- Estilo: ${data.styleName}
- Pacote: \`${packageNameValue}\`
`;
}

function renderScope(data) {
  return `# Escopo do MVP - ${data.optionTitle}

## Proposta

${data.tagline}

## Funcionalidades entregues

${data.scopeBullets.map((item) => `- ${item}`).join('\n')}

## Dados mockados

O projeto usa registros, metricas, planos, perguntas frequentes, produtos/servicos e posts definidos em \`src/data.ts\`. Esses dados foram pensados para demonstracao comercial e podem ser substituidos por API real.

## Fluxos simulados

- Criacao e atualizacao de registros no frontend.
- Formularios com validacao basica.
- Mensagens de sucesso, erro, carregamento e vazio.
- Filtros, selecoes, carrinho, agenda, login ou chatbot conforme o nicho.
`;
}

function renderDifferentials(data) {
  return `# Diferenciais Comerciais - ${data.optionTitle}

${data.differentialBullets.map((item) => `- ${item}`).join('\n')}

## Argumento de venda

Este MVP permite apresentar uma solucao concreta em vez de apenas uma promessa. A LogiCodem pode usar esta base para demonstrar valor, validar regras com o cliente e vender a evolucao com backend, integracoes e personalizacao visual.
`;
}

function renderPrompt(data) {
  return `# PROMPT-CODEX

${data.prompt}

## Contexto

- Marca demo: ${data.brandName}
- Nicho: ${data.optionTitle}
- Categoria: ${data.categoryTitle}
- Estilo visual: ${data.styleName}
- Publico: ${data.audience}

## Direcao para proximas iteracoes

- Preserve a responsividade e a clareza comercial.
- Mantenha botoes, formularios e estados funcionais.
- Ao adicionar backend, substitua gradualmente os mocks de \`src/data.ts\`.
- Evite transformar o MVP em tela estatica.
`;
}

function renderBrandSvg(data) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeHtml(data.brandName)}">
  <rect width="1200" height="630" fill="${data.theme.bg}"/>
  <rect x="72" y="72" width="1056" height="486" rx="32" fill="${data.theme.surface}" stroke="${data.theme.border}" stroke-width="3"/>
  <circle cx="150" cy="154" r="46" fill="${data.theme.primary}"/>
  <text x="150" y="169" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="${data.theme.surface}">${escapeHtml(data.brandName.slice(0, 1))}</text>
  <text x="220" y="150" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="${data.theme.text}">${escapeHtml(data.brandName)}</text>
  <text x="220" y="202" font-family="Arial, sans-serif" font-size="24" fill="${data.theme.muted}">${escapeHtml(data.optionTitle)}</text>
  <text x="96" y="330" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="${data.theme.text}">${escapeHtml(data.categoryTitle)}</text>
  <text x="96" y="392" font-family="Arial, sans-serif" font-size="28" fill="${data.theme.muted}">${escapeHtml(data.styleName)} para demos comerciais da LogiCodem</text>
  <rect x="96" y="462" width="255" height="58" rx="18" fill="${data.theme.primary}"/>
  <text x="224" y="500" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="${data.theme.surface}">MVP funcional</text>
</svg>
`;
}

function renderFaviconSvg(data) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${data.theme.primary}"/>
  <path d="M17 42V18h8v17h22v7H17Z" fill="${data.theme.onPrimary}"/>
  <path d="M31 18h16v7H31v-7Z" fill="${data.theme.accent}"/>
</svg>
`;
}

function renderRootPackage(workspaces) {
  return `${JSON.stringify({
    private: true,
    name: 'logicodem-mvp-templates',
    type: 'module',
    scripts: {
      'generate:mvps': 'node tools/generate-mvps.mjs',
      'build:all': 'node tools/build-all.mjs',
      'build:pages': 'node tools/build-pages.mjs'
    },
    workspaces
  }, null, 2)}\n`;
}

function renderBuildAll(packages) {
  return `import { spawnSync } from 'node:child_process';

const packages = ${JSON.stringify(packages, null, 2)};
const failed = [];

for (const pkg of packages) {
  console.log('\\n==> build ' + pkg.name);
  const result = spawnSync('npm run build --workspace ' + pkg.name, { stdio: 'inherit', shell: true });
  if (result.error) {
    console.error(result.error.message);
  }
  if (result.status !== 0) {
    failed.push(pkg.name);
  }
}

if (failed.length) {
  console.error('\\nBuild falhou em:');
  for (const name of failed) console.error('- ' + name);
  process.exit(1);
}

console.log('\\nTodos os builds passaram: ' + packages.length + ' projetos.');
`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function writeProject(projectPath, data, packageNameValue) {
  const srcPath = join(projectPath, 'src');
  const publicPath = join(projectPath, 'public');
  if (existsSync(srcPath)) rmSync(srcPath, { recursive: true, force: true });
  if (existsSync(publicPath)) rmSync(publicPath, { recursive: true, force: true });
  mkdirSync(srcPath, { recursive: true });
  mkdirSync(publicPath, { recursive: true });

  writeFileSync(join(projectPath, 'package.json'), renderPackageJson(packageNameValue));
  writeFileSync(join(projectPath, 'index.html'), renderIndexHtml(data));
  writeFileSync(join(projectPath, 'tsconfig.json'), renderTsConfig());
  writeFileSync(join(projectPath, 'tsconfig.node.json'), renderTsNodeConfig());
  writeFileSync(join(projectPath, 'vite.config.ts'), renderViteConfig());
  writeFileSync(join(srcPath, 'types.ts'), renderTypes());
  writeFileSync(join(srcPath, 'data.ts'), renderData(data));
  writeFileSync(join(srcPath, 'vite-env.d.ts'), renderViteEnv());
  writeFileSync(join(srcPath, 'main.tsx'), renderMain());
  writeFileSync(join(srcPath, 'App.tsx'), renderApp());
  writeFileSync(join(srcPath, 'styles.css'), renderStyles());
  writeFileSync(join(publicPath, 'brand-card.svg'), renderBrandSvg(data));
  writeFileSync(join(publicPath, 'favicon.svg'), renderFaviconSvg(data));
  writeFileSync(join(projectPath, 'README.md'), renderReadme(data, packageNameValue));
  writeFileSync(join(projectPath, 'ESCOPO-MVP.md'), renderScope(data));
  writeFileSync(join(projectPath, 'DIFERENCIAIS.md'), renderDifferentials(data));
  writeFileSync(join(projectPath, 'PROMPT-CODEX.md'), renderPrompt(data));
}

const workspaceEntries = [];
const packageEntries = [];
const categories = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && categoryMap[entry.name])
  .map((entry) => entry.name)
  .sort();

let itemIndex = 0;
for (const parentSlug of categories) {
  const categoryPath = join(root, parentSlug);
  const options = readdirSync(categoryPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('opcao-'))
    .map((entry) => entry.name)
    .sort();

  for (const optionSlug of options) {
    const projectPath = join(categoryPath, optionSlug);
    const data = buildData(parentSlug, optionSlug, categories.indexOf(parentSlug), itemIndex);
    const name = packageName(parentSlug, optionSlug);
    const workspace = `${parentSlug}/${optionSlug}`;
    writeProject(projectPath, data, name);
    workspaceEntries.push(workspace);
    packageEntries.push({ name, workspace });
    itemIndex += 1;
  }
}

writeFileSync(join(root, 'package.json'), renderRootPackage(workspaceEntries));
writeFileSync(join(root, 'tools', 'build-all.mjs'), renderBuildAll(packageEntries));

console.log(`MVPs gerados: ${packageEntries.length}`);
