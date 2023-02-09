import React from 'react';

import '../App.css';
import logo from '../logo_white.png';

function FooterArea() {
  
  return (
    <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                <img src={logo} alt="logo" width="40px"/>
            </a>
            <span className="mb-3 mb-md-0">&copy; 2022 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
            <li className="ms-3"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="ms-3"><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
            </ul>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossOrigin="anonymous" async></script>
    </>
  );
}

export default FooterArea;