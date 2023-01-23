const { db, DataTypes } = require("../utils/db");

const Respuesta = db.define("respuesta", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false, defaultValue: "Anonimo" },
  contenido: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Respuesta };
