import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Contoh data pesanan dan pembayaran untuk keperluan tampilan
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
      <div className="dashboard">
        <div className="side-tools" style={{ marginTop: '-47rem', marginLeft: '14rem' }}>
          <div className="text-side">Dashboard</div>
                    <div className="search-add-wrapper">
                        <div className="searchbar">
                            <div className="text-search">Cari</div>
                            <div className="line-search"></div>
                            <img src="src/assets/Group 2.png" alt="Search Icon" />
                        </div>
                        <button className="btn-add">
                            <img src="src/assets/material-symbols_add-2-rounded (1).svg" alt="Tambah" />
                        </button>
                        <button className="btn-delete">
                            <img src="src/assets/material-symbols_delete.svg" alt="Hapus" />
                        </button>
                    </div>
        </div>
        <div className="overview">
          <h1>Apa yang perlu di cek hari ini?</h1>
          <div className="cards-dash">
            <div className="card-confirmed-dash">
                <img src="src/assets/IC SELESAI.svg" alt="" />
                <h2>2</h2>
                <p>Pesanan Hari ini</p>
            </div>
            <div className="card-pending-dash">
                <img src="src/assets/alarm.png" alt="" />
                <h2>2</h2>
                <p>Pending</p>
            </div>
        </div>

          <div className="orders-zip">
          <h2 style={{ marginLeft: '16rem'}}>Lihat pesanan terbaru hari ini</h2>
            <div className="order-section">
            <div className="orders-table">
            <table className="order-table" style={{ marginLeft: '0.5rem', width: '98%'}}>
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
                <div className="view-section">
                    <Link to={'/pesanan'} className='view-btn'>
                        Lihat di Pesanan
                    </Link>
                </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default Dashboard;