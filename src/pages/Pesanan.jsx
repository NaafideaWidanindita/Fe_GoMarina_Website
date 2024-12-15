import React from "react";

const Pesanan = () => {
    // Data pesanan yang ditampilkan di tabel
const ordersData = [
    { id: 'ORD12345', date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Pending', id_pym: 'PYM12345', shipment: 'Pending' },
    { id: 'ORD11111', date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Pending', id_pym: 'PYM11111', shipment: 'Pending' },
    { id: 'ORD22222', date: '09-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM22222', shipment: 'Dikemas' },
    { id: 'ORD33333', date: '06-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM33333', shipment: 'Dikemas' },
    { id: 'ORD44444', date: '05-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM44444', shipment: 'Dikemas' },
    { id: 'ORD55555', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM55555', shipment: 'Dikemas' },
    { id: 'ORD66666', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM66666', shipment: 'Dikemas' },
    { id: 'ORD77777', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', amount: 'Transfer Bank', total: 'Rp 35.000', status: 'Proses', id_pym: 'PYM77777', shipment: 'Dikemas' },
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

return (
    <div className="manage-orders">
        <div className="side-tools" style={{ marginTop: '-96rem', marginLeft: '14rem'}}>
                <div className="text-side-ord">Pesanan
                </div>
                <div className="search-period-wrapper-ord" style={{ marginTop: '-1.1rem'}}>
                        <div className="searchbar-ord">
                            <div className="text-search-ord">Cari</div>
                            <div className="line-search-ord"></div>
                            <img src="src/assets/Group 2.png" alt="" />
                        </div>
                        <button className="btn-month-ord">
                            <span>Oktober</span>
                            <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                        </button>
                        <button className="btn-year-ord">
                            <span>2024</span>
                            <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                        </button>
                </div>
        </div>
        {/* <div className="cards">
            <div className="card-confirmed">
                <img src="src/assets/IC SELESAI.svg" alt="" />
                <h2>6</h2>
                <p>Telah Dikonfirmasi</p>
            </div>
            <div className="card-pending">
                <img src="src/assets/alarm.png" alt="" />
                <h2>2</h2>
                <p>Menunggu Konfirmasi</p>
            </div>
        </div> */}
        <div className="orders">
            <h2>Kelola Pesanan</h2>
            <button className="options-btn">
            <span>Terbaru</span>
            <img src="src/assets/Vector (2).svg" alt="" />
        </button>
        </div>
    
        <div class="orders-table">
            <table>
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
                            <td><button class="detail-btn">Detail</button></td>
                            <td style={{ cursor: 'pointer'}}><img src="src/assets/material-symbols_delete.png" alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Pesanan;