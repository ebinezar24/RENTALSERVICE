import React from "react";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div className="home">
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    <span className="highlight">Houses & Apartments</span><br /> 
                    For Rentals
                  </h1>
                  <h2>Find your dream home here...!!</h2>
                  <ul className='login-btn'>
                    <li>
                      <Link to="/login">
                        <button className="animated-button">Login</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
