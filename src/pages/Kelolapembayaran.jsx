import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AxiosInterceptors from "../utils/AxiosInterceptors";

const Kelolapembayaran = () => {
    const navigate = useNavigate();
    const [paymentsData, setPaymentsData] = useState([]); // State untuk menyimpan data pembayaran
    const [loading, setLoading] = useState(false); // State untuk memantau loading
    const [error, setError] = useState(null); // State untuk menangani error
    const [showMonthPopup, setShowMonthPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const monthButtonRef = useRef(null);
    const [showYearPopup, setShowYearPopup] = useState(false);
    const yearButtonRef = useRef(null);

    // Fungsi untuk mengambil data dari API
    const getData = async () => {
        setLoading(true);
        setError(null); // Reset error sebelum memulai request
        try {
            const result = await AxiosInterceptors.get("/api/v1/payment");
            console.log("Respons Data API:", result.data); // Log respons API
            setPaymentsData(result.data.data || []); // Simpan data ke state
        } catch (error) {
            console.error("Error fetching data:", error.response || error); // Log error
            setError(
                error.response?.data?.message || "Terjadi kesalahan saat memuat data."
            );
        } finally {
            setLoading(false); // Hentikan loading
        }
    };

    // Ambil data saat komponen pertama kali dimuat
    useEffect(() => {
        getData();
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
    }
    
    const closeMonth = () => {
        setShowMonthPopup(false);
    };
    
    useEffect(() => {
        if (showMonthPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMonthPopup]);
    
    useEffect(() => {
        if (showYearPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showYearPopup]);
    
    const openYear = () => {
        const rect = yearButtonRef.current.getBoundingClientRect();
        setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setShowYearPopup(true);
    }
    
    const closeYear = () => {
        setShowYearPopup(false);
    };

    const approvedCount = paymentsData.filter(payment => payment.status === "approved").length;
    const pendingCount = paymentsData.filter(payment => payment.status === "pending").length;
    
    // const confirmAction = () => {
    //     console.log("Perubahan disimpan");
    //     closePopup();
    // }

    // Menampilkan loading atau error
    if (loading)
        return (
            <p>
                <img src="/assets/spinner.gif" alt="Loading..." /> Memuat data
                pembayaran...
            </p>
        );
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="manage-payments">
            <div className="side-tools" style={{ marginTop: '-96rem', marginLeft: '14rem'}}>
                <div className="text-side-pym">
                    <div>Kelola</div>
                    <div>Pembayaran</div>
                </div>
                <div className="search-period-wrapper-pym" style={{ marginTop: '-24rem', marginLeft: '-2rem'}}>
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
                                <div className="popup-month" 
                                    style={{
                                        position: 'absolute',
                                        top: popupPosition.top,
                                        left: popupPosition.left,
                                    }}
                                    onClick={(e) => e.stopPropagation()}>
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
                                <div className="popup-year" 
                                    style={{
                                        position: 'absolute',
                                        top: popupPosition.top,
                                        left: popupPosition.left,
                                    }}
                                    onClick={(e) => e.stopPropagation()}>
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

            {console.log("Data Pembayaran yang akan ditampilkan:", paymentsData)};

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
                        paymentsData.map((payment) => {
                            console.log("Rendering payment:", payment);  // Check each payment before rendering
                            return (
                                <tr key={payment.id != null ? payment.id : "no-id"}>
                                    <td style={{ backgroundColor: '#ddd'}}>{payment.id != null ? payment.id : "-"}</td>
                                    <td>{payment.order_id === null && <p style={{ fontFamily: "Poppins", fontSize: "16px"}}>-</p>}</td>
                                    <td>
                                        {payment.image ? (
                                            <img
                                                src={`http://localhost:5000/api/v1${payment.image}`}
                                                alt={`Bukti Pembayaran untuk Order ID ${payment.order_id}`}
                                                width="50"
                                            />
                                        ) : (
                                            <span>Tidak ada bukti</span>
                                        )}
                                    </td>
                                    <td style={{fontSize: '16px'}}>{payment.option || "Mandiri"}</td>
                                    <td style={getStatusStyle(payment.status)}>
                                        {payment.status || "Pending"}
                                    </td>
                                <td>
                                    <button className="detail-btn" onClick={() => handleDetailClick(payment)}>
                                        Detail
                                    </button>
                                </td>
                                <td>
                                    <img
                                        src="src/assets/Vector (3).svg"
                                        alt="Delete"
                                        style={{ width: '22px', height: 'auto'}}
                                    />
                                </td>
                            </tr>
                            );
                        })
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