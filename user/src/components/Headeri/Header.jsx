// src/components/headeri/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="logo">
      <img
        src="src/assets/images/logo/Logo.jpg"
        alt="Logo"
        className="logo-image"
      />
      <h1>Go Marina</h1>
    </div>
    <nav>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-button">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-button">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-button">
              Galeri
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav-button">
              Produk
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/sign-in" className="signin-button">
            SIGN IN
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
