import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-content">
      {/* Kolom Maps Lokasi */}
      <div className="footer-column">
        <h4>Maps Lokasi</h4>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31912.96246131836!2d103.9206228347656!3d1.0717637340358475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98c951fbd3f2d%3A0x9f90699621826af5!2sKebun%20Jambu%20Marina!5e0!3m2!1sen!2sid!4v1730730042161!5m2!1sen!2sid"
            width="250"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kebun Jambu Marina Location"
          ></iframe>
        </div>
      </div>

      {/* Kolom Alamat */}
      <div className="footer-column">
        <h4>Kebun Jambu Marina Batam</h4>
        <p className="footer-info">
          Jl. Raya Marina City, Tj. Riau, Kec. Sekupang, Kota Batam, Kepulauan
          Riau 29425
        </p>
      </div>

      {/* Kolom Bantuan */}
      <div className="footer-column">
        <h4>Bantuan</h4>
        <p className="footer-bantuan">
          <a href="#faq">FAQ</a>
        </p>
        <p className="footer-bantuan">
          <a href="#contact">Hubungi Kami</a>
        </p>
      </div>

      {/* Kolom Sosial Media */}
      <div className="footer-column">
        <h4>Social Media</h4>
        <p className="footer-sosmed">
          <a
            href="https://www.instagram.com/jambumarinabatam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p className="footer-sosmed">
          <a
            href="https://www.facebook.com/p/Agrowisata-Jambu-Marina-Batam-100063649986799/?locale=id_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p className="footer-bottom-p">&copy; 2024 Go Marina. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
