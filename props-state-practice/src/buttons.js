import { useState } from 'react';
import './index.css';
export default function Buttons (){
let [click ,setClick]=useState('none')
    function handleFruitsClick(){
        setClick(click='block')
    }
    function handleShoesClick(){
        setClick(click='block')

    }
    function handleCarsClick(){
        setClick(click='block')

    }
return ( 
    <div className='menu'>
        <span style={{padding:'4px', backgroundColor:'teal', borderRadius:'20px' , color:'white', fontFamily:'sans-serif'}} onClick={handleCarsClick}>cars</span>
        <span  style={{padding:'4px', backgroundColor:'teal', borderRadius:'20px',color:'white', fontFamily:'sans-serif'}}onClick={handleShoesClick}>shoes</span>
        <span  style={{padding:'4px', backgroundColor:'teal',borderRadius:'20px',color:'white', fontFamily:'sans-serif'}}onClick={handleFruitsClick}>fruits</span>
    </div>
)
}
