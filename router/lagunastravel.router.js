const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { lagunasExist } = require("../middleware/testing.middleware");
const {
  createLagunasValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllLagunas,
  createLagunas,
  updateLagunas,
  deleteLagunas,
} = require("../controller/lagunastravel.controller");

const lagunasRouter = express.Router();

lagunasRouter.get("/", getAllLagunas);
lagunasRouter.use("", seccionProteted);
lagunasRouter.post("/", createLagunasValidator, createLagunas);
lagunasRouter
  .use("/:id", lagunasExist)
  .route("/:id")
  .patch(createLagunasValidator, updateLagunas)
  .delete(deleteLagunas);

module.exports = { lagunasRouter };
