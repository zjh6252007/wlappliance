import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './components/Header';
import Carousel from './components/Carousel';
import Navgation from './components/Navgation';
import InventoryCarousel from './components/InventoryCarousel';
import ad1 from './assets/wlappliancesad1.jpg';
import ad2 from './assets/wlappliancesad2.jpg';
import Footer from './components/Footer';
import Faq from './Pages/Faq';
import LeaseToOwn from './Pages/LeaseToOwn';
import AboutUs from './Pages/AboutUs';
import './App.css'
function App(){
  return(
    <Router>
    <div className="App">
      <Helmet>
        <title>Wonderful Life Appliances</title>
        <meta name="description" content="Wl appliances is a appliances retail located in Melbourne FL, we sell new appliances with low price "/>
        <meta name="keywords" constent="lowprice,Melbourne,new appliances,kitchen set,microwave,washer,dryer,rent to own" />
      </Helmet>
      <Header />
      <Navgation />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <img src={ad1} alt="low price appliance" className="my-image-class" />
              <img src={ad2} alt="lease to own policy" className="my-image-class2" />
              <h2 className="inventory-title">Our Inventory</h2>
              <InventoryCarousel />
            </>
          }/>
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/leasetown" element={<LeaseToOwn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
