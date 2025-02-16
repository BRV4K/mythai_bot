import React, {useEffect, useState} from 'react';
import getEstate from "../../../api/getEstate.js";
import {useSelector} from "react-redux";
import ReactLoading from 'react-loading';

export default function EstateCatalog() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //const storage = useSelector((state) => state.Storage.storage);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getEstate(
                    'Покупка',
                    'Вилла',
                    'Восточное побережье'
                );
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return (<p>Загрузка</p>);

    return (
    <>
        <div className='background-main h-100 w-100 position-absolute'></div>
        <div className='app-container w-100 z-1'>
            <div
                className='text-center fw-semibold header-cont w-100 d-flex align-items-center justify-content-center'>
                <p className='header'>THAILAND</p>
            </div>
            <div className='d-flex flex-wrap justify-content-between gap-4 buttons-cont'>
                {data.map(estate => {
                    return estate['Название'];
                })}
            </div>
        </div>
    </>

    );
}