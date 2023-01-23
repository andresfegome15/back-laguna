const express = require("express");

// controller
const {
  createUser,
  login,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

// middleare
const { userExist } = require("../middleware/testing.middleware");
const { createUserValidator } = require("../middleware/validator.middleware");
const {
  seccionProteted,
  compareUser,
} = require("../middleware/seccionProteted");

const userRouter = express.Router();

userRouter.post("/", createUserValidator, createUser);
userRouter.post("/login", login);

userRouter.use(seccionProteted);
userRouter
  .use("/:id", userExist, compareUser)
  .route("/:id")
  .patch(createUserValidator, updateUser)
  .delete(deleteUser);

module.exports = { userRouter };
