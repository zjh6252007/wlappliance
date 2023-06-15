import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Navgation from './components/Navgation';
import Card from './components/card';
import ad1 from './assets/wlappliancesad1.jpg';
import ad2 from './assets/wlappliancesad2.jpg'
import './App.css'
function App(){
  return(
    <Router>
    <div className="App">
      <Header />
      <Navgation />
      <Carousel />
      <img src={ad1} alt="low price appliance" className="my-image-class" />
      <img src={ad2} alt="description of image" className="my-image-class2" />
      <h2 className="inventory-title">Our Inventory</h2>
      <Card />
    </div>
    </Router>
  );
}
export default App;
