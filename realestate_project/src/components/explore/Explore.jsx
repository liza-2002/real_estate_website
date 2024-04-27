import React from "react";
import './Explore.css';
import Slide1 from '../../assets/home/slide1.jpg';
import Slide2 from '../../assets/home/slide2.jpg';
import Slide3 from '../../assets/home/slide3.jpg';
import back1 from '../../assets/home/back1.jpg';
import back2 from '../../assets/home/back2.jpg';
import back3 from '../../assets/home/back3.jpeg';

const Explore = () => {
  return (
    <div className="container">
      <h1 className="heading">Explore homes on Urban Nest</h1>

      <p className="para">
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident<br /> reviews and local insights to find what is right for
        you.
      </p>
      <div className="inside-container">
        <div className="card card1">
          <div className="background-image" style={{ backgroundImage: `url(${Slide2})` }}></div>
          <h1 className="sub-heading">Bubaneswar</h1>
          <div className="btn">
            <button className="card-btn">View Homes</button>
            <div className="arrow-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${Slide1})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${Slide3})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${Slide2})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${back1})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="card card1">
          <div className="background-image" style={{ backgroundImage: `url(${Slide3})` }}></div>
          <h1 className="sub-heading">Bubaneswar</h1>
          <div className="btn">
            <button className="card-btn">View Homes</button>
            <div className="arrow-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${back3})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="background-image" style={{ backgroundImage: `url(${back2})` }}></div>
            <h1 className="sub-heading">Bubaneswar</h1>
            <div className="btn">
              <button className="card-btn">View Homes</button>
              <div className="arrow-icon">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Explore;
