import React from 'react';
import './UnderDevelopment.css'; // Import your CSS file for styling
import { Logo } from "../../assets/index.js";

const UnderDevelopment = () => {
  return (
    <div className="under-development-container">
      <div className="logo-header">
        {/* Logo of the company */}
        <img src={Logo} alt="Company Logo" />
      </div>
      <div className="youtube-video">
        {/* Embedded YouTube video */}
              <iframe width="100%"
                  src="https://www.youtube.com/embed/gMNl5lgj99w" title="GKS Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="content">
        <h1 className="heading">Our website is under development and shall be live shortly. 
</h1>
        <p className="description">
          Please reach out to us via the below mentioned means:
        </p>
      </div>
      <div className="footer">
        <div className="contact-details">
          {/* Phone number with phone icon */}
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>93196-63620</span>
          </div>
          {/* Email address with mail icon */}
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>info@gksproject.com</span>
          </div>
          {/* Location with location icon */}
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>31/231/1-2, Shamshabad Road, Maruti City Turn, Kahrai Mode, Near TV Tower, Taj Ganj Zone, Agra- 282001</span>
          </div>
        </div>
        <div className="social-media">
          {/* Social media icons with links */}
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        {/* Download Company Profile button */}
              <button className='downloadBtn'>Download Company Profile</button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
