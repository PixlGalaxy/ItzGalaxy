import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-black text-left px-4 py-2 z-50 shadow-md">
      <p>
        &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
