import * as React from 'react';
import './inventory.css'
export default function InventoryItem({ image, description, altinfo }) {
  return (
    <div className="card">
      <div className="applianceimage">
        <img src={image} alt={altinfo}></img>
        <p>Model:{description}</p>
      </div>
      <div className="content">
        <h4>In Stock</h4>
      </div>
    </div>
  );
}