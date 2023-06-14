import React from 'react';
import image1 from '../assets/delivery.png';
import image2 from '../assets/lowprice.png';
import image3 from '../assets/warranty.png';
import './Service.css'
// import more images as needed

const imageTexts = [
    { image: image1, text: "Delivery and Installation" },
    { image: image2, text: "Low Price" },
    { image: image3, text: "Free Warrenty" },
    // add more objects as needed
  ];

  function ImageRow() {
    return (
      <div className="image-row">
        {imageTexts.map((item, index) => (
          <div key={index} className="image-text">
            <img src={item.image} alt={`item ${index + 1}`} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ImageRow;