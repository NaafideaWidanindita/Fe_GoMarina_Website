import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar =() => {
    // State menyimpan item yang aktif
    const [activeItem, setActiveItem] = useState(null);

    // Fungsi klik item sidebar
    const handleItemClick = (item) => {
        setActiveItem(item); // Set item diklik aktif
    };

    return (
        <>
        <aside className="side">
        </aside>
        
        <aside className="sidebar">
            <div className="sidebars">
                <div className={`sidebar-item ${activeItem === "dashboard" ? "active" : ""}`} 
                        onClick={() => handleItemClick("dashboard")}
                >
                    <Link to="/">
                        <img src="src/assets/material-symbols_home (1).svg" alt="" style={{ marginBottom: '-0.8rem' }} />
                        <div className="text" style={{ paddingBottom: '0.4rem' }}>Dashboard</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "produk" ? "active" : ""}`} 
                        onClick={() => handleItemClick("produk")} 
                >
                    <Link to="/produk">
                        <img src="src/assets/material-symbols_orders-rounded (1).svg" alt="" style={{ marginBottom: '-1.4rem' }} />
                        <div className="text" style={{ paddingBottom: '0.4rem' }}>Produk</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "pesanan" ? "active" : ""}`} 
                        onClick={() => handleItemClick("pesanan")}
                        >
                    <Link to="/pesanan">
                        <img src="src/assets/material-symbols_receipt-rounded (1).svg" alt="" style={{ marginBottom: '-1.2rem'}} />
                        <div className="text" style={{ paddingBottom: '0.8rem' }}>Pesanan</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "kelolakonten" ? "active" : ""}`} 
                        onClick={() => handleItemClick("kelolakonten")}
                >
                    <Link to="/kelolakonten">
                        <img src="src/assets/material-symbols_post-add (1).svg" alt="" style={{ marginBottom: '-0.2rem'}} />
                        <div className="text" style={{ paddingBottom: '0.6rem'}}>
                            <div>Kelola</div>
                            <div>Konten</div>
                        </div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "kelolapembayaran" ? "active" : ""}`} 
                        onClick={() => handleItemClick("kelolapembayaran")}
                >
                    <Link to="/kelolapembayaran">
                        <img src="src/assets/material-symbols_receipt-rounded (1).svg" alt="" style={{ marginBottom: '-0.2rem'}} />
                        <div className="text" style={{ paddingBottom: '0.6rem'}}>
                        <div>Kelola</div> 
                        <div>Pembayaran</div>
                        </div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "laporanpenjualan" ? "active" : ""}`} 
                        onClick={() => handleItemClick("laporanpenjualan")}
                >
                    <Link to="/laporanpenjualan">
                        <img src="/src/assets/material-symbols_ssid-chart (1).svg" alt="" style={{ marginBottom: '-0.2rem'}} />
                        <div className="text" style={{ paddingBottom: '0.6rem'}}>
                        <div>Laporan</div> 
                        <div>Penjualan</div>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
        </>
    )
}

export default Sidebar;