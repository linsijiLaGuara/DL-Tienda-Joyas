const { param, body, validationResult } = require("express-validator");

const updateValidator = [
  param("id")
    .notEmpty()
    .withMessage("Debes pasar un ID")
    .isInt()
    .withMessage("Debe ser un entero"),
  (req, res, next) => {
    const errors = validationResult(req).mapped();
    if (Object.keys(errors).length) {
      return res.status(400).json(errors);
    } else {
      next();
    }
  },
];

const addValidator = [
  body("titulo").notEmpty().withMessage("Agrega el título"),
  body("img")
    .notEmpty()
    .withMessage("Debes agregar una imagen válida")
    .isString()
    .withMessage("Debe ser una cadena de texto"),

  body("descripcion").notEmpty().withMessage("Agrega la descripción correcta"),

  (req, res, next) => {
    const errors = validationResult(req).mapped();
    if (Object.keys(errors).length) {
      return res.status(400).json(errors);
    } else {
      next();
    }
  },
];

const ValidatorCollectionJoyas = {
  updateValidator,
  addValidator,
};

module.exports = {
  ValidatorCollectionJoyas,
};
