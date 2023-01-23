const { db, DataTypes } = require("../utils/db");

const Reseñas = db.define("reseña", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false, defaultValue: "Anonimo" },
  contenido: { type: DataTypes.STRING, allowNull: false },
  stark: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 5 },
});

module.exports = { Reseñas };
