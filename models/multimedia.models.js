const { db, DataTypes } = require("../utils/db");

const Multimedia = db.define("multimedia", {
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
});

module.exports = { Multimedia };
