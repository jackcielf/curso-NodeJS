const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs'); // Usando o 'ejs' para renderizar HTML

app.get("/", (req, res) => {
  res.render("home/home");
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});