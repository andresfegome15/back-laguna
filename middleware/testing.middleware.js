// models
const { BanerInfo } = require("../models/banerInfo.models");
const { Contactos } = require("../models/contactos.models");
const { Lagunas } = require("../models/lagunastravel.models");
const { Multimedia } = require("../models/multimedia.models");
const { Nosotros } = require("../models/nosotros.models");
const { Reserva } = require("../models/reservas.models");
const { Reseñas } = require("../models/reseñas.models");
const { Respuesta } = require("../models/respuestas.models");
const { Servicio } = require("../models/servicio.models");
const { Transporte } = require("../models/transporte.models");
const { User } = require("../models/users.model");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const userExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id, status: "active" } });
  if (!user) {
    return next(new GlobalError("User no found", 404));
  }
  req.user = user;
  next();
});

const BanerInfoExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const banerInfo = await BanerInfo.findOne({
    where: { id, status: "active" },
  });
  if (!banerInfo) {
    return next(new GlobalError("BanerInfo no found", 404));
  }
  req.banerInfo = banerInfo;
  next();
});

const contactExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const contact = await Contactos.findOne({
    where: { id },
  });
  if (!contact) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.contact = contact;
  next();
});

const reseñaExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const reseña = await Reseñas.findOne({
    where: { id },
  });
  if (!reseña) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.reseña = reseña;
  next();
});

const respuestaExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const respuesta = await Respuesta.findOne({
    where: { id },
  });
  if (!respuesta) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.respuesta = respueta;
  next();
});

const lagunasExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const lagunas = await Lagunas.findOne({
    where: { id },
  });
  if (!lagunas) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.laguna = lagunas;
  next();
});

const servicioExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const servicio = await Servicio.findOne({
    where: { id },
  });
  if (!servicio) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.servicio = servicio;
  next();
});

const nosotrosExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const nosotro = await Nosotros.findOne({
    where: { id },
  });
  if (!nosotro) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.nosotro = nosotro;
  next();
});

const transporteExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const transporte = await Transporte.findOne({
    where: { id, status: "active" },
  });
  if (!transporte) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.transporte = transporte;
  next();
});

const multimediaExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const multimedia = await Multimedia.findOne({
    where: { id },
  });
  if (!multimedia) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.multimedia = multimedia;
  next();
});

const reservaExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const reserva = await Reserva.findOne({
    where: { id },
  });
  if (!reserva) {
    return next(new GlobalError("Contact no found", 404));
  }
  req.reserva = reserva;
  next();
});

module.exports = {
  userExist,
  BanerInfoExist,
  contactExist,
  reseñaExist,
  respuestaExist,
  lagunasExist,
  servicioExist,
  nosotrosExist,
  transporteExist,
  multimediaExist,
  reservaExist,
};
