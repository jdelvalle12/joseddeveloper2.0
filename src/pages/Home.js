import React from 'react';
import { Link } from 'react-router-dom';
import DigitalBackground from '../images/digital-background-2.jpg';
import '../styles/Home.css';
import '../App.css';

export default function Home() {
  return (
    <main
      className="home-container"      
    >

      {/* Background Image */}
      <img
        src={DigitalBackground}
        alt=""
        className="home-background"
      />

      {/* Dark overlay */}
      <div className="background-overlay"></div>

      {/* Hero Content */}
      <div className="home-content">

        <p className="home-eyebrow">
          FULL STACK WEB DEVELOPER
        </p>

        <h1>
          Building Digital Experiences
          <span> That Make an Impact.</span>
        </h1>

        <p className="home-description">
          I design and develop responsive web applications that combine
          modern technology, intuitive interfaces, and purposeful design.
        </p>

        <div className="home-actions">

          <Link to="/projects" className="home-button">
            View My Projects
          </Link>

          <Link to="/contact" className="home-button secondary">
            Contact Me
          </Link>

        </div>

      </div>

    </main>
  );
}