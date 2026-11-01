const express = require("express");
const {createSignup} = require("./earlyAccess.controller.js")
const validateRequest = require("../../middleware/validateRequest.js");
const earlyAccessValidator = require("../../validators/earlyAccess.validator.js");
const { earlyAccessLimiter } = require("../../middleware/rateLimiter.js");

const router = express.Router();

router.post(
  "/",
  earlyAccessLimiter, // Blocks spam based on IP first
  earlyAccessValidator, // Then validates email format
  validateRequest, // Checks for validation errors
  createSignup // Finally saves to MongoDB
);

module.exports = router;