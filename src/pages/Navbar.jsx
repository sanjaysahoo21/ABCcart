import React from "react";
import './Navbar.css';
import '../index.css'
import { Link } from "react-router-dom";

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
                    <Link to="/orders" className="nav-menu-link">
                        <div>orders</div>
                    </Link>
                    <div>cart</div>
                </div>
            </div>
        </>
    )

}

export default Navbar;