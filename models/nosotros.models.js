const { db, DataTypes } = require("../utils/db");

const Nosotros = db.define("nosotros", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nosotros: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hacemos: { type: DataTypes.STRING, allowNull: false },
  ubicacion: { type: DataTypes.STRING, allowNull: false },
  intentamos: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Nosotros };
