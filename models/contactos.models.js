const { db, DataTypes } = require("../utils/db");

const Contactos = db.define("contacto", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tittle: { type: DataTypes.STRING, allowNull: false },
  contenido: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Contactos };
