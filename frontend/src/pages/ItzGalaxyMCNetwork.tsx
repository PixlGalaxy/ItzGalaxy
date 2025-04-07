import React from 'react';
import * as LucideIcons from 'lucide-react';

const ItzGalaxyMCNetwork: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Home</title>
      <main className="flex-1">

        {/* Dev Page Section */}
        <section
          className="relative text-white py-12 px-4 pt-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/RedBackground.png")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <LucideIcons.AlertTriangle className="w-16 h-16 text-yellow-400" strokeWidth={2} />
            <h2 className="text-2xl md:text-4xl font-bold">This page is still under development.</h2>
          </div>
        </section>
        </main>
        <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
        <p>
          &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
        </p>
      </footer>
      </div>
  );
};

export default ItzGalaxyMCNetwork;