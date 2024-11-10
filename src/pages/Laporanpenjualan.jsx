import React from 'react';

const Laporanpenjualan = () => {
  // Data penjualan yang ditampilkan di tabel
const salesData = [
    { id: 1, date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 2, date: '15-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 3, date: '09-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 4, date: '06-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 5, date: '05-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 6, date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 7, date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
    { id: 8, date: '01-10-2024', name: 'Lorem Ipsum', product: 'Jambu Segar Merah', quantity: '1 Kg', subtotal: 'Rp 35.000', total: 'Rp 35.000', payment: 'Rp 35.000' },
];


const totalAmount = salesData.reduce((total, sale) => total + 35000, 0);

return (
    <div className="sales-report">
        <div className="side-tools" style={{ marginTop: '-96rem', marginLeft: '14rem'}}>
                <div className="text-side">
                    <div>Laporan</div>
                    <div>Penjualan</div>
                </div>
                <div className="search-period-wrapper" style={{ marginTop: '-1.1rem'}}>
                        <div className="searchbar-sales">
                            <div className="text-search-sales">Cari</div>
                            <div className="line-search-sales"></div>
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
        <div className="sales-report-period">
            <h2>Laporan Penjualan</h2>
            <p>Per 31 Oktober 2024</p>
        </div>
        <button className="print-button"><img src="src/assets/Frame.png" alt="" />
            <span>Cetak</span>
        </button>
    
        <div class="sales-table">
            <table>
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Produk</th>
                        <th>Jumlah / Kg</th>
                        <th>Sub Total</th>
                        <th>Total Penjualan</th>
                        <th>Pembayaran</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((sale, index) => (
                        <tr key={sale.id}>
                            <td>{index + 1}</td>
                            <td>{sale.date}</td>
                            <td>{sale.name}</td>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.subtotal}</td>
                            <td>{sale.total}</td>
                            <td>{sale.payment}</td>
                        </tr>
                    ))}
                        <tr className="total-row">
                            <td colSpan="5">TOTAL</td>
                            <td>Rp {totalAmount}</td>
                            <td>Rp {totalAmount}</td>
                        <td>Rp {totalAmount}</td>
                    </tr>
                    </tbody>
            </table>
        </div>
    </div>
);
};

export default Laporanpenjualan;