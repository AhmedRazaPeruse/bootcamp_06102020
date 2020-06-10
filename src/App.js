import React from 'react';
import './App.css';
import Car from './vehicle.js';
import Travel from './visit';
import Model from './assemble';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class = "jumbotron">
          <h2>Presidential Initiative For. Artificial Intelligence And Computing.</h2>
        </div>
      </div>
      <div class="container">
        <div class="jumbotron">
          <h2><Car CarName = "Prius"></Car></h2>
          <h3><Model CarName = "Prius"  CompanyName = "Toyota" YearsName = "2018"></Model></h3>
          <p>The Toyota Prius is a full hybrid electric automobile developed and manufactured by Toyota since 1997. Initially offered as a 4-door sedan, it has been produced only as a 5-door liftback since 2003.</p>
        </div>
      </div>
      <div class="container">
        <div class="jumbotron col-lg-4"><b><Travel City1 = "Kohat"></Travel></b></div>
        <div class ="col-lg-4"></div>
        <div class="jumbotron col-lg-4"><b><Travel City2 = "Peshawar"></Travel></b></div>
      </div>
        
    </div>
    
  );
}

export default App;
