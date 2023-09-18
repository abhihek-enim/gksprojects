import React from 'react';
import './UnderDevelopment.css'; // Import your CSS file for styling
import { Logo } from "../../assets/index.js";

const UnderDevelopment = () => {
  const handleDownload = () => {
    window.location.href = "https://drive.google.com/file/d/12qdZsQ_0-pTBixK4rBq5dfigVxPaPIa4/view?usp=drivesdk";
  }
  return (
    <div className="under-development-container">
      <div className="logo-header">
        {/* Logo of the company */}
        <img src={Logo} alt="Company Logo" />
      </div>
      <p className="aboutGks">
      GKS Projects and Events (a unit of Girdhari Lal Kedar Nath Singhal Tent Contractors, Agra) is one of India`s oldest and most trusted partners for infrastructure setup. O&M and allied services for events of any shape and nature.
      </p>
      <div className="youtube-video">
        {/* Embedded YouTube video */}
              <iframe width="100%"
                  src="https://www.youtube.com/embed/gMNl5lgj99w" title="GKS Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="content">
        <h1 className="heading">This website is under development and <br /> shall be live shortly. 
        </h1>
        <button className='downloadBtn' onClick={handleDownload}>Download Company Profile</button>
        {/* <p className="description">
          Connect:
        </p> */}
      </div>
      <div className="footer">
        <div className="contact-details">
          {/* Phone number with phone icon */}
          <div className="contact-item">
            <i  className="fas fa-phone"></i>
            <span>93196-63620</span>
          </div>
          {/* Email address with mail icon */}
          <div className="contact-item">
            <i  className="fas fa-envelope"></i>
            <span>info@gksproject.com</span>
          </div>
          {/* Location with location icon */}
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span className='address'>31/231/1-2, Shamshabad Road, Maruti City Turn, <br />Kahrai Mode,  Near TV Tower, Taj Ganj Zone, Agra- 282001</span>
          </div>
        </div>
        <div className="social-media">
          {/* Social media icons with links */}
          <a href="https://www.facebook.com/GKSprojectsandevents?mibextid=nW3QTL">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/gksprojectsandevents">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/gksprojectsandevents/">
            <i className="fab fa-linkedin"></i>
          </a>
         
        </div>
        {/* Download Company Profile button */}
              
      </div>
    </div>
  );
};

export default UnderDevelopment;
