import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AxiosInterceptors from "../utils/AxiosInterceptors";

const Kelolapembayaran = () => {
    const navigate = useNavigate();
    const [paymentsData, setPaymentsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await AxiosInterceptors.get("/payment");
            setPaymentsData(result.data.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.response?.data?.message || "Terjadi kesalahan saat memuat data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDetailClick = (payment) => {
        if (!payment || !payment.id) {
            console.warn("Invalid payment data for navigation.");
            return;
        }
        navigate('/detailpembayaran', { state: { payment } });
    };

    const getStatusStyle = (status) => {
        if (status === 'Menunggu Konfirmasi') {
            return { color: '#C83636' };
        } else if (status === 'Telah Dikonfirmasi') {
            return { color: '#42B862' };
        }
        return {};
    };

    if (loading) return <p><img src="/assets/spinner.gif" alt="Loading..." /> Memuat data pembayaran...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="manage-payments">
            <div className="payments">
                <h2>Kelola Pembayaran</h2>
                <button className="options-btn">
                    <span>Terbaru</span>
                    <img src="/assets/Vector (2).svg" alt="" />
                </button>
            </div>

            <div className="payments-table">
                <table>
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
                            <tr key={payment.id || "no-id"}>
                                <td>{payment.id || "-"}</td>
                                <td>{payment.order_id || "-"}</td>
                                <td>
                                    {payment.image ? (
                                        <img src={`http://localhost:5000${payment.image}`} alt={`Bukti Pembayaran untuk Order ID ${payment.order_id}`} width="50" />
                                    ) : (
                                        <span>Tidak ada bukti</span>
                                    )}
                                </td>
                                <td>{payment.option || "Tidak tersedia"}</td>
                                <td style={getStatusStyle(payment.status)}>{payment.status || "Tidak diketahui"}</td>
                                <td>
                                    <button onClick={() => handleDetailClick(payment)}>Detail</button>
                                </td>
                                <td>
                                    <img src="/assets/material-symbols_delete.png" alt="Delete" />
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
            </div>
        </div>
    );
};

export default Kelolapembayaran;