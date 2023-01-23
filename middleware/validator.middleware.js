const { body, validationResult } = require("express-validator");

const { GlobalError } = require("../utils/ErrorGlobal.utils");

const checkResult = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const msgError = error.array().map(err => err.msg);

    const messenger = msgError.join(". ");
    return next(new GlobalError(messenger, 404));
  }
  next();
};

const createUserValidator = [
  body("name").notEmpty().withMessage("name cannot be null"),
  body("email")
    .notEmpty()
    .withMessage("Email cannot be null")
    .isEmail()
    .withMessage("Email dont have e-mail format"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be null")
    .isAlphanumeric()
    .withMessage("Password is alpahnumeric")
    .isLength({ min: 8 })
    .withMessage("Password min 8 character long"),
  checkResult,
];

const createBanerInfoValidator = [
  body("tittle")
    .notEmpty()
    .withMessage("tittle cannot be null")
    .isString()
    .withMessage("tittle is string"),
  body("description")
    .notEmpty()
    .withMessage("Description cannot be null")
    .isString()
    .withMessage("Description is string"),
  checkResult,
];

const createContactValidator = [
  body("tittle")
    .notEmpty()
    .withMessage("tittle cannot be null")
    .isString()
    .withMessage("tittle is string"),
  body("contenido")
    .notEmpty()
    .withMessage("contenido cannot be null")
    .isString()
    .withMessage("contenido is string"),
  checkResult,
];

const createReseñaValidator = [
  body("contenido")
    .notEmpty()
    .withMessage("contenido cannot be null")
    .isString()
    .withMessage("contenido is string"),
  checkResult,
];

const createRespuestaValidator = [
  body("contenido")
    .notEmpty()
    .withMessage("contenido cannot be null")
    .isString()
    .withMessage("contenido is string"),
  checkResult,
];

const createLagunasValidator = [
  body("somos")
    .notEmpty()
    .withMessage("somos cannot be null")
    .isString()
    .withMessage("somos is string"),
  body("NIT")
    .notEmpty()
    .withMessage("NIT cannot be null")
    .isNumeric()
    .withMessage("NIT is numeric"),
  body("RNT")
    .notEmpty()
    .withMessage("RTN cannot be null")
    .isNumeric()
    .withMessage("RTN is numeric"),
  body("whatsapp")
    .notEmpty()
    .withMessage("whatsapp cannot be null")
    .isNumeric()
    .withMessage("whatsapp is numeric"),
  checkResult,
];

const createServicioValidator = [
  body("name")
    .notEmpty()
    .withMessage("name cannot be null")
    .isString()
    .withMessage("name is string"),
  body("description")
    .notEmpty()
    .withMessage("description cannot be null")
    .isString()
    .withMessage("description is string"),
  body("valor")
    .notEmpty()
    .withMessage("valor cannot be null")
    .isNumeric()
    .withMessage("valor is numeric"),
  body("imagen")
    .notEmpty()
    .withMessage("imagen cannot be null")
    .isString()
    .withMessage("imagen is string"),
  checkResult,
  body("incluye")
    .notEmpty()
    .withMessage("incluye cannot be null")
    .isString()
    .withMessage("incluye is string"),
  checkResult,
];

const createTransporteValidator = [
  body("tittle")
    .notEmpty()
    .withMessage("tittle cannot be null")
    .isString()
    .withMessage("tittle is string"),
  body("description")
    .notEmpty()
    .withMessage("description cannot be null")
    .isString()
    .withMessage("description is string"),
  checkResult,
];

const createMultimediaValidator = [
  body("tittle")
    .notEmpty()
    .withMessage("tittle cannot be null")
    .isString()
    .withMessage("tittle is string"),
  body("description")
    .notEmpty()
    .withMessage("description cannot be null")
    .isString()
    .withMessage("description is string"),
  checkResult,
];

const createReservaValidator = [
  body("name")
    .notEmpty()
    .withMessage("name cannot be null")
    .isString()
    .withMessage("name is string"),
  body("email")
    .notEmpty()
    .withMessage("email cannot be null")
    .isEmail()
    .withMessage("email no have format Email"),
  body("celular")
    .notEmpty()
    .withMessage("celular cannot be null")
    .isNumeric()
    .withMessage("celular is numeric"),
  body("nameServicio")
    .notEmpty()
    .withMessage("name servicio cannot be null")
    .isString()
    .withMessage("name servicio is string"),
  body("cupos")
    .notEmpty()
    .withMessage("cupos cannot be null")
    .isNumeric()
    .withMessage("cupos is string"),
  body("total")
    .notEmpty()
    .withMessage("total cannot be null")
    .isNumeric()
    .withMessage("total is string"),
  body("fechaUser")
    .notEmpty()
    .withMessage("fecha cannot be null")
    .isString()
    .withMessage("fecha is string"),
  checkResult,
];

module.exports = {
  createUserValidator,
  createBanerInfoValidator,
  createContactValidator,
  createReseñaValidator,
  createRespuestaValidator,
  createLagunasValidator,
  createServicioValidator,
  createTransporteValidator,
  createMultimediaValidator,
  createReservaValidator,
};
