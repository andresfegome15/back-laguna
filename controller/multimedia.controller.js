// models
const { Multimedia } = require("../models/multimedia.models");
const { MultimediaImg } = require("../models/multimediaImg.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");
const { uploadImage } = require("../utils/azureStorage.utils");

const getAllMultimedia = catchAsync(async (req, res, next) => {
  const multimedia = await Multimedia.findAll();
  res.status(201).json({ multimedia });
});

const createMultimedia = catchAsync(async (req, res, next) => {
  // const { tittle, description, imagen } = req;
  // const { lagunasTravel } = req;
  // const multimedia = await Multimedia.create({ tittle, description, imagen });
  // console.log(req);
  console.log(req.body);
  // const blobName = `${Date.now()}_${req.file.originalname}`;
  // await uploadImage(req.file, blobName);
  // res.status(201).json({ req });

  // await MultimediaImg.create({
  //   postID: multimedia.id,
  //   imgUrl: blobName,
  // });

  // await res.status(202).json({ multimedia });
});

const updateMultimedia = catchAsync(async (req, res, next) => {
  const { tittle, description, imagen } = req.body;
  const { multimedia } = req;
  await multimedia.update({ tittle, description, imagen });
  res.status(202).json({ multimedia });
});

const deleteMultimedia = catchAsync(async (req, res, next) => {
  const { multimedia } = req;
  await multimedia.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllMultimedia,
  createMultimedia,
  updateMultimedia,
  deleteMultimedia,
};
