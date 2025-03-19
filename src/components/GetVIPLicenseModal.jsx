import React, {useEffect, useState} from "react";
import * as bootstrap from 'bootstrap';
import ArrangeButton from "./ArrangeButton.jsx";

export default function GetVIPLicenseModal() {
    const [page, setPage] = useState(0);
    const [htmlPage, setHtmlPage] = useState("");

    useEffect(() => {
        if (page === 0) {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>• Не нужно посещать автошколу и сдавать экзамен</p>
                    <p className='m-0'>• Процесс занимает 4 дня</p>
                    <p className='m-0'>• Полное сопровождение на всех этапах</p>
                    <p className='m-0 mt-3'>Категория А (байк) - 25.000 бат</p>
                    <p className='m-0'>Категория В (авто) - 28.000 бат</p>
                    <p className='m-0 mt-3'>💸 Для граждан России доступна оплата в рассрочку или кредитными картами</p>
                    <p className='m-0 mt-3'>Потребуется:</p>
                    <p className='m-0'>• Загранпаспорт</p>
                    <p className='m-0'>• Онлайн-регистрация или ТМ30. Запросите скриншот «online registration for immigration bureau» в Вашем отеле или у арендодателя. Можем сделать сами +2000 бат</p>
                    <p className='m-0 mt-3'>❗️До окончания штампа или визы должно быть не менее 15 дней на момент получения прав</p>
                </div>
            )
        }
        else {
            setHtmlPage(
                <div className='m-0 text-white text-uppercase '>
                    <p className='m-0'>Процесс:</p>
                    <p className='m-0 mt-3'>1) Приехать в наш офис</p>
                    <p className='m-0 mt-3'>2) Через 3 дня Вас отвезут в DLT провинции Пхангнга для фотографирования, сдачи отпечатков и получения прав</p>
                    <p className='m-0 mt-3'>❗️Первый раз выдаётся водительское удостоверение на 2 года</p>
                    <p className='m-0 mt-3'>➡️ Для оформления услуги наш менеджер может приехать к Вам на дом (400-1000฿ в зависимости от локации)</p>
                </div>
            )
        }
    }, [page]);

    // Функция для закрытия модального окна
    const handleClose = () => {
        const modalElement = document.getElementById('vipLicenseModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    };

    return (
        <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont position-relative'>
            <div className='w-100 text-center text-white position-absolute modal-h1 fs-6'>ПОЛУЧЕНИЕ VIP ПРАВ (ПХУКЕТ)</div>
            <div className='close-icon position-absolute' onClick={handleClose}>
                <svg width="35" height="35" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.5001 112.802C30.0972 112.802 6.198 88.9028 6.198 59.4998C6.198 30.0969 30.0972 6.19775 59.5001 6.19775C88.903 6.19775 112.802 30.0969 112.802 59.4998C112.802 88.9028 88.903 112.802 59.5001 112.802ZM59.5001 13.6353C34.2126 13.6353 13.6355 34.2123 13.6355 59.4998C13.6355 84.7873 34.2126 105.364 59.5001 105.364C84.7876 105.364 105.365 84.7873 105.365 59.4998C105.365 34.2123 84.7876 13.6353 59.5001 13.6353Z" fill="rgba(177, 249, 130, 1)"/>
                    <path d="M45.4678 77.251C44.5257 77.251 43.5837 76.9039 42.8399 76.1601C41.402 74.7222 41.402 72.3422 42.8399 70.9043L70.9041 42.8402C72.342 41.4022 74.722 41.4022 76.1599 42.8402C77.5978 44.2781 77.5978 46.6581 76.1599 48.096L48.0957 76.1601C47.4016 76.9039 46.4099 77.251 45.4678 77.251Z" fill="rgba(177, 249, 130, 1)"/>
                    <path d="M73.532 77.251C72.5899 77.251 71.6478 76.9039 70.9041 76.1601L42.8399 48.096C41.402 46.6581 41.402 44.2781 42.8399 42.8402C44.2778 41.4022 46.6578 41.4022 48.0957 42.8402L76.1599 70.9043C77.5978 72.3422 77.5978 74.7222 76.1599 76.1601C75.4162 76.9039 74.4741 77.251 73.532 77.251Z" fill="rgba(177, 249, 130, 1)"/>
                </svg>
            </div>
            <div className='modal-bg lh-1'>
                {htmlPage}
                {page !== 1 && <div className='position-absolute arrow end-0' onClick={() => setPage(prevState => prevState + 1)}>
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
            <ArrangeButton text="Здравствуйте! Хочу получить VIP права"/>
        </div>
    );
}