import React from "react";
import './Header.css'
import logo from '../assets/wlapplianceslogo.png'

function Header() {
    return (
        <header className="header">
            <div className="empty-div"></div>
            <img src={logo} alt="Company Logo" className="company-logo" />
            <div className="Store-Info">
                <a href="https://www.google.com/maps/search/?api=1&query=3388+W+New+Haven+Ave.+Melbourne+FL.+32904" target="_blank" rel="noopener noreferrer">
                    <p>3388 W New Haven Ave. Melbourne FL. 32904</p>
                </a>
                <p>Phone Number: 321-522-7466</p>
            </div>
        </header>
    );
}

export default Header;