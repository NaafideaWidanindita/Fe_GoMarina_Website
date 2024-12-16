import React from "react";

const GalleryButtonGroup = ({ onCategorySelect }) => {
  return (
    <div className="buttons-group">
      <div className="button-group">
        <button onClick={() => onCategorySelect("utama")}>Utama</button>
        <button onClick={() => onCategorySelect("jambu")}>Jambu</button>
        <button onClick={() => onCategorySelect("kuda")}>Kuda</button>
        <button onClick={() => onCategorySelect("spot")}>Spot Foto</button>
        <button onClick={() => onCategorySelect("lainnya")}>Lainnya</button>
      </div>
    </div>
  );
};

export default GalleryButtonGroup;
