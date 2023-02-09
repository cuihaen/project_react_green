import React  from 'react';
import '../css/GalleryContent.css';

import visual04 from '../img/visual04.jpg';


function Gallery () {
    return (
            <>
            <div className="sub_visual">
                <img src={visual04} alt="visualImg" />
                <span>GALLERY</span>
            </div>
                <div className="contentInner gallery">
                    <div className="innerBox">
                        <div className="col-md-12 order-md-2">
                            <h2 className="featurette-heading fw-bold lh-1">GALLERY</h2>
                        </div>
                    </div>
                </div>
                <div className="contentInner2 gallery">
                    <div className="innerBox">
                        <ul>
                            <li>
                                <img src="./img/img1.jpg" alt="Little Garden img1"/>
                            </li>
                            <li>
                                <img src="./img/img2.jpg" alt="Little Garden img2"/>
                            </li>
                            <li>
                                <img src="./img/img3.jpg" alt="Little Garden img3"/>
                            </li>
                            <li>
                                <img src="./img/img4.jpg" alt="Little Garden img4"/>
                            </li>
                            <li>
                                <img src="./img/img5.jpg" alt="Little Garden img5"/>
                            </li>
                            <li>
                                <img src="./img/img6.jpg" alt="Little Garden img6"/>
                            </li>
                            <li>
                                <img src="./img/img7.jpg" alt="Little Garden img7"/>
                            </li>
                            <li>
                                <img src="./img/img8.jpg" alt="Little Garden img8"/>
                            </li>
                            <li>
                                <img src="./img/sunshine.jpg" alt="Little Garden img9"/>
                            </li>
                            <li>
                                <img src="./img/watering.jpg" alt="Little Garden img10"/>
                            </li>
                            <li>
                                <img src="./img/home_garden.jpg" alt="Little Garden img11"/>
                            </li>
                            <li>
                                <img src="./img/backImg.jpg" alt="Little Garden img12"/>
                            </li>
                        </ul>
                    </div> 
                </div> 
                
            </>
    );
  }

  export default Gallery;