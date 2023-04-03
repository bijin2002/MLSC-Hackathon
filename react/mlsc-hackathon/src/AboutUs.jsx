import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="person person-left">
        <img
          src="https://via.placeholder.com/150"
          alt="Person 1"
          className="person-image"
        />
        <h3 className="person-name">Arunav Chandra</h3>
        
      </div>
      <div className="person person-right">
        <img
          src="https://via.placeholder.com/150"
          alt="Person 2"
          className="person-image"
        />
        <h3 className="person-name"></h3>
      </div>
      <div className="person person-left">
        <img
          src="https://via.placeholder.com/150"
          alt="Person 3"
          className="person-image"
        />
        <h3 className="person-name">Person 3</h3>
        
      </div>
      <div className="person person-right">
        <img
          src="https://via.placeholder.com/150"
          alt="Person 4"
          className="person-image"
        />
        <h3 className="person-name">Person 4</h3>
        
      </div>
    </div>
  );
};

export default AboutUs;
