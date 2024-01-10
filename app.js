const fs = require('fs'); // File System

// Lendo um arquivo
fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);

})