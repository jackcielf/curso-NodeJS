const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs"); // Usando o 'ejs' para renderizar HTML
app.use(express.static('public')); // Para usar arquivos estaticos (css, images, ...)

app.get("/", (req, res) => {
  var nome = "Jack";
  var lang = "TypeScript";

  var produtos = [
    {
      nome: "Doritos",
      preco: 8.99,
    },
    {
      nome: "Coca-cola",
      preco: 5.99,
    },
    {
      nome: "Arroz",
      preco: 4.49,
    },
  ];

  res.render("index", {
    nome: nome,
    lang: lang,
    msg: true,
    produtos: produtos,
  });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});
