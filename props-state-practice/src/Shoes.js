import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
export default function Shoes({shoeObj}){
    const {name, brand,price, size,color,photo}= shoeObj
    return (<div className='shoesContainer'>
<div className={`shoesCOntent`}>
                <img src={photo} alt={`${name}`}/>
                 <span>Name:{name}</span>
                 <span>Brand:{brand}</span>
                 <span>Price:{price}</span>
                 <span>size:{size}</span>
                 <span>color:{color}</span>
            </div>
        </div>)
}