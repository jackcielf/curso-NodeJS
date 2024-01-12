const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Página inicial!</h1>");
});

app.get("/blog", (req, res) => {
    res.send("Página do bloog!");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Servidor rodando na porta ${PORT}`);
});
