import React  from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {BrowserRouter as Router } from 'react-router-dom';
import HeaderArea from './components/HeaderArea.js';
import Content from './components/Content.js';
import FooterArea from './components/FooterArea.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1 className="hidden">Little Garden</h1>
        <HeaderArea />
        <Content />
        <FooterArea/>
      </div>
    </Router>
  );
}

export default App;
