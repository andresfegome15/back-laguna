// models
const { Respuesta } = require("../models/respuestas.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllRespuesta = catchAsync(async (req, res, next) => {
  const respuesta = await Respuesta.findAll();
  res.status(201).json({ respuesta });
});

const createRespuesta = catchAsync(async (req, res, next) => {
  const { name, contenido } = req.body;
  const respuesta = await Respuesta.create({ name, contenido });
  res.status(202).json({ respuesta });
});

const updateRespuesta = catchAsync(async (req, res, next) => {
  const { name, contenido } = req.body;
  const { respuesta } = req;
  await respuesta.update({ name, contenido });
  res.status(202).json({ respuesta });
});

const deleteRespuesta = catchAsync(async (req, res, next) => {
  const { respuesta } = req;
  await respuesta.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllRespuesta,
  createRespuesta,
  updateRespuesta,
  deleteRespuesta,
};
