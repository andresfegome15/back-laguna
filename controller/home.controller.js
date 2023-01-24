const path = require("path");

// Models
const { Servicio } = require("../models/servicio.models");

// Utils
const { catchAsync } = require("../utils/catchAsync.utils");

const renderIndex = catchAsync(async (req, res, next) => {
  const servicio = await Servicio.findAll();

  res.status(200).render("index", {
    title: "Rendered with Pug",
    servicio,
  });

  // Serve static html
  // const indexPath = path.join(__dirname, '..', 'public', 'index.html');

  // res.status(200).sendFile(indexPath);
});

module.exports = { renderIndex };
