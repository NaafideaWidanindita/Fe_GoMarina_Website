const jwt = require("jsonwebtoken");

// Authentication Middleware
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data to the request
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token." });
  }
};

// Admin Authorization Middleware
exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admin access required." });
  }
  next();
};
