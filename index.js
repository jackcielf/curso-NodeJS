const fs = require("fs");

fs.stat("novoArquivo.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  consolr.log(stats.isFile);
  consolr.log(stats.isDirectory);
  consolr.log(stats.isSymbolicLink);
  consolr.log(stats.ctime);
  consolr.log(stats.size);
});
