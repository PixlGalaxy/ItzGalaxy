import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 navbar-color transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_30px_rgba(0,255,174,0.1)] border-b border-[#00ffae]/20"
          : "border-b border-white/5"
      }`}
      style={{ fontFamily: "Oswald-Bold" }}
    >
      <div className="mx-auto px-6 py-2 flex items-center justify-between max-w-7xl">

        {/* Logo + Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="ItzGalaxy_BW.png"
            alt="ItzGalaxy Logo"
            className="w-11 h-11 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 brightness-0 invert"
          />
          <span className="text-white text-sm tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity">
            ItzGalaxy.com
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/resources", label: "Resources" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="nav-link-animated text-gray-300 hover:text-[#00ffae] transition-colors text-sm tracking-wide"
            >
              <strong>{item.label}</strong>
            </Link>
          ))}

          {/* Server Status Badge (Only Desktop) */}
          <a
            href="https://onlinestatus.itzgalaxy.com"
            className="hidden md:block"
            aria-label="ItzGalaxy Server Status"
            title="ItzGalaxy Server Status"
          >
            <iframe
              src="https://onlinestatus.itzgalaxy.com/badge?theme=dark"
              width="220"
              height="28"
              frameBorder="0"
              scrolling="no"
              style={{ colorScheme: "none", border: "0" }}
              title="ItzGalaxy Server Status"
            />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-[#00ffae] transition-colors p-1"
          aria-label="Toggle menu"
        >
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

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMenuOpen ? "active" : ""}`}>
        <div className="flex flex-col gap-1 px-6 border-t border-white/10">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="navbar-link text-gray-300 hover:text-[#00ffae] transition-colors text-sm">
            <strong>Home</strong>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="navbar-link text-gray-300 hover:text-[#00ffae] transition-colors text-sm">
            <strong>About</strong>
          </Link>
          <Link to="/resources" onClick={() => setIsMenuOpen(false)} className="navbar-link text-gray-300 hover:text-[#00ffae] transition-colors text-sm">
            <strong>Resources</strong>
          </Link>
          <a
            href="https://onlinestatus.itzgalaxy.com"
            onClick={() => setIsMenuOpen(false)}
            className="navbar-link text-gray-300 hover:text-[#00ffae] transition-colors text-sm"
          >
            <strong>Server Status</strong>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
