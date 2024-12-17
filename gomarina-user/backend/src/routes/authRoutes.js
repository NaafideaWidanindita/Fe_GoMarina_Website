const express = require("express");
const { signIn, signUp, refreshToken } = require("../controllers/authController"); // Pastikan path sesuai dengan struktur file Anda

const authRoutes = express.Router();

// Login Endpoint
authRoutes.post("/signin", signIn);

// Refresh Token Endpoint (opsional, jika digunakan untuk auto-refresh)
authRoutes.post("/refresh-token", refreshToken);

// Register Endpoint (Signup)
authRoutes.post("/signup", signUp);

module.exports = authRoutes;
