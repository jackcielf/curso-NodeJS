const fs = require('fs');

const arquivo = "arquivo.txt";
const novoArquivo = "novoNomeDoArquivo.txt";

fs.rename(arquivo, novoArquivo, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`O arquivo ${arquivo} foi renomeado para ${novoArquivo}!`);
})