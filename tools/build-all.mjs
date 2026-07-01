import { spawnSync } from 'node:child_process';

const packages = [
  {
    "name": "logicodem-01-mvp-site-institucional-opcao-01-empresa-moderna",
    "workspace": "01-mvp-site-institucional/opcao-01-empresa-moderna"
  },
  {
    "name": "logicodem-01-mvp-site-institucional-opcao-02-corporativo-premium",
    "workspace": "01-mvp-site-institucional/opcao-02-corporativo-premium"
  },
  {
    "name": "logicodem-01-mvp-site-institucional-opcao-03-servicos-locais",
    "workspace": "01-mvp-site-institucional/opcao-03-servicos-locais"
  },
  {
    "name": "logicodem-02-mvp-landing-page-saas-opcao-01-saas-tecnologico",
    "workspace": "02-mvp-landing-page-saas/opcao-01-saas-tecnologico"
  },
  {
    "name": "logicodem-02-mvp-landing-page-saas-opcao-02-produto-digital",
    "workspace": "02-mvp-landing-page-saas/opcao-02-produto-digital"
  },
  {
    "name": "logicodem-02-mvp-landing-page-saas-opcao-03-alta-conversao",
    "workspace": "02-mvp-landing-page-saas/opcao-03-alta-conversao"
  },
  {
    "name": "logicodem-03-mvp-portfolio-profissional-opcao-01-dev-premium",
    "workspace": "03-mvp-portfolio-profissional/opcao-01-dev-premium"
  },
  {
    "name": "logicodem-03-mvp-portfolio-profissional-opcao-02-freelancer-criativo",
    "workspace": "03-mvp-portfolio-profissional/opcao-02-freelancer-criativo"
  },
  {
    "name": "logicodem-03-mvp-portfolio-profissional-opcao-03-curriculo-online",
    "workspace": "03-mvp-portfolio-profissional/opcao-03-curriculo-online"
  },
  {
    "name": "logicodem-04-mvp-admin-dashboard-opcao-01-dashboard-clean",
    "workspace": "04-mvp-admin-dashboard/opcao-01-dashboard-clean"
  },
  {
    "name": "logicodem-04-mvp-admin-dashboard-opcao-02-dashboard-dark-tech",
    "workspace": "04-mvp-admin-dashboard/opcao-02-dashboard-dark-tech"
  },
  {
    "name": "logicodem-04-mvp-admin-dashboard-opcao-03-dashboard-corporativo",
    "workspace": "04-mvp-admin-dashboard/opcao-03-dashboard-corporativo"
  },
  {
    "name": "logicodem-05-mvp-sistema-chamados-opcao-01-helpdesk-ti",
    "workspace": "05-mvp-sistema-chamados/opcao-01-helpdesk-ti"
  },
  {
    "name": "logicodem-05-mvp-sistema-chamados-opcao-02-suporte-cliente",
    "workspace": "05-mvp-sistema-chamados/opcao-02-suporte-cliente"
  },
  {
    "name": "logicodem-05-mvp-sistema-chamados-opcao-03-chamados-internos",
    "workspace": "05-mvp-sistema-chamados/opcao-03-chamados-internos"
  },
  {
    "name": "logicodem-06-mvp-sistema-agendamento-opcao-01-clinica-consultorio",
    "workspace": "06-mvp-sistema-agendamento/opcao-01-clinica-consultorio"
  },
  {
    "name": "logicodem-06-mvp-sistema-agendamento-opcao-02-barbearia-estetica",
    "workspace": "06-mvp-sistema-agendamento/opcao-02-barbearia-estetica"
  },
  {
    "name": "logicodem-06-mvp-sistema-agendamento-opcao-03-prestador-servico",
    "workspace": "06-mvp-sistema-agendamento/opcao-03-prestador-servico"
  },
  {
    "name": "logicodem-07-mvp-controle-estoque-opcao-01-estoque-loja",
    "workspace": "07-mvp-controle-estoque/opcao-01-estoque-loja"
  },
  {
    "name": "logicodem-07-mvp-controle-estoque-opcao-02-estoque-manutencao",
    "workspace": "07-mvp-controle-estoque/opcao-02-estoque-manutencao"
  },
  {
    "name": "logicodem-07-mvp-controle-estoque-opcao-03-estoque-compras",
    "workspace": "07-mvp-controle-estoque/opcao-03-estoque-compras"
  },
  {
    "name": "logicodem-08-mvp-crm-simples-opcao-01-crm-vendas",
    "workspace": "08-mvp-crm-simples/opcao-01-crm-vendas"
  },
  {
    "name": "logicodem-08-mvp-crm-simples-opcao-02-crm-leads",
    "workspace": "08-mvp-crm-simples/opcao-02-crm-leads"
  },
  {
    "name": "logicodem-08-mvp-crm-simples-opcao-03-crm-atendimento",
    "workspace": "08-mvp-crm-simples/opcao-03-crm-atendimento"
  },
  {
    "name": "logicodem-09-mvp-chatbot-ia-opcao-01-chatbot-site",
    "workspace": "09-mvp-chatbot-ia/opcao-01-chatbot-site"
  },
  {
    "name": "logicodem-09-mvp-chatbot-ia-opcao-02-chatbot-atendimento",
    "workspace": "09-mvp-chatbot-ia/opcao-02-chatbot-atendimento"
  },
  {
    "name": "logicodem-09-mvp-chatbot-ia-opcao-03-chatbot-base-conhecimento",
    "workspace": "09-mvp-chatbot-ia/opcao-03-chatbot-base-conhecimento"
  },
  {
    "name": "logicodem-10-mvp-gerador-email-chamados-opcao-01-email-suporte-tecnico",
    "workspace": "10-mvp-gerador-email-chamados/opcao-01-email-suporte-tecnico"
  },
  {
    "name": "logicodem-10-mvp-gerador-email-chamados-opcao-02-email-comercial",
    "workspace": "10-mvp-gerador-email-chamados/opcao-02-email-comercial"
  },
  {
    "name": "logicodem-10-mvp-gerador-email-chamados-opcao-03-email-cobranca-retorno",
    "workspace": "10-mvp-gerador-email-chamados/opcao-03-email-cobranca-retorno"
  },
  {
    "name": "logicodem-11-mvp-sistema-os-servicos-opcao-01-ordem-servico-ti",
    "workspace": "11-mvp-sistema-os-servicos/opcao-01-ordem-servico-ti"
  },
  {
    "name": "logicodem-11-mvp-sistema-os-servicos-opcao-02-ordem-servico-manutencao",
    "workspace": "11-mvp-sistema-os-servicos/opcao-02-ordem-servico-manutencao"
  },
  {
    "name": "logicodem-11-mvp-sistema-os-servicos-opcao-03-ordem-servico-campo",
    "workspace": "11-mvp-sistema-os-servicos/opcao-03-ordem-servico-campo"
  },
  {
    "name": "logicodem-12-mvp-catalogo-produtos-opcao-01-catalogo-whatsapp",
    "workspace": "12-mvp-catalogo-produtos/opcao-01-catalogo-whatsapp"
  },
  {
    "name": "logicodem-12-mvp-catalogo-produtos-opcao-02-catalogo-loja",
    "workspace": "12-mvp-catalogo-produtos/opcao-02-catalogo-loja"
  },
  {
    "name": "logicodem-12-mvp-catalogo-produtos-opcao-03-catalogo-servicos",
    "workspace": "12-mvp-catalogo-produtos/opcao-03-catalogo-servicos"
  },
  {
    "name": "logicodem-13-mvp-painel-financeiro-opcao-01-contas-pagar-receber",
    "workspace": "13-mvp-painel-financeiro/opcao-01-contas-pagar-receber"
  },
  {
    "name": "logicodem-13-mvp-painel-financeiro-opcao-02-fluxo-caixa",
    "workspace": "13-mvp-painel-financeiro/opcao-02-fluxo-caixa"
  },
  {
    "name": "logicodem-13-mvp-painel-financeiro-opcao-03-financeiro-freelancer",
    "workspace": "13-mvp-painel-financeiro/opcao-03-financeiro-freelancer"
  },
  {
    "name": "logicodem-14-mvp-sistema-clientes-opcao-01-cadastro-clientes",
    "workspace": "14-mvp-sistema-clientes/opcao-01-cadastro-clientes"
  },
  {
    "name": "logicodem-14-mvp-sistema-clientes-opcao-02-area-cliente",
    "workspace": "14-mvp-sistema-clientes/opcao-02-area-cliente"
  },
  {
    "name": "logicodem-14-mvp-sistema-clientes-opcao-03-historico-atendimentos",
    "workspace": "14-mvp-sistema-clientes/opcao-03-historico-atendimentos"
  },
  {
    "name": "logicodem-15-mvp-sistema-login-auth-opcao-01-login-simples",
    "workspace": "15-mvp-sistema-login-auth/opcao-01-login-simples"
  },
  {
    "name": "logicodem-15-mvp-sistema-login-auth-opcao-02-login-com-perfis",
    "workspace": "15-mvp-sistema-login-auth/opcao-02-login-com-perfis"
  },
  {
    "name": "logicodem-15-mvp-sistema-login-auth-opcao-03-login-saas-multitenant",
    "workspace": "15-mvp-sistema-login-auth/opcao-03-login-saas-multitenant"
  },
  {
    "name": "logicodem-16-mvp-blog-noticias-opcao-01-blog-empresa",
    "workspace": "16-mvp-blog-noticias/opcao-01-blog-empresa"
  },
  {
    "name": "logicodem-16-mvp-blog-noticias-opcao-02-blog-tecnologia",
    "workspace": "16-mvp-blog-noticias/opcao-02-blog-tecnologia"
  },
  {
    "name": "logicodem-16-mvp-blog-noticias-opcao-03-central-conteudo",
    "workspace": "16-mvp-blog-noticias/opcao-03-central-conteudo"
  },
  {
    "name": "logicodem-17-mvp-painel-relatorios-opcao-01-relatorios-vendas",
    "workspace": "17-mvp-painel-relatorios/opcao-01-relatorios-vendas"
  },
  {
    "name": "logicodem-17-mvp-painel-relatorios-opcao-02-relatorios-operacionais",
    "workspace": "17-mvp-painel-relatorios/opcao-02-relatorios-operacionais"
  },
  {
    "name": "logicodem-17-mvp-painel-relatorios-opcao-03-relatorios-graficos",
    "workspace": "17-mvp-painel-relatorios/opcao-03-relatorios-graficos"
  },
  {
    "name": "logicodem-18-mvp-sistema-condominio-opcao-01-controle-moradores",
    "workspace": "18-mvp-sistema-condominio/opcao-01-controle-moradores"
  },
  {
    "name": "logicodem-18-mvp-sistema-condominio-opcao-02-controle-visitantes",
    "workspace": "18-mvp-sistema-condominio/opcao-02-controle-visitantes"
  },
  {
    "name": "logicodem-18-mvp-sistema-condominio-opcao-03-ocorrencias-condominio",
    "workspace": "18-mvp-sistema-condominio/opcao-03-ocorrencias-condominio"
  },
  {
    "name": "logicodem-19-mvp-sistema-delivery-opcao-01-cardapio-online",
    "workspace": "19-mvp-sistema-delivery/opcao-01-cardapio-online"
  },
  {
    "name": "logicodem-19-mvp-sistema-delivery-opcao-02-pedidos-whatsapp",
    "workspace": "19-mvp-sistema-delivery/opcao-02-pedidos-whatsapp"
  },
  {
    "name": "logicodem-19-mvp-sistema-delivery-opcao-03-painel-entregas",
    "workspace": "19-mvp-sistema-delivery/opcao-03-painel-entregas"
  },
  {
    "name": "logicodem-20-mvp-sistema-clinica-opcao-01-agendamento-pacientes",
    "workspace": "20-mvp-sistema-clinica/opcao-01-agendamento-pacientes"
  },
  {
    "name": "logicodem-20-mvp-sistema-clinica-opcao-02-prontuario-simples",
    "workspace": "20-mvp-sistema-clinica/opcao-02-prontuario-simples"
  },
  {
    "name": "logicodem-20-mvp-sistema-clinica-opcao-03-gestao-consultorio",
    "workspace": "20-mvp-sistema-clinica/opcao-03-gestao-consultorio"
  }
];
const failed = [];

for (const pkg of packages) {
  console.log('\n==> build ' + pkg.name);
  const result = spawnSync('npm run build --workspace ' + pkg.name, { stdio: 'inherit', shell: true });
  if (result.error) {
    console.error(result.error.message);
  }
  if (result.status !== 0) {
    failed.push(pkg.name);
  }
}

if (failed.length) {
  console.error('\nBuild falhou em:');
  for (const name of failed) console.error('- ' + name);
  process.exit(1);
}

console.log('\nTodos os builds passaram: ' + packages.length + ' projetos.');
