const express = require("express");
const {createSignup} = require("./earlyAccess.controller.js")
const validateRequest = require("../../middleware/validateRequest.js");
const earlyAccessValidator = require("../../validators/earlyAccess.validator.js");

const router = express.Router();

router.post(
  "/",
  earlyAccessValidator,
  validateRequest,
  createSignup
);

module.exports = router;