import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
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
            {/* Any additional HTML or components you want in the footer */}
        </footer>
    );
}

export default Footer;