const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { reseñaExist } = require("../middleware/testing.middleware");
const {
  createBanerInfoValidator,
  createReseñaValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllReseñas,
  createReseña,
  updateReseña,
  deleteReseña,
} = require("../controller/reseñas.controller");

const reseñaRouter = express.Router();

reseñaRouter.get("/", getAllReseñas);
reseñaRouter.post("/", createReseñaValidator, createReseña);
reseñaRouter
  .use("/:id", reseñaExist)
  .route("/:id")
  .patch(createReseñaValidator, updateReseña)
  .delete(deleteReseña);

module.exports = { reseñaRouter };
