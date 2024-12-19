import React from "react";
import { useNavigate } from "react-router-dom";

const Pesanan = () => {
    // Data pesanan yang ditampilkan di tabel
const ordersData = [
    { id: '111', date: '2024-12-15', name: 'User', product: 'Jambu Segar Merah', amount: 'Mandiri', total: 'Rp 35.000', status: 'Pending', id_pym: '1', shipment: 'Pending' },
    { id: '112', date: '2024-12-15', name: 'User', product: 'Jambu Segar Merah', amount: 'Mandiri', total: 'Rp 35.000', status: 'Pending', id_pym: '2', shipment: 'Pending' },
];

const getStatusStyle = (status) => {
    if (status === 'Pending') {
        return { color: '#C83636' };
    } else if (status === 'Proses') {
        return { color: '#322DBF' };
    }
    return {};
};

const getShipmentStyle = (shipment) => {
    if (shipment === 'Pending') {
        return { color: '#C83636' };
    } else if (shipment === 'Dikemas') {
        return { color: '#322DBF' };
    }
    return {};
};

// Fungsi navigasi ke halaman detail pembayaran
const handleDetailClick = (order) => {
    if (!order || !order.id) {
        console.warn("Data pesanan tidak valid untuk navigasi.");
        return;
    }
    navigate("/detailpesanan", { state: { order } });
};

return (
    <div className="manage-orders">
        <div className="side-tools" style={{ marginTop: '-96rem', marginLeft: '14rem'}}>
                <div className="text-side-ord">Pesanan
                </div>
                <div className="search-period-wrapper-ord" style={{ marginTop: '-1.1rem'}}>
                        <div className="searchbar-ord">
                            <div className="text-search-ord">Cari</div>
                            <div className="line-search-ord"></div>
                            <img src="https://img.icons8.com/?size=100&id=112468&format=png&color=1A1A1A" alt="" />
                        </div>
                        <button className="btn-month-ord">
                            <span>Oktober</span>
                            <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=FFFFFF" alt="" />
                        </button>
                        <button className="btn-year-ord">
                            <span>2024</span>
                            <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=FFFFFF" alt="" />
                        </button>
                </div>
        </div>
        <div className="cards-ord">
            <div className="card-done-ord">
                <img src="https://img.icons8.com/?size=100&id=59850&format=png&color=FFFFFF" alt="" />
                <h2>6</h2>
                <p>Pesanan Selesai</p>
            </div>
            <div className="card-pending-ord">
                <img src="https://img.icons8.com/?size=100&id=10083&format=png&color=FFFFFF" alt="" />
                <h2>2</h2>
                <p>Pending</p>
            </div>
        </div>
        <div className="orders">
            <h2>Kelola Pesanan</h2>
            <button className="options-btn">
            <span>Terbaru</span>
            <img src="src/assets/Vector (2).svg" alt="" />
        </button>
        </div>
    
        <div className="orders-table">
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Produk</th>
                        <th>Jumlah / Kg</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>ID Pembayaran</th>
                        <th>Pengiriman</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.name}</td>
                            <td>{order.product}</td>
                            <td>{order.amount}</td>
                            <td>{order.total}</td>
                            <td style={getStatusStyle(order.status)}>{order.status}</td>
                            <td>{order.id_pym}</td>
                            <td style={getShipmentStyle(order.shipment)}>{order.shipment}</td>
                            <td><button className="detail-btn" onClick={handleDetailClick}>Detail</button></td>
                            <td style={{ cursor: 'pointer'}}><img src="src/assets/material-symbols_delete.png" alt="" style={{ width: '22px', height: 'auto'}} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Pesanan;