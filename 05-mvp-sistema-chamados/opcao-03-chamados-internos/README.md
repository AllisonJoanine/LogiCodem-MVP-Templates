# Nova Helpdesk - Chamados Internos

Sistema de Chamados para times de suporte que precisam controlar SLA e atendimento, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versao de producao:

```bash
npm run build
npm run preview
```

## O que o MVP faz

- Projeto React + Vite + TypeScript funcional
- Layout responsivo para celular, tablet e desktop
- Dados mockados organizados e editaveis
- Estados de carregamento, vazio, erro e sucesso quando aplicavel
- Criacao de chamado
- Filtro por status
- Detalhes e alteracao de status

## Como adaptar para um cliente real

- Troque os dados em `src/data.ts` por chamadas a uma API ou banco de dados.
- Ajuste as cores em `src/data.ts` dentro de `theme`.
- Conecte formularios, login, carrinho ou fluxos operacionais ao backend do cliente.
- Use os componentes e secoes de `src/App.tsx` como base para novas telas.

## Identidade

- Categoria: Sistema de Chamados
- Opcao: Chamados Internos
- Estilo: Conversao objetiva
- Pacote: `logicodem-05-mvp-sistema-chamados-opcao-03-chamados-internos`
