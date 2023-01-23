const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { servicioExist } = require("../middleware/testing.middleware");
const {
  createServicioValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllServicio,
  createServicio,
  updateServicio,
  deleteServicio,
  deleteActiveServicio,
  getServicioById,
} = require("../controller/servicio.controller");

const servicioRouter = express.Router();

servicioRouter.get("/", getAllServicio);
servicioRouter.get("/:id", servicioExist, getServicioById);
servicioRouter.use(seccionProteted);
servicioRouter.post("/", createServicioValidator, createServicio);
servicioRouter
  .use("/:id", servicioExist)
  .route("/:id")
  .patch(createServicioValidator, updateServicio)
  .delete(deleteServicio);
servicioRouter.put("/:id", servicioExist, deleteActiveServicio);

module.exports = { servicioRouter };
