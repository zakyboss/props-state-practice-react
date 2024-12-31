import ReactDOM from 'react-dom/client';
import './index.css';
export default function Fruits({fruitsObj}){
    const {name, type,price,weight, origin,photo}= fruitsObj
    return (<div className='fruitsContainer'>
<div className='fruitsContent'>
                <img src={photo} alt={`${name}`}/>
                 <span>Name:{name}</span>
                 <span>Type:{type}</span>
                 <span>Price:{price}</span>
                 <span>size:{weight}</span>
                 <span>color:{origin}</span>
            </div>
        </div>)
}