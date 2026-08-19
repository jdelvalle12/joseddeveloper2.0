import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="social-icons">
        <a
          href="https://github.com/jdelvalle12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://linkedin.com/in/jose-del-valle-94993a124/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://www.facebook.com/jose.j.delvalle.58"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="icon" />
        </a>

        <a
          href="mailto:jdelvalle88@live.com"
          aria-label="Email"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Del Valle Digital Designs
      </div>

    </footer>
  );
};

export default Footer;