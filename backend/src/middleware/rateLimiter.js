const rateLimit = require("express-rate-limit");

const earlyAccessLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // Limit each IP to 3 requests per window
  message: {
    success: false,
    message: "Too many signup requests from this device. Please try again in an hour.",
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

module.exports = { earlyAccessLimiter };