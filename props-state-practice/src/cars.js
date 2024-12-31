import React from 'react'
import ReactDOM from 'react-dom/client';

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
export default function Cars(){
    return (
        <div className='carsContainer'>
            <div className='carsContent'>
                <img src=''/>
                 <span>Brand:</span>
                 <span>Price:</span>
                 <span>Top Speed :</span>
                 <span>acceleration :</span>
            </div>
        </div>
    )
}