const express = require("express");
const cors = require("cors");
const earlyAccessRoutes = require("./modules/earlyAccess/earlyAccess.routes.js");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://landing-v0-psi.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

// Parse incoming JSON requests
app.use(express.json());

// Health-check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "What's Today? API is running!",
  });
});

// Early Access routes
app.use("/api/early-access", earlyAccessRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;
