import http from "node:http";

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

const Users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("content-type", "aplication/json")
      .end(JSON.stringify(Users));
  }
  if (method === "POST" && url === "/users") {
    Users.push({
      id: 1,
      name: "Jonh Doe",
      email: "jonhdoe@example.com",
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
