import React from "react";

function TKSlogan() {
  return (
    <div className="tkslogan-container">
      <div className="tkslogan-left">
        <h2>"</h2>
        <h2>Petik Kebaikan dari Kebun, Bawa Pulang Cerita dari Alam</h2>
        <p>-by Kak Gem</p>
        <h2 style={{ paddingLeft: "85%" }}>"</h2>
        <div className="tkimage-left">
          <img
            src="src/assets/images/tentang-kami/slogan-tk/guavabg.png"
            alt="Foto kebun"
            className="tkslogan-photo1"
          />
        </div>
      </div>
      <div className="tkslogan-right">
        <img
          src="src/assets/images/tentang-kami/slogan-tk/slogan-tk01.jpg"
          alt="Foto kebun"
          className="tkslogan-photo2"
        />
      </div>
    </div>
  );
}

export default TKSlogan;
