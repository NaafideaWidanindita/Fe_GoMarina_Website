import React from 'react';

function LocationInfo({ copyToClipboard }) {
  return (
    <div className="location-info">
      <h3>Lokasi Kebun</h3>
      <p>
        <i className="fas fa-map-marker-alt" style={{ marginRight: 8 }} />
        Jl. Raya Marina City, Tj. Riau, Kec. Sekupang, Kota Batam, Kepulauan Riau 29425
        <i
          className="fas fa-copy"
          style={{ marginLeft: 8, cursor: 'pointer' }}
          onClick={() => copyToClipboard("Jl. Raya Marina City, Tj. Riau, Kec. Sekupang, Kota Batam, Kepulauan Riau 29425")}
        />
      </p>
    </div>
  );
}

export default LocationInfo;
