import React from 'react';

const bots = [
  {
    name: 'PIXL Cyan',
    image: '/Pixl/Cyan.webp',
    accent: 'from-cyan-400 to-teal-400',
    textAccent: 'text-cyan-600',
    bgCard: 'bg-gradient-to-b from-cyan-50 to-teal-50',
    invite: 'https://discord.com/oauth2/authorize?client_id=881730763907792907&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Red',
    image: '/Pixl/Red.webp',
    accent: 'from-red-400 to-rose-500',
    textAccent: 'text-red-600',
    bgCard: 'bg-gradient-to-b from-red-50 to-rose-50',
    invite: 'https://discord.com/oauth2/authorize?client_id=889492220519010325&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Purple',
    image: '/Pixl/Purple.webp',
    accent: 'from-violet-400 to-purple-500',
    textAccent: 'text-violet-600',
    bgCard: 'bg-gradient-to-b from-violet-50 to-purple-50',
    invite: 'https://discord.com/oauth2/authorize?client_id=913215822867099710&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL Black',
    image: '/Pixl/Black.webp',
    accent: 'from-gray-700 to-gray-900',
    textAccent: 'text-gray-700',
    bgCard: 'bg-gradient-to-b from-gray-100 to-gray-200',
    invite: 'https://discord.com/oauth2/authorize?client_id=913218158482063390&permissions=240555248960&scope=bot',
  },
];

const delays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4'];

const Pixl: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - PIXL</title>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500 opacity-[0.07] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400 opacity-[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center anim-fade-up">
          <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            ItzGalaxy Product
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-3">
            PIXL BOT
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl font-light mb-4">
            Discord Music &amp; Management
          </p>
          <div className="section-title-bar w-40 mx-auto" />
          <p className="text-gray-400 text-base max-w-xl mx-auto mt-5">
            Powerful moderation, music playback from Spotify &amp; YouTube — four variants, one goal.
          </p>
        </div>
      </section>

      {/* ── Bots Grid ────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-50 to-slate-100 text-black py-20 px-6 overflow-hidden flex-1">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-12 anim-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Choose Your PIXL</h2>
            <p className="text-gray-500 mt-2 text-sm">Same bot, four different flavors — pick the one that matches your server.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bots.map((bot, idx) => (
              <div
                key={idx}
                className={`${bot.bgCard} rounded-2xl overflow-hidden card-lift anim-fade-up ${delays[idx]} flex flex-col`}
              >
                {/* Color accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${bot.accent}`} />
                <div className="flex flex-col items-center p-6 flex-1">
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-36 h-36 object-contain transition-transform duration-400 hover:scale-105"
                  />
                  <p className={`text-lg font-bold mt-4 mb-1 ${bot.textAccent}`}>{bot.name}</p>
                  <p className="text-xs text-gray-500 mb-5">Management &amp; Music</p>
                  <a
                    href={bot.invite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="itzgalaxy-action-buttons w-full"
                  >
                    <span>ADD PIXL</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0c0a1a] border-t border-white/10 text-gray-400 px-6 py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Pixl;
