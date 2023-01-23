const express = require("express");

// middleware
const {
  seccionProteted,
  compareUser,
} = require("../middleware/seccionProteted");

const { userExist, contactExist } = require("../middleware/testing.middleware");
const {
  createContactValidator,
} = require("../middleware/validator.middleware");

//controller
const {
  getAllContac,
  createContact,
  updatecontact,
  deleteContact,
} = require("../controller/contacto.controller");

const contactRouter = express.Router();

contactRouter.get("/", getAllContac);

contactRouter.use(seccionProteted);
contactRouter.post("/", createContactValidator, createContact);
contactRouter
  .use("/:id", contactExist)
  .route("/:id")
  .patch(createContactValidator, updatecontact)
  .delete(deleteContact);

module.exports = { contactRouter };
