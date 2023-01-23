// models
const { Reseñas } = require("../models/reseñas.models");
const { Respuesta } = require("../models/respuestas.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllReseñas = catchAsync(async (req, res, next) => {
  const reseñas = await Reseñas.findAll({
    include: [
      {
        required: false,
        model: Respuesta,
        attributes: ["name", "contenido"],
      },
    ],
  });
  res.status(201).json({ reseñas });
});

const createReseña = catchAsync(async (req, res, next) => {
  const { name, contenido, stark } = req.body;
  const reseñas = await Reseñas.create({ name, contenido, stark });
  res.status(202).json({ reseñas });
});

const updateReseña = catchAsync(async (req, res, next) => {
  const { name, contenido, stark } = req.body;
  const { reseña } = req;
  await reseña.update({ name, contenido, stark });
  res.status(202).json({ reseña });
});

const deleteReseña = catchAsync(async (req, res, next) => {
  const { reseña } = req;
  await reseña.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllReseñas,
  createReseña,
  updateReseña,
  deleteReseña,
};
