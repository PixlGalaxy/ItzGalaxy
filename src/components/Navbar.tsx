import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="https://onlinestatus.itzgalaxy.com" className="text-white">Online Status</Link></li>
        <li><Link to="/resources" className="text-white">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
