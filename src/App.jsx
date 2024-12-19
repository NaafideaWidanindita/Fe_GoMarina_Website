import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Pesanan from "./pages/Pesanan";
import Product from "./pages/Product";
import Detailpesanan from "./pages/Detailpesanan";
import Kelolakonten from "./pages/Kelolakonten";
import Tambahkonten from "./pages/Tambahkonten";
import Kelolapembayaran from "./pages/Kelolapembayaran";
import Detailpembayaran from "./pages/Detailpembayaran";
import Laporanpenjualan from "./pages/Laporanpenjualan";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/detailpesanan" element={<Detailpesanan />} />
            <Route path="/product" element={<Product />} />
            <Route path="/kelolakonten" element={<Kelolakonten />} />
            <Route path="/tambahkonten" element={<Tambahkonten />} />
            <Route path="/kelolapembayaran" element={<Kelolapembayaran />} />
            <Route path="/detailpembayaran" element={<Detailpembayaran />} />
            <Route path="/laporanpenjualan" element={<Laporanpenjualan />} />
            <Route path="*" element={<div>Halaman tidak ditemukan</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;