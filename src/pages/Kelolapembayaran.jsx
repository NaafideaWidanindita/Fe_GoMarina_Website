import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Kelolapembayaran = () => {
    const navigate = useNavigate();
    const [paymentsData, setPaymentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/payment")
            .then(result => {
                console.log('Data API:', result.data);
                setPaymentsData(result.data.data || []); 
                setLoading(false);
            })
            .catch(err => {
                console.error('Error Response:', err.response || err);
                setError(err.message || 'Unknown error');
                setLoading(false);
            });
    }, []);

    const handleDetailClick = (payment) => {
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

    if (loading) return <p>Loading data pembayaran...</p>;
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
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.order_id}</td>
                                <td>
                                    {payment.image ? (
                                    <img src={`http://localhost:5000${payment.image}`} alt="Bukti Pembayaran" width="50" />
                                ) : (
                                    <span>Tidak ada bukti</span>
                                )}
                                </td>
                                <td>{payment.option}</td>
                                <td style={getStatusStyle(payment.status)}>{payment.status}</td>
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
                                <td colSpan="7">Tidak ada data pembayaran</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Kelolapembayaran;