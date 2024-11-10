import React from "react";

const Kelolapembayaran = () => {
    // Data pembayaran yang ditampilkan di tabel
const paymentsData = [
    { id: 'PYM12345', date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Menunggu Konfirmasi' },
    { id: 'PYM11111', date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Menunggu Konfirmasi' },
    { id: 'PYM22222', date: '09-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
    { id: 'PYM33333', date: '06-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
    { id: 'PYM44444', date: '05-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
    { id: 'PYM55555', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
    { id: 'PYM66666', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
    { id: 'PYM77777', date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', payment: 'Transfer Bank', total: 'Rp 35.000', status: 'Telah Dikonfirmasi' },
];

return (
    <div className="manage-payments">
        <div className="side-tools" style={{ marginTop: '-96rem', marginLeft: '14rem'}}>
                <div className="text-side">
                    <div>Kelola</div>
                    <div>Pembayaran</div>
                </div>
                <div className="search-period-wrapper-pym" style={{ marginTop: '-1.1rem'}}>
                        <div className="searchbar-pym">
                            <div className="text-search-pym">Cari</div>
                            <div className="line-search-pym"></div>
                            <img src="src/assets/Group 2.png" alt="" />
                        </div>
                        <button className="btn-month">
                            <span>Oktober</span>
                            <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                        </button>
                        <button className="btn-year">
                            <span>2024</span>
                            <img src="src/assets/material-symbols_keyboard-arrow-down (1).png" alt="" />
                        </button>
                </div>
        </div>
        <div className="cards">
            <div className="card-confirmed">
                <img src="src/assets/IC SELESAI.svg" alt="" />
                <h2>8</h2>
                <p>Telah Dikonfirmasi</p>
            </div>
            <div className="card-pending">
                <img src="src/assets/alarm.png" alt="" />
                <h2>8</h2>
                <p>Menunggu Konfirmasi</p>
            </div>
        </div>
        <div className="payments">
            <h2>Kelola Pembayaran</h2>
            <button className="options-btn">
            <span>Terbaru</span>
            <img src="src/assets/Vector (2).svg" alt="" />
        </button>
        </div>
    
        <div class="payments-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Produk</th>
                        <th>Jenis Pembayaran</th>
                        <th>Total</th>
                        <th>Status Pembayaran</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paymentsData.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.date}</td>
                            <td>{payment.name}</td>
                            <td>{payment.product}</td>
                            <td>{payment.payment}</td>
                            <td>{payment.total}</td>
                            <td>{payment.status}</td>
                            <td><button class="detail-btn">Detail</button></td>
                            <td><img src="src/assets/material-symbols_delete.png" alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Kelolapembayaran;