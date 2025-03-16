import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className='background-main h-100 w-100 position-absolute'></div>
            <div className='app-container h-100 w-100 z-1 d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-wrap justify-content-between gap-4 buttons-cont'>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/estate" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/estate_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>НЕДВИЖИМОСТЬ</p>
                        </Link>
                        <Link to="/transport" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/transport_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ТРАНСПОРТ</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/visa" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/visa_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ВИЗЫ</p>
                        </Link>
                        <Link to="/cards" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/cards_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КАРТЫ И ПРАВА</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/services" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/services_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>УСЛУГИ</p>
                        </Link>
                        <Link to="/excursions" className="button d-flex position-relative main-btn-cont">
                            <img src='/img/tours_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ТУРЫ И ЭКСКУРСИИ</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to={'/tour'} className="button d-flex position-relative main-btn-cont">
                            <img src='/img/money_button.png' className='w-100 h-100 z-0'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ОБМЕН ВАЛЮТЫ</p>
                        </Link>
                        <div className='position-relative main-btn-cont'>
                            <img src='/img/chat_button.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ОБЩИЙ ЧАТ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}