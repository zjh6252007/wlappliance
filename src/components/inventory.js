import * as React from 'react';
import appliances from '../assets/appliances1.jpg'
import './inventory.css'
export default function InventoryItem({image, msrp, ourPrice, description}) {
  return (
    <div className="card">
      <div className="applianceimage">
        <img src={image} alt=""></img>
      </div>
      <div className="content">
        <h4>In Stock</h4>
      </div>
    </div>
  );
}