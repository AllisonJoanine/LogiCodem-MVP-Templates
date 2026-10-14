# Dr. Paulo Góes Ribeiro

Site institucional em React e TypeScript, com Vite e conteúdo centralizado em `src/content.ts`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Prévia: http://127.0.0.1:5173. O build estático fica em `dist/`.

Para domínio definitivo: `SITE_URL=https://dominio-confirmado.com.br npm run build`. Gera canonical, sitemap e robots. A prévia não tem canonical presumido e impede indexação.

Antes de publicar, seguir `docs/validacao.md`. Dados pendentes não são importados pela aplicação. WhatsApp confirmado configurado em `src/content.ts`; imagens fornecidas pelo cliente integradas em `public/images/`. Formação acadêmica permanece pendente. Tipografia Google Fonts com fallback local; nenhum banco de imagens ou pessoa fictícia.

## GitHub Pages

Página pública: https://allisonjoanine.github.io/LogiCodem-MVP-Templates/01-mvp-site-institucional/dr-paulo-goes-ribeiro/

O workflow do repositório executa o build deste projeto e adiciona `dist/` ao artefato compartilhado do Pages. O Vite usa caminhos relativos, e o script de SEO preserva o caminho completo de `SITE_URL`. Para instalar de forma independente dentro deste repositório, use `npm ci --workspaces=false`.
