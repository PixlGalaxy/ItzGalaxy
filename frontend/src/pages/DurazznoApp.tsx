import React from 'react';

interface Section {
  dark: boolean;
  imgSrc: string;
  imgAlt: string;
  imgLeft: boolean;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  accentBar: string;
}

const sections: Section[] = [
  {
    dark: false,
    imgSrc: '/DurazznoApp/Durazzno.webp',
    imgAlt: 'Durazzno App icon',
    imgLeft: true,
    badge: 'All-in-one',
    badgeColor: 'text-amber-600 bg-amber-100',
    title: 'DURAZZNO APP',
    accentBar: 'from-amber-400 to-orange-400',
    desc: "Durazzno App offers the most useful tools — all packed in one place! Just a bit of Python here and a couple of libraries there, and you're set.",
  },
  {
    dark: true,
    imgSrc: '/DurazznoApp/terminal.webp',
    imgAlt: 'Durazzno Terminal',
    imgLeft: false,
    badge: 'Built-in tool',
    badgeColor: 'text-[#00ffae] bg-[#00ffae]/10',
    title: 'DURAZZNO APP TERMINAL',
    accentBar: 'from-teal-400 to-emerald-500',
    desc: 'Repair, tweak, and download legacy plugins straight from the app with a fully integrated terminal.',
  },
  {
    dark: false,
    imgSrc: '/DurazznoApp/cdisk.webp',
    imgAlt: 'Crystal Disk',
    imgLeft: true,
    badge: 'Disk utilities',
    badgeColor: 'text-sky-600 bg-sky-100',
    title: 'CRYSTAL DISK INFO & MARK',
    accentBar: 'from-sky-400 to-blue-500',
    desc: 'Built-in Crystal Disk utilities help you monitor and benchmark your drives — no extra installs needed.',
  },
  {
    dark: true,
    imgSrc: '/DurazznoApp/appstore.webp',
    imgAlt: 'App Store',
    imgLeft: false,
    badge: 'Marketplace',
    badgeColor: 'text-violet-400 bg-violet-400/10',
    title: 'DURAZZNO APP STORE',
    accentBar: 'from-violet-400 to-purple-500',
    desc: "Browse and install extra Python plugins or standalone apps — right from Durazzno's integrated store.",
  },
];

const DurazznoApp: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <title>ItzGalaxy - Durazzno App</title>

    {/* ── Hero ─────────────────────────────────────────────────────── */}
    <section className="relative z-10 bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
      <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-400 opacity-[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-400 opacity-[0.04] blur-3xl pointer-events-none" />
      <div className="relative z-10 text-center anim-fade-up">
        <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          ItzGalaxy Software
        </p>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-3">
          DURAZZNO<br />
          <span className="text-[#00ffae]">APP</span>
        </h1>
        <div className="section-title-bar w-40 mx-auto mb-5" />
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          All the tools you need — Python-powered, Windows-ready, and bundled in one app.
        </p>
      </div>
    </section>

    {/* ── Feature Sections ─────────────────────────────────────────── */}
    {sections.map((s, idx) => (
      <section
        key={idx}
        className={`relative text-${s.dark ? 'white' : 'black'} px-6 overflow-hidden ${
          s.dark ? 'bg-hero-dark' : 'bg-gradient-to-br from-slate-50 to-gray-100'
        } ${idx === 0 ? '-mt-20 pt-40 pb-20' : 'py-20'}`}
      >
        {s.dark ? (
          <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
        ) : (
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
        )}

        <div className="relative z-10 container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className={`md:w-5/12 flex justify-center ${s.imgLeft ? 'order-1 anim-slide-left' : 'order-2 anim-slide-right'} anim-delay-1`}>
            <img
              src={s.imgSrc}
              alt={s.imgAlt}
              className="w-56 md:w-72 drop-shadow-xl transition-transform duration-500 hover:scale-105 rounded-xl"
            />
          </div>

          {/* Text */}
          <div className={`md:w-7/12 ${s.imgLeft ? 'order-2 anim-slide-right' : 'order-1 anim-slide-left'}`}>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badgeColor} mb-3 inline-block`}>
              {s.badge}
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 ${s.dark ? 'text-white' : 'text-gray-900'}`}>
              {s.title}
            </h2>
            <div className={`h-1 w-28 rounded-full bg-gradient-to-r ${s.accentBar} mb-5`} />
            <p className={`text-base md:text-lg leading-relaxed ${s.dark ? 'text-gray-300' : 'text-gray-700'}`}>
              {s.desc}
            </p>
          </div>
        </div>
      </section>
    ))}

    {/* ── Download CTA ─────────────────────────────────────────────── */}
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 text-black py-20 px-6 overflow-hidden">
      <div className="grid-pattern absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-300 opacity-25 blur-3xl pointer-events-none" />
      <div className="relative z-10 container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-5/12 flex justify-center anim-slide-left">
          <img
            src="/DurazznoApp/Durazzno.webp"
            alt="Durazzno App"
            className="w-56 md:w-72 drop-shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-7/12 anim-slide-right">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.15em] uppercase mb-2">Free Download</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">GET DURAZZNO APP</h2>
          <div className="h-1 w-28 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mb-5" />
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Download the full install bundle and get started in minutes. All the tools you need, in one package.
          </p>
          <a
            href="https://webincloud.itzgalaxy.com/public/file/ahqBJGCZJUGaQ_a8NtVOCA/Durazzno%20App%20Install%20Bundle.zip"
            className="itzgalaxy-action-buttons inline-block"
          >
            <span>Download Durazzno App</span>
          </a>
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

export default DurazznoApp;
