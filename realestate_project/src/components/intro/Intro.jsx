import React from 'react';
import './Intro.css'; 
import backgroundImage from '../../assets/home/back1.jpg';

const Intro = () => {
  return (
    <div className="container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <h1 className="heading">Discover a place
        <br />you'll love to live</h1>
     
      <div className="intro_button">
        <button className="btn1">Rent</button>
        <button className="btn2">Buy</button>
        <button className="btn3">Sell</button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <div class="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Intro;
