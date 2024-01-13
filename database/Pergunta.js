const Sequelize = require("sequelize");
const connection = require("./db");

TABLE_NAME = "perguntas";

// Definindo a estrutura da tabela com o Sequelize
const Pergunta = connection.define(TABLE_NAME, {
  titulo: {
    type: Sequelize.STRING, // STRING -> Textos curtos
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT, // STRING -> Textos longos
    allowNull: false,
  },
});

// Cria a tabela, caso ela não exista
// 'force: false' -> Impede que a tabela seja criado a força, ela seria criada mesmo se já houver uma tabela com esse nome
Pergunta.sync({ force: false })
  .then(() => {
    console.log(`------- Tabela de nome ${TABLE_NAME} criada ------`);
  })
  .catch((err) => {
    console.log(
      `!!!!! Tabela de nome ${TABLE_NAME} já existente !!!!!\n` + err
    );
  });
