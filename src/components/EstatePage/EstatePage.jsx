import React from 'react';
import {Link} from "react-router-dom";


export default function EstatePage() {
    return (
        <>
            <div className='background_estate h-100 w-100 position-absolute'></div>
            <div className='app-container h-100 w-100 z-1'>
                <div className='text-center mb-5 rounded fs-4 fw-semibold'>
                    <p className='estate_header'>НЕДВИЖИМОСТЬ</p>
                </div>
                <div className='d-flex h-100 flex-wrap gap-4'>
                    <div className="d-flex justify-content-between gap-2">
                        <Link to="/" className="button rounded d-flex position-relative bg-estate">
                            <img src='/public/img/flat.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>арендовать квартиру</p>
                        </Link>
                        <Link to="/" className="button rounded d-flex position-relative">
                            <img src='/public/img/flat.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>купить квартиру</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <Link to="/" className="button rounded d-flex position-relative bg-estate">
                            <img src='/public/img/house.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>арендовать дом</p>
                        </Link>
                        <Link to="/" className="button rounded d-flex position-relative">
                            <img src='/public/img/house.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>купить дом</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <Link to="/" className="button rounded d-flex position-relative bg-estate">
                            <img src='/public/img/villa.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>арендовать виллу</p>
                        </Link>
                        <Link to="/" className="button rounded d-flex position-relative">
                            <img src='/public/img/villa.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>купить виллу</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <Link to="/" className="button rounded d-flex position-relative bg-estate">
                            <img src='/public/img/ground.png' className='w-100 h-100'/>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>купить землю</p>
                        </Link>
                    </div>
                </div>
                <div className='w-100 mt-3'>
                    <Link to={'/'} className='w-100 d-flex justify-content-center align-items-center text-decoration-none'>
                        <button className='button-text text-white home-btn rounded'>На главную</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
