import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div className='background_main h-100 w-100 position-absolute'></div>
            <div className='app-container h-100 w-100 z-1'>
                <div className='text-center mb-3 rounded fs-4 fw-semibold'>
                    <p className='header'>THAILAND</p>
                </div>
                <div className="d-flex gap-2 justify-content-between mb-2">
                    <Link to="/house" className="button rounded d-flex position-relative bg-estate">
                        <img src='/public/img/image_estate.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>недвижимость</p>
                    </Link>
                    <Link to="/transport" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_transport.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>аренда транспорта</p>
                    </Link>

                </div>
                <div className="d-flex gap-2 justify-content-between mb-2">
                    <Link to="/visa" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_visa.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>визы</p>
                    </Link>
                    <Link to="/cards" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_cards.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>карты и права</p>
                    </Link>
                </div>
                <div className="d-flex gap-2 justify-content-between mb-2">
                    <Link to="/services" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_services.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>услуги</p>
                    </Link>
                    <Link to="/excursions" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_ecsoursions.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>туры и экскурсии</p>
                    </Link>
                </div>
                <div className="d-flex gap-2 justify-content-between">
                    <Link to="/tour" className="button rounded d-flex position-relative">
                        <img src='/public/img/image_tour_thai.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>тур в тай</p>
                    </Link>
                    <div className='button position-relative'>
                        <img src='/public/img/image_chat.png' className='w-100 h-100'/>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute bottom-0'>общий чат</p>
                    </div>
                </div>
                <div className='w-100 mt-3'>
                    <p className='lh-1 footer'>Таиланд — это место, где мечты становятся реальностью.</p>
                </div>

            </div>
        </>

    );
}