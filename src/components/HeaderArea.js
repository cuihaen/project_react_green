import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import logo from '../logo.png';
function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h1><span className="hidden">Little Garden Logo</span><Link to="/react" className="navbar-brand"><img src={logo} alt="logo" width="50px"/></Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/react/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/react/management" className="nav-link">Management</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/react/plants" className="nav-link">Plants</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/react/gallery" className="nav-link">Gallery</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>    
    );
  }

export default Header;
