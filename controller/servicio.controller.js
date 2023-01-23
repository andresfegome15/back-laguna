// models
const { Reserva } = require("../models/reservas.models");
const { Servicio } = require("../models/servicio.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllServicio = catchAsync(async (req, res, next) => {
  const servicio = await Servicio.findAll({
    where: { status: "active" },
    include: [
      {
        required: false,
        model: Reserva,
        attributes: ["name", "cupos", "fechaUser"],
      },
    ],
  });
  res.status(201).json({ servicio });
});

const getServicioById = catchAsync(async (req, res, next) => {
  const { servicio } = req;
  res.status(201).json({ servicio });
});

const createServicio = catchAsync(async (req, res, next) => {
  const { name, description, valor, imagen, incluye, status } = req.body;
  const servicio = await Servicio.create({
    name,
    description,
    valor,
    imagen,
    incluye,
    status,
  });
  res.status(202).json({ servicio });
});

const updateServicio = catchAsync(async (req, res, next) => {
  const { name, description, valor, imagen, incluye, status } = req.body;
  const { servicio } = req;
  await servicio.update({ name, description, valor, imagen, incluye, status });
  res.status(202).json({ servicio });
});

const deleteServicio = catchAsync(async (req, res, next) => {
  const { servicio } = req;
  await servicio.destroy();
  res.status(204).json({ status: "success" });
});

const deleteActiveServicio = catchAsync(async (req, res, next) => {
  const { servicio } = req;
  await servicio.update({ status: "inactive" });
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllServicio,
  getServicioById,
  createServicio,
  updateServicio,
  deleteServicio,
  deleteActiveServicio,
};
