import React from 'react';
import './Hero.css';
import profileImage from '../../assets/imgs/av.jpg';

function HeroSection() {
  return (
    <header className="hero-section container">
      <div id="hero" className="text-center">
        <img 
          src={profileImage} 
          alt="Nada Ahmed" 
          className="profile-image"
        />
        <h1  className="hero-title">Nada Ahmed Mahmoud</h1>
        <p className="hero-subtitle">Full Stack Web Developer | Software Engineer</p>
        
        <div className="social-icons">
          <a href="https://github.com/nadaahmed2001" className="social-icon">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nada-ahmed-12a791233/" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="cvButton">
          <a href="https://drive.google.com/file/d/1dEUppu4U0CiUp09JBpw8Fs7n-04npBcn/view?usp=sharing"
          className="btn btn-primary">View my CV</a>
          </div>
      </div>
    </header>
  );
}

export default HeroSection;