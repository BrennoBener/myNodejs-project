const express = require("express");
const { randomUUID } = require("crypto");
const { response } = require("express");

const app = express();
app.use(express.json());

const products = [];

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const anyProducts = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(anyProducts);

  return res.json(anyProducts);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const anyProducts = products.find((products) => products.id === id);

  return res.json(anyProducts);
});

app.listen(4002, () => console.log("Servidor aqui 4002"));
