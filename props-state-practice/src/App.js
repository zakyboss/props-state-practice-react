import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Cars from './Cars';
import Buttons from './buttons';
import Shoes from './Shoes';
import Fruits from './Fruits';
const cars = [
  {
    id: 1,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    price: 3000000,
    topSpeed: "261 mph",
    acceleration: "0-60 mph in 2.4s",
    power: "1,479 hp",
    transmission: "7-speed DSG",
    details: "Limited production hypercar with quad-turbocharged W16 engine",
    photo: "./pics/bughatti.jpeg" // Add photo link here
  },
  {
    id: 2,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    price: 625000,
    topSpeed: "211 mph",
    acceleration: "0-60 mph in 2.5s",
    power: "986 hp",
    transmission: "8-speed dual-clutch",
    details: "Plug-in hybrid supercar with advanced aerodynamics",
    photo: "./pics/ferari.jpeg" // Add photo link here
  },
  {
    id: 3,
    name: "Jeep Wrangler Rubicon",
    brand: "Jeep",
    price: 42000,
    topSpeed: "112 mph",
    acceleration: "0-60 mph in 6.7s",
    power: "285 hp",
    transmission: "8-speed automatic",
    details: "Iconic off-road SUV with advanced 4x4 capability",
    photo: "./pics/jeep.jpeg" // Add photo link here
  }
]
const fruits = [
  {
    id: 1,
    name: "Apple",
    type: "Fruit",
    price: 2,
    weight: 150,
    origin: "USA",
    photo: "./pics/apple.jpeg" // Add your photo link here
  },
  {
    id: 2,
    name: "Banana",
    type: "Fruit",
    price: 1,
    weight: 120,
    origin: "Ecuador",
    photo: "./pics/banana.jpeg" // Add your photo link here
  },
  {
    id: 3,
    name: "Mango",
    type: "Fruit",
    price: 3,
    weight: 250,
    origin: "India",
    photo: "./pics/mango.jpeg" // Add your photo link here
  }
];

const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    brand: "Nike",
    price: 120,
    size: "10",
    material: "Mesh",
    color: "Black/White",
    photo: "./pics/nikeAirMax.jpeg" // Add your photo link here
  },
  {
    id: 2,
    name: "Adidas Ultra Boost",
    brand: "Adidas",
    price: 180,
    size: "9",
    material: "Primeknit",
    color: "Blue/White",
    photo: "./pics/adidasUltraBoost.jpeg" // Add your photo link here
  },
  {
    id: 3,
    name: "Puma RS-X3",
    brand: "Puma",
    price: 110,
    size: "11",
    material: "Synthetic",
    color: "Red/Black",
    photo: "./pics/pumaRSX3.jpeg" // Add your photo link here
  }
];
function App() {
  const [visibleCategory, setVisibleCategory] = useState(''); // Tracks which category is visible

  return (
    <div className="App">
      <Buttons setVisibleCategory={setVisibleCategory} />
      
      <div className={`carsContainer ${visibleCategory === 'cars' ? '' : 'hidden'}`}>
        {cars.map((car) => (
          <Cars key={car.id} carsObj={car} />
        ))}
      </div>
      
      <div className={`shoesContainer ${visibleCategory === 'shoes' ? '' : 'hidden'}`}>
        {shoes.map((shoe) => (
          <Shoes key={shoe.id} shoeObj={shoe} />
        ))}
      </div>
      
      <div className={`fruitsContainer ${visibleCategory === 'fruits' ? '' : 'hidden'}`}>
        {fruits.map((fruit) => (
          <Fruits key={fruit.id} fruitsObj={fruit} />
        ))}
      </div>
    </div>
  );
}

export default App;
