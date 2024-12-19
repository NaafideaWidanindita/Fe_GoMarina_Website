const { query } = require("../Database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get All Users (Admin Only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await query('SELECT id, username, name, telp, role FROM role');
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error fetching users.", error });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const [user] = await query('SELECT id, username, name, telp, role FROM role WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error fetching user.", error });
  }
};

// Delete User (Admin or Self)
exports.deleteUser = async (req, res) => {
  const { id } = req.params; // User ID from request
  const { userId, role } = req.user; // From middleware

  if (role !== "admin" && parseInt(id) !== userId) {
    return res.status(403).json({ message: "Forbidden: You cannot delete this user." });
  }

  try {
    await query('DELETE FROM role WHERE id = ?', [id]);
    return res.status(200).json({ success: true, message: "User deleted successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error deleting user.", error });
  }
};
