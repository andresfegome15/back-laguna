const { db, DataTypes } = require("../utils/db");

const BanerInfo = db.define("BanerInfo", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tittle: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "active" },
});

module.exports = { BanerInfo };
