const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { transporteExist } = require("../middleware/testing.middleware");
const {
  createTransporteValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllTransporte,
  createTransporte,
  updateTransporte,
  deleteTransporte,
  updateActiveTransporte,
} = require("../controller/transporte.controller");
const { deleteActiveServicio } = require("../controller/servicio.controller");

const transporteRouter = express.Router();

transporteRouter.get("/", getAllTransporte);
transporteRouter.use("", seccionProteted);
transporteRouter.post("/", createTransporteValidator, createTransporte);
transporteRouter
  .use("/:id", transporteExist)
  .route("/:id")
  .patch(createTransporteValidator, updateTransporte)
  .delete(deleteTransporte);
transporteRouter.delete("/status/:id", updateActiveTransporte);

module.exports = { transporteRouter };
