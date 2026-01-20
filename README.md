# 🚀 Node.js - RocketSeat

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

Repositório de estudos do curso de Node.js da RocketSeat, contendo projetos práticos e conceitos fundamentais da tecnologia.

## 📚 Conteúdo

### 01 - Fundamentos do Node.js

Projeto introdutório focado nos conceitos fundamentais do Node.js, incluindo:

- ✅ Servidor HTTP nativo
- ✅ Sistema de rotas
- ✅ Middlewares
- ✅ Streams do Node.js
- ✅ Manipulação de dados em JSON
- ✅ Banco de dados em arquivo (JSON)

**Como executar:**

```bash
cd 01-fundamentos-nodejs
npm install
npm run dev
```

**Principais arquivos:**

- [server.js](01-fundamentos-nodejs/src/server.js) - Servidor HTTP
- [routes.js](01-fundamentos-nodejs/src/routes.js) - Definição de rotas
- [database.js](01-fundamentos-nodejs/src/database.js) - Persistência de dados
- [streams/](01-fundamentos-nodejs/streams/) - Exemplos de Streams

---

### 02 - API REST com Node.js

API REST completa utilizando tecnologias modernas do ecossistema Node.js:

- ✅ TypeScript
- ✅ Fastify (framework web)
- ✅ Knex.js (Query Builder)
- ✅ SQLite (banco de dados)
- ✅ Migrations
- ✅ Validação com Zod
- ✅ Variáveis de ambiente
- ✅ Testes automatizados (E2E)
- ✅ Vitest
- ✅ Cookies e sessões

**Como executar:**

```bash
cd 02-api-rest-nodejs
npm install
npm run dev
```

**Scripts disponíveis:**
automatizados com Vitest

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto TypeScript
- `npm run test` - Executa os testes
- `npm run lint` - Verifica o código com ESLint

**Principais arquivos:**

- [server.ts](02-api-rest-nodejs/src/server.ts) - Servidor Fastify
- [app.ts](02-api-rest-nodejs/src/app.ts) - Configuração da aplicação
- [database.ts](02-api-rest-nodejs/src/database.ts) - Configuração do Knex
- [routes/transactions.route.ts](02-api-rest-nodejs/src/routes/transactions.route.ts) - Rotas da API
- [db/migrations/](02-api-rest-nodejs/db/migrations/) - Migrações do banco de dados
- [test/transactions.spec.ts](02-api-rest-nodejs/test/transactions.spec.ts) - Testes E2E

---

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web de alta performance
- **Knex.js** - SQL Query Builder
- **Vitest** - Framework de testes unitários e E2E
- **Supertest** - Testes de requisições HTTP
- **SQLite** - Banco de dados SQL leve
- **Zod** - Validação de schemas
- **ESLint** - Linter para JavaScript/TypeScript

## 📝 Aprendizados

Este repositório documenta a jornada de aprendizado em Node.js, desde conceitos básicos até a construção de APIs REST completas e escaláveis.

## 📄 Licença

Este projeto é apenas para fins educacionais.

---

💜 Feito com carinho durante o curso da [RocketSeat](https://rocketseat.com.br)
