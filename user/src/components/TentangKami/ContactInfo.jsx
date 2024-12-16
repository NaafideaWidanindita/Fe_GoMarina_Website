import React from 'react';

function ContactInfo({ copyToClipboard }) {
  return (
    <div className="contact-info">
      <h3>Kontak Kami</h3>
      <p>
        <i className="fas fa-phone" style={{ marginRight: 8 }} />
        Telepon: 081270108778
        <i
          className="fas fa-copy"
          style={{ marginLeft: 8, cursor: 'pointer' }}
          onClick={() => copyToClipboard("081270108778")}
        />
      </p>
    </div>
  );
}

export default ContactInfo;
