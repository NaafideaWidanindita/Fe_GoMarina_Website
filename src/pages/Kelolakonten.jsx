import { useState, useRef } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kelolakonten = () => {
    const fileInputRef = useRef(null);
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [images, setImages] = useState([
        { id: 1, src: "https://via.placeholder.com/1000", category: "Jambu" },
    ]);
    const [eventData, setEventData] = useState([
        { id: 1, name: "Nama Acara", src: "https://via.placeholder.com/1000", description: "Deskripsi acara" },
    ]);
    const [mitra, setMitra] = useState([
        { id: 1, src: "https://via.placeholder.com/1000", mitra: "Nama mitra" },
    ]);
    const [contentData, setContentData] = useState({
        title: "Kebun Marina Jambu",
        description1: "Deskripsi 1",
        description2: "Deskripsi 2",
        vision: "1. Visi 1\n2. Visi 2",
        mission: "1. Misi 1\n2. Misi 2",
        address: "Batam",
        contact: "08814733189",
    });
    const [newImage, setNewImage] = useState("");
    const [category, setCategory] = useState("");
    const [activeTab, setActiveTab] = useState("Galeri");

    const clickTab = (tabName) => {
        setActiveTab(tabName); // Set tab yang aktif
    };

    const handleUpload = () => {
        if (activeTab === "Galeri" && newImage && category) {
            setImages([...images, { id: Date.now(), src: newImage, category }]);
        } else if (activeTab === "Agenda" && newImage) {
            setEventData([...eventData, { id: Date.now(), name: "Nama Baru", src: newImage, description: "Deskripsi Baru" }]);
        } else if (activeTab === "Mitra" && newImage) {
            setMitra([...mitra, { id: Date.now(), src: newImage, mitra: "Nama mitra" }]);
        } else {
            alert("Mohon lengkapi data sebelum upload!");
        }
        setNewImage("");
        setCategory("");
    };

    const handleDeleteImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };

    const handleDeleteEvent = (id) => {
        setEventData(eventData.filter((event) => event.id !== id));
    };

    const handleFileUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setNewImage(fileURL);
            return () => URL.revokeObjectURL(fileURL);
        }
    };

    const showPopup = () => setIsAddVisible(true);
    const hidePopup = () => setIsAddVisible(false);

    return (
        <>
            <div className="contents">
                <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem' }}>
                    <div className="text-side">Kelola Konten</div>
                    <div className="search-add-wrapper">
                        <div className="searchbar">
                            <div className="text-search">Cari</div>
                            <div className="line-search"></div>
                            <img src="src/assets/Group 2.png" alt="Search Icon" />
                        </div>
                        {/* <button className="btn-add" onMouseEnter={showPopup} onMouseLeave={hidePopup}>
                            <img src="src/assets/material-symbols_add-2-rounded (1).svg" alt="Tambah" />
                        </button>
                        <button className="btn-delete">
                            <img src="src/assets/material-symbols_delete.svg" alt="Hapus" />
                        </button> */}
                        {isAddVisible && <div className="add-hover">Tambah</div>}
                    </div>
                </div>

                <div className="content-option">
                    <button 
                        className={`btn-tab ${activeTab === "Galeri" ? "active" : "inactive"}`} 
                        onClick={() => clickTab("Galeri")}
                    >
                    Galeri
                    </button>
                    <button 
                        className={`btn-tab ${activeTab === "Agenda" ? "active" : "inactive"}`} 
                        onClick={() => clickTab("Agenda")}
                    >
                    Agenda
                    </button>
                    <button 
                        className={`btn-tab ${activeTab === "Mitra" ? "active" : "inactive"}`} 
                        onClick={() => clickTab("Mitra")}
                    >
                    Mitra
                    </button>
                    <button 
                        className={`btn-tab ${activeTab === "Konten" ? "active" : "inactive"}`} 
                        onClick={() => clickTab("Konten")}
                    >
                    Konten
                    </button>
                </div>

                {activeTab === "Galeri" && (
                    <>
                        <section className="upload-section">
                            <div className="image">
                                <h2 className="img-text">Foto Baru</h2>
                                <div className="upload-box" onClick={handleFileUploadClick}>
                                    <img src="src/assets/Up Arrow.png" alt="Upload Icon" />
                                    <p>Unggah foto baru</p>
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="category">
                                <label htmlFor="category" className="ctg-text">Kategori</label>
                                <select
                                    id="category"
                                    className="ctg-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="" disabled>Pilih Kategori</option>
                                    <option value="Jambu">Jambu</option>
                                    <option value="Kuda">Kuda</option>
                                    <option value="Spot Foto">Spot Foto</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div className="cancel-save-konten">
                                <button className="btn-cancel-konten">CANCEL</button>
                                <button className="btn-save-konten" onClick={handleUpload}>SAVE</button>
                            </div>
                        </section>

                        <section className="gallery-section">
                            <table className="gallery-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Kategori</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {images.map((image) => (
                                        <tr key={image.id}>
                                            <td>
                                                <img src={image.src} alt={image.category} className="gallery-img" />
                                            </td>
                                            <td>{image.category}</td>
                                            <td>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteImage(image.id)}
                                                >
                                                    <img src="src/assets/material-symbols_delete (1).svg" alt="Hapus" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </>
                )}

                {activeTab === "Agenda" && (
                    <>
                        <section className="upload-section">
                            <div className="name">
                                <div className="name-text">Nama</div>
                                <textarea className="name-box"></textarea>
                            </div>
                            <div className="image">
                                <h2 className="img-text">Foto Baru</h2>
                                <div className="upload-box" onClick={handleFileUploadClick}>
                                    <img src="src/assets/Up Arrow.png" alt="Upload Icon" />
                                    <p>Unggah foto baru</p>
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="description">
                                <div className="desc-text">Deskripsi</div>
                                <textarea className="desc-box"></textarea>
                            </div>
                            <div className="cancel-save-agenda">
                                <button className="btn-cancel-agenda">CANCEL</button>
                                <button className="btn-save-agenda" onClick={handleUpload}>SAVE</button>
                            </div>
                        </section>

                        <section className="agenda-section">
                            <table className="agenda-table">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Image</th>
                                        <th>Deskripsi</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {eventData.map((agenda) => (
                                        <tr key={agenda.id}>
                                            <td>{agenda.name}</td>
                                            <td>
                                                <img src={agenda.src} className="agenda-img" alt="Event" />
                                            </td>
                                            <td>{agenda.description}</td>
                                            <td>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteEvent(agenda.id)}
                                                >
                                                    <img src="src/assets/material-symbols_delete (1).svg" alt="Hapus" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </>
                )}

                {activeTab === "Mitra" && (
                    <>
                        <section className="upload-section">
                        <div className="mitra">
                                <div className="mitra-text">Nama Mitra</div>
                                <textarea className="mitra-box"></textarea>
                            </div>
                            <div className="image">
                                <h2 className="img-text">Foto Baru</h2>
                                <div className="upload-box" onClick={handleFileUploadClick}>
                                    <img src="src/assets/Up Arrow.png" alt="Upload Icon" />
                                    <p>Unggah foto baru</p>
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="cancel-save-mitra">
                                <button className="btn-cancel-mitra">CANCEL</button>
                                <button className="btn-save-mitra" onClick={handleUpload}>SAVE</button>
                            </div>
                        </section>

                        <section className="mitra-section">
                            <table className="mitra-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Mitra</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mitra.map((mitra) => (
                                        <tr key={mitra.id}>
                                            <td>
                                                <img src={mitra.src} alt={mitra.mitra} className="mitra-img" />
                                            </td>
                                            <td>{mitra.mitra}</td>
                                            <td>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteImage(mitra.id)}
                                                >
                                                    <img src="src/assets/material-symbols_delete (1).svg" alt="Hapus" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </>
                )} 

                {activeTab === "Konten" && (
                    <>
                        <section className="upload-section">
                            <div className="kontenn">
                                <div className="title">
                                    <h2 className="title-text">Title:</h2> 
                                    <p className="title-content">{contentData.title}</p>
                                </div>
                                <div className="desc">
                                    <div className="desc-item">
                                        <h2 className="desc-1">Deskripsi 1:</h2>
                                        <p className="desc-content">{contentData.description1}</p>
                                    </div>
                                    <div className="desc-item">
                                        <h2 className="desc-2">Deskripsi 2:</h2>
                                        <p className="desc-content">{contentData.description1}</p>
                                    </div>
                                </div>
                                <div className="vision">
                                    <h2 className="vision-text">Visi:</h2>
                                    <textarea className="vision-box" value={contentData.vision} readOnly />
                                </div>
                                <div className="mision">
                                    <h2 className="mision-text">Misi:</h2>
                                    <textarea className="mision-box" value={contentData.mission} readOnly />
                                </div>
                                <div className="address-contact">
                                    <div className="address">
                                        <h2 className="address-text">Alamat:</h2>
                                        <p className="address-content">{contentData.address}</p>
                                    </div>
                                    <div className="contact">
                                        <h2 className="contact-text">Kontak:</h2>
                                        <p className="contact-content">{contentData.contact}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cancel-save-konten">
                                <button className="btn-cancel-konten">CANCEL</button>
                                <button className="btn-save-konten" onClick={handleUpload}>SAVE</button>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </>
    );
};

export default Kelolakonten;