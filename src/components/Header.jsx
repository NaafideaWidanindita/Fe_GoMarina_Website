import { useState } from "react";
import React from "react";

const Header = () => {
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
            {/* Jangan gunakan elemen <body> di sini */}
            <header className="header">
                <div className="main-container">
                    <div className="logo">
                        <img
                            src="src/assets/WhatsApp Image 2024-11-13 at 13.26.17_4fa9581e 3.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="icon-btn-wrapper">
                        <div className="icon" style={{ marginTop: "-0.6rem", width: '6px', height: '6px' }}>
                            <img src="https://img.icons8.com/?size=100&id=83193&format=png&color=1A1A1A" alt="Icon" />
                        </div>
                        <button className="btn-logout" onClick={openLogout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </header>

            {/* Logout Confirm Popup */}
            {isLogoutOpen && (
                <div className="logout-confirm show">
                    <div className="logout-content">
                        <h2>Yakin ingin logout?</h2>
                        <div className="confirm-btn">
                            <button className="close-logout" onClick={closeLogout}>
                                TIDAK
                            </button>
                            <button
                                className="confirm-logout"
                                onClick={() => {
                                    // Logika logout
                                    closeLogout();
                                }}
                            >
                                YA
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;