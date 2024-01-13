const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs"); // Usando o 'ejs' para renderizar HTML
app.use(express.static('public')); // Para usar arquivos estaticos (css, images, ...)

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});
