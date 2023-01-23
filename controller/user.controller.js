const bcryptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

// models
const { User } = require("../models/users.model");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  const salt = await bcryptjs.genSalt(12);
  const passwordBcrypt = await bcryptjs.hash(password, salt);
  const user = await User.create({ name, email, password: passwordBcrypt });
  user.password = undefined;
  res.status(201).json({ status: "success", user });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, status: "active" } });
  if (!user) {
    return next(new GlobalError("E-mail no found", 404));
  }

  const passwordValid = await bcryptjs.compare(password, user.password);

  if (!passwordValid) {
    return next(new GlobalError("password no found", 404));
  }

  const token = await JWT.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(201).json({ token });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email, password } = req.body;
  const salt = bcryptjs.genSalt(12);
  const passwordBcrypt = await bcryptjs.hash(password, salt);
  await user.update({ name, email, password: passwordBcrypt });
  user.password = "*********";
  res.status(202).json({ status: "sucess", user });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  await user.update({ status: "inactive" });
  res.status(203).json({ status: "success" });
});

module.exports = { createUser, login, updateUser, deleteUser };
