import React from 'react';

const FeaturedProduct = () => {
  return (
    <div className="unggulan-container">
      <div className="unggulan-left">
        <h1>Produk Unggulan</h1>
        <h2>Jambu Merah Segar</h2>
        <p>Rp 35.000/Kg</p>
        <button className="unggulan-button">Beli Sekarang</button>
      </div>
      <div className="unggulan-right">
        <img src="src/assets/images/beranda/beli-sekarang/beli-sekarang01.jpg" alt="Foto kebun" className="unggulan-photo" />
      </div>
    </div>
  );
};

export default FeaturedProduct;
