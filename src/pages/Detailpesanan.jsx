import { useState, useEffect } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detailpesanan = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { state } = useLocation();
    const payment = state?.payment;
    const [saveButtonColor, setSaveButtonColor] = useState("#B6BDBF");
    const navigate = useNavigate();

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    const [status, setStatus] = useState("pending");

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const getButtonStyle = (buttonstatus) => {
        if (buttonstatus === status) {
            switch (buttonstatus) {
                case "approved":
                    return { backgroundColor: "#42B862", color: "#ffff" };
                case "invalid":
                    return { backgroundColor: "#950101", color: "#ffff" };
                case "pending":
                default:
                    return {backgroundColor: "#FE0B0B", color: "#ffff" };
            }
        } else if (buttonstatus === "pending") {
            return { backgroundColor: "#B6BDBF" };
        }
        return { background: "#B6BDBF"};
    };

    useEffect(() => {
        if (status !== "pending") {
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
        if (status !== "pending") {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    // const confirmAction = () => {
    //     console.log("Perubahan disimpan");
    //     closePopup();
    // }

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    return (
        <>
        <div className="order-detail">
                <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem'}}>
                    <div className="text-side">Detail Pesanan</div>
                </div>
        </div>

        <div className="order-detail-grid">
            <div className="grid-item">
                ID
                <div className="tab-detail">{payment.id}</div>
            </div>
            <div className="grid-item">
                Tanggal
                <div className="tab-detail">{payment.order_id === null && <p style={{ fontFamily: "Poppins", fontSize: "16px", marginTop: '-6px'}}>-</p>}</div>
            </div>
            <div className="grid-item">
                Username
                <div className="tab-detail">{payment.option}</div>
            </div>
            <div className="grid-item">
                Jumlah
                <div className="tab-detail">{payment.option}</div>
            </div>
            <div className="grid-item">
                Total
                <div className="tab-detail">{payment.option}</div>
            </div>
            <div className="grid-item">
                Opsi Pengiriman
                <div className="tab-detail">{payment.option}</div>
            </div>
        </div>

        <div className="text-status-wrapper">
            <div className="text-status">Status Pembayaran</div>
                <div className="status-buttons">
                    <button 
                        className="pending-btn"
                        style={getButtonStyle("pending")}
                        onClick={() => handleStatusChange("pending")}
                    >
                        Pending
                    </button>
                    <button 
                        className="confirmed-btn"
                        style={getButtonStyle("approved")}
                        onClick={() => handleStatusChange("approved")}
                    >
                        Approved
                    </button>
                    <button 
                        className="invalid-btn"
                        style={getButtonStyle("invalid")}
                        onClick={() => handleStatusChange("invalid")}
                    >
                        Invalid
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
                            <button className="yes-button" onClick={handleSave}>
                                YA
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Detailpesanan;