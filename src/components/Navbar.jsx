import React from "react"
import logo from "/assets/globe-logo.svg"

function Navbar() {
    return ( 
    <nav>
        <img src={logo} className="logo-image"/>
        <p className="logo-text">my travel journal.</p>
    </nav>
    )
}

export default Navbar