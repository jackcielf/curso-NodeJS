const Sequelize = require("sequelize");

const connection = new Sequelize("guiperguntas", "root", "jakki", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
