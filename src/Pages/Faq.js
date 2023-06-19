import React from 'react';
import Accordion from '../components/Accordion'
import { Helmet } from "react-helmet";
import './Faq.css'

function Faq() {
  return (
    <div className='faqpage'>
      <Helmet>
        <title>FAQ</title>
        <meta name="FAQ page" content="Some general questions about our store. For example the source,the condition and the warrenty policy of our goods." />
      </Helmet>
      <h1 className='type1question'>General Questions</h1>
      <Accordion></Accordion>
    </div>
  );
}

export default Faq;