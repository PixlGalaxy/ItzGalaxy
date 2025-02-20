import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-white text-center md:text-left py-4 px-4">
        <p>
            &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
        </p>
    </footer>
)}

export default Footer;
