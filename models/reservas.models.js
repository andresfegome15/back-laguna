const { db, DataTypes } = require("../utils/db");

const Reserva = db.define("reserva", {
  id: { allowNull: false, type: DataTypes.STRING, primaryKey: true },
  cedula: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  celular: { type: DataTypes.STRING, allowNull: false },
  nameServicio: { type: DataTypes.STRING, allowNull: false },
  cupos: { type: DataTypes.INTEGER, allowNull: false },
  almuerzo: { type: DataTypes.STRING, allowNull: false },
  total: { type: DataTypes.INTEGER, allowNull: false },
  fechaUser: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "apartado",
  },
});

module.exports = { Reserva };
