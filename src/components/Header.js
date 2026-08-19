import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import './Header.css';
import '../App.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo-link">
          <div className="logo-relative">
            Del Valle Digital Designs
          </div>
        </Link>

        {/* Navigation */}
        <Navbar />

      </div>
    </header>
  );
};

export default Header;