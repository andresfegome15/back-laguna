// models
const { BanerInfo } = require("../models/banerInfo.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllBanerInfo = catchAsync(async (req, res, next) => {
  const banerInfo = await BanerInfo.findAll();
  res.status(201).json({ banerInfo });
});

const createBanerInfo = catchAsync(async (req, res, next) => {
  const { tittle, description } = req.body;
  const banerInfo = await BanerInfo.create({ tittle, description });
  res.status(202).json({ banerInfo });
});

const updateBanerInfo = catchAsync(async (req, res, next) => {
  const { tittle, description } = req.body;
  const { banerInfo } = req;
  await banerInfo.update({ tittle, description });
  res.status(202).json({ banerInfo });
});

const deleteBanerInfo = catchAsync(async (req, res, next) => {
  const { banerInfo } = req;
  await banerInfo.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllBanerInfo,
  createBanerInfo,
  updateBanerInfo,
  deleteBanerInfo,
};
