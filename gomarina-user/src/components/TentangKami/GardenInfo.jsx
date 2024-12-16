import React from "react";

function GardenInfo() {
  return (
    <div className="garden-info">
      <h3>
        Temukan Pesona Alami di{" "}
        <span className="highlight">Kebun Jambu Marina</span>
      </h3>
      <div className="info-columns">
        <div className="column left-column">
          <p>
            Kebun Jambu Marina menawarkan berbagai kegiatan seru dan edukatif
            untuk semua kalangan. Mulai dari memetik jambu merah segar langsung
            dari kebunnya, berkuda mengelilingi perkebunan yang asri, hingga
            berburu spot foto instagramable di antara hamparan hijau yang
            mempesona.
          </p>
        </div>
        <div className="column right-column">
          <p>
            Lokasinya strategis, hanya 20 menit dari pusat Kota Batam,
            membuatnya cocok untuk rekreasi keluarga atau gathering komunitas.
            Datang dan nikmati agrowisata penuh petualangan di Kebun Jambu
            Marina!
          </p>
        </div>
      </div>
    </div>
  );
}

export default GardenInfo;
