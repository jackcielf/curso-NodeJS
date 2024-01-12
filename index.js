const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Página inicial!</h1>");
});

app.get("/blog", (req, res) => {
    res.send("Página do bloog!");
});

// Parâmetro obrigatorio
app.get('/ola/:name/:work', (req, res) => {
    // REQ => Dados enviados pelo usuário
    // RES => Resposta enviada ao usuário
    const name = req.params.name;
    const work = req.params.work;

    res.send(`<h2>Olá ${name}, você é ${work}</h2>`);
});

// Parâmetro opcional (?)
app.get('/contato/:contact?', (req, res) => {

    const param = req.params.contact;

    param ? res.send(`<h3>Você passou o parâmetro ${param}</h3>`) : res.send(`<h3>Você não passou nenhum parâmetro</h3>`);
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor rodando na porta ${PORT}`);
});
