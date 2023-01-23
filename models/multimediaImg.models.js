const { db, DataTypes } = require("../utils/db");

const MultimediaImg = db.define("miltimediaImg", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { MultimediaImg };
