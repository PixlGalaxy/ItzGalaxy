import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-black text-center md:text-left px-4 mt-auto">
        <p>
            &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
        </p>
    </footer>
  );
}

export default Footer;
