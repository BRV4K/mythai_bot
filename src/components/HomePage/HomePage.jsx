import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='app-container'>
            <div className='text-center mb-3 bg-success text-white rounded fs-4 fw-semibold'>
                <p>Откройте для себя Тайланд с нашим удобным гидом!</p>
            </div>
            <div className="d-flex gap-2 justify-content-between">
                <Link to="/house" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text">Недвижимость</p>
                    <div className='position-absolute bottom-0 end-0'>
                        <img src='/svg/house.svg' alt="Недвижимость"/>
                    </div>
                </Link>
                <Link to="/transport" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text">Аренда транспорта</p>
                    <div className='position-absolute bottom-0 end-0'>
                        <img src='/svg/scooter.svg' alt="Аренда транспорта"/>
                    </div>
                </Link>

            </div>
            <div className="d-flex gap-2 justify-content-between">
                <Link to="/visa" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text m-0">Визы</p>
                    <div className="position-absolute bottom-0 end-0">
                        <img src='/svg/visa.svg' alt="Визы"/>
                    </div>
                </Link>
                <Link to="/cards" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text">Карты и права</p>
                    <div className='position-absolute bottom-0 end-0'>
                        <img src='/svg/cards.svg' alt="Карты и права"/>
                    </div>
                </Link>
            </div>
            <div className="d-flex gap-2 justify-content-between">
                <Link to="/services" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text m-0">Услуги</p>
                    <div className="position-absolute bottom-0 end-0">
                        <img src='/svg/uslugi.svg' alt="Услуги"/>
                    </div>
                </Link>
                <Link to="/excursions" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text">Туры и экскурсии</p>
                    <div className='position-absolute bottom-0 end-0'>
                        <img src='/svg/excursion.svg' alt="Туры и экскурсии"/>
                    </div>
                </Link>
            </div>
            <div className="d-flex gap-2 justify-content-between">
                <Link to="/tour" className="block rounded w-100 d-flex position-relative text-decoration-none">
                    <p className="description-text m-0">Тур в Тай</p>
                    <div className="position-absolute bottom-0 end-0">
                        <img src='/svg/tour.svg' alt="Тур в Тай"/>
                    </div>
                </Link>
                <div className="block rounded w-100 d-flex position-relative">
                    <p className="description-text m-0">Общий чат</p>
                    <div className="position-absolute bottom-0 end-0">
                        <img src='/svg/chat.svg' alt="Общий чат"/>
                    </div>
                </div>
            </div>
        </div>
    );
}