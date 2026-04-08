import React from 'react';

const bots = [
  {
    name: 'PIXL',
    image: '/Pixl/Cyan.webp',
    bgFrom: '#ecfeff',
    bgTo: '#a8feea',
    accentFrom: '#22d3ee',
    accentTo: '#2dd4bf',
    textColor: '#0891b2',
    invite: 'https://discord.com/oauth2/authorize?client_id=881730763907792907&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL',
    image: '/Pixl/Red.webp',
    bgFrom: '#fcfcfc',
    bgTo: '#ffd4d7',
    accentFrom: '#f87171',
    accentTo: '#f43f5e',
    textColor: '#dc2626',
    invite: 'https://discord.com/oauth2/authorize?client_id=889492220519010325&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL',
    image: '/Pixl/Purple.webp',
    bgFrom: '#f5f3ff',
    bgTo: '#e8d1ff',
    accentFrom: '#8962fc',
    accentTo: '#a855f7',
    textColor: '#7c3aed',
    invite: 'https://discord.com/oauth2/authorize?client_id=913215822867099710&permissions=240555248960&scope=bot',
  },
  {
    name: 'PIXL',
    image: '/Pixl/Black.webp',
    bgFrom: '#ffffff',
    bgTo: '#c3c3c3',
    accentFrom: '#374151',
    accentTo: '#111827',
    textColor: '#374151',
    invite: 'https://discord.com/oauth2/authorize?client_id=913218158482063390&permissions=240555248960&scope=bot',
  },
];

const delays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4'];

const Pixl: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - PIXL</title>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500 opacity-[0.07] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400 opacity-[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center anim-fade-up">
          <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            ItzGalaxy Discord Bot
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-3">
            PIXL
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
      <section className="relative bg-gradient-to-br from-gray-50 to-slate-100 text-black -mt-20 pt-40 pb-20 px-6 overflow-hidden flex-1">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-12 anim-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Choose Your PIXL</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              All four bots are identical — same features, same commands. Having multiple lets you keep one bot
              connected in a voice channel while another plays music in a different one at the same time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bots.map((bot, idx) => (
              <a
                key={idx}
                href={bot.invite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `linear-gradient(to bottom, ${bot.bgFrom}, ${bot.bgTo})` }}
                className={`rounded-2xl overflow-hidden card-lift anim-fade-up ${delays[idx]} flex flex-col no-underline`}
              >
                <div
                  style={{ background: `linear-gradient(to right, ${bot.accentFrom}, ${bot.accentTo})` }}
                  className="h-1.5 w-full"
                />
                <div className="flex flex-col items-center p-6 gap-3 flex-1">
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-36 h-36 object-contain transition-transform duration-400 hover:scale-105"
                  />
                  <p className="text-lg font-bold" style={{ color: bot.textColor }}>{bot.name}</p>
                  <p className="text-xs text-gray-500">Management &amp; Music</p>
                  <span className="text-xs text-gray-400 mt-auto">↗ Add to Discord</span>
                </div>
              </a>
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
