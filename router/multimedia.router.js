const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { multimediaExist } = require("../middleware/testing.middleware");
const {
  createMultimediaValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllMultimedia,
  createMultimedia,
  updateMultimedia,
  deleteMultimedia,
} = require("../controller/multimedia.controller");

const MultimediaRouter = express.Router();

MultimediaRouter.get("/", getAllMultimedia);
MultimediaRouter.use("", seccionProteted);
MultimediaRouter.post("/", createMultimedia);
MultimediaRouter.use("/:id", multimediaExist)
  .route("/:id")
  .patch(createMultimediaValidator, updateMultimedia)
  .delete(deleteMultimedia);

module.exports = { MultimediaRouter };
