import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import getServices from '../../api/getServices.js';
import * as bootstrap from 'bootstrap';

export default function ServicesPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [imageLoading, setImageLoading] = useState({}); // Состояние для загрузки изображений
    const [imageErrors, setImageErrors] = useState({}); // Состояние для ошибок загрузки изображений
    const modalRef = useRef(null);
    const addressModalRef = useRef(null);
    const detailsModalRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getServices();
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
                keyboard: false,
                backdrop: false,
            });

            if (isServiceModalOpen) {
                modal.show();
            } else {
                modal.hide();
            }

            return () => {
                modal.hide();
                modal.dispose();
            };
        }
    }, [isServiceModalOpen]);

    useEffect(() => {
        if (addressModalRef.current) {
            const addressModal = new bootstrap.Modal(addressModalRef.current, {
                keyboard: false,
                backdrop: false,
            });

            if (isAddressModalOpen) {
                addressModal.show();
            } else {
                addressModal.hide();
            }

            return () => {
                addressModal.hide();
                addressModal.dispose();
            };
        }
    }, [isAddressModalOpen]);

    useEffect(() => {
        if (detailsModalRef.current) {
            const detailsModal = new bootstrap.Modal(detailsModalRef.current, {
                keyboard: false,
                backdrop: false,
            });

            if (isDetailsModalOpen) {
                detailsModal.show();
            } else {
                detailsModal.hide();
            }

            return () => {
                detailsModal.hide();
                detailsModal.dispose();
            };
        }
    }, [isDetailsModalOpen]);

    const handleCardClick = (service) => {
        setSelectedService(service);
        setIsServiceModalOpen(true);
    };

    const handleCloseServiceModal = () => {
        setIsServiceModalOpen(false);
        setIsAddressModalOpen(false);
        setIsDetailsModalOpen(false);
        setSelectedService(null);
    };

    const handleOpenAddressModal = () => {
        setIsAddressModalOpen(true);
    };

    const handleCloseAddressModal = () => {
        setIsAddressModalOpen(false);
    };

    const handleOpenDetailsModal = () => {
        setIsDetailsModalOpen(true);
    };

    const handleCloseDetailsModal = () => {
        setIsDetailsModalOpen(false);
    };

    const getPhotos = (service) => {
        const photos = [];
        let i = 1;
        while (service[`Фото ${i}`]) {
            photos.push(service[`Фото ${i}`]);
            i++;
        }
        return photos;
    };

    const handleImageClick = (photoUrl) => {
        if (isAddressModalOpen || isDetailsModalOpen) return;

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

    const handleClick = () => {
        const encodedText = encodeURIComponent(
            `Здравствуйте! Меня заинтересовало данное объявление: УСЛУГИ ${selectedService['Название']}`
        );
        const url = `https://t.me/MyThaiCompany?text=${encodedText}`;

        window.Telegram?.WebApp
            ? window.Telegram.WebApp.openTelegramLink(url)
            : window.open(url, '_blank');
    };

    // Фильтрация данных (если нужно, можно добавить логику фильтрации)
    const filteredData = data; // Здесь можно добавить фильтры, если они нужны

    return (
        <>
            {(isServiceModalOpen || isAddressModalOpen || isDetailsModalOpen) && <div className="modal-backdrop fade show" />}

            <div className={`background-container ${isServiceModalOpen || isAddressModalOpen || isDetailsModalOpen ? 'blurred' : ''}`}>
                <div className="background-services h-100 w-100 position-absolute"></div>
                <div className="text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center">
                    <p className="catalog-header-3 mb-1 mt-2">УСЛУГИ</p>
                </div>
                <div className="app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont">
                        {isLoading ? (
                            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                <div className="spinner"></div>
                            </div>
                        ) : error ? (
                            <div className="w-100 h-100 d-flex justify-content-center align-items-center text-danger">
                                Ошибка: {error}
                            </div>
                        ) : filteredData.length === 0 ? (
                            <div className="no-variants">
                                НЕТ ПОДХОДЯЩИХ ВАРИАНТОВ
                            </div>
                        ) : (
                            <div className="catalog-cards-cont">
                                {filteredData.map((service, key) => {
                                    const imgUrl = service['Фото 1'];
                                    const name = service['Название'];

                                    return (
                                        <div
                                            key={key}
                                            className="catalog-card cursor-pointer"
                                            onClick={() => handleCardClick(service)}
                                        >
                                            <div className="catalog-img-cont d-flex align-items-center w-100">
                                                {imageLoading[imgUrl] !== false && !imageErrors[imgUrl] ? (
                                                    <div className="image-spinner"></div>
                                                ) : imageErrors[imgUrl] ? null : (
                                                    <img
                                                        src={`${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${imgUrl}`}
                                                        className="object-fit-cover w-100"
                                                        alt={name}
                                                        onLoad={() => setImageLoading((prev) => ({ ...prev, [imgUrl]: false }))}
                                                        onError={() => {
                                                            setImageLoading((prev) => ({ ...prev, [imgUrl]: false }));
                                                            setImageErrors((prev) => ({ ...prev, [imgUrl]: true }));
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <p className="text-white m-0 p-0 services-name text-center p-2">{name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="footer-cont d-flex align-items-center justify-content-center position-absolute bottom-0">
                        <Link to="/" className="d-flex justify-content-center align-items-center text-decoration-none mt-5">
                            <button className="text-white home-btn">НА ГЛАВНУЮ</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={`modal fade ${isServiceModalOpen ? 'show' : ''} ${isAddressModalOpen || isDetailsModalOpen ? 'blurred' : ''}`}
                id="serviceModal"
                ref={modalRef}
                tabIndex="-1"
                aria-labelledby="serviceModalLabel"
                aria-hidden={!isServiceModalOpen}
            >
                <div className="modal-dialog modal-90w modal-top-margin mx-auto">
                    <div className="modal-content custom-modal-content position-relative">
                        {selectedService && (
                            <>
                                <div className="modal-body modal-body-scrollable text-center">
                                    <div id="transport-carousel" className="carousel slide">
                                        <div className="carousel-inner">
                                            {getPhotos(selectedService).map((photo, index) => (
                                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                    {imageLoading[photo] !== false && !imageErrors[photo] ? (
                                                        <div className="image-spinner"></div>
                                                    ) : imageErrors[photo] ? null : (
                                                        <img
                                                            src={`${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${photo}`}
                                                            className="d-block w-100 carousel-image"
                                                            alt={`Фото ${index + 1}`}
                                                            onClick={() =>
                                                                handleImageClick(
                                                                    `${import.meta.env.VITE_PROXY_URL}/yandex-proxy?url=https://getfile.dokpub.com/yandex/get/${photo}`
                                                                )
                                                            }
                                                            onLoad={() => setImageLoading((prev) => ({ ...prev, [photo]: false }))}
                                                            onError={() => {
                                                                setImageLoading((prev) => ({ ...prev, [photo]: false }));
                                                                setImageErrors((prev) => ({ ...prev, [photo]: true }));
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#transport-carousel"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#transport-carousel"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <p className="mt-2">{selectedService['Название']}</p>
                                    <p className="mt-1 description-text lh-1">{selectedService['Краткое описание']}</p>
                                    <div className="services-bonus text-white mt-3">
                                        {selectedService['Акция']}
                                    </div>
                                    <div className="w-100 d-flex justify-content-between p-3">
                                        <button className="text-white home-btn" onClick={handleOpenAddressModal}>
                                            АДРЕС
                                        </button>
                                        <button className="text-white home-btn" onClick={handleOpenDetailsModal}>
                                            ПОДРОБНЕЕ
                                        </button>
                                    </div>
                                </div>
                                <div className="contact-btn-container">
                                    <div className="contact-btn" onClick={handleClick}>
                                        <p className="p-0 m-0 text-white">СВЯЗАТЬСЯ</p>
                                    </div>
                                </div>
                                <div className="close-icon" onClick={handleCloseServiceModal}>
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 119 119"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M59.5001 112.802C30.0972 112.802 6.198 88.9028 6.198 59.4998C6.198 30.0969 30.0972 6.19775 59.5001 6.19775C88.903 6.19775 112.802 30.0969 112.802 59.4998C112.802 88.9028 88.903 112.802 59.5001 112.802ZM59.5001 13.6353C34.2126 13.6353 13.6355 34.2123 13.6355 59.4998C13.6355 84.7873 34.2126 105.364 59.5001 105.364C84.7876 105.364 105.365 84.7873 105.365 59.4998C105.365 34.2123 84.7876 13.6353 59.5001 13.6353Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M45.4678 77.251C44.5257 77.251 43.5837 76.9039 42.8399 76.1601C41.402 74.7222 41.402 72.3422 42.8399 70.9043L70.9041 42.8402C72.342 41.4022 74.722 41.4022 76.1599 42.8402C77.5978 44.2781 77.5978 46.6581 76.1599 48.096L48.0957 76.1601C47.4016 76.9039 46.4099 77.251 45.4678 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M73.532 77.251C72.5899 77.251 71.6478 76.9039 70.9041 76.1601L42.8399 48.096C41.402 46.6581 41.402 44.2781 42.8399 42.8402C44.2778 41.4022 46.6578 41.4022 48.0957 42.8402L76.1599 70.9043C77.5978 72.3422 77.5978 74.7222 76.1599 76.1601C75.4162 76.9039 74.4741 77.251 73.532 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                    </svg>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`modal fade ${isAddressModalOpen ? 'show' : ''}`}
                id="addressModal"
                ref={addressModalRef}
                tabIndex="-1"
                aria-labelledby="addressModalLabel"
                aria-hidden={!isAddressModalOpen}
            >
                <div className="modal-dialog modal-90w modal-top-margin mx-auto">
                    <div className="modal-content custom-modal-content position-relative">
                        {selectedService && (
                            <>
                                <div className="modal-body modal-body-scrollable text-center">
                                    <h5 className="mt-2">АДРЕС</h5>
                                    <p className="mt-1 description-text lh-1">{selectedService['Адрес'] || 'Адрес не указан'}</p>
                                </div>
                                <div className="close-icon" onClick={handleCloseAddressModal}>
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 119 119"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M59.5001 112.802C30.0972 112.802 6.198 88.9028 6.198 59.4998C6.198 30.0969 30.0972 6.19775 59.5001 6.19775C88.903 6.19775 112.802 30.0969 112.802 59.4998C112.802 88.9028 88.903 112.802 59.5001 112.802ZM59.5001 13.6353C34.2126 13.6353 13.6355 34.2123 13.6355 59.4998C13.6355 84.7873 34.2126 105.364 59.5001 105.364C84.7876 105.364 105.365 84.7873 105.365 59.4998C105.365 34.2123 84.7876 13.6353 59.5001 13.6353Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M45.4678 77.251C44.5257 77.251 43.5837 76.9039 42.8399 76.1601C41.402 74.7222 41.402 72.3422 42.8399 70.9043L70.9041 42.8402C72.342 41.4022 74.722 41.4022 76.1599 42.8402C77.5978 44.2781 77.5978 46.6581 76.1599 48.096L48.0957 76.1601C47.4016 76.9039 46.4099 77.251 45.4678 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M73.532 77.251C72.5899 77.251 71.6478 76.9039 70.9041 76.1601L42.8399 48.096C41.402 46.6581 41.402 44.2781 42.8399 42.8402C44.2778 41.4022 46.6578 41.4022 48.0957 42.8402L76.1599 70.9043C77.5978 72.3422 77.5978 74.7222 76.1599 76.1601C75.4162 76.9039 74.4741 77.251 73.532 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                    </svg>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`modal fade ${isDetailsModalOpen ? 'show' : ''}`}
                id="detailsModal"
                ref={detailsModalRef}
                tabIndex="-1"
                aria-labelledby="detailsModalLabel"
                aria-hidden={!isDetailsModalOpen}
            >
                <div className="modal-dialog modal-90w modal-top-margin mx-auto">
                    <div className="modal-content custom-modal-content position-relative">
                        {selectedService && (
                            <>
                                <div className="modal-body modal-body-scrollable text-center">
                                    <h5 className="mt-2">ПОДРОБНОЕ ОПИСАНИЕ</h5>
                                    <p className="mt-1 description-text lh-1">{selectedService['Описание услуги'] || 'Описание отсутствует'}</p>
                                </div>
                                <div className="close-icon" onClick={handleCloseDetailsModal}>
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 119 119"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M59.5001 112.802C30.0972 112.802 6.198 88.9028 6.198 59.4998C6.198 30.0969 30.0972 6.19775 59.5001 6.19775C88.903 6.19775 112.802 30.0969 112.802 59.4998C112.802 88.9028 88.903 112.802 59.5001 112.802ZM59.5001 13.6353C34.2126 13.6353 13.6355 34.2123 13.6355 59.4998C13.6355 84.7873 34.2126 105.364 59.5001 105.364C84.7876 105.364 105.365 84.7873 105.365 59.4998C105.365 34.2123 84.7876 13.6353 59.5001 13.6353Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M45.4678 77.251C44.5257 77.251 43.5837 76.9039 42.8399 76.1601C41.402 74.7222 41.402 72.3422 42.8399 70.9043L70.9041 42.8402C72.342 41.4022 74.722 41.4022 76.1599 42.8402C77.5978 44.2781 77.5978 46.6581 76.1599 48.096L48.0957 76.1601C47.4016 76.9039 46.4099 77.251 45.4678 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
                                        <path
                                            d="M73.532 77.251C72.5899 77.251 71.6478 76.9039 70.9041 76.1601L42.8399 48.096C41.402 46.6581 41.402 44.2781 42.8399 42.8402C44.2778 41.4022 46.6578 41.4022 48.0957 42.8402L76.1599 70.9043C77.5978 72.3422 77.5978 74.7222 76.1599 76.1601C75.4162 76.9039 74.4741 77.251 73.532 77.251Z"
                                            fill="rgba(177, 249, 130, 1)"
                                        />
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