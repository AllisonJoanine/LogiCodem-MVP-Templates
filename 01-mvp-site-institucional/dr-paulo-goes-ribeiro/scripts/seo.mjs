import { readFileSync, writeFileSync } from 'node:fs';
const domain = process.env.SITE_URL;
const schema = { '@context':'https://schema.org', '@type':'Person', name:'Paulo Góes Ribeiro', jobTitle:'Médico', workLocation:{'@type':'Place',name:'Consultório — Torre White, Sala 32',address:{'@type':'PostalAddress',streetAddress:'Avenida Washington Luiz, 310 — Jardim Emília — Torre White — Sala 32',addressLocality:'Sorocaba',addressRegion:'SP',addressCountry:'BR'}} };
let html = readFileSync('dist/index.html','utf8');
html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);
if (domain) {
 const url = new URL(domain); if(url.protocol !== 'https:') throw new Error('SITE_URL deve usar HTTPS');
 const canonical = url.href.replace(/\/?$/, '/');
 html=html.replace('</head>',`<link rel="canonical" href="${canonical}"/><meta property="og:url" content="${canonical}"/></head>`);
 writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>`);
 writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`);
} else writeFileSync('dist/robots.txt','User-agent: *\nDisallow: /\n');
writeFileSync('dist/index.html',html);
