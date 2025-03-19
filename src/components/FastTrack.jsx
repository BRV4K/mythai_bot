import {Link} from "react-router-dom";
import React, {useState} from "react";
import ArrangeButton from "./ArrangeButton.jsx";

export default function FastTrack() {
    const [page, setPage] = useState(0);

    return (
        <>
            <div className='background-fast-track h-100 w-100 position-absolute'></div>
            <div
                className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 mb-1 mt-2 z-3'>ФАСТ <span className='text-white'>ТРЕК</span></p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont position-relative'>
                    <div className='modal-bg lh-1'>
                        {page === 0 ?
                        <div className='m-0 text-white text-uppercase '>
                            <p className='m-0'>• Гарантированный проход границы с любым количеством штампов и виз</p>
                            <p className='m-0'>• Встретим в любом аэропорту Таиланда</p>
                            <p className='m-0'>• Отдельный коридор без очередей</p>
                            <p className='m-0'>• Фиксированная стоимость</p>
                            <p className='m-0'>• Полное сопровождение</p>
                            <p className='m-0'>• Мы будем на связи даже если Вы прилетите ночью</p>
                            <p className='m-0 mt-3'>❗️Оформление минимум за сутки до прилета</p>
                            <p className='m-0 mt-3'>Потребуется:</p>
                            <p className='m-0'>• Фото паспорта, всех тайских штампов и виз</p>
                            <p className='m-0'>• Билет с номером рейса, датой и временем прилета</p>
                            <p className='m-0'>• Фото не из паспорта (селфи)</p>
                            <p className='m-0'>• Номер WhatsApp</p>
                        </div>
                        :
                        <div className='m-0 text-white text-uppercase '>
                            <p className='m-0'>Оплата</p>
                            <p className='m-0 mt-3'>Стоимость (с человека):</p>
                            <p className='m-0 mt-3'>Suvarnabhumi (BKK) - 6000 бат</p>
                            <p className='m-0'>Don Mueang (DMK) - 6000 бат</p>
                            <p className='m-0'>Phuket Airport (HKT) - 7000 бат</p>
                            <p className='m-0'>Chiang Mai Airport (CNX) - 7000 бат</p>
                            <p className='m-0'>Hat Yai Airport (HDY) - 7000 бат</p>
                            <p className='m-0'>U-Tapao (UTP) - 7000 бат</p>
                            <p className='m-0 mt-3'>❗️ Предупредите, если Вы находитесь в чёрном листе или у Вас ранее были проблемы на границе</p>
                            <p className='m-0 mt-3'>Начните свое путешествие в Таиланд без забот, а решение проблем доверьте нам 😊</p>
                        </div>
                        }
                        {page === 1 ?
                            <div className='position-absolute arrow start-0' onClick={() => setPage(0)}>
                            <svg width="20" height="20" viewBox="0 0 93 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dddddd_2243_2747)">
                                    <path d="M14 47L78.5 79.909L78.5 14.091L14 47Z" fill="#B1F982"/>
                                </g>
                                <defs>
                                    <filter id="filter0_dddddd_2243_2747" x="0.130132" y="0.220952" width="92.2397" height="93.5581" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="0.165117"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2243_2747"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="0.330235"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_2243_2747" result="effect2_dropShadow_2243_2747"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="1.15582"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect2_dropShadow_2243_2747" result="effect3_dropShadow_2243_2747"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="2.31164"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect3_dropShadow_2243_2747" result="effect4_dropShadow_2243_2747"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="3.96282"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect4_dropShadow_2243_2747" result="effect5_dropShadow_2243_2747"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="6.93493"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect5_dropShadow_2243_2747" result="effect6_dropShadow_2243_2747"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_2243_2747" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                            :
                            <div className='position-absolute arrow end-0' onClick={() => setPage(1)}>
                            <svg width="20" height="20" viewBox="0 0 93 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dddddd_2243_2720)">
                                    <path d="M79 47L14.5 79.909L14.5 14.091L79 47Z" fill="#B1F982"/>
                                </g>
                                <defs>
                                    <filter id="filter0_dddddd_2243_2720" x="0.630132" y="0.220952" width="92.2397" height="93.5581" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="0.165117"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2243_2720"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="0.330235"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_2243_2720" result="effect2_dropShadow_2243_2720"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="1.15582"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect2_dropShadow_2243_2720" result="effect3_dropShadow_2243_2720"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="2.31164"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect3_dropShadow_2243_2720" result="effect4_dropShadow_2243_2720"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="3.96282"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect4_dropShadow_2243_2720" result="effect5_dropShadow_2243_2720"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="6.93493"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect5_dropShadow_2243_2720" result="effect6_dropShadow_2243_2720"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_2243_2720" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        }
                    </div>
                    <ArrangeButton text="Здравствуйте! Хочу оформить Фаст Трек"/>
                </div>
                <div
                    className='d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-left'>
                    <Link to={'/visa'}
                          className='d-flex justify-content-center align-items-center text-decoration-none'>
                        <button className='text-white home-btn'>НАЗАД</button>
                    </Link>
                </div>
                <div
                    className='d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-right'>
                    <Link to={'/'}
                          className='d-flex justify-content-center align-items-center text-decoration-none'>
                        <button className='text-white home-btn'>НА ГЛАВНУЮ</button>
                    </Link>
                </div>
            </div>
        </>
    )
}