import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 shadow-sm backdrop-blur-sm z-50 navbar-color" style={{ fontFamily: 'Oswald-Bold' }}>
      <div className="mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo and Label */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="logo w-10 h-10 flex-shrink-0">
            <img src="ItzGalaxy_CLR.png" alt="Logo"></img>
          </Link>
          <span className="text-gray-300"><strong>ItzGalaxy.com</strong></span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Home</strong>
          </Link>
          <Link to="/resources" className="text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Resources</strong>
          </Link>
          <a href="https://onlinestatus.itzgalaxy.com" className="text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Server Status</strong>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-blue-500">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
        <div className="flex flex-col space-y-3 text-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="navbar-link text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Home</strong>
          </Link>
          <Link to="/resources" onClick={() => setIsMenuOpen(false)} className="navbar-link text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Resources</strong>
          </Link>
          <a href="https://onlinestatus.itzgalaxy.com" className="navbar-link text-gray-300 hover:text-blue-500 transition-colors">
            <strong>Server Status</strong>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
