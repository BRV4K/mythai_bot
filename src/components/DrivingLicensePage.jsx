import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import * as bootstrap from 'bootstrap';
import GetSimpleLicenseModal from './GetSimpleLicenseModal';
import GetVIPLicenseModal from './GetVIPLicenseModal';
import ChangeLicensePage from './ChangeLicensePage';

export default function DrivingLicensePage() {
    const [isBlurred, setIsBlurred] = useState(false);
    const simpleLicenseModalRef = useRef(null);
    const vipLicenseModalRef = useRef(null);
    const changeLicenseModalRef = useRef(null);

    const handleSimpleLicenseClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(simpleLicenseModalRef.current);
        modal.show();
    };

    const handleVIPLicenseClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(vipLicenseModalRef.current);
        modal.show();
    };

    const handleChangeLicenseClick = () => {
        setIsBlurred(true);
        const modal = bootstrap.Modal.getOrCreateInstance(changeLicenseModalRef.current);
        modal.show();
    };

    useEffect(() => {
        const simpleLicenseModal = simpleLicenseModalRef.current ? new bootstrap.Modal(simpleLicenseModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const vipLicenseModal = vipLicenseModalRef.current ? new bootstrap.Modal(vipLicenseModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const changeLicenseModal = changeLicenseModalRef.current ? new bootstrap.Modal(changeLicenseModalRef.current, {
            keyboard: false,
            backdrop: true
        }) : null;

        const handleModalHidden = () => {
            setIsBlurred(false);
            document.body.classList.remove('modal-open');
        };

        if (simpleLicenseModalRef.current) {
            simpleLicenseModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }
        if (vipLicenseModalRef.current) {
            vipLicenseModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }
        if (changeLicenseModalRef.current) {
            changeLicenseModalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);
        }

        return () => {
            if (simpleLicenseModal) simpleLicenseModal.dispose();
            if (vipLicenseModal) vipLicenseModal.dispose();
            if (changeLicenseModal) changeLicenseModal.dispose();
            if (simpleLicenseModalRef.current) {
                simpleLicenseModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
            if (vipLicenseModalRef.current) {
                vipLicenseModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
            if (changeLicenseModalRef.current) {
                changeLicenseModalRef.current.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
        };
    }, []);

    return (
        <>
            <div className={`background-container ${isBlurred ? 'blurred' : ''}`}>
                <div className='background-driving-license h-100 w-100 position-absolute'></div>
                <div
                    className='text-decoration-none text-center fw-semibold header-cont w-100 d-flex flex-column align-items-center justify-content-center'>
                    <p className='catalog-header-1 text-white mb-1 mt-2 z-3'>ВОДИТЕЛЬСКИЕ <span className='catalog-header-1'>ПРАВА</span></p>
                </div>
                <div className='app-container h-75 w-100 z-1 d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex w-100 justify-content-center align-items-center flex-column gap-5 buttons-cont'>
                        <div
                            onClick={handleSimpleLicenseClick}
                            className="d-flex position-relative main-btn-cont arrange-btn w-75 justify-content-center align-items-center text-center cursor-pointer"
                        >
                            ПОЛУЧЕНИЕ ПРАВ (ПХУКЕТ)
                        </div>
                        <div
                            onClick={handleVIPLicenseClick}
                            className="d-flex position-relative main-btn-cont arrange-btn w-75 justify-content-center align-items-center text-center cursor-pointer"
                        >
                            ПОЛУЧЕНИЕ VIP ПРАВ (ПХУКЕТ)
                        </div>
                        <div
                            onClick={handleChangeLicenseClick}
                            className="d-flex position-relative main-btn-cont arrange-btn w-75 justify-content-center align-items-center text-center cursor-pointer"
                        >
                            КОНВЕРТАЦИЯ ПРАВ (ПХУКЕТ)
                        </div>
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
            </div>

            {/* Модальное окно для GetSimpleLicenseModal */}
            <div
                className="modal fade"
                id="simpleLicenseModal"
                ref={simpleLicenseModalRef}
                tabIndex="-1"
                aria-labelledby="simpleLicenseModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <GetSimpleLicenseModal />
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для GetVIPLicenseModal */}
            <div
                className="modal fade"
                id="vipLicenseModal"
                ref={vipLicenseModalRef}
                tabIndex="-1"
                aria-labelledby="vipLicenseModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <GetVIPLicenseModal />
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для ChangeLicensePage */}
            <div
                className="modal fade"
                id="changeLicenseModal"
                ref={changeLicenseModalRef}
                tabIndex="-1"
                aria-labelledby="changeLicenseModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0">
                            <ChangeLicensePage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}