import React from "react";
import Header from "../components/Headeri/Header";
import Footer from "../components/Footeri/Footer";
import ProductHeader from "../components/Produk/ProductHeader";
import ProductGallery from "../components/Produk/ProductGallery";
import FeaturedProduct from "../components/Produk/FeaturedProduct";
import OtherProducts from "../components/Produk/OtherProducts";
import Testimonial from "../components/Produk/Testimonial";


const Product = () => {
  return (
    <main>
      <Header />
      <section className="product-us">
        <ProductHeader />
        <ProductGallery />
        <div className="spanduk">
          <h3>Penuhi Nutrisimu dengan Hasil Alam di Kebun Jambu Marina</h3>
        </div>
        <FeaturedProduct />
        <OtherProducts />
        <Testimonial />
      </section>
      <Footer />
    </main>
  );
};

export default Product;
