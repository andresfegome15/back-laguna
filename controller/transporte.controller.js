// models
const { Transporte } = require("../models/transporte.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllTransporte = catchAsync(async (req, res, next) => {
  const transporte = await Transporte.findAll();
  res.status(201).json({ transporte });
});

const createTransporte = catchAsync(async (req, res, next) => {
  const { tittle, description, imagen, status } = req.body;
  const transporte = await Transporte.create({
    tittle,
    description,
    imagen,
    status,
  });
  res.status(202).json({ transporte });
});

const updateTransporte = catchAsync(async (req, res, next) => {
  const { tittle, description, imagen, status } = req.body;
  const { transporte } = req;
  await transporte.update({ tittle, description, imagen, status });
  res.status(202).json({ transporte });
});

const deleteTransporte = catchAsync(async (req, res, next) => {
  const { transporte } = req;
  await transporte.destroy();
  res.status(204).json({ status: "success" });
});

const updateActiveTransporte = catchAsync(async (req, res, next) => {
  const { transporte } = req;
  await transporte.update({ status: "inactive" });
  res.status(202).json({ transporte });
});

module.exports = {
  getAllTransporte,
  createTransporte,
  updateTransporte,
  deleteTransporte,
  updateActiveTransporte,
};
