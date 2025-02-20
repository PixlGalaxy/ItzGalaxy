import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="ttext-black text-center md:text-left px-4">
        <p>
            &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
        </p>
    </footer>
  );
}

export default Footer;
