const { request, response } = require("express");
const express = require("express");

const app = express();

app.get("/primeira-rota", (request, response) => {
  return response.json({
    message: "acessou rota",
  });
});

//metodos que podemos utilizar no app. get, post, delet, put
// get para buscar informações
// post insere informações
// put altera informações
// delete para remover informações

app.listen(4002, () => console.log("Servidor aqui 4002"));
