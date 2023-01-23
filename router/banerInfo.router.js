const express = require("express");

// middleware
const {
  seccionProteted,
  compareUser,
} = require("../middleware/seccionProteted");
const { BanerInfoExist } = require("../middleware/testing.middleware");
const {
  createBanerInfoValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllBanerInfo,
  createBanerInfo,
  deleteBanerInfo,
  updateBanerInfo,
} = require("../controller/BanerInfo.controller");

const banerInfoRouter = express.Router();

banerInfoRouter.get("/", getAllBanerInfo);

banerInfoRouter.use(seccionProteted);
banerInfoRouter.post("/", createBanerInfoValidator, createBanerInfo);
banerInfoRouter
  .use("/:id", BanerInfoExist)
  .route("/:id")
  .patch(createBanerInfoValidator, updateBanerInfo)
  .delete(deleteBanerInfo);

module.exports = { banerInfoRouter };
