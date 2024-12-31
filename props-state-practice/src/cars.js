import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

export default function Cars({carsObj}){
    const { photo, name, brand, price, topSpeed, acceleration } = carsObj;

    return (
        <div className='carsContainer'>
            <div className='carsContent'>
                <img src={photo} alt={`${name}`}/>
                 <span>Name:{name}</span>
                 <span>Brand:{brand}</span>
                 <span>Price:{price}</span>
                 <span>Top Speed:{topSpeed}</span>
                 <span>acceleration:{acceleration}</span>
            </div>
        </div>
    )
}