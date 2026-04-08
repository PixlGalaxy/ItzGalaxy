import React from 'react';
import * as LucideIcons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Home</title>
      <main className="flex-1">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
          {/* Dot pattern overlay */}
          <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00ffae] opacity-[0.04] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500 opacity-[0.06] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 anim-slide-left">
              <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Welcome to ItzGalaxy
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                A SHIFT TO SOMETHING<br />
                <span className="text-[#00ffae]">WITH MORE POTENTIAL!</span>
              </h1>
              <div className="section-title-bar w-40 mb-5" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Tools, bots, and experiences crafted for gamers and creators.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center anim-slide-right">
              <img
                src="ItzGalaxy_CLR.webp"
                alt="ItzGalaxy"
                className="w-64 md:w-80 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ── Durazzno App ────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-black py-20 px-6 overflow-hidden">
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-yellow-300 opacity-20 blur-3xl pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-5/12 flex justify-center anim-slide-left">
              <img
                src="/DurazznoApp/Durazzno.webp"
                alt="Durazzno App"
                className="w-56 md:w-72 drop-shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-7/12 anim-slide-right anim-delay-1">
              <p className="text-amber-600 text-sm font-semibold tracking-[0.15em] uppercase mb-2">Desktop Application</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
                BORED? DOWNLOAD<br />DURAZZNO APP!
              </h2>
              <div className="section-title-bar w-32 mb-5" />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Durazzno App offers the most useful tools — all packed into a single app.
                Just a bit of Python here and some libraries there, and you're set for everything you'll need.
              </p>
              <a href="/durazznoapp" className="itzgalaxy-action-buttons inline-block">
                <span>Durazzno App Page</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── PIXL Bot ────────────────────────────────────────────────── */}
        <section className="relative bg-hero-dark text-white py-20 px-6 overflow-hidden">
          <div className="dot-pattern absolute inset-0 opacity-40 pointer-events-none" />
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-emerald-500 opacity-[0.05] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400 opacity-[0.05] blur-3xl pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-7/12 anim-slide-left">
              <p className="text-[#00ffae] text-sm font-semibold tracking-[0.15em] uppercase mb-2">Discord Bot</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
                Meet PIXL –<br />
                <span className="text-[#00ffae]">The Ultimate Bot</span>
              </h2>
              <div className="section-title-bar w-32 mb-5" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                PIXL is a multifunctional Discord bot combining powerful moderation tools with a full
                music system via Spotify and YouTube. Kick, ban, warn, play music — all in one.
              </p>
              <a href="/pixl" className="itzgalaxy-action-buttons inline-block">
                <span>Explore PIXL Bots</span>
              </a>
            </div>
            <div className="md:w-5/12 flex justify-center anim-slide-right anim-delay-1">
              <img
                src="/Pixl/Pixl.webp"
                alt="PIXL"
                className="w-56 md:w-72 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ── Resources ───────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 text-black py-20 px-6 overflow-hidden">
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-300 opacity-20 blur-3xl pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-5/12 flex justify-center anim-slide-left">
              <div className="w-56 md:w-72 h-56 md:h-72 flex items-center justify-center">
                <LucideIcons.Server
                  className="w-full h-full text-indigo-600 opacity-60 transition-transform duration-500 hover:scale-105"
                  strokeWidth={0.8}
                />
              </div>
            </div>
            <div className="md:w-7/12 anim-slide-right anim-delay-1">
              <p className="text-indigo-500 text-sm font-semibold tracking-[0.15em] uppercase mb-2">All in one place</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
                Looking For<br />Something Else?
              </h2>
              <div className="section-title-bar w-32 mb-5" />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Access all ItzGalaxy tools in one place: bot links, Minecraft world files,
                Durazzno App downloads, and more.
              </p>
              <a href="/resources" className="itzgalaxy-action-buttons inline-block">
                <span>ItzGalaxy Resources Page</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c0a1a] border-t border-white/10 text-gray-400 px-6 py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
