import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Pesanan from "./pages/Pesanan";
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
            <Route path="/pesanan" element={<Pesanan />} />
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