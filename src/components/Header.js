import React from "react";
import './Header.css'
import logo from '../assets/wlapplianceslogo.png'
function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Company Logo" className="company-logo"/>
        </header>
    );
}
export default Header;