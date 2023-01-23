const express = require("express");

// middleware
const { seccionProteted } = require("../middleware/seccionProteted");
const { nosotrosExist } = require("../middleware/testing.middleware");

//controller
const {
  getAllNosotros,
  createNosotros,
  updateNosotros,
  deleteNosotros,
} = require("../controller/nosotros.controller");

const nosotrosRouter = express.Router();

nosotrosRouter.get("/", getAllNosotros);
nosotrosRouter.use("", seccionProteted);
nosotrosRouter.post("/", createNosotros);
nosotrosRouter
  .use("/:id", nosotrosExist)
  .route("/:id")
  .patch(updateNosotros)
  .delete(deleteNosotros);

module.exports = { nosotrosRouter };
