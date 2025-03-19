import React from 'react';
import {Link} from "react-router-dom";

export default function ChangeMoneyPage() {
    const handleClick = () => {
        const encodedText = encodeURIComponent("Здравствуйте! Хочу обменять валюту");
        const url = `https://t.me/MyThaiCompany?text=${encodedText}`;

        window.Telegram?.WebApp
            ? window.Telegram.WebApp.openTelegramLink(url)
            : window.open(url, '_blank');
    };

    return (
        <>
            <div className='background-money h-100 w-100 position-absolute'></div>
            <div
                className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center position-relative'>
                <div className='money-change-bg-blur w-100 position-absolute z-0'></div>
                <p className='catalog-header-1 text-white mb-1 mt-2 z-3'>ОБМЕН <span className='catalog-header-1'>ВАЛЮТЫ</span></p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-start align-items-center'>
                <div className='money-change-1-text text-white text-center lh-1'>
                    ТЕПЕРЬ МОЖНО МЕНЯТЬ РУБЛИ НА БАТЫ И НАОБОРОТ, ПРОСТЫМ ПЕРЕВОДОМ НА РОССИЙСКУЮ КАРТУ.
                </div>
                <div className='money-change-1-text text-white text-center mt-1'>
                    ТАКЖЕ МЕНЯЕМ КРИПТУ И ДОЛЛАРЫ!
                </div>
                <div className='money-change-2-text text-white text-center mt-4 lh-1'>
                    НАЖИМАЙ НА КНОПКУ, ГДЕ ТЕБЯ ВСТРЕТИТ МЕНЕДЖЕР И ОТВЕТИТ НА ВСЕ ВОПРОСЫ
                </div>
                <div className='money-change-btn text-center mt-5' onClick={handleClick}>
                    ОБМЕН В ТЕЛЕГРАМ
                </div>
                <div className='money-change-3-text text-white text-center position-relative lh-1'>
                    <p className='z-3 m-0 p-0'>ЛИЦЕНЗИРОВАННЫЙ СЕРВИС ОБМЕНА ВАЛЮТ </p>
                    <p className='z-3'>№1 НА ТЕРРИТОРИИ ТАЙЛАНДА</p>
                </div>
                <div
                    className='footer-cont d-flex align-items-center justify-content-center position-absolute bottom-0'>
                    <Link to={'/'}
                          className='d-flex justify-content-center align-items-center text-decoration-none mt-5'>
                        <button className='text-white home-btn'>НА ГЛАВНУЮ</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
