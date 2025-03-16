import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArrangeButton from "./ArrangeButton.jsx";

export default function BorderRun() {
    const [page, setPage] = useState(0);
    const [htmlPage, setHtmlPage] = useState("");
    useEffect(() => {
        if (page === 0) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>БОРДЕР РАН СО 100% ГАРАНТИЕЙ!</p>
                    <p className='m-0 mt-3'>💚 за 1 год официально можно пересечь по суше границу всего 2 раза.</p>
                    <p className='m-0'>С нами вы можете делать это бесконечно 🔁</p>
                    <p className='m-0'>💚 Мы можем после штампа продления 30 дней в иммиграционной опять отправлять вас на бордер, а не в аэропорт 💎</p>
                    <p className='m-0'>💚 Поездка 1 днем Самуи и Панган + дорога выбрана так, что это станет для вас экскурсией🤩</p>
                    <p className='m-0'>💚 Мы можем продлять легальное нахождение в стране даже после студенческой визы по суше💪</p>
                    <p className='m-0'>💚Мы можем помочь получить штамп 180 дней и активировать Вашу DTV визу по наземной границе</p>
                    <p className='m-0'>💚 Overstay и депортация -- поможем в любой ситуации</p>
                    <p className='m-0 mt-3'>‼️Дети до 11 лет бесплатно </p>
                    <p className='m-0'>(подробности уточняйте у менеджера)</p>
                </div>
            )
        }
        else if (page === 1) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>ТАРИФЫ под любой бюджет</p>
                    <p className='m-0 mt-3'>⭐️⭐️⭐️Эконом </p>
                    <p className='m-0'>бюджетный вариант поездки, поездка в группе людей более 4 человек, минивэн</p>
                    <p className='m-0 mt-3'>⭐️⭐️⭐️⭐️Премиум</p>
                    <p className='m-0'>место в машине бизнес-класса/джипе (ниже список, что будет в машине), повышенный комфорт, обед</p>
                    <p className='m-0 mt-3'>⭐️⭐️⭐️Эконом </p>
                    <p className='m-0'>вся машина бизнес-класса/джип (ниже список, что будет в машине), максимальный комфорт, обед</p>
                </div>
            )
        }
        else if (page === 2) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>ЧТО БУДЕТ В МАШИНЕ (Премиум и ВИП тариф):</p>
                    <p className='m-0 mt-3'>Максимально продумали все за вас и вам не нужно собирать пакет вещей - вас уже все ждет в машине:</p>
                    <p className='m-0'>🔹подушки-котики, пледы</p>
                    <p className='m-0'>🔹вода, снеки (арахис, булочки)</p>
                    <p className='m-0'>🔹пауэрбанк, зарядка 220В</p>
                    <p className='m-0'>🔹зонтики, дождевики</p>
                    <p className='m-0'>🔹влажные салфетки</p>
                    <p className='m-0'>🔹детское кресло, планшет для ребенка с мультиками под запрос</p>
                    <p className='m-0'>🔹раздаем вай фай</p>
                    <p className='m-0'>🔹беруши</p>
                    <p className='m-0'>🔹выдаем беспроводные наушники</p>
                    <p className='m-0 mt-3'>🔹включено питание на выбор (европейская, вегетарианская, тайская и тд)</p>
                </div>
            )
        }
        else {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>📍ЛОКАЦИИ, через какие границы происходит бордер ран с нами:</p>
                    <p className='m-0 mt-3'>Садао: Хат Яй, Након Си, Тамарат, Паталунг</p>
                    <p className='m-0 mt-3'>Сатун: Пхукет, Самуи, Панган, Краби</p>
                    <p className='m-0 mt-3'>Ранонг: Пхукет, Панган, Самуи, Хуахин, СуратТхани, Чумпон</p>
                    <p className='m-0 mt-3'>Сакео: Бангкок, Паттайя</p>
                    <p className='m-0 mt-3'>ХатЛек: Ко-Чанг, Паттайя, БангкокЧанг Саен: ЧангМай, ЧангРай</p>
                </div>
            )
        }
    }, [page]);

    return (
        <>
            <div className='background-border-run h-100 w-100 position-absolute'></div>
            <div
                className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                <p className='catalog-header-1 mb-1 mt-2 z-3'>БОРДЕР <span className='text-white'>РАН</span></p>
            </div>
            <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont position-relative'>
                    <div className='modal-bg lh-1'>
                        {htmlPage}
                        {page !== 3 && <div className='position-absolute arrow end-0' onClick={() => setPage(prevState => prevState + 1)}>
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
                    <ArrangeButton text="Здравствуйте! Хочу оформить Бордер Ран"/>
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