import React from 'react';
import './Footer.css'
import Warrenty from '../assets/footer/Warrenty.png'
import GE from '../assets/General_Electric_logo.svg.png'
import Samsung from '../assets/Samsung_Logo.svg.png'
import LG from '../assets/LG_logo.png'


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="our-service">
                <img src={Warrenty} alt="Warrenty sign"></img>
            </div>
            <div className="warrenty">
                <h2>We offer a free one-year warranty guarantee on all of our products.</h2>
            </div>
            <div className="footer-content">
                <div className="our-brand">
                    <h1>Our brand</h1>
                    <div className='brand-list'>
                        <img src={GE} alt="General Electric logo" />
                        <img src={Samsung} alt="Samsung logo" />
                        <img src={LG} alt="LG logo" />
                    </div>
                </div>
                <div className="contact-us">
                    <h1>Contact Us</h1>
                    <div className="store-info">
                        <p>Wonderful Life Appliances</p>
                        <p>3388 W New Haven Ave</p>
                        <p>Melbourne FL 32904</p>
                        <p>(321)-522-7466</p>
                    </div>
                </div>
                <div className="business-time">
                    <h1>Business Time</h1>
                    <p>Mon:	10:00 AM – 6:00 PM</p>
                    <p>Tue:	10:00 AM – 6:00 PM</p>
                    <p>Wed:	10:00 AM – 6:00 PM</p>
                    <p>Thu:	10:00 AM – 6:00 PM</p>
                    <p>Fri:	10:00 AM – 6:00 PM</p>
                    <p>Sat:	10:00 AM – 6:00 PM</p>
                    <p>Sun:	10:00 AM – 6:00 PM</p>
                </div>
            </div>
            <div className="copyright">
                &copy;{year}   WL APPLIANCES
            </div>
        </footer>
    );
}
export default Footer;