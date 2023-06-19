import React from "react";
import './Header.css'
import logo from '../assets/wlapplianceslogo.png'
import PhoneIcon from '@mui/icons-material/Phone'
import MyLocation from '@mui/icons-material/MyLocation'
import { FaFacebook } from "react-icons/fa"

function Header() {
    return (
        <header className="header">
            <div className="fb-icon">
                <a href="https://www.facebook.com/profile.php?id=100092187747989" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={80} color="white" />
                </a>
            </div>
            <img src={logo} alt="Company Logo" className="company-logo" />
            <div className="Store-Info">
                <a href="https://www.google.com/maps/search/?api=1&query=3388+W+New+Haven+Ave.+Melbourne+FL.+32904" target="_blank" rel="noopener noreferrer">
                    <p><MyLocation/>3388 W New Haven Ave. Melbourne FL. 32904</p>
                </a>
                <p><PhoneIcon fontSize="large"/>Phone Number: 321-522-7466</p>
            </div>
        </header>
    );
}
export default Header;