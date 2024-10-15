import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h1 className="animate-fade">About <span className="highlight-text">Bootstrap Rentals</span></h1>
        <p>Your trusted partner in finding the perfect rental property</p>
      </div>
      <div className="about-section animate-slide-up">
        <h2>Our Mission</h2>
        <p>
          At <span className="highlight-text">Bootstrap Rentals</span>, we strive to make your rental experience as smooth and hassle-free as possible. Whether you're looking for a cozy apartment or a spacious home, we are committed to helping you find your dream rental property.
        </p>
      </div>
      <div className="about-section animate-slide-up">
        <h2>Our Story</h2>
        <p>
          What started as a small venture in Chennai has now grown into a leading property rental platform. Our goal from the beginning was to simplify the rental process for both property owners and tenants, offering a modern solution to age-old problems. Today, we connect hundreds of satisfied clients with homes they love.
        </p>
      </div>
      <div className="about-section animate-slide-up">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of properties to choose from</li>
          <li>Dedicated customer service</li>
          <li>Easy and secure rental process</li>
          <li>Expert property management team</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
