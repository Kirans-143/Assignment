const sequelize = require("sequelize");
const sequelizeInstance = new sequelize("book_db", "root", "Kiranshet@007", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = sequelizeInstance;
