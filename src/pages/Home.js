import React from 'react';
import "../Styles/Home.css"
import HomeImage from "../img/HomeImage.jpg"
import HomeImage2 from "../img/HomeImage2.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="background-image background">
        <img src= {HomeImage} alt="Ski Resort" />
        <div className="skill-levels">
          <div className="skill-level">
            <p>Easy</p>
            <p>14</p>
          </div>
          <div className="skill-level">
            <p>Intermediate</p>
            <p>16</p>
          </div>
          <div className="skill-level">
            <p>Advanced</p>
            <p>11</p>
          </div>
        </div>
        <Link to="/mountain">
          <button className="view-mountain-btn">View Trails</button>
        </Link>
      </div>
      <div className="background-image background-image2">
        <img src= {HomeImage2} alt="Ski Resort 2" />
      </div>
      <div className="ski-hill-conditions">
        <h2>Ski Hill Conditions</h2>
        <div className="condition-info">
          <p>Open Trails: 36</p>
          <p>Open Lifts: 6</p>
          <p>Weather: Sunny</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
