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
            <div className={`background-estate h-100 w-100 position-absolute`}></div>
            <div className='app-container w-100 h-100 d-flex justify-content-center align-items-center z-1'>
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