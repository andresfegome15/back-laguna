const express = require("express");

// Controller
const { renderIndex } = require("../controller/home.controller");

const viewsRouter = express.Router();

viewsRouter.get("/", renderIndex);

module.exports = { viewsRouter };
