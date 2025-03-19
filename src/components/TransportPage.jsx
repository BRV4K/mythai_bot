import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setEstateType, setOrderType, setTransportType} from "../redux/reducer.js";


export default function transportPage() {
    const dispatch = useDispatch();

    return (
        <>
            <div className='background-transport h-100 w-100 position-absolute'></div>
            <div className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 text-white mb-1 mt-2 z-3'>ТРАНСПОРТ</p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-wrap justify-content-between gap-4 buttons-cont'>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/transportCatalog" className="d-flex position-relative main-btn-cont w-50" onClick={() => {
                            dispatch(setTransportType("Машину"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/car-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ МАШИНУ</p>
                        </Link>
                        {/*<Link to="/transportCatalog" className="d-flex position-relative main-btn-cont" onClick={() => {*/}
                        {/*    dispatch(setTransportType("Машину"))*/}
                        {/*    dispatch(setOrderType("Купить"))*/}
                        {/*}}>*/}
                        {/*    <img src='/img/car.png' className='w-100 h-100'/>*/}
                        {/*    <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>*/}
                        {/*    <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ МАШИНУ</p>*/}
                        {/*</Link>*/}
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/transportCatalog" className="d-flex position-relative main-btn-cont w-50" onClick={() => {
                            dispatch(setTransportType("Мотоцикл"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/moto-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ МОТОЦИКЛ</p>
                        </Link>
                        {/*<Link to="/transportCatalog" className="d-flex position-relative main-btn-cont" onClick={() => {*/}
                        {/*    dispatch(setTransportType("Мотоцикл"))*/}
                        {/*    dispatch(setOrderType("Купить"))*/}
                        {/*}}>*/}
                        {/*    <img src='/img/moto.png' className='w-100 h-100'/>*/}
                        {/*    <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>*/}
                        {/*    <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ МОТОЦИКЛ</p>*/}
                        {/*</Link>*/}
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/transportCatalog" className="d-flex position-relative main-btn-cont w-50" onClick={() => {
                            dispatch(setTransportType("Байк"))
                            dispatch(setOrderType("Арендовать"))
                        }}>
                            <img src='/img/bike-min.png' className='w-100 h-100'/>
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>АРЕНДОВАТЬ БАЙК</p>
                        </Link>
                        {/*<Link to="/transportCatalog" className="d-flex position-relative main-btn-cont" onClick={() => {*/}
                        {/*    dispatch(setTransportType("Байк"))*/}
                        {/*    dispatch(setOrderType("Купить"))*/}
                        {/*}}>*/}
                        {/*    <img src='/img/bike.png' className='w-100 h-100'/>*/}
                        {/*    <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>*/}
                        {/*    <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>КУПИТЬ БАЙК</p>*/}
                        {/*</Link>*/}
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
