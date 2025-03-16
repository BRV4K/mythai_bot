import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArrangeButton from "./ArrangeButton.jsx";

export default function BankCardsPage() {
    const [page, setPage] = useState(0);
    const [htmlPage, setHtmlPage] = useState("");

    useEffect(() => {
        if (page === 0) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0 w-100 text-center fs-6'>БАНКОВСКАЯ КАРТА (ПХУКЕТ)</p>
                    <p className='m-0 mt-4'>• Открытие счета в тот же день, если подать документы до 11:00</p>
                    <p className='m-0'>• Полное сопровождение на всех этапах</p>
                    <p className='m-0'>• Картой можно расплачиваться по всему миру и принимать переводы из других стран</p>
                    <p className='m-0'>• Лимиты на переводы и оплату до 2 млн/сутки</p>
                    <p className='m-0 mt-3'>Стоимость:</p>
                    <p className='m-0'>Карта Bangkok Bank — 12.000 бат</p>
                    <p className='m-0'>Именная карта +2500 бат (+7 дней)</p>
                    <p className='m-0 mt-3'>💸 Для граждан России доступна оплата в рассрочку или кредитными картами</p>
                </div>
            )
        }
        else if (page === 1) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0 w-100 text-center fs-6'>БАНКОВСКАЯ КАРТА (ПХУКЕТ)</p>
                    <p className='m-0 mt-4'>Потребуется:</p>
                    <p className='m-0'>• Загранпаспорт</p>
                    <p className='m-0'>• ВУ (тайское или страны гражданства)</p>
                    <p className='m-0'>• Онлайн-регистрация или ТМ30. Запросите скриншот «online registration for immigration bureau» в Вашем отеле или у арендодателя. Можем сделать сами +2000 бат</p>
                    <p className='m-0'>• Тайская sim-карта и tax invoice</p>
                    <p className='m-0'>• Первоначальный депозит для пополнения карты — от 500 бат</p>
                    <p className='m-0 mt-3'>❗️До окончания штампа или визы должно быть не менее 30 дней на момент посещения банка</p>
                </div>
            )
        }
        else {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0 w-100 text-center fs-6'>БАНКОВСКАЯ КАРТА (ПХУКЕТ)</p>
                    <p className='m-0 mt-4'>Процесс:</p>
                    <p className='m-0 mt-2'>1) Приехать в наш офис</p>
                    <p className='m-0 mt-2'>2) Мы подготавливаем все документы</p>
                    <p className='m-0 mt-2'>3) Приехать в банк для получения карты</p>
                    <p className='m-0 mt-3'>➡️ Для оформления услуги наш менеджер может приехать к Вам на дом (400-1000 в зависимости от локации)</p>
                    <p className='m-0 mt-3'>Пополнение карты:</p>
                    <p className='m-0 mt-3'>• SWIFT-перевод</p>
                    <p className='m-0'>• Криптобиржи</p>
                    <p className='m-0'>• Онлайн-обменники</p>
                </div>
            )
        }
    }, [page]);

    return (
        <>
            <div className='background-bank-cards h-100 w-100 position-absolute'></div>
            <div
                className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 mb-1 mt-2 z-3'>БАНКОВСКИЕ <span className='text-white'>КАРТЫ</span></p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont position-relative'>
                    <div className='modal-bg'>
                        {htmlPage}
                        {page !== 2 && <div className='position-absolute arrow end-0' onClick={() => setPage(prevState => prevState + 1)}>
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

                        </div>}
                        {page !== 0 && <div className='position-absolute arrow start-0' onClick={() => setPage(prevState => prevState - 1)}>
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
                        </div>}
                    </div>
                    <ArrangeButton text="Здравствуйте! Хочу оформить банковскую карту"/>
                </div>
                <div
                    className='d-flex align-items-center justify-content-center position-absolute home-btn-cont-bottom-left'>
                    <Link to={'/cards'}
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