// models
const { Lagunas } = require("../models/lagunastravel.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllLagunas = catchAsync(async (req, res, next) => {
  const lagunas = await Lagunas.findAll();
  res.status(201).json({ lagunas });
});

const createLagunas = catchAsync(async (req, res, next) => {
  const { somos, NIT, RNT, whatsapp } = req.body;
  const lagunas = await Lagunas.create({ somos, NIT, RNT, whatsapp });
  res.status(202).json({ lagunas });
});

const updateLagunas = catchAsync(async (req, res, next) => {
  const { somos, NIT, RNT, whatsapp } = req.body;
  const { laguna } = req;
  await laguna.update({ somos, NIT, RNT, whatsapp });
  res.status(202).json({ laguna });
});

const deleteLagunas = catchAsync(async (req, res, next) => {
  const { laguna } = req;
  await laguna.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllLagunas,
  createLagunas,
  updateLagunas,
  deleteLagunas,
};
