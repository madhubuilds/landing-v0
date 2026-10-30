const { body } = require("express-validator");

const earlyAccessValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
    
  body("name")
    .optional({ values: "null" })
    .trim()
    .isString()
    .withMessage("Name must be text")
    .bail()
    .isLength({ max: 80 })
    .withMessage("Name cannot exceed 80 characters"),

  body("city")
    .optional({ values: "null" })
    .trim()
    .isString()
    .withMessage("City must be text")
    .bail()
    .isLength({ max: 100 })
    .withMessage("City cannot exceed 100 characters"),
];

module.exports = earlyAccessValidator;
