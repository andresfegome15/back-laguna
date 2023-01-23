const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

const db = new Sequelize({
  dialect: "postgres",
  port: "5432",
  host: "localhost",
  username: "postgres",
  password: "acuario1",
  database: "lagunastravel",
  logging: false,
});

module.exports = { db, DataTypes };
