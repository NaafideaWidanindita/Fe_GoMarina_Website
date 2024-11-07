// Image data categorized by type
const photos = {
  utama: [
    "images/galeri/image01.jpg",
    "images/galeri/image02.jpg",
    "images/galeri/image03.webp",
    "images/galeri/image04.jpg",
    "images/galeri/image05.jpg",
    "images/galeri/image06.jpeg",
    "images/galeri/image07.jpg",
    "images/galeri/image08.jpg",
    "images/galeri/image09.jpg",
    "images/galeri/image10.jpg",
  ],
  jambu: [
    "images/galeri/image01.jpg",
    "images/galeri/image02.jpg",
    "images/galeri/image03.webp",
    "images/galeri/image04.jpg",
    "images/galeri/image05.jpg",
    "images/galeri/image06.jpeg",
    "images/galeri/image07.jpg",
    "images/galeri/image08.jpg",
    "images/galeri/image09.jpg",
    "images/galeri/image10.jpg",
    "images/galeri/image11.jpg",
    "images/galeri/image12.jpg",
    "images/galeri/image13.webp",
    "images/galeri/image14.jpg",
    "images/galeri/image15.jpg",
    "images/galeri/image16.jpeg",
    "images/galeri/image17.jpg",
    "images/galeri/image18.jpg",
    "images/galeri/image19.jpg",
    "images/galeri/image20.jpg",
    "images/galeri/image21.jpg",
    "images/galeri/image22.jpg",
    "images/galeri/image23.webp",
  ],
  kuda: [
    "images/galeri/image01.jpg",
    "images/galeri/image02.jpg",
    "images/galeri/image03.webp",
    "images/galeri/image04.jpg",
    "images/galeri/image05.jpg",
    "images/galeri/image06.jpeg",
    "images/galeri/image07.jpg",
    "images/galeri/image08.jpg",
    "images/galeri/image09.jpg",
    "images/galeri/image10.jpg",
    "images/galeri/image11.jpg",
    "images/galeri/image12.jpg",
    "images/galeri/image13.webp",
    "images/galeri/image14.jpg",
    "images/galeri/image15.jpg",
    "images/galeri/image16.jpeg",
    "images/galeri/image17.jpg",
    "images/galeri/image18.jpg",
    "images/galeri/image19.jpg",
    "images/galeri/image20.jpg",
    "images/galeri/image21.jpg",
    "images/galeri/image22.jpg",
    "images/galeri/image23.webp",
  ],
  spot: [
    "images/galeri/image01.jpg",
    "images/galeri/image02.jpg",
    "images/galeri/image03.webp",
    "images/galeri/image04.jpg",
    "images/galeri/image05.jpg",
    "images/galeri/image06.jpeg",
    "images/galeri/image07.jpg",
    "images/galeri/image08.jpg",
    "images/galeri/image09.jpg",
    "images/galeri/image10.jpg",
    "images/galeri/image11.jpg",
    "images/galeri/image12.jpg",
    "images/galeri/image13.webp",
    "images/galeri/image14.jpg",
    "images/galeri/image15.jpg",
    "images/galeri/image16.jpeg",
    "images/galeri/image17.jpg",
    "images/galeri/image18.jpg",
    "images/galeri/image19.jpg",
    "images/galeri/image20.jpg",
    "images/galeri/image21.jpg",
    "images/galeri/image22.jpg",
    "images/galeri/image23.webp",
  ],
  lainnya: [
    "images/galeri/image01.jpg",
    "images/galeri/image02.jpg",
    "images/galeri/image03.webp",
    "images/galeri/image04.jpg",
    "images/galeri/image05.jpg",
    "images/galeri/image06.jpeg",
    "images/galeri/image07.jpg",
    "images/galeri/image08.jpg",
    "images/galeri/image09.jpg",
    "images/galeri/image10.jpg",
    "images/galeri/image11.jpg",
    "images/galeri/image12.jpg",
    "images/galeri/image13.webp",
    "images/galeri/image14.jpg",
    "images/galeri/image15.jpg",
    "images/galeri/image16.jpeg",
    "images/galeri/image17.jpg",
    "images/galeri/image18.jpg",
    "images/galeri/image19.jpg",
    "images/galeri/image20.jpg",
    "images/galeri/image21.jpg",
    "images/galeri/image22.jpg",
    "images/galeri/image23.webp",
  ],
};

// Function to display images for the selected category
function showGallery(category) {
  // Check if the category exists
  if (!photos[category]) {
    console.error(`Category '${category}' does not exist.`);
    return;
  }

  // Hide all categories
  const categories = document.querySelectorAll(".gallery-category");
  categories.forEach((cat) => {
    cat.style.display = "none";
  });

  // Display the selected category
  const selectedCategory = document.getElementById(category);
  if (!selectedCategory) {
    console.error(`Element with id '${category}' does not exist.`);
    return;
  }

  selectedCategory.style.display = "grid"; // Apply grid layout
  selectedCategory.innerHTML = ""; // Clear previous content

  let displayedImages = 0;
  const imagesPerPage = 10;

  function loadMoreImages() {
    const currentImages = photos[category].slice(
      displayedImages,
      displayedImages + imagesPerPage
    );

    currentImages.forEach((imgSrc, index) => {
      const box = document.createElement("div");
      box.className = "gallery-box";

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `Foto ${category}`;

      // Adjust the image size for specific positions like 1, 8, 11, 18, 21, etc.
      if ((displayedImages + index) % 7 === 0) {
        img.className = "gallery-image large"; // Add 'large' class for certain images
      } else {
        img.className = "gallery-image";
      }

      box.appendChild(img);
      selectedCategory.appendChild(box);
    });

    displayedImages += imagesPerPage;

    // Check if more images exist to load
    if (displayedImages < photos[category].length) {
      const loadMoreButton = document.createElement("button");
      loadMoreButton.textContent = "SELENGKAPNYA";
      loadMoreButton.classList.add("load-more-button");
      loadMoreButton.onclick = loadMoreImages;
      selectedCategory.appendChild(loadMoreButton);
    }
  }

  loadMoreImages(); // Initial load of images
}
