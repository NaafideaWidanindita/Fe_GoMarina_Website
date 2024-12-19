import React, { useState, useEffect } from "react";

const ImageGallery = ({ category, photos }) => {
  const [displayedImages, setDisplayedImages] = useState(0);
  const imagesPerPage = 10;

  // Pastikan kategori yang dipilih ada dalam objek photos
  if (!photos[category]) {
    console.error(`Category '${category}' does not exist.`);
    return null;
  }

  // Fungsi untuk menambah jumlah gambar yang ditampilkan
  const loadMoreImages = () => {
    setDisplayedImages((prevDisplayed) => prevDisplayed + imagesPerPage);
  };

  // Ambil gambar sesuai dengan halaman yang sedang ditampilkan
  const currentImages = photos[category].slice(0, displayedImages + imagesPerPage);

  // Reset displayedImages saat kategori berubah
  useEffect(() => {
    setDisplayedImages(0);
  }, [category]);

  return (
    <div className="gallery-category" style={{ display: "grid" }}>
      {currentImages.map((imgSrc, index) => {
        const isLargeImage = index % 7 === 0;
        return (
          <div key={index} className="gallery-box">
            <img
              src={imgSrc}
              alt={`Foto ${category}`}
              className={isLargeImage ? "gallery-image large" : "gallery-image"}
            />
          </div>
        );
      })}

      {/* Tombol untuk memuat lebih banyak gambar */}
      {displayedImages + imagesPerPage < photos[category].length && (
        <button className="load-more-button" onClick={loadMoreImages}>
          SELENGKAPNYA
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
