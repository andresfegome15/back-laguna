// models
const { Reserva } = require("../models/reservas.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");
const { Email } = require("../utils/email.utils");
const { Servicio } = require("../models/servicio.models");

const getReservaById = catchAsync(async (req, res, next) => {
  const { reserva } = req;
  res.status(201).json({ reserva });
});

const getAllReserva = catchAsync(async (req, res, next) => {
  const reserva = await Reserva.findAll();
  res.status(201).json({ reserva });
});

const createReserva = catchAsync(async (req, res, next) => {
  let fecha = new Date();
  const {
    cedula,
    name,
    email,
    celular,
    nameServicio,
    servicioId,
    cupos,
    total,
    fechaUser,
  } = req.body;
  const code = `Lt${cedula}${fecha.getMinutes()}${fecha.getSeconds()}`;
  const reserva = await Reserva.create({
    id: code,
    cedula,
    name,
    email,
    celular,
    nameServicio,
    cupos,
    total,
    fechaUser,
    servicioId,
  });

  await new Email(email).sendWelcome(code);

  res.status(202).json({ reserva });
});

const updateReserva = catchAsync(async (req, res, next) => {
  const { name, email, celular, servicio, cupos, total, fechaUser } = req.body;
  const { reserva } = req;
  await reserva.update({
    name,
    email,
    celular,
    servicio,
    cupos,
    total,
    fechaUser,
  });
  res.status(202).json({ reserva });
});

const updateReservaAgendar = catchAsync(async (req, res, next) => {
  const { reserva } = req;
  await reserva.update({ status: "agendada" });
  res.status(202).json({ reserva });
});

const deleteReserva = catchAsync(async (req, res, next) => {
  const { reserva } = req;
  await reserva.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getReservaById,
  getAllReserva,
  createReserva,
  updateReserva,
  updateReservaAgendar,
  deleteReserva,
};
