import React, { useEffect, useState, useRef } from 'react';
import getEstate from "../../api/getEstate.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

export default function EstateCatalog() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEstate, setSelectedEstate] = useState(null);
    const modalRef = useRef(null);

    const district = useSelector((state) => state.Storage.storage.district || 'Неизвестный район');
    const orderType = useSelector((state) => state.Storage.storage.orderType || 'Неизвестно');
    const estateType = useSelector((state) => state.Storage.storage.estateType || 'Неизвестно');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEstate();
                setData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (modalRef.current) {
            const modal = new bootstrap.Modal(modalRef.current, {
                keyboard: false
            });

            modalRef.current.addEventListener('hidden.bs.modal', () => {
                setSelectedEstate(null);
            });

            return () => {
                modal.dispose();
            };
        }
    }, []);

    const handleCardClick = (estate) => {
        setSelectedEstate(estate);
        const modal = bootstrap.Modal.getOrCreateInstance(modalRef.current);
        modal.show();
    };

    const handleCloseModal = () => {
        const modal = bootstrap.Modal.getInstance(modalRef.current);
        modal.hide();
    };

    const getPhotos = (estate) => {
        const photos = [];
        let i = 1;
        while (estate[`Фото ${i}`]) {
            photos.push(estate[`Фото ${i}`]);
            i++;
        }
        return photos;
    };

    const renameEstate = {
        'Вилла': 'Виллу',
        'Дом': 'Дом',
        'Квартира': 'Квартиру',
        'Земля': 'Землю'
    };

    const renameTransaction = {
        'Купить': 'Продажа',
        'Арендовать': 'Аренда'
    };

    const handleClick = () => {
        const encodedText = encodeURIComponent(`Здравствуйте! Меня заинтересовало данное объявление: ${orderType} ${renameEstate[estateType] || estateType} ${selectedEstate['Название']} В ${district}`);
        const url = `https://t.me/MyThaiCompany?text=${encodedText}`;

        window.Telegram?.WebApp
            ? window.Telegram.WebApp.openTelegramLink(url)
            : window.open(url, '_blank');
    };

    const handleImageClick = (photoUrl) => {
        const img = new Image();
        img.src = photoUrl;
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            cursor: pointer;
        `;
        fullscreenDiv.appendChild(img);
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;

        fullscreenDiv.onclick = () => {
            document.body.removeChild(fullscreenDiv);
        };

        document.body.appendChild(fullscreenDiv);
    };

    return (
        <>
            <div className={`background-container ${selectedEstate ? 'blurred' : ''}`}>
                <div className="background-catalog h-100 w-100 position-absolute"></div>
                <div className="app-container w-100 z-1 position-relative d-flex flex-column justify-content-center align-items-center">
                    <div className="text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center">
                        <p className="catalog-header-1 mb-1 mt-2">
                            {orderType.toUpperCase()} {(renameEstate[estateType] || estateType).toUpperCase()}
                        </p>
                        <p className="catalog-header-2 m-0">В {district.toUpperCase()}</p>
                    </div>
                    {isLoading ? (
                        <div className="w-100 h-100 d-flex justify-content-center align-items-center">Загрузка</div>
                    ) : (
                        <div className="catalog-cards-cont">
                            {data.map((estate, key) => {
                                const apiDistrict = estate['Район'];
                                const apiEstateType = estate['Тип недвижимости'];
                                const apiTransactionType = estate['Тип сделки'];
                                if (district !== apiDistrict || estateType !== apiEstateType || renameTransaction[orderType] !== apiTransactionType) return null;

                                const imgUrl = estate['Фото 1'];
                                const name = estate['Название'];
                                const price = estate['Цена'];

                                return (
                                    <div
                                        key={key}
                                        onClick={() => handleCardClick(estate)}
                                        className="catalog-card cursor-pointer"
                                    >
                                        <div className="catalog-img-cont d-flex align-items-center w-100">
                                            <img
                                                src={`${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${imgUrl}`}
                                                className="object-fit-cover w-100"
                                                alt={name}
                                            />
                                        </div>
                                        <div className="w-100 px-2 py-1">
                                            <div className={`catalog-name-container ${name.length > 15 ? 'has-long-name' : ''}`}>
                                                <p className="catalog-name text-white m-0 p-0">{name}</p>
                                            </div>
                                            <p className="catalog-price d-flex align-items-center justify-content-end m-0 pb-1">{price}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-left">
                    <Link to={'/estate'} className="d-flex justify-content-center align-items-center text-decoration-none">
                        <button className="text-white home-btn">НАЗАД</button>
                    </Link>
                </div>
                <div className="d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-right">
                    <Link to={'/'} className="d-flex justify-content-center align-items-center text-decoration-none">
                        <button className="text-white home-btn">НА ГЛАВНУЮ</button>
                    </Link>
                </div>
            </div>

            <div
                className="modal fade"
                id="estateModal"
                ref={modalRef}
                tabIndex="-1"
                aria-labelledby="estateModalLabel"
                aria-hidden="true"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog modal-90w modal-dialog-centered mx-auto">
                    <div className="modal-content custom-modal-content position-relative">
                        {selectedEstate && (
                            <>
                                <div className="modal-body modal-body-scrollable text-center">
                                    <div id="estate-carousel" className="carousel slide">
                                        <div className="carousel-inner">
                                            {getPhotos(selectedEstate).map((photo, index) => (
                                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                    <img
                                                        src={`${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${photo}`}
                                                        className="d-block w-100 carousel-image"
                                                        alt={`Фото ${index + 1}`}
                                                        onClick={() => handleImageClick(`${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${photo}`)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#estate-carousel"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#estate-carousel"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <p className="mt-2">{selectedEstate['Название']}</p>
                                    <p className="mt-1 description-text">{selectedEstate['Описание']}</p>
                                    <h5 className="mt-3">Цена: {selectedEstate['Цена']}</h5>
                                </div>
                                <div className="contact-btn-container">
                                    <div className="contact-btn" onClick={handleClick}>
                                        <p className="p-0 m-0 text-white">СВЯЗАТЬСЯ</p>
                                    </div>
                                </div>
                                <div className="close-icon" onClick={handleCloseModal}>
                                    <svg width="35" height="35" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M59.5001 112.802C30.0972 112.802 6.198 88.9028 6.198 59.4998C6.198 30.0969 30.0972 6.19775 59.5001 6.19775C88.903 6.19775 112.802 30.0969 112.802 59.4998C112.802 88.9028 88.903 112.802 59.5001 112.802ZM59.5001 13.6353C34.2126 13.6353 13.6355 34.2123 13.6355 59.4998C13.6355 84.7873 34.2126 105.364 59.5001 105.364C84.7876 105.364 105.365 84.7873 105.365 59.4998C105.365 34.2123 84.7876 13.6353 59.5001 13.6353Z" fill="rgba(177, 249, 130, 1)"/>
                                        <path d="M45.4678 77.251C44.5257 77.251 43.5837 76.9039 42.8399 76.1601C41.402 74.7222 41.402 72.3422 42.8399 70.9043L70.9041 42.8402C72.342 41.4022 74.722 41.4022 76.1599 42.8402C77.5978 44.2781 77.5978 46.6581 76.1599 48.096L48.0957 76.1601C47.4016 76.9039 46.4099 77.251 45.4678 77.251Z" fill="rgba(177, 249, 130, 1)"/>
                                        <path d="M73.532 77.251C72.5899 77.251 71.6478 76.9039 70.9041 76.1601L42.8399 48.096C41.402 46.6581 41.402 44.2781 42.8399 42.8402C44.2778 41.4022 46.6578 41.4022 48.0957 42.8402L76.1599 70.9043C77.5978 72.3422 77.5978 74.7222 76.1599 76.1601C75.4162 76.9039 74.4741 77.251 73.532 77.251Z" fill="rgba(177, 249, 130, 1)"/>
                                    </svg>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}