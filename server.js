const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });

    if (req.url === "/product") {
      res.end(
        JSON.stringify({
          message: "produto",
        })
      );
    }

    if (req.url === "/user") {
      res.end(
        JSON.stringify({
          message: "user",
        })
      );
    }

    res.end(
      JSON.stringify({
        message: "any route",
      })
    );
  })
  .listen(4001, () => console.log("Servidor rodando na porta 4001"));
