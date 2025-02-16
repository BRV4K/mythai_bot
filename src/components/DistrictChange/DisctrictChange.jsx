import React from 'react';
import {Link} from "react-router-dom";


export default function DisctrictChange() {
    return(
        <>
            <div className={`background-estate h-100 w-100 position-absolute`}></div>
            <div className='app-container w-100 z-1'>
                <div className='text-center fw-semibold header-cont w-100 d-flex align-items-center justify-content-center'>
                    <p className='estate-header'>ВЫБЕРИТЕ РАЙОН</p>
                </div>
                <div className='buttons-cont d-flex flex-column gap-2 justify-content-center align-items-center'>
                    <Link to={'/estateCatalog'}>
                        <div className='district-box rounded w-100 d-flex align-items-center justify-content-center'>
                            <p className='district-text m-0'>центральный</p>
                        </div>
                    </Link>

                    <Link to={'/estateCatalog'}>
                        <div className='district-box rounded w-100 d-flex align-items-center justify-content-center'>
                            <p className='district-text m-0'>восточный</p>
                        </div>
                    </Link>
                    <Link to={'/estateCatalog'}>
                        <div className='district-box rounded w-100 d-flex align-items-center justify-content-center'>
                            <p className='district-text m-0'>южный</p>
                        </div>
                    </Link>
                    <Link to={'/estateCatalog'}>
                        <div className='district-box rounded w-100 d-flex align-items-center justify-content-center'>
                            <p className='district-text m-0'>западный</p>
                        </div>
                    </Link>
                    <Link to={'/estateCatalog'}>
                        <div className='district-box rounded w-100 d-flex align-items-center justify-content-center'>
                            <p className='district-text m-0'>северо-восточный</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}