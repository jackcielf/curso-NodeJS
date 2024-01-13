const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // Usado para pegar os dados POST de um Form
const connection = require("./database/db");
const perguntaModel = require("./database/Pergunta");

const PORT = 3000;

// DATABASE
connection
  .authenticate()
  .then(() => {
    console.log("Conectado ao DATABASE MySQL");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs"); // Usando o 'ejs' para renderizar HTML
app.use(express.static("public")); // Para usar arquivos estaticos (css, images, ...)

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROTAS
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvar-pergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  res.send(`Seu titulo foi: ${titulo} e seu descricao: ${descricao}`);
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});
