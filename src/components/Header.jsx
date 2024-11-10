import { useState } from "react";
import React from "react";

const Header =() => {
    // State kontrol tampilan popup logout
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    // Fungsi popup logout
    const openLogout = () => {
        setIsLogoutOpen(true);
    };

    // Fungsi untuk menutup popup logout
    const closeLogout = () => {
        setIsLogoutOpen(false);
    };

    return (
        <>
        <header className="header">
            <div className="main-container">
                <div className="logo">
                    <img src="src/assets/GO MARINA LOGO.jpg" alt="" />
                    <h2>Go Marina</h2>
                </div>
                <div className="icon-btn-wrapper">
                    <div className="icon">
                        <img src="src/assets/Group (2).png" alt="" />
                    </div>
                    <button className="btn-logout" onClick={openLogout}>Log Out</button>
                </div>
            </div>
        </header>

        {/* Logout Confirm Popup */}
        {isLogoutOpen && (
            <div className="logout-confirm show">
                <div className="logout-content">
                    <h2>Yakin ingin logout?</h2>
                    <div className="confirm-btn">
                        <button className="close-logout" onClick={closeLogout}>TIDAK</button>
                        <button className="confirm-logout" onClick={() => {
                            // Logika logout
                            closeLogout();
                        }}>YA</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Header;