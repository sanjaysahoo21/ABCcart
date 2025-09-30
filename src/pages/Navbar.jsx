import React from "react";
import './Navbar.css';
import '../index.css'

function Navbar() {

    return (
        <>
            <div className="navbar">
                <div className="nav-title">
                    sanju
                </div>
                <div className="nav-search-bar">
                    <input className="search-bar-input" placeholder="search"/>
                    <div className="search-bar-btn">search</div>
                </div>
                <div className="nav-menu">
                    <div>orders</div>
                    <div>cart</div>
                </div>
            </div>
        </>
    )

}

export default Navbar;