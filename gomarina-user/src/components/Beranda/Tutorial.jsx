import React from "react";

const Tutorial = () => {
  const copyText = () => {
    const textToCopy = "Go Marina";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Nama aplikasi disalin: " + textToCopy);
      },
      (err) => {
        console.error("Gagal menyalin: ", err);
      }
    );
  };

  return (
    <div>
      <div className="background-circle" />
      <div className="tutorial">
        <h2>Cara Memesan</h2>
        {/* <p>Pelajari cara memesan produk menggunakan aplikasi mobile!</p> */}
        <div className="steps">
          <div className="step">
            <img
              src="src/assets/images/beranda/tutor/image01.png"
              alt="Step 1"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 1</p>
            <p style={{ textAlign: "justify" }}>
              Download Aplikasi Go Marina , kemudian Login/Register.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/tutor/image02.png"
              alt="Step 2"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 2</p>
            <p style={{ textAlign: "justify" }}>
              Setelah login, pada halaman beranda klik menu Produk. Lalu pilih
              produk yang ingin dibeli.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/tutor/image03.png"
              alt="Step 3"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 3</p>
            <p style={{ textAlign: "justify" }}>
              Untuk memesan, klik salah satu produk. Selanjutnya, lengkapi
              informasi pembelian. Jika sudah sesuai, klik Beli Sekarang.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/tutor/image04.png"
              alt="Step 4"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 4</p>
            <p style={{ textAlign: "justify" }}>
              Selamat! Anda telah berhasil memesan di Go Marina. Untuk melihat
              status pesanan klik Pesanan Saya.
            </p>
          </div>
        </div>
        <div className="barcode-section">
          <img
            src="src/assets/images/beranda/cara-memesan/barcode01.png"
            alt="Barcode"
            className="barcode"
          />
          <div className="phone">
            <img
              src="src/assets/images/beranda/cara-memesan/phone01.png"
              alt="Handphone"
              className="phone-image"
            />
            <div className="info">
              <h3>
                Go Marina
                <i
                  className="fas fa-copy copy-icon"
                  onclick="copyText()"
                  title="Copy name"
                />
              </h3>
              <p className="des-rating" style={{ textAlign: "left" }}>
                Solusi cepat membeli aneka olahan buah jambu untuk kamu!
              </p>
              <div className="rating">⭐⭐⭐⭐⭐ (10)</div>
              <button className="download-button">Unduh Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
