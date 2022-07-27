const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();
app.use(express.json());

let products = [];

  fs.readFile("products.json", "utf-8", ( err, data ) => {
    if (err) {
      console.log(err);
    } else {
      products = JSON.parse(data);
    }
  });

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const anyProducts = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(anyProducts);

  productEdits()

  return res.json(anyProducts);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  return res.json(product);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  productEdits();

  return res.json({ message: "produto alterado" });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  productEdits();

  return res.json({ message: "produto removido" });
});

function productEdits() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("produto inserido");
    }
  });
}

app.listen(4002, () => console.log("Servidor aqui 4002"));
