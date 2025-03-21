import React from 'react';
import {Link} from "react-router-dom";

export default function CardsAndLicensePage() {

    return (
        <>
            <div className='background-cards h-100 w-100 position-absolute'></div>
            <div className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 text-white mb-1 mt-2 z-3'>КАРТЫ <span className='catalog-header-1'>И ПРАВА</span></p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex h-75 w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont'>
                    <Link to="/drivingLicense" className="d-flex position-relative main-btn-cont w-50 h-25">
                        <img src='/img/drive_license-min.png' className='w-100 h-100'/>
                        <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ВОДИТЕЛЬСКИЕ ПРАВА</p>
                    </Link>
                    <Link to="/bankCards" className="d-flex position-relative main-btn-cont w-50 h-25">
                        <img src='/img/bank_card-min.png' className='w-100 h-100'/>
                        <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                        <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>БАНКОВСКИЕ КАРТЫ</p>
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
