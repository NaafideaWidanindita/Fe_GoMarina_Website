import React from 'react';

const OtherProducts = () => {
  return (
    <div className="more-product">
      <h3>Produk Lainnya</h3>
      <div className="product-grid">
        {/* Product 1 */}
        <div className="product-box">
          <div>
            <img src="src/assets/images/produk/jusjambu01.jpg" alt="Produk 1" className="product-image" />
            <i className="icon-love fas fa-heart" />
          </div>
          <h4>Jus Jambu Merah</h4>
          <p className="product-price">Rp 15.000</p>
          <p className="product-description">Jus segar alami, tanpa gula tambahan.</p>
          <button className="beli-button">Beli Sekarang</button>
        </div>
        {/* Product 2 */}
        <div className="product-box">
          <div>
            <img src="src/assets/images/produk/selaijambu01.jpg" alt="Produk 2" className="product-image" />
            <i className="icon-love fas fa-heart" />
          </div>
          <h4>Selai Jambu Merah</h4>
          <p className="product-price">Rp 15.000</p>
          <p className="product-description">Selai manis alami untuk sarapan sehat.</p>
          <button className="beli-button">Beli Sekarang</button>
        </div>
        {/* Product 3 */}
        <div className="product-box">
          <div>
            <img src="src/assets/images/produk/hampers02.jpg" alt="Produk 3" className="product-image" />
            <i className="icon-love fas fa-heart" />
          </div>
          <h4>Paket Hampers Jambu</h4>
          <p className="product-price">Rp 20.000</p>
          <p className="product-description">Keripik renyah jambu merah untuk nyemil sehat.</p>
          <button className="beli-button">Beli Sekarang</button>
        </div>
        {/* Product 4 */}
        <div className="product-box">
          <div>
            <img src="src/assets/images/produk/kripikjambu01.webp" alt="Produk 4" className="product-image" />
            <i className="icon-love fas fa-heart" />
          </div>
          <h4>Keripik Jambu Merah</h4>
          <p className="product-price">Rp 50.000</p>
          <p className="product-description">Paket hampers yang berisi buah, jus, selai, keripik jambu merah serta tas cantik.</p>
          <button className="beli-button">Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
