const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// Create the connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "db_marina",
  waitForConnections: true,
  connectionLimit: 10, // Max concurrent connections
  queueLimit: 0,
});

// Promisify the pool.query for easier use with async/await
const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.execute(sql, params, (err, results) => {
      if (err) {
        console.error("Database Query Error:", err.message);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to MySQL Database!");
    connection.release();
  }
});

module.exports = { query };
