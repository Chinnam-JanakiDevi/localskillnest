import React from 'react';
import './Home.css';
import bannerImage from '../assets/banner2.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <img src={bannerImage} alt="Local Skill Connect" className="hero-img" />
        <div className="hero-text">
          <h1>If you have a skill</h1>
          <p>Register in below link with your skill and location</p>
          <a
            href="https://forms.gle/NJcJrHAghvT8ffyz6"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register as a Professional
          </a>
          <h2>App is going to launch very soon.stay tuned..</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;