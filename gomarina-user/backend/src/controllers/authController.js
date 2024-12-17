const { query } = require("../Database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Sign In
exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    // Ambil user berdasarkan username
    const result = await query("SELECT * FROM role WHERE username = ?", [username]);
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];

    // Validasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username/password" });
    }

    // Generate Access Token
    const accessToken = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Generate Refresh Token
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "30d" }
    );

    // Set Refresh Token di cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Aktif jika di production
      sameSite: "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 hari
    });

    // Kirim response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        telp: user.telp,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).json({ message: "Error logging in" });
  }
};

// Refresh Token
exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(403).json({ message: "Refresh Token is required" });
    }

    // Verifikasi token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Generate Access Token baru
    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    return res.status(403).json({ message: "Invalid Refresh Token" });
  }
};

// Sign Up (fungsi baru untuk registrasi)
exports.signUp = async (req, res) => {
  const { username, password, name, telp, role } = req.body;

  // Validasi input
  if (!username || !password || !name || !telp || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Cek jika username sudah terdaftar
    const result = await query("SELECT * FROM role WHERE username = ?", [username]);
    if (result.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const insertResult = await query(
      "INSERT INTO role (username, password, name, telp, role) VALUES (?, ?, ?, ?, ?)",
      [username, hashedPassword, name, telp, role]
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: insertResult.insertId,
    });
  } catch (error) {
    console.error("Error during sign up:", error.message);
    return res.status(500).json({ message: "Error signing up" });
  }
};
