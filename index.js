const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs'); // Usando o 'ejs' para renderizar HTML

app.get("/", (req, res) => {
    var nome = "Jack";
    var lang = "TypeScript";

  res.render("index", {
    nome: nome,
    lang: lang,
    msg: true
  });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});