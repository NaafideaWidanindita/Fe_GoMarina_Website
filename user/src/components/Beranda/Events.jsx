import React, { useState } from 'react';

function Events() {
  // Fungsi untuk toggle deskripsi
  const toggleDescription = (index) => {
    setExpandedEvents((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // State untuk mengelola ekspansi setiap deskripsi
  const [expandedEvents, setExpandedEvents] = useState({});

  return (
    <div className="events">
      <h3>Acara di Kebun Kami</h3>
      <p>Jangan lewatkan acara spesial lainnya!</p>
      <div className="event-cards">
        {['Edukasi', 'Camping', 'Masak-masak'].map((description, index) => (
          <div className="event-card" key={index}>
            <div className="event-title">Acara {index + 1}</div>
            <div className="description-container">
              <span
                className="toggle-icon"
                onClick={() => toggleDescription(index)}
              >
                {expandedEvents[index] ? '⯆' : '⯈'}
              </span>
              <p className={`event-description ${expandedEvents[index] ? 'expanded' : ''}`}>
                {description}
              </p>
            </div>
            <div className="event-date">Senin, 4 November 2025</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
