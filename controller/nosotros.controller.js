// models
const { Nosotros } = require("../models/nosotros.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllNosotros = catchAsync(async (req, res, next) => {
  const nosotros = await Nosotros.findAll();
  res.status(201).json({ nosotros });
});

const createNosotros = catchAsync(async (req, res, next) => {
  const { nosotros, hacemos, ubicacion, intentamos } = req.body;
  const nosotro = await Nosotros.create({
    nosotros,
    hacemos,
    ubicacion,
    intentamos,
  });
  res.status(202).json({ nosotro });
});

const updateNosotros = catchAsync(async (req, res, next) => {
  const { nosotros, hacemos, ubicacion, intentamos } = req.body;
  const { nosotro } = req;
  await nosotro.update({ nosotros, hacemos, ubicacion, intentamos });
  res.status(202).json({ nosotro });
});

const deleteNosotros = catchAsync(async (req, res, next) => {
  const { nosotros } = req;
  await Nosotros.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllNosotros,
  createNosotros,
  updateNosotros,
  deleteNosotros,
};
