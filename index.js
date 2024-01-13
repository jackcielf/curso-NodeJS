const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // Usado para pegar os dados POST de um Form
const connection = require("./database/db");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

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
  // 'findAll' Equivalente a `SELECT * FROM <name table>`
  Pergunta.findAll({ row: true, order: [["id", "desc"]] }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

// Rota em que a pergunta sera salva
app.post("/salvar-pergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  // Adicionando dados pegos do formulario na tabela
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Rota para mostrar detalhes da pergunta
app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;

  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta) {
      // Pergunta encontrada

      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "desc"]],
      }).then((respostas) => {
        res.render("pergunta-detalhes", {
          pergunta: pergunta,
          respostas: respostas,
        });
      });
    } else {
      // Pergunta NÃO encontrada
      res.redirect("/");
    }
  });
});

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.perguntaId;

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  })
    .then(() => {
      res.redirect(`/pergunta/${perguntaId}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});
