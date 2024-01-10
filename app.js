const meuModulo = require('./modulo');
const soma = meuModulo.soma;

meuModulo.soma(10, 4); // Não recomendável

soma(2, 3);