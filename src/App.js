import React from 'react';
import './App.css';
import Car from './vehicle.js';
import Lunch from './food';
import Model from './assemble';
import Voilet from './color';

function App() {
  return (
    <div>
    <Car CarName = "Aqua" BikeName = "Honda"></Car>

    <Lunch Dish = "Biryani" Sweet = "Rabri"></Lunch>

    <Model CarName = "Aqua" YearsName = "2018" CompanyName = "Toyota"></Model>
    </div>
    
  );
}

export default App;
