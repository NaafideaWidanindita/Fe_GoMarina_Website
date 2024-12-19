import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Kelolapembayaran = () => {
    const navigate = useNavigate();
    const [paymentsData, setPaymentsData] = useState([]); // State untuk menyimpan data pembayaran
    const [showMonthPopup, setShowMonthPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const monthButtonRef = useRef(null);
    const [showYearPopup, setShowYearPopup] = useState(false);
    const yearButtonRef = useRef(null);

    // Data dummy pembayaran
    const dummyPaymentsData = [
        { id: "1", order_id: "111", image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1721632835/attached_image/7-manfaat-jambu-kristal-yang-jarang-diketahui.jpg", option: "Mandiri", status: "approved" },
        { id: "2", order_id: "112", image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1721632835/attached_image/7-manfaat-jambu-kristal-yang-jarang-diketahui.jpg", option: "Mandiri", status: "pending" },
    ];

    // Simulasi pengambilan data pada saat komponen dimuat
    useEffect(() => {
        setPaymentsData(dummyPaymentsData);
    }, []);

    // Fungsi navigasi ke halaman detail pembayaran
    const handleDetailClick = (payment) => {
        if (!payment || !payment.id) {
            console.warn("Data pembayaran tidak valid untuk navigasi.");
            return;
        }
        navigate("/detailpembayaran", { state: { payment } });
    };

    // Styling untuk status pembayaran
    const getStatusStyle = (status) => {
        if (status === "pending") {
            return { color: "#C83636" };
        } else if (status === "approved") {
            return { color: "#42B862" };
        }
        return {};
    };

    const openMonth = () => {
        const rect = monthButtonRef.current.getBoundingClientRect();
        setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setShowMonthPopup(true);
    };

    const closeMonth = () => {
        setShowMonthPopup(false);
    };

    useEffect(() => {
        if (showMonthPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showMonthPopup]);

    useEffect(() => {
        if (showYearPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showYearPopup]);

    const openYear = () => {
        const rect = yearButtonRef.current.getBoundingClientRect();
        setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setShowYearPopup(true);
    };

    const closeYear = () => {
        setShowYearPopup(false);
    };

    const approvedCount = paymentsData.filter((payment) => payment.status === "approved").length;
    const pendingCount = paymentsData.filter((payment) => payment.status === "pending").length;

    return (
        <div className="manage-payments">
            <div className="side-tools" style={{ marginTop: "-96rem", marginLeft: "14rem" }}>
                <div className="text-side-pym">
                    <div>Kelola</div>
                    <div>Pembayaran</div>
                </div>
                <div className="search-period-wrapper-pym" style={{ marginTop: "-24rem", marginLeft: "-2rem" }}>
                    <div className="searchbar-pym">
                        <div className="text-search-pym">Cari</div>
                        <div className="line-search-pym"></div>
                        <img src="src/assets/Group 2.png" alt="" />
                    </div>
                    <button className="btn-month-pym" onClick={openMonth} ref={monthButtonRef}>
                        <span>Oktober</span>
                        <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                    </button>
                    {showMonthPopup && (
                        <div className="popup-month-overlay" onClick={closeMonth}>
                            <div
                                className="popup-month"
                                style={{
                                    position: "absolute",
                                    top: popupPosition.top,
                                    left: popupPosition.left,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <p>Januari</p>
                                <p>Februari</p>
                                <p>Maret</p>
                                <p>April</p>
                                <p>Mei</p>
                                <p>Juni</p>
                                <p>Juli</p>
                                <p>Agustus</p>
                                <p>September</p>
                                <p>Oktober</p>
                                <p>November</p>
                                <p>Desember</p>
                            </div>
                        </div>
                    )}
                    <button className="btn-year-pym" onClick={openYear} ref={yearButtonRef}>
                        <span>2024</span>
                        <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                    </button>
                    {showYearPopup && (
                        <div className="popup-year-overlay" onClick={closeYear}>
                            <div
                                className="popup-year"
                                style={{
                                    position: "absolute",
                                    top: popupPosition.top,
                                    left: popupPosition.left,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <p>2024</p>
                                <p>2025</p>
                                <p>2026</p>
                                <p>2027</p>
                                <p>2028</p>
                                <p>2029</p>
                                <p>2030</p>
                                <p>2031</p>
                                <p>2032</p>
                                <p>2033</p>
                                <p>2034</p>
                                <p>2035</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="cards-pym">
                <div className="card-confirmed-pym">
                    <img src="src/assets/IC SELESAI.svg" alt="" />
                    <h2>{approvedCount}</h2>
                    <p>Approved</p>
                </div>
                <div className="card-pending-pym">
                    <img src="src/assets/alarm.png" alt="" />
                    <h2>{pendingCount}</h2>
                    <p>Pending</p>
                </div>
            </div>
            <div className="payments">
                <h2>Kelola Pembayaran</h2>
                <button className="options-btn">
                    <span>Terbaru</span>
                    <img src="src/assets/Vector (2).svg" alt="" />
                </button>
            </div>

            <section className="payments-table">
                <table className="payment-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order ID</th>
                            <th>Bukti Pembayaran</th>
                            <th>Opsi Pembayaran</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsData.length > 0 ? (
                            paymentsData.map((payment) => (
                                <tr key={payment.id != null ? payment.id : "no-id"}>
                                    <td style={{ backgroundColor: "#ddd" }}>{payment.id != null ? payment.id : "-"}</td>
                                    <td>{payment.order_id || "-"}</td>
                                    <td>
                                        {payment.image ? (
                                            <img
                                                src={payment.image}
                                                alt={`Bukti Pembayaran untuk Order ID ${payment.order_id}`}
                                                width="50"
                                            />
                                        ) : (
                                            <span>Tidak ada bukti</span>
                                        )}
                                    </td>
                                    <td style={{ fontSize: "16px" }}>{payment.option || "Mandiri"}</td>
                                    <td style={getStatusStyle(payment.status)}>
                                        {payment.status || "Pending"}
                                    </td>
                                    <td>
                                        <button
                                            className="detail-btn"
                                            onClick={() => handleDetailClick(payment)}
                                        >
                                            Detail
                                        </button>
                                    </td>
                                    <td>
                                        <img
                                            src="src/assets/Vector (3).svg"
                                            alt="Delete"
                                            style={{ width: "22px", height: "auto" }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">Belum ada data pembayaran yang tersedia.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Kelolapembayaran;