const { default: mongoose } = require("mongoose");

const earlyAccessSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },

    name: {
      type: String,
      trim: true,
      maxlength: 80,
      default: "",
    },

    city: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "Hyderabad",
    },

    status: {
      type: String,
      enum: ["pending", "invited", "joined"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("EarlyAccess", earlyAccessSchema);