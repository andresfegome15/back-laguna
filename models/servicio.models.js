const { db, DataTypes } = require("../utils/db");

const Servicio = db.define("servicio", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { type: DataTypes.STRING, allowNull: false },
  valor: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  imagen: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
  incluye: { type: DataTypes.STRING, allowNull: false, defaultValue: "tour" },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: "active" },
});

module.exports = { Servicio };
