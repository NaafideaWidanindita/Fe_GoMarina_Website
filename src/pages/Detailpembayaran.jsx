import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

const Detailpembayaran = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { state } = useLocation();
    const payment = state?.payment;
    const [saveButtonColor, setSaveButtonColor] = useState("#B6BDBF");

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    const [status, setStatus] = useState("Menunggu Konfirmasi");

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const getButtonStyle = (buttonstatus) => {
        if (buttonstatus === status) {
            switch (buttonstatus) {
                case "Telah Dikonfirmasi":
                    return { backgroundColor: "#42B862" };
                case "Tidak Valid":
                    return { backgroundColor: "#DC3545" };
                case "Menunggu Konfirmasi":
                default:
                    return {backgroundColor: "#FE0B0B" };
            }
        } else if (buttonstatus === "Menunggu Konfirmasi") {
            return { backgroundColor: "#B6BDBF" };
        }
        return { background: "#B6BDBF"};
    };

    useEffect(() => {
        if (status !== "Menunggu Konfirmasi") {
            setSaveButtonColor("#597545"); 
        } else {
            setSaveButtonColor("#B6BDBF"); 
        }
    }, [status]); 

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

    const openPopup = () => {
        if (status !== "Menunggu Konfirmasi") {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const confirmAction = () => {
        console.log("Perubahan disimpan");
        closePopup();
    }

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    return (
        <>
        <div className="payment-detail">
                <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem'}}>
                    <div className="text-side">Detail Pembayaran</div>
                </div>
        </div>
        
        <div className="text-proof-wrapper">
            <div className="text-proof">Bukti Pembayaran</div>
            <div className="image-proof">
                <img src="src/assets/icon-park-outline_add-pic.svg" alt="" />
            </div>
        </div>

        <div className="payment-detail-grid">
            <div className="grid-item">
                ID
                <div className="tab-detail">{payment.id}</div>
            </div>
            <div className="grid-item">
                Tanggal
                <div className="tab-detail">{payment.date}</div>
            </div>
            <div className="grid-item">
                Nama
                <div className="tab-detail">{payment.name}</div>
            </div>
            <div className="grid-item">
                Produk
                <div className="tab-detail">{payment.product}</div>
            </div>
            <div className="grid-item">
                Jenis Pembayaran
                <div className="tab-detail">{payment.payment}</div>
            </div>
            <div className="grid-item">
                Total
                <div className="tab-detail">{payment.total}</div>
            </div>
        </div>

        <div className="text-status-wrapper">
            <div className="text-status">Status Pembayaran</div>
                <div className="status-buttons">
                    <button 
                        className="pending-btn"
                        style={getButtonStyle("Menunggu Konfirmasi")}
                        onClick={() => handleStatusChange("Menunggu Konfirmasi")}
                    >
                        Menunggu Konfirmasi
                    </button>
                    <button 
                        className="confirmed-btn"
                        style={getButtonStyle("Telah Dikonfirmasi")}
                        onClick={() => handleStatusChange("Telah Dikonfirmasi")}
                    >
                        Telah Dikonfirmasi
                    </button>
                    <button 
                        className="invalid-btn"
                        style={getButtonStyle("Tidak Valid")}
                        onClick={() => handleStatusChange("Tidak Valid")}
                    >
                        Tidak Valid
                    </button>
                </div>
        </div>

        <div className="action-buttons">
            <button className="btn-cancel-detail">CANCEL</button>
            <button 
                className="btn-save-detail"
                style={{ backgroundColor: saveButtonColor }}
                onClick={openPopup}
            >
                SAVE
            </button>
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
    )
}

export default Detailpembayaran;