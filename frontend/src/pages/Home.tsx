import React from 'react';
import * as LucideIcons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Dev Page Section */}
      <section
        className="relative text-white py-12 px-4 pt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/backgrounds/RedBackground.png")' }}
      >
        <div className="absolute inset-0 bg-white opacity-10 z-0" />
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center space-y-6">
          <LucideIcons.AlertTriangle className="w-16 h-16 text-yellow-400" strokeWidth={2} />
          <h2 className="text-2xl md:text-4xl font-bold">
            This page is still under development.
          </h2>
          <h1>
            Some pages may not work as expected.
          </h1>
        </div>
      </section>


      {/* ItzGalaxy Title Section */}
      <section
        className="relative text-white py-12 px-4 pt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.png")' }}
      >
        <div className="absolute inset-0 bg-white opacity-10 z-0" />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              A SHIFT TO SOMETHING<br />WITH MORE POTENTIAL!
            </h1>
            <div className="w-2/3 h-1 bg-cyan-400 mt-2" />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="ItzGalaxy_CLR.png"
              alt="ItzGalaxy"
              className="w-64 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* Durazzno App Section */}
      <section
        className="relative text-black py-12 px-4 flex-grow bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/backgrounds/YellowBackground.png")' }}
      >
        <div className="absolute inset-0 bg-white opacity-10 z-0" />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="Durazzno.png"
              alt="Durazzno icon"
              className="w-64 md:w-80"
            />
          </div>
          <div className="md:w-1/2 space-y-4 px-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              BORED? DOWNLOAD DURAZZNO APP<br />
              AND GET A LITTLE OF EVERYTHING!
            </h2>
            <p className="text-base md:text-lg">
              Durazzno App Offers Most Useful Apps But The Thing Is That All Of Them Are
              In A Single App!! The Only Thing You Need Is A Little Of Python Over Here
              And Some Libraries Over There And You Will Be All Set For Everything
              You Will Need.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="/durazznoapp" className="itzgalaxy-action-buttons block text-center">
                <span>Durazzno App Page</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/backgrounds/GreenBackground.png")' }}
      >
        <div className="absolute inset-0 bg-white opacity-10 z-0" />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">
            Looking For Something? <br />
            Check Out The Resources Page.
            </h2>
            <p className="text-base md:text-lg">
            Access everything from Discord bots, Durazzno App, ItzGalaxy Minecraft Network, Minecraft World files and more. 
            All files and links in one place.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="/resources" className="itzgalaxy-action-buttons block text-center">
                <span>ItzGalaxy Resources Page</span>
              </a>
            </div>

          </div>

          <div className="md:w-1/2 flex justify-center">
            <LucideIcons.Server
              className="w-64 md:w-80 h-64 md:h-80 text-black"
              strokeWidth={1.5}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
