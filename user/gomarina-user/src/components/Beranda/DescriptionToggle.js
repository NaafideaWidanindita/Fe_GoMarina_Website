import React, { useState } from "react";

function DescriptionToggle() {
  const [isExpanded, setIsExpanded] = useState(false); // Periksa apakah state sudah benar

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggle state
  };

  return (
    <div>
      <button onClick={toggleDescription}>
        {isExpanded ? "▲" : "▼"} {/* Ganti ikon berdasarkan state */}
      </button>
      {isExpanded && <p>This is the expanded description.</p>}
    </div>
  );
}

export default DescriptionToggle;
