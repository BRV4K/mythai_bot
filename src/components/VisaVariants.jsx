import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import * as bootstrap from 'bootstrap';
import StudentVisa from './StudentVisa';
import RetirementVisa from './RetirementVisa';
import DigitalVisa from "./DigitalVisa.jsx";

export default function VisaVariants() {
    const [isBlurred, setIsBlurred] = useState(false);
    const studentModalRef = useRef(null);
    const retirementModalRef = useRef(null);
    const digitalModalRef = useRef(null);

    const handleStudentVisaClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(studentModalRef.current);
        modal.show();
    };

    const handleRetirementVisaClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(retirementModalRef.current);
        modal.show();
    };

    const handleDigitalVisaClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(digitalModalRef.current);
        modal.show();
    };

    useEffect(() => {
        const studentModal = studentModalRef.current ? new bootstrap.Modal(studentModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const retirementModal = retirementModalRef.current ? new bootstrap.Modal(retirementModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const digitaltModal = digitalModalRef.current ? new bootstrap.Modal(digitalModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const handleModalHidden = () => {
            setIsBlurred(false);
            document.body.classList.remove('modal-open');
        };

        if (studentModalRef.current) {
            studentModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }
        if (retirementModalRef.current) {
            retirementModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }
        if (digitalModalRef.current) {
            digitalModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }

        return () => {
            if (studentModal) studentModal.dispose();
            if (retirementModal) retirementModal.dispose();
            if (digitaltModal) digitaltModal.dispose();
            if (studentModalRef.current) studentModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
            if (retirementModalRef.current) retirementModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
            if (digitalModalRef.current) digitalModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
        };
    }, []);

    return (
        <>
            <div className={`background-container ${isBlurred ? 'blurred' : ''}`}>
                <div className="background-visa-variants h-100 w-100 position-absolute"></div>
                <div className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                    <p className='catalog-header-1 mb-1 mt-2'>ВАРИАНТЫ ВИЗ</p>
                </div>
                <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont'>
                        <div
                            onClick={handleStudentVisaClick}
                            className="d-flex position-relative main-btn-cont w-50 h-25 cursor-pointer"
                        >
                            <img src='/img/studen_visa.jpg' className='w-100 h-100' alt="Студенческая виза" />
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>СТУДЕНЧЕСКАЯ ВИЗА</p>
                        </div>
                        <div
                            onClick={handleRetirementVisaClick}
                            className="d-flex position-relative main-btn-cont w-50 h-25 cursor-pointer"
                        >
                            <img src='/img/pens_visa.png' className='w-100 h-100' alt="Пенсионная виза" />
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ПЕНСИОННАЯ ВИЗА</p>
                        </div>
                        <div onClick={handleDigitalVisaClick} className="d-flex position-relative main-btn-cont w-50 h-25">
                            <img src='/img/digital_visa.png' className='w-100 h-100' alt="Виза цифрового кочевника" />
                            <div className='main-btn w-100 h-100 position-absolute bottom-0'></div>
                            <p className='button-text text-white m-0 p-0 lh-1 position-absolute'>ВИЗА ЦИФРОВОГО КОЧЕВНИКА</p>
                        </div>
                    </div>
                    <div className='footer-cont d-flex align-items-center justify-content-center position-absolute bottom-0'>
                        <Link to={'/'} className='d-flex justify-content-center align-items-center text-decoration-none mt-5'>
                            <button className='text-white home-btn'>НА ГЛАВНУЮ</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Модальное окно для StudentVisa */}
            <div
                className="modal fade"
                id="studentVisaModal"
                ref={studentModalRef}
                tabIndex="-1"
                aria-labelledby="studentVisaModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <StudentVisa />
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для RetirementVisa */}
            <div
                className="modal fade"
                id="retirementVisaModal"
                ref={retirementModalRef}
                tabIndex="-1"
                aria-labelledby="retirementVisaModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <RetirementVisa />
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для DigitalVisa */}
            <div
                className="modal fade"
                id="digitalVisaModal"
                ref={digitalModalRef}
                tabIndex="-1"
                aria-labelledby="digitalVisaModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <DigitalVisa />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}