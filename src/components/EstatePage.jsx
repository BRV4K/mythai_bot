import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setEstateType, setOrderType} from "../redux/reducer.js";


export default function EstatePage() {
    const dispatch = useDispatch();

    return (
        <>
            <div className='background-estate h-100 w-100 position-absolute'></div>
            <div className='app-container h-100 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-wrap justify-content-between gap-4 buttons-cont'>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Квартира"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/rent_flat-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ КВАРТИРУ</p>
                        </Link>
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Квартира"))
                            dispatch(setOrderType("Купить"))
                        }}>
                            <img src='/img/buy_flat-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ КВАРТИРУ</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Дом"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/rent_house-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ ДОМ</p>
                        </Link>
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Дом"))
                            dispatch(setOrderType("Купить"))
                        }}>
                            <img src='/img/buy_house-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ ДОМ</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Вилла"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/rent_villa-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ ВИЛЛУ</p>
                        </Link>
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Вилла"))
                            dispatch(setOrderType("Купить"))
                        }}>
                            <img src='/img/buy_villa-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ ВИЛЛУ</p>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                        <Link to="/districtChange" className="d-flex position-relative main-btn-cont" onClick={() => {
                            dispatch(setEstateType("Земля"))
                            dispatch(setOrderType("Купить"))
                        }}>
                            <img src='/img/buy_ground-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ ЗЕМЛЮ</p>
                        </Link>
                    </div>
                </div>
                <div className='footer-cont d-flex align-items-center justify-content-center position-absolute bottom-0'>
                    <Link to={'/'}
                          className='d-flex justify-content-center align-items-center text-decoration-none'>
                        <button className='text-white home-btn'>НА ГЛАВНУЮ</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
