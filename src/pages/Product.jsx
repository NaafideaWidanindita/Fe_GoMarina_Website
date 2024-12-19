import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
    // Data produk yang ditampilkan di tabel
    const productsData = [
        {
            id: '1',
            nama: "Jambu Merah Segar",
            harga: "Rp 35,000 / kg",
            stok: "100 kg",
            rating: 5,
            deskripsi: "Nikmati kesegaran jambu merah yang kaya akan vitamin C dan antioksidan. Cocok untuk dikonsumsi langsung atau dijadikan bahan jus dan salad.",
            imgSrc: "src/assets/Closeup na goiaba vermelha fatiada com folhas verdes na mesa de madeira rústica _ Foto Premium.jfif"
        },
        {
            id: '2',
            nama: "Jus Jambu Merah",
            harga: "Rp 15,000 / botol",
            stok: "100 botol",
            rating: 5,
            deskripsi: "Segelas jus jambu merah yang segar dan menyehatkan, tanpa gula tambahan. Rasakan manfaat kesehatan dalam setiap tegukan!",
            imgSrc: "src/assets/Aprenda a fazer lassi de goiaba, bebida típica indiana.jfif"
        },
        {
            id: '3',
            nama: "Selai Jambu Merah",
            harga: "Rp 15,000 / jar",
            harga_mentah: "Rp 15,000",
            deskripsi: "Selai jambu merah yang manis dan lezat, ideal untuk olesan roti atau pelengkap kue. Dibuat dari buah jambu merah segar, memberikan rasa alami yang kaya dan tekstur yang lembut. Tambahkan ke dalam sarapan Anda untuk sentuhan manis yang sempurna!",
            stok: "100 jar",
            rating: 5,
            imgSrc: "src/assets/9 Best Red and Pink Guava Varieties.jfif"
        },
        {
            nama: "Keripik Jambu Merah",
            harga: "Rp 20,000 / pack",
            harga_mentah: "Rp 20,000",
            deskripsi: "Keripik jambu merah yang renyah dan gurih, camilan sehat yang cocok untuk segala suasana. Dibuat dari irisan jambu merah segar yang dikeringkan dengan sempurna, memberikan rasa yang unik dan memuaskan. Nikmati sebagai camilan sehari-hari atau oleh-oleh khas!",
            stok: "100 pack",
            rating: 5,
            imgSrc: "src/assets/keripik jambu.jpg"
        },
        {
            nama: "Paket Hampers Jambu",
            harga: "Rp 20,000 / jar",
            harga_mentah: "Rp 20,000",
            deskripsi: "Paket hampers eksklusif yang berisi buah jambu merah segar, jus jambu merah, <span> </span>selai jambu merah, dan keripik jambu merah. Hadiah sempurna untuk orang terkasih atau sebagai bingkisan spesial. Berikan kelezatan dan manfaat kesehatan dalam satu paket istimewa!",
            stok: "100 paket",
            rating: 5,
            imgSrc: "src/assets/keranjang.jpg"
        },
    ];

    const navigate = useNavigate();

    const handleDeleteClick = (id) => {
        console.log(`Delete product with ID: ${id}`);
        // Implementasikan logika penghapusan di sini
    };

    const handleDetailClick = (id) => {
        navigate(`/editproduk/${id}`);
    };

    return (
        <div className="manage-products">
            <div className="side-tools" style={{ marginTop: '-97.6rem', marginLeft: '14rem' }}>
                <div className="text-side-prod">Produk</div>
                <div className="search-period-wrapper-prod" style={{ marginTop: '-1.1rem' }}>
                    <div className="searchbar-prod">
                        <div className="text-search-prod">Cari</div>
                        <div className="line-search-prod"></div>
                        <img src="src/assets/Group 2.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Iterasi data produk */}
            <div className="product-cards">
                {productsData.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            <img src={product.imgSrc} alt={product.nama} />
                            <button className="stock-btn">Stok: {product.stok}</button>
                        </div>
                        <div className="product-info">
                            <h2>{product.nama}</h2>
                            <p className="price">{product.harga}</p>
                            <p className="description">{product.deskripsi}</p>
                            <div className="product-details">
                                <Link to="#" className="review-link">
                                    Lihat ulasan
                                </Link>
                            </div>
                        </div>
                        <div className="product-actions">
                            <div className="rating">
                                {"★".repeat(product.rating)}
                            </div>
                            <div className="action-buttons">
                                <Link to={`/edit-produk/${product.id}`} className="edit-btn">
                                    <img src="src/assets/material-symbols_edit-outline-rounded.svg" alt=""></img>
                                </Link>
                                <button className="delete-btn" onClick={() => handleDeleteClick(product.id)}>
                                    <img src="src/assets/material-symbols_delete (3).svg" alt="Delete" srcset="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;