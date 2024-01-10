// Nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

// Split separa a string em partes, tendo como referencia o sinal de igual "="
// Logo apos, o '[1]' representa que so deve ser retornavel uma parte da string separada
const nome = args[0].split("=")[1];

console.log(nome);

const idade = args[1].split("=")[1];

console.log(idade);