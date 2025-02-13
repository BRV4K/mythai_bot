import React from 'react';
import {Link} from "react-router-dom";


export default function RentalTransportPage() {
    return(
        <div className='p-3'>
            <h1>Аренда транспорта</h1>
            <Link to={'/'}><button className='btn btn-success'>На главную</button></Link>
        </div>
    )
}