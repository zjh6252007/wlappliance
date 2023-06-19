import React from 'react';
import './Repair.css';
import { Helmet } from "react-helmet";

function Repair() {
  return (
    <div className='ReapirPage'>
      <Helmet>
        <title>Repair service</title>
        <meta name="Repair Service" content="Our repair service. which contains some pictures of our work, repair time,repair policy" />
      </Helmet>
      <div className ='Content'>
        <h1>Having a Problem with a Home Appliance?</h1>
        <p>Give us a call and we’ll fix your appliance at a very reasonable rate..</p>
        <h2>Call Us Now At 321-522-7466</h2>
      </div>
    </div>
  );
}

export default Repair;