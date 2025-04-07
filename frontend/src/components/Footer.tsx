import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-black text-left px-4 py-4 z-10">
      <p>
        &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
