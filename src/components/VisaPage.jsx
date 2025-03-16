import React from 'react';
import {Link} from "react-router-dom";

export default function VisaPage() {

    return (
        <>
            <div className='background-visa h-100 w-100 position-absolute'></div>
            <div className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 mb-1 mt-2'>ВИЗА</p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont'>
                    <Link to="/visaVariants" className="d-flex position-relative main-btn-cont w-50 h-25">
                        <img src='/img/visa_variants.png' className='w-100 h-100'/>
                        <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ВАРИАНТЫ ВИЗ</p>
                    </Link>
                    <Link to="/borderRun" className="d-flex position-relative main-btn-cont w-50 h-25">
                        <img src='/img/border_run.png' className='w-100 h-100'/>
                        <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>БОРДЕР РАН</p>
                    </Link>
                    <Link to="/fastTrack" className="d-flex position-relative main-btn-cont w-50 h-25">
                        <img src='/img/fast_track.png' className='w-100 h-100'/>
                        <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ФАСТ ТРЕК</p>
                    </Link>
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
