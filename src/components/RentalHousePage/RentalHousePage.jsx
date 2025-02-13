import React from 'react';
import {Link} from "react-router-dom";


export default function RentalHousePage() {
    return (
        <div className='p-3'>
            <h1>Аренда недвижимости</h1>
            <Link to={'/'}><button className='btn btn-success'>На главную</button></Link>
        </div>
    )
}