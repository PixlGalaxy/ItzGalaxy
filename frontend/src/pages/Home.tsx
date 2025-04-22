import React from 'react';
import * as LucideIcons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Home</title>
      <main className="flex-1">

        {/* ItzGalaxy Title Section */}
        <section
          className="relative text-white py-12 px-4 pt-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                A SHIFT TO SOMETHING<br />WITH MORE POTENTIAL!
              </h1>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="ItzGalaxy_CLR.webp" alt="ItzGalaxy" className="w-64 md:w-80" />
            </div>
          </div>
        </section>

        {/* Durazzno App Section */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/YellowBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src="/DurazznoApp/Durazzno.webp" alt="Durazzno icon" className="w-64 md:w-80" />
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

        {/* PIXL Bot Section */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/GreenBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 px-4 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Meet PIXL – The Ultimate Discord Bot
              </h2>
              <p className="text-base md:text-lg">
                PIXL is a multifunctional Discord bot that combines powerful moderation tools and a full music system using Spotify and YouTube. 
                Use it to play music, kick, ban, warn and manage your Discord server with ease.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a href="/pixl" className="itzgalaxy-action-buttons block text-center">
                  <span>Explore PIXL Bots</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/Pixl/Pixl.webp" alt="PIXL" className="w-64 md:w-80" />
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/BlueBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 flex justify-center">
              <LucideIcons.Server className="w-64 md:w-80 h-64 md:h-80 text-black" strokeWidth={1.5} />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 px-4 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Looking For Something Else?
              </h2>
              <p className="text-base md:text-lg">
                Access all ItzGalaxy tools in one place: bot links, Minecraft world files, Durazzno App, and more.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a href="/resources" className="itzgalaxy-action-buttons block text-center">
                  <span>ItzGalaxy Resources Page</span>
                </a>
              </div>
            </div>
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

export default Home;
