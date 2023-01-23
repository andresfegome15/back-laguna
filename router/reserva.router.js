const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { reservaExist } = require("../middleware/testing.middleware");
const {
  createReservaValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllReserva,
  createReserva,
  updateReserva,
  deleteReserva,
  getReservaById,
  updateReservaAgendar,
} = require("../controller/reserva.controller");

const ReservaRouter = express.Router();

ReservaRouter.get("/", getAllReserva);
ReservaRouter.get("/:id", reservaExist, getReservaById);
ReservaRouter.post("/", createReservaValidator, createReserva);
ReservaRouter.patch(
  "/:id",
  reservaExist,
  createReservaValidator,
  updateReserva
);
ReservaRouter.use("", seccionProteted);
ReservaRouter.delete("/:id", reservaExist, deleteReserva);
ReservaRouter.delete("/agendar/:id", reservaExist, updateReservaAgendar);

module.exports = { ReservaRouter };
