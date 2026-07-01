# Kair Agenda - Prestador Servico

Sistema de Agendamento para servicos com horarios, profissionais e confirmacoes, com experiencia demonstravel, responsiva e pronta para adaptar em projetos reais da LogiCodem.

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
- Selecao de servico
- Data e horario
- Confirmacao e lista de agendamentos

## Como adaptar para um cliente real

- Troque os dados em `src/data.ts` por chamadas a uma API ou banco de dados.
- Ajuste as cores em `src/data.ts` dentro de `theme`.
- Conecte formularios, login, carrinho ou fluxos operacionais ao backend do cliente.
- Use os componentes e secoes de `src/App.tsx` como base para novas telas.

## Identidade

- Categoria: Sistema de Agendamento
- Opcao: Prestador Servico
- Estilo: Conversao objetiva
- Pacote: `logicodem-06-mvp-sistema-agendamento-opcao-03-prestador-servico`
