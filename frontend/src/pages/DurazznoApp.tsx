import React from 'react';

const DurazznoApp: React.FC = () => (
  <div className="flex flex-col">

    {/* Durazzno App Page Title Section */}
    <section className="relative text-black py-16 px-4 pt-24 bg-cover bg-center"
             style={{ backgroundImage: 'url("/backgrounds/CyanBackground.png")' }}>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1">
          <img src="/DurazznoApp/Durazzno.png" className="w-64 md:w-80" />
        </div>
        <div className="md:w-1/2 px-4 order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            DURAZZNO APP 
          </h2>
          <p className="font-semibold text-lg">
            Durazzno App offers the most useful tools, all packed in one place!
            Just a bit of Python here and a couple of libraries there, and you're set.
          </p>
        </div>
      </div>
    </section>

    {/* Durazzno Terminal Section */}
    <section className="relative text-black py-16 px-4 bg-cover bg-center"
             style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.png")' }}>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0 order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            DURAZZNO APP TERMINAL
          </h2>
          <p className="text-lg font-medium">
            Repair, tweak and download legacy plugins straight from the app.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center order-2">
          <img src="/DurazznoApp/terminal.png" className="w-64 md:w-80" />
        </div>
      </div>
    </section>

    {/* Crystal Disk Section */}
    <section className="relative text-black py-16 px-4 bg-cover bg-center"
             style={{ backgroundImage: 'url("/backgrounds/YellowBackground.png")' }}>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1">
          <img src="/DurazznoApp/cdisk.png" className="w-64 md:w-80" />
        </div>
        <div className="md:w-1/2 px-4 order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            CRYSTAL DISK INFO & MARK
          </h2>
          <p className="text-lg font-medium">
            Built‑in Crystal Disk utilities help you monitor and benchmark your drives—no extra installs needed.
          </p>
        </div>
      </div>
    </section>

    {/* Durazzno App Store Section */}
    <section className="relative text-black py-16 px-4 bg-cover bg-center"
             style={{ backgroundImage: 'url("/backgrounds/GreenBackground.png")' }}>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0 order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            DURAZZNO APP STORE
          </h2>
          <p className="text-lg font-medium">
            Browse and install extra Python plugins or standalone apps—right from Durazzno’s store.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center order-2">
          <img src="/DurazznoApp/appstore.png" className="w-64 md:w-80" />
        </div>
      </div>
    </section>

    {/* Download Section */}
    <section className="relative text-black py-20 px-4 bg-cover bg-center"
             style={{ backgroundImage: 'url("/backgrounds/YellowBackground.png")' }}>
      <div className="absolute inset-0 bg-white opacity-10 z-0" />
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1">
          <img src="/DurazznoApp/Durazzno.png" className="w-64 md:w-80" />
        </div>
        <div className="md:w-1/2 px-4 space-y-8 order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            DOWNLOAD DURAZZNO APP
          </h2>
          <button className="itzgalaxy-action-buttons">
            <span>Download Durazzno App</span>
          </button>
        </div>
      </div>
    </section>
    <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
        <p>
          &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
        </p>
      </footer>
  </div>
);

export default DurazznoApp;
