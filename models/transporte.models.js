const { db, DataTypes } = require("../utils/db");

const Transporte = db.define("transpote", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tittle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { type: DataTypes.STRING, allowNull: false },
  imagen: { type: DataTypes.STRING, allowNull: false, defaultValue: " " },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: "active" },
});

module.exports = { Transporte };
