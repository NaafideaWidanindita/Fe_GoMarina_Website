import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Kelolakonten from "./pages/Kelolakonten";
import Tambahkonten from "./pages/Tambahkonten";
import Kelolapembayaran from "./pages/Kelolapembayaran";
import Laporanpenjualan from "./pages/Laporanpenjualan";

function App() {
    return <>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/kelolakonten" element={<Kelolakonten />} />
      </Routes>
      <Routes>
        <Route path="/tambahkonten" element={<Tambahkonten />} />
      </Routes>
      <Routes>
        <Route path="/kelolapembayaran" element={<Kelolapembayaran />} />
      </Routes>
      <Routes>
        <Route path="/laporanpenjualan" element={<Laporanpenjualan />} />
      </Routes>
    </BrowserRouter>
    </>;
}

export default App;
