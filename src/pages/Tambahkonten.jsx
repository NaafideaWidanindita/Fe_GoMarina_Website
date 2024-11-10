import { useState, useEffect } from "react";
import React from "react";

const Tambahkonten = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showPopup]);

    const handleUploadClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="upload-content">
                <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem'}}>
                    <div className="text-side">Tambah Konten</div>
                </div>
            </div>

            <div className="uploading">
                <div className="uploading-line-box">
                    <div className="content-box" onClick={handleUploadClick}>
                        <img src="src/assets/material-symbols_add-2-rounded.svg" alt="Add" />
                    </div>
                </div>
                <div className="cancel-save">
                    <button className="btn-cancel">CANCEL</button>
                    <button className="btn-save">SAVE</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="btn-close" onClick={handleClosePopup}>
                            <img src="src/assets/remove.png" alt="Close" />
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Tambah Gambar</h2>
                        <div className="popup-line"></div>
                        <h2>Tambah Video</h2>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tambahkonten;