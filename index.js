const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Criando servidor com NodeJS"); // Mostra uma mensagem na rota
    res.end(); // Necessario finalizar
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})