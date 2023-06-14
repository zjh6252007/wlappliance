import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import applice1 from '../assets/appliances1.jpg';
import applice2 from '../assets/appliances2.jpg';
import applice3 from '../assets/appliances3.jpg';
import applice4 from '../assets/appliances4.jpg';
import './Carousel.css'
function ImageCarousel() {
    return (
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src={applice1}/>
        </div>
        <div>
          <img src={applice2}/>
        </div>
        <div>
          <img src={applice3}/>
        </div>
        <div>
            <img src={applice4}/>
        </div>
      </Carousel>
    );
  }

export default ImageCarousel;