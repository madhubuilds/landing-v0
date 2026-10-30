
const EarlyAccess = require("./earlyAccess.model.js");

const createSignup = async (req, res) => {
  try {
    const { email, name, city } = req.body;

    const existingSignup = await EarlyAccess.findOne({
      email: email.toLowerCase(),
    });

    if (existingSignup) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered for early access.",
      });
    }

    const signup = await EarlyAccess.create({
      email,
      name,
      city,
    });

    return res.status(201).json({
      success: true,
      message: "You've joined the What's Today? early access waitlist!",
      data: {
        id: signup._id,
        email: signup.email,
        name: signup.name,
        city: signup.city,
        status: signup.status,
        createdAt: signup.createdAt,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered for early access.",
      });
    }

    console.error("Early access signup failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to process your signup right now.",
    });
  }
};

module.exports = { createSignup };
