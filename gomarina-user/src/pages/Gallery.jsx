import React, { useState } from "react";
import Header from "../components/Headeri/Header";
import Footer from "../components/Footeri/Footer";
import GalleryButtonGroup from "../components/Galeri/GalleryButtonGroup";
import ImageGallery from "../components/Galeri/ImageGallery";


const photos = {
  utama: [
    "src/assets/images/galeri/jambu08.jpg",
    "src/assets/images/galeri/jus01.jpg",
    "src/assets/images/galeri/selai01.jpg",
    "src/assets/images/galeri/keripik03.webp",
    "src/assets/images/produk/hampers01.jpg",
    "src/assets/images/galeri/kuda02.jpg",
    "src/assets/images/galeri/spot07.jpeg",
    "src/assets/images/galeri/spot01.jpg",
    "src/assets/images/galeri/kuda04.jpg",
    "src/assets/images/galeri/spot02.webp",
    // ...dan seterusnya
  ],
  jambu: [
    "src/assets/images/galeri/jambu01.jpeg",
    "src/assets/images/galeri/jambu02.jpg",
    "src/assets/images/galeri/jambu03.jpg",
    "src/assets/images/galeri/jambu04.webp",
    "src/assets/images/galeri/jambu05.jpeg",
    "src/assets/images/galeri/jambu06.jpg",
    "src/assets/images/galeri/jambu07.webp",
    "src/assets/images/galeri/jambu08.jpg",
    "src/assets/images/galeri/jambu09.jpg",
    "src/assets/images/galeri/jambu10.jpg",
    "src/assets/images/galeri/jus01.jpg",
    "src/assets/images/galeri/jus02.jpg",
    "src/assets/images/galeri/jus03.jpg",
    "src/assets/images/galeri/jus04.jpg",
    "src/assets/images/galeri/jambu15.webp",
    "src/assets/images/galeri/jambu16.jpg",
    "src/assets/images/galeri/jambu17.jpg",
    "src/assets/images/galeri/jambu18.jpg",
    "src/assets/images/galeri/selai01.jpg",
    "src/assets/images/galeri/selai02.jpg",
    "src/assets/images/galeri/selai05.jpg",
    "src/assets/images/galeri/selai04.jpg",
    "src/assets/images/galeri/jambu23.jpg",
    "src/assets/images/galeri/jambu24.jpeg",
    "src/assets/images/galeri/jambu25.jpg",
    "src/assets/images/galeri/jambu26.webp",
    "src/assets/images/galeri/keripik01.jpg",
    "src/assets/images/galeri/keripik02.jpg",
    "src/assets/images/galeri/keripik03.webp",
    "src/assets/images/galeri/keripik04.jpeg",
    "src/assets/images/galeri/jambu27.jpg",
    "src/assets/images/galeri/jambu28.webp",
    "src/assets/images/galeri/jambu29.jpeg",
    "src/assets/images/galeri/jambu30.jpg",

    // ...dan seterusnya
  ],
  kuda: [
    "src/assets/images/galeri/kuda01.jpg",
    "src/assets/images/galeri/kuda02.jpg",
    "src/assets/images/galeri/kuda03.jpg",
    "src/assets/images/galeri/kuda04.jpg",
    "src/assets/images/galeri/kuda05.jpg",
    "src/assets/images/galeri/kuda06.jpg",
    "src/assets/images/galeri/kuda07.jpg",
    "src/assets/images/galeri/kuda08.jpeg",
    "src/assets/images/galeri/kuda09.jpg",
    "src/assets/images/galeri/kuda10.jpg",
    "src/assets/images/galeri/kuda11.jpg",
    "src/assets/images/galeri/kuda12.jpg",
    "src/assets/images/galeri/kuda13.jpg",
    "src/assets/images/galeri/kuda14.jpg",
    "src/assets/images/galeri/kuda15.jpg",
    "src/assets/images/galeri/kuda16.jpg",
    "src/assets/images/galeri/kuda17.webp",
    "src/assets/images/galeri/kuda18.jpeg",
    "src/assets/images/galeri/kuda19.jpg",
    "src/assets/images/galeri/kuda20.jpg",
    "src/assets/images/galeri/kuda21.jpg",
    "src/assets/images/galeri/kuda22.jpg",
    "src/assets/images/galeri/kuda23.jpg",
    // ...dan seterusnya
  ],
  spot: [
    "src/assets/images/galeri/spot01.jpg",
    "src/assets/images/galeri/spot02.webp",
    "src/assets/images/galeri/spot03.jpg",
    "src/assets/images/galeri/spot04.jpg",
    "src/assets/images/galeri/spot05.jpg",
    "src/assets/images/galeri/spot06.webp",
    "src/assets/images/galeri/spot07.jpeg",
    "src/assets/images/galeri/spot08.jpg",
    "src/assets/images/galeri/spot09.jpeg",
    "src/assets/images/galeri/spot10.jpeg",
    "src/assets/images/galeri/spot11.webp",
    "src/assets/images/galeri/spot12.webp",
    "src/assets/images/galeri/spot13.jpg",
    "src/assets/images/galeri/spot14.png",
    "src/assets/images/galeri/spot15.webp",
    "src/assets/images/galeri/spot16.webp",
    "src/assets/images/galeri/spot17.jpg",
    "src/assets/images/galeri/spot18.jpg",
    "src/assets/images/galeri/spot19.jpg",
    "src/assets/images/galeri/spot20.webp",
    "src/assets/images/galeri/spot21.jpg",
    "src/assets/images/galeri/spot22.jpg",
    "src/assets/images/galeri/spot23.jpg",
    // ...dan seterusnya
  ],
  lainnya: [
    "src/assets/images/galeri/image01.jpg",
    "src/assets/images/galeri/image02.jpg",
    "src/assets/images/galeri/image03.webp",
    "src/assets/images/galeri/image04.jpg",
    "src/assets/images/galeri/image05.jpg",
    "src/assets/images/galeri/image06.jpeg",
    "src/assets/images/galeri/image07.jpg",
    "src/assets/images/galeri/image08.jpg",
    "src/assets/images/galeri/image09.jpg",
    "src/assets/images/galeri/image10.jpg",
    "src/assets/images/galeri/image11.jpg",
    "src/assets/images/galeri/image12.jpg",
    "src/assets/images/galeri/image13.webp",
    "src/assets/images/galeri/image14.jpg",
    "src/assets/images/galeri/image15.jpg",
    "src/assets/images/galeri/image16.jpeg",
    "src/assets/images/galeri/image17.jpg",
    "src/assets/images/galeri/image18.jpg",
    "src/assets/images/galeri/image19.jpg",
    "src/assets/images/galeri/image20.jpg",
    "src/assets/images/galeri/image21.jpg",
    "src/assets/images/galeri/image22.jpg",
    "src/assets/images/galeri/image23.webp",
    // ...dan seterusnya
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("utama");

  return (
    <main>
      <Header />
      <section className="galeri-header">
        <h2>Galeri Kami</h2>
        <p>
          Tak kenal maka tak sayang, lebih dekat dengan
          <span className="highlight2"> Kebun Jambu Marina</span>
        </p>
        <p className="slogan">
          "Jelajahi keindahan kebun dan berbagai momen menarik yang terabadikan
          di sini."
        </p>
      </section>

      {/* Group button for category selection */}
      <GalleryButtonGroup onCategorySelect={setSelectedCategory} />

      {/* Render gallery based on selected category */}
      <section className="photo-gallery" id="photo-gallery">
        <ImageGallery category={selectedCategory} photos={photos} />
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
