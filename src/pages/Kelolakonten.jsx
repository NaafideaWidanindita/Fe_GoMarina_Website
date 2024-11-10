import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Kelolakonten = () => {
    const navigate = useNavigate();
    const [isAddVisible, setIsAddVisible] = useState(false);

    // Fungsi tampilan add hover popup
    const handleAddClick = () => {
        navigate('/tambahkonten');
    }
    const showPopup = () => {
        setIsAddVisible(true);
    };

    // Fungsi hide popup saat hover berakhir
    const hidePopup = () => {
        setIsAddVisible(false);
    };

    return (
        <>
        <div className="contents">
        <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem'}}>
                <div className="text-side">Kelola Konten</div>
                <div className="search-add-wrapper">
                        <div className="searchbar">
                            <div className="text-search">Cari</div>
                            <div className="line-search"></div>
                            <img src="src/assets/Group 2.png" alt="" />
                        </div>
                        <button className="btn-add" onMouseEnter={showPopup} onMouseLeave={hidePopup} onClick={handleAddClick}>
                            <img src="src/assets/material-symbols_add-2-rounded.png" alt="" /></button>
                        <button className="btn-delete">
                            <img src="src/assets/material-symbols_delete.png" alt="" />
                        </button>
                        {isAddVisible && (
                            <div className="add-hover">Tambah</div>
                        )}
                </div>
        </div>
            <div className="content-option">
                <button className="btn-gj">Galeri Jambu</button>
                <button className="btn-gk">Galeri Kuda</button>
                <button className="btn-gsf">Galeri Spot Foto</button>
                <button className="btn-gl">Galeri Lainnya</button>
            </div>

            <div className="content-line">
                <div className="content-feeds">
                    <div className="photo1">
                        <img src="src/assets/Aprenda a fazer lassi de goiaba, bebida típica indiana.jfif" alt="" />
                    </div>
                    <div className="photo2">
                        <img src="src/assets/Closeup na goiaba vermelha fatiada com folhas verdes na mesa de madeira rústica _ Foto Premium.jfif" alt="" />
                    </div>
                    <div className="photo3">
                        <img src="src/assets/GUAVA TREE.jfif" alt="" />
                    </div>
                    <div className="photo4">
                        <img src="src/assets/9 Best Red and Pink Guava Varieties.jfif" alt="" />
                    </div>
                    <div className="photo5">
                        <img src="src/assets/14 Amazing Health Benefits Of Eating Guava During Pregnancy.jfif" alt="" />
                    </div>
                    <div className="photo6">
                        <img src="src/assets/GUAVA TREE.jfif" alt="" />
                    </div>
                    <div className="photo7">
                        <img src="src/assets/14 Amazing Health Benefits Of Eating Guava During Pregnancy.jfif" alt="" />
                    </div>
                    <div className="photo8">
                        <img src="src/assets/9 Best Red and Pink Guava Varieties.jfif" alt="" />
                    </div>
                    <div className="photo9">
                        <img src="src/assets/Aprenda a fazer lassi de goiaba, bebida típica indiana.jfif" alt="" />
                    </div>
                </div>
                <div className="prev-next">
                    <button className="btn-prev">
                        <img src="src/assets/Vector 14.png" alt="" />
                        <span>Prev</span>
                    </button>
                    <button className="btn-next">
                        <span>Next</span>
                        <img src="src/assets/Vector 13.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
        </> 
    )
};

export default Kelolakonten;
