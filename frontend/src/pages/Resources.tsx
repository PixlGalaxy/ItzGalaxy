import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Resources</title>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        
        {/* Header Section */}
        <section
          className="relative text-white py-20 px-4 pt-36 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(\"/backgrounds/PurpleBackground.webp\")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold">RESOURCES</h1>
            <div className="w-1/2 h-1 bg-cyan-400 mt-4 mx-auto" />
          </div>
        </section>

        {/* Resources Grid */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-black py-8 px-6 flex-1"
          style={{ backgroundImage: 'url(\"/backgrounds/GreenBackground.webp\")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* PIXL */}
            <a href="/pixl" className="space-y-4 hover:scale-105 transition-transform duration-300">
              <img
                src="/Pixl/Cyan.webp"
                alt="PIXL"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto"
              />
              <p className="font-bold text-lg">PIXL DISCORD<br />MANAGEMENT BOT</p>
            </a>

            {/* Minecraft Network */}
            <a href="/itzgalaxymcnetwork" className="space-y-4 hover:scale-105 transition-transform duration-300">
              <img
                src="/Minecraft/GrassBlock.webp"
                alt="Minecraft Network"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto"
              />
              <p className="font-bold text-lg">ITZGALAXY<br />MINECRAFT NETWORK</p>
            </a>

            {/* Durazzno App */}
            <a href="/durazznoapp" className="space-y-4 hover:scale-105 transition-transform duration-300">
              <img
                src="/DurazznoApp/Durazzno.webp"
                alt="Durazzno App"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto"
              />
              <p className="font-bold text-lg">DURAZZNO APP<br />FOR WINDOWS</p>
            </a>

            {/* Minecraft World Files */}
            <a
              href="https://webincloud.itzgalaxy.com/public/folder/vrdm294cnu6g6yw1zwny3q/Minecraft%20Worlds%20Downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/Minecraft/DiamondOreBlock.webp"
                alt="World Files"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto"
              />
              <p className="font-bold text-lg">MINECRAFT<br />SERVER WORLD<br />MAP FILES</p>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
        <p>
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
      </div>
  );
};

export default ResourcesPage;
