import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Импортируем useSelector
import Thailand from "@svg-maps/thailand";
import Map from "./Map.jsx";

export default function DisctrictChange() {
    // Получаем значение district из Redux состояния
    const district = useSelector((state) => state.Storage.storage.district || '');

    return (
        <>
            <div className={`background-map h-100 w-100 position-absolute`}></div>
            <div className='app-container w-100 h-100 d-flex flex-column justify-content-start align-items-center z-1'>
                <div className="text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center">
                    <p className="catalog-header-1 mb-1 mt-2">
                        ВЫБЕРИТЕ РАЙОН
                    </p>
                </div>
                <div>
                    <Map />
                </div>
            </div>
            <div
                className='d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-left'>
                <Link to={'/'}
                      className='d-flex justify-content-center align-items-center text-decoration-none'>
                    <button className='text-white home-btn'>НА ГЛАВНУЮ</button>
                </Link>
            </div>
            {/* Условный рендеринг кнопки "ДАЛЕЕ" */}
            {district && (
                <div
                    className='d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-right'>
                    <Link to={'/estateCatalog'}
                          className='d-flex justify-content-center align-items-center text-decoration-none'>
                        <button className='text-white home-btn'>ДАЛЕЕ</button>
                    </Link>
                </div>
            )}
        </>
    );
}