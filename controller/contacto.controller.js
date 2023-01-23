// models
const { Contactos } = require("../models/contactos.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { GlobalError } = require("../utils/ErrorGlobal.utils");

const getAllContac = catchAsync(async (req, res, next) => {
  const contact = await Contactos.findAll();
  res.status(201).json({ contact });
});

const createContact = catchAsync(async (req, res, next) => {
  const { tittle, contenido } = req.body;
  const contact = await Contactos.create({ tittle, contenido });
  res.status(202).json({ contact });
});

const updatecontact = catchAsync(async (req, res, next) => {
  const { tittle, contenido } = req.body;
  const { contact } = req;
  await contact.update({ tittle, contenido });
  res.status(202).json({ contact });
});

const deleteContact = catchAsync(async (req, res, next) => {
  const { contact } = req;
  await contact.destroy();
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllContac,
  createContact,
  updatecontact,
  deleteContact,
};
