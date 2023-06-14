import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Navgation from './components/Navgation';
import Service from './components/Service';
import './App.css'
function App(){
  return(
    <Router>
    <div className="App">
      <Header />
      <Navgation />
      <Carousel />
      <Service />
    </div>
    </Router>
  );
}
export default App;
