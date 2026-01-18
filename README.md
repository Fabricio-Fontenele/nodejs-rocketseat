# 🚀 Node.js - RocketSeat

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

**Como executar:**

```bash
cd 02-api-rest-nodejs
npm install
npm run dev
```

**Scripts disponíveis:**

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto TypeScript
- `npm run test` - Executa os testes
- `npm run lint` - Verifica o código com ESLint

**Principais arquivos:**

- [server.ts](02-api-rest-nodejs/src/server.ts) - Servidor Fastify
- [database.ts](02-api-rest-nodejs/src/database.ts) - Configuração do Knex
- [routes/transactions.route.ts](02-api-rest-nodejs/src/routes/transactions.route.ts) - Rotas da API
- [db/migrations/](02-api-rest-nodejs/db/migrations/) - Migrações do banco de dados

---

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web de alta performance
- **Knex.js** - SQL Query Builder
- **SQLite** - Banco de dados SQL leve
- **Zod** - Validação de schemas
- **ESLint** - Linter para JavaScript/TypeScript

## 📝 Aprendizados

Este repositório documenta a jornada de aprendizado em Node.js, desde conceitos básicos até a construção de APIs REST completas e escaláveis.

## 📄 Licença

Este projeto é apenas para fins educacionais.

---

💜 Feito com carinho durante o curso da [RocketSeat](https://rocketseat.com.br)
