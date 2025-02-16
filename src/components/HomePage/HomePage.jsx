import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div className='background-main h-100 w-100 position-absolute'></div>
            <div className='app-container w-100 z-1'>
                <div className='text-center fw-semibold header-cont w-100 d-flex align-items-center justify-content-center'>
                    <p className='header'>THAILAND</p>
                </div>
                <div className='d-flex flex-wrap justify-content-between gap-4 buttons-cont'>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/house" className="button rounded d-flex position-relative bg-estate">
                            <img src='/public/img/image_estate.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>недвижимость</p>
                        </Link>
                        <Link to="/transport" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_transport.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>аренда транспорта</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/visa" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_visa.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>визы</p>
                        </Link>
                        <Link to="/cards" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_cards.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>карты и права</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/services" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_services.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>услуги</p>
                        </Link>
                        <Link to="/excursions" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_ecsoursions.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>туры и экскурсии</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/tour" className="button rounded d-flex position-relative">
                            <img src='/public/img/image_tour_thai.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>тур в тай</p>
                        </Link>
                        <div className='position-relative'>
                            <img src='/public/img/image_chat.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>общий чат</p>
                        </div>
                    </div>
                </div>
                <div className='footer-cont d-flex align-items-center justify-content-center'>
                    <p className='lh-1 m-0'>Таиланд — это место, где мечты становятся реальностью.</p>
                </div>
            </div>
        </>

    );
}