const { db, DataTypes } = require("../utils/db");

const Lagunas = db.define("laguna", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  somos: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Laguna's Travel",
  },
  NIT: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  RNT: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  direccion: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  whatsapp: { type: DataTypes.STRING, allowNull: false, defaultValue: 0 },
});

module.exports = { Lagunas };
