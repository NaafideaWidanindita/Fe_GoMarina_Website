const express = require("express");
const { getAllUsers, getUserById, deleteUser } = require("../controllers/roleController"); // Perbaiki path di sini
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware"); // Pastikan path middleware juga benar

const roleRoutes = express.Router();

// Get All Users (Admin Only)
roleRoutes.get("/users", authMiddleware, adminMiddleware, getAllUsers);

// Get User by ID (Authenticated Users)
roleRoutes.get("/user/:id", authMiddleware, getUserById);

// Delete User (Admin or Self)
roleRoutes.delete("/user/:id", authMiddleware, deleteUser);

module.exports = roleRoutes;
