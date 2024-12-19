import { useState, useRef, useEffect } from "react";
import React from 'react';

const Laporanpenjualan = () => {
    const [showMonthPopup, setShowMonthPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const monthButtonRef = useRef(null);
    const [showYearPopup, setShowYearPopup] = useState(false);
    const yearButtonRef = useRef(null);

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

return (
    <div className="sales-report">
        <div className="side-tools" style={{ marginTop: '-95.6rem', marginLeft: '14rem'}}>
                <div className="text-side-sales">
                    <div>Laporan</div>
                    <div>Penjualan</div>
                </div>
                <div className="search-period-wrapper-sales" style={{ marginTop: '-1.1rem'}}>
                        <div className="searchbar-sales">
                            <div className="text-search-sales">Cari</div>
                            <div className="line-search-sales"></div>
                            <img src="src/assets/Group 2.png" alt="" />
                        </div>
                        <button className="btn-month-sales" onClick={openMonth} ref={monthButtonRef}>
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
                        <button className="btn-year-sales" onClick={openYear} ref={yearButtonRef}>
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