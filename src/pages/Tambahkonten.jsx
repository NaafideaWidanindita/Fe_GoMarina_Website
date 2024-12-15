import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tambahkonten = ({ onAddPhoto }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("galeri");

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

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
        document.getElementById("fileInput").click(); 
    };

    const handleFileChange = (e) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleCancelClick = () => {
        setUploadedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    const openPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    };

    const confirmAction = () => {
        if (uploadedFile) {
            const newPhotoURL = URL.createObjectURL(uploadedFile); // Membuat URL untuk foto baru
            const existingPhotos = JSON.parse(localStorage.getItem("photos")) || []; // Ambil data foto yang ada
            localStorage.setItem("photos", JSON.stringify([...existingPhotos, newPhotoURL]));
        }
        navigate("/kelolakonten");
    }

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
                        <img src="src/assets/icon-park-outline_add-pic.svg" alt="Add" />
                        <h4>Unggah konten Anda disini</h4>
                        <p>(Tipe file yang dapat diunggah adalah jpg, png, svg, dan mp4)</p>
                        {uploadedFile && (
                            <img
                                src={URL.createObjectURL(uploadedFile)} // Menggunakan URL untuk preview
                                alt="Preview"
                                className="uploaded-preview"
                            />
                        )}
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="cancel-save">
                    <button className="btn-cancel" onClick={handleCancelClick}>CANCEL</button>
                    <button 
                        className="btn-save"
                        style={{
                            backgroundColor: uploadedFile ? "#597545" : "#B6BDBF", // Hijau jika file diunggah
                        }}
                        onClick={openPopup}
                        >
                        SAVE
                    </button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>Yakin ingin menyimpan perubahan?</p>
                        <div className="popup-buttons">
                            <button className="no-button" onClick={closePopup}>
                                TIDAK
                            </button>
                            <button className="yes-button" onClick={confirmAction}>
                                YA
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tambahkonten;