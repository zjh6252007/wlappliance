import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './components/Header';
import Carousel from './components/Carousel';
import Navgation from './components/Navgation';
import InventoryCarousel from './components/InventoryCarousel';
import ad1 from './assets/wlappliancesad1.jpg';
import ad2 from './assets/wlappliancesad2.jpg';
import snapfinance from './assets/BetterWayToShop.jpg'
import Footer from './components/Footer';
import Faq from './Pages/Faq';
import Repair from './Pages/Repair';
import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Wonderful Life Appliances</title>
          <meta name="description" content="Wl appliances sell new appliances with low price. Visit our store and get affordable appliances today!" />
          <meta name="keywords" constent="lowprice,Melbourne,new appliances,kitchen set,microwave,washer,dryer,rent to own,repair" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header />
        <Navgation />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <img src={ad1} alt="never used,low price-appliances" className="my-image-class" />
              <div className="ad-container">
                <img src={ad2} alt="lease to own policy" className="my-image-class2" />
                <img src={snapfinance} alt="snap finance policy" className="my-image-class3" />
              </div>
              <h2 className="inventory-title">Our Inventory</h2>
              <InventoryCarousel />
            </>
          } />
          <Route path="/faq" element={<Faq />} />
          <Route path="/repair" element={<Repair />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
