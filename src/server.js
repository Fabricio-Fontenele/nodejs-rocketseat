import http from "node:http";
import { randomUUID } from "node:crypto";
import { json } from "./middlewares/json.js";
import { DataBase } from "./database.js";

// - Criar Usuários
// - listagem Usuários
// - Edição de Usuários
// - Remoção de Usuários

// - HTTP
// - Método HTTP
// - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Remover um recurso no back-end

// GET /users => Buscando Usuários do back-end
// POST /users => Criando um Usuário no back-end

// Stateful - Stateless

// cabeçalho (requisão / resposta) => metadados

// HTTP Status Code

const database = new DataBase();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    database.insert("users", user);
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
