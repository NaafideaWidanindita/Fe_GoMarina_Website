import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar =() => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("");

    useEffect(() => {
        setActiveItem(location.pathname); // Update item aktif sesuai path
    }, [location.pathname]);

    console.log(
        "Dashboard item active?",
        location.pathname === "/dashboard"
    );

    return (
        <>
        <aside className="side">
        </aside>
        
        <aside className="sidebar">
            <div className="sidebars">
                <div className={`sidebar-item ${location.pathname === "dashboard" ? "active" : ""}`} 
                        onClick={() => handleItemClick("dashboard")}
                >
                    <Link to="/dashboard">
                        <img src="https://img.icons8.com/?size=100&id=84005&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-0.8rem' }} />
                        <div className="text" style={{ paddingBottom: '0.4rem' }}>Dashboard</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "product" ? "active" : ""}`} 
                        onClick={() => handleItemClick("product")} 
                >
                    <Link to="/product">
                        <img src="https://img.icons8.com/?size=100&id=Vfx42bq0G2lJ&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-1.4rem' }} />
                        <div className="text" style={{ paddingBottom: '0.4rem' }}>Produk</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "pesanan" ? "active" : ""}`} 
                        onClick={() => handleItemClick("pesanan")}
                        >
                    <Link to="/pesanan">
                        <img src="https://img.icons8.com/?size=100&id=ounKChUYWi9r&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-1.2rem'}} />
                        <div className="text" style={{ paddingBottom: '0.8rem' }}>Pesanan</div>
                    </Link>
                </div>
                <div className={`sidebar-item ${activeItem === "kelolakonten" ? "active" : ""}`} 
                        onClick={() => handleItemClick("kelolakonten")}
                >
                    <Link to="/kelolakonten">
                        <img src="https://img.icons8.com/?size=100&id=IQhN1RRv9Eyq&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-0.2rem'}} />
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
                        <img src="https://img.icons8.com/?size=100&id=qXwnM8XcdMuB&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-0.2rem'}} />
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
                        <img src="https://img.icons8.com/?size=100&id=70640&format=png&color=1A1A1A" alt="" style={{ marginBottom: '-0.2rem'}} />
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