import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/sign-in.css"; // Assuming CSS is in the styles folder

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // To redirect user after successful login

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    const login = e.target.login.value;
    const password = e.target.password.value;

    try {
      // Send login data to the backend
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username: login, // Adjust 'username' field based on API requirements
        password: password,
      });

      const { accessToken, role } = response.data;

      // Store token in localStorage
      localStorage.setItem("accessToken", accessToken);

      // Redirect based on role
      if (role === "admin") {
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      } else {
        setErrorMessage("Anda tidak memiliki akses sebagai admin.");
      }
    } catch (error) {
      // Handle error responses
      console.error("Login Error: ", error.response);
      setErrorMessage(
        error.response?.data?.message || "Login gagal. Periksa kembali kredensial Anda."
      );
    }
  };

  return (
    <div className="sign-in">
      <div className="content-wrapper">
        <div className="welcome-section">
          <div className="logo-wrapper">
            <img
              src="src/assets/images/logo/Logo.jpg"
              alt="Logo Kebun Jambu Marina"
              className="logo"
            />
          </div>
          <h1>Selamat Datang!</h1>
          <p className="description">
            Kebun Jambu Marina menawarkan berbagai kegiatan seru dan edukatif
            untuk semua kalangan. Mulai dari memetik jambu merah segar langsung
            dari kebunnya, berkuda mengelilingi perkebunan yang asri, hingga
            berburu spot foto instagramable di antara hamparan hijau yang
            mempesona.
          </p>
        </div>

        <div className="form-section">
          <h2>Sign In</h2>
          <p style={{ marginLeft: "5px" }}>
            Belum punya akun? <Link to="/signup">Sign Up</Link>
          </p>

          {errorMessage && (
            <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>Username/Email/Telepon</label>
            <input
              type="text"
              name="login"
              required
              placeholder="Masukkan username / email / telepon"
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                required
                placeholder="Masukkan password"
              />
              <i
                className={`fas fa-eye${passwordVisible ? "" : "-slash"} icon-eye`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
