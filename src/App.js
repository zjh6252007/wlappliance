import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Navgation from './components/Navgation';
import Card from './components/card';
import './App.css'
function App(){
  return(
    <Router>
    <div className="App">
      <Header />
      <Navgation />
      <Carousel />
      <h2 className="inventory-title">Our Inventory</h2>
      <Card />
    </div>
    </Router>
  );
}
export default App;
