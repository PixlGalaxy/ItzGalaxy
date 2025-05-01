import React from 'react';

const bots = [
  {
    name: 'PIXL Cyan',
    image: '/Pixl/Cyan.webp',
    invite: 'https://discord.com/oauth2/authorize?client_id=881730763907792907&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Red',
    image: '/Pixl/Red.webp',
    invite: 'https://discord.com/oauth2/authorize?client_id=889492220519010325&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Purple',
    image: '/Pixl/Purple.webp',
    invite: 'https://discord.com/oauth2/authorize?client_id=913215822867099710&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Black',
    image: '/Pixl/Black.webp',
    invite: 'https://discord.com/oauth2/authorize?client_id=913218158482063390&permissions=240555248960&scope=bot',
  },
];

const Pixl: React.FC = () => {
  return (
    <div className="flex flex-col">

    <title>ItzGalaxy - PIXL</title>

    {/* Header */}
    <section
    className="relative text-white py-20 px-4 pt-24 text-center bg-cover bg-center"
    style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.webp")' }}
    >
    <div className="absolute inset-0 bg-white opacity-10 z-0" />
    <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">PIXL DISCORD<br />MUSIC AND MANAGEMENT BOT</h1>
        <div className="w-2/3 h-1 bg-cyan-400 mt-4 mx-auto" />
    </div>
    </section>

    {/* Bots Grid */}
    <section
    className="relative text-black py-16 px-4 bg-cover bg-center"
    style={{ backgroundImage: 'url("/backgrounds/YellowBackground.webp")' }}
    >
    <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {bots.map((bot, idx) => (
        <div key={idx} className="flex flex-col items-center">
            <img src={bot.image} alt={bot.name} className="w-64 h-64 object-contain shadow-lg" />
            <p className="text-lg font-bold mt-4">{bot.name}</p>
            <a
            href={bot.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="itzgalaxy-action-buttons mt-4"
            >
            <span>ADD PIXL</span>
            </a>
        </div>
        ))}
    </div>
    </section>
    <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
        <p>
            &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
    </footer>
    </div>
  );
};

export default Pixl;
