const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { respuestaExist } = require("../middleware/testing.middleware");
const {
  createRespuestaValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllRespuesta,
  createRespuesta,
  deleteRespuesta,
  updateRespuesta,
} = require("../controller/respuesta.controller");

const respuestaRouter = express.Router();

respuestaRouter.get("/", getAllRespuesta);
respuestaRouter.post("/", createRespuestaValidator, createRespuesta);
respuestaRouter
  .use("/:id", respuestaExist)
  .route("/:id")
  .patch(createRespuestaValidator, updateRespuesta)
  .delete(deleteRespuesta);

module.exports = { respuestaRouter };
