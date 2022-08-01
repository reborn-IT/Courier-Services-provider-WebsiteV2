import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../navbar/Navbar.css'


export const Navbar=()=>{

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
  

    return(
        <div>

        <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    {/* Navbar Logo */}
                    <div className="topLeft">
                        <img src='img/Logo2.png' alt='Logo' className='logo'/>
                        <span className='servicename leading-9 mt-4'><div>Sithum Sago</div><div>Delivery</div></span>
                    </div>

                {/* Nav Items */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links-home"
                            onClick={click ? handleClick : null}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links-about"
                            onClick={click ? handleClick : null}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/services"
                            activeClassName="active"
                            className="nav-links-branches"
                            onClick={click ? handleClick : null}
                        >
                           Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/branch"
                            activeClassName="active"
                            className="nav-links-academics"
                            onClick={click ? handleClick : null}
                        >
                            Branches
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links-admission"
                            onClick={click ? handleClick : null}
                        >
                            Contact
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link
                            exact
                            to="/signin"
                            activeClassName="active"
                            className="nav-links-admission"
                            onClick={click ? handleClick : null}
                        >
                            Signin
                        </Link>
                    </li> 
                </ul>

                {/* Toggle Icin */}
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

            </div>
        </nav>
    </ div>
    )
}