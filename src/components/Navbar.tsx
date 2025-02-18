import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="md:hidden">
            <img src="/favicon-color.ico" alt="Logo" className="w-10 md:hidden" />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-500"
          >
            {isMenuOpen ? (
              // Close icon when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center space-x-6 ${
              isMenuOpen
                ? "absolute top-full left-0 right-0 bg-white py-4 px-6 shadow-lg text-center"
                : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
              >
                Projects
              </Link>
              <Link
                to="/social"
                className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
              >
                Social
              </Link>
              <a
                href="https://github.com/PixlGalaxy"
                className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
              >
                GitHub
              </a>
              {/* Additional Links */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
