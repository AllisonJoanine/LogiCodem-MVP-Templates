import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'pages-dist');
const baseUrl = 'https://allisonjoanine.github.io/LogiCodem-MVP-Templates';

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const staticWorkspaces = [
  '21-mvp-site-canil/opcao-01-alex-boston-terriers',
  '21-mvp-site-canil/opcao-02-wix-boston-terriers'
];
const workspaces = [...pkg.workspaces, ...staticWorkspaces].sort((a, b) => a.localeCompare(b, 'pt-BR'));

const categories = [
  ['01-mvp-site-institucional', 'Site Institucional'],
  ['02-mvp-landing-page-saas', 'Landing Page SaaS'],
  ['03-mvp-portfolio-profissional', 'Portfolio Profissional'],
  ['04-mvp-admin-dashboard', 'Admin Dashboard'],
  ['05-mvp-sistema-chamados', 'Sistema de Chamados'],
  ['06-mvp-sistema-agendamento', 'Sistema de Agendamento'],
  ['07-mvp-controle-estoque', 'Controle de Estoque'],
  ['08-mvp-crm-simples', 'CRM Simples'],
  ['09-mvp-chatbot-ia', 'Chatbot IA'],
  ['10-mvp-gerador-email-chamados', 'Gerador de E-mail para Chamados'],
  ['11-mvp-sistema-os-servicos', 'Sistema de OS e Servicos'],
  ['12-mvp-catalogo-produtos', 'Catalogo de Produtos'],
  ['13-mvp-painel-financeiro', 'Painel Financeiro'],
  ['14-mvp-sistema-clientes', 'Sistema de Clientes'],
  ['15-mvp-sistema-login-auth', 'Login e Autenticacao'],
  ['16-mvp-blog-noticias', 'Blog e Noticias'],
  ['17-mvp-painel-relatorios', 'Painel de Relatorios'],
  ['18-mvp-sistema-condominio', 'Sistema de Condominio'],
  ['19-mvp-sistema-delivery', 'Sistema Delivery'],
  ['20-mvp-sistema-clinica', 'Sistema de Clinica'],
  ['21-mvp-site-canil', 'Site para Canil']
];

function optionTitle(workspace) {
  const raw = workspace.split('/').at(-1) ?? workspace;
  return raw
    .replace(/^opcao-\d+-/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const workspace of workspaces) {
  const dist = staticWorkspaces.includes(workspace)
    ? join(root, workspace)
    : join(root, workspace, 'dist');
  const target = join(outDir, ...workspace.split('/'));
  mkdirSync(target, { recursive: true });
  cpSync(dist, target, { recursive: true });
}

const cards = categories.map(([slug, title]) => {
  const links = workspaces
    .filter((workspace) => workspace.startsWith(`${slug}/`))
    .map((workspace) => {
      const href = `${baseUrl}/${workspace}/`;
      return `<a href="${href}">${escapeHtml(optionTitle(workspace))}</a>`;
    })
    .join('');

  return `<section class="card">
    <span>${escapeHtml(slug)}</span>
    <h2>${escapeHtml(title)}</h2>
    <div class="links">${links}</div>
  </section>`;
}).join('\n');

writeFileSync(join(outDir, '.nojekyll'), '');
writeFileSync(join(outDir, 'index.html'), `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LogiCodem MVP Templates</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f6f8fb;
        color: #101828;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-height: 100vh;
      }

      header {
        padding: 4.5rem min(6vw, 4rem) 2.5rem;
        background: linear-gradient(135deg, #0f172a, #123f49 56%, #0f766e);
        color: #fff;
      }

      header a {
        color: #fff;
        font-weight: 800;
      }

      h1 {
        max-width: 920px;
        margin: 0 0 1rem;
        font-size: clamp(2.4rem, 6vw, 5.4rem);
        line-height: 0.95;
      }

      header p {
        max-width: 760px;
        margin: 0;
        color: rgba(255,255,255,0.82);
        font-size: 1.12rem;
        line-height: 1.7;
      }

      main {
        width: min(1180px, 92vw);
        margin: 0 auto;
        padding: 2rem 0 4rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }

      .card {
        display: grid;
        gap: 1rem;
        padding: 1.15rem;
        border: 1px solid #d9e2ec;
        border-radius: 0.5rem;
        background: #fff;
        box-shadow: 0 14px 34px rgba(16, 24, 40, 0.08);
      }

      .card span {
        color: #667085;
        font-size: 0.76rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      .card h2 {
        margin: 0;
        font-size: 1.18rem;
      }

      .links {
        display: grid;
        gap: 0.55rem;
      }

      .links a {
        display: inline-flex;
        align-items: center;
        min-height: 2.55rem;
        border: 1px solid #d0d5dd;
        border-radius: 0.45rem;
        padding: 0.62rem 0.75rem;
        color: #0f172a;
        text-decoration: none;
        font-weight: 750;
      }

      .links a:hover {
        border-color: #0f766e;
        color: #0f766e;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>LogiCodem MVP Templates</h1>
      <p>${workspaces.length} MVPs prontos para demonstracao comercial, adaptacao e venda. Todos incluem assinatura <a href="https://www.linkedin.com/in/allison-joanine-ti">by LogiCodem</a>.</p>
    </header>
    <main>
      <div class="grid">
        ${cards}
      </div>
    </main>
  </body>
</html>
`);

console.log(`Pages artifact criado em ${outDir} com ${workspaces.length} projetos.`);
