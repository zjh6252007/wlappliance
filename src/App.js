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
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const AppBox = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height:'100%',
  objectFit: 'fill',
  marginBottom: '-4px',
}));


const InventoryTitle = styled(Typography)({
  textAlign: 'center',
  marginTop: 0,
  marginBottom: '20px',
  fontSize: '60px',
  background: '#000',
  color: '#FFD700',
  fontFamily: 'cursive',
});

function App() {
  return (
    <Router>
      <AppBox>
        <Helmet>
          <title>Wonderful Life Appliances</title>
          <meta name="description" content="Wl appliances sell new appliances with low price. Visit our store and get affordable appliances today!" />
          <meta name="keywords" content="lowprice,Melbourne,new appliances,kitchen set,microwave,washer,dryer,rent to own,repair" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header />
        <Navgation />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Image src={ad1} alt="never used,low price-appliances" />
              <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                  <Image src={ad2} alt="lease to own policy" />
                </Grid>
                <Grid item xs={12} md={6}>

                  <Image src={snapfinance} alt="snap finance policy" />

                </Grid>
              </Grid>
              <InventoryTitle variant="h2">Our Inventory</InventoryTitle>
              <InventoryCarousel />
            </>
          } />
          <Route path="/faq" element={<Faq />} />
          <Route path="/repair" element={<Repair />} />
        </Routes>
        <Footer />
      </AppBox>
    </Router>
  );
}

export default App;