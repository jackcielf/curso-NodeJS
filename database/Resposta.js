const Sequelize = require("sequelize");
const connection = require("./db");

TABLE_NAME = "respostas";

const Resposta = connection.define(TABLE_NAME, {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Resposta.sync({ force: false });

module.exports = Resposta;