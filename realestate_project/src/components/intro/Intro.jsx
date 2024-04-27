import React from 'react';
import './Intro.css'; 

const Intro = () => {
  return (
    <div className="container">
      <div className="background-img"></div>

      <h1 className="intro-heading">Discover a place
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
