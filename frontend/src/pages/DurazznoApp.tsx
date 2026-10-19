import React from 'react';

const INSTALLER_URL =
  'https://webincloud.itzgalaxy.com/backend/api/public/durazznoapp/DurazznoApp/Main/DurazznoApp%20Online%20Installer.exe/download?inline=1&path=';

interface Section {
  dark: boolean;
  imgSrc: string;
  imgAlt: string;
  imgLeft: boolean;
  /** A screenshot of the app (wide, framed) instead of an icon. */
  screenshot: boolean;
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
    screenshot: false,
    badge: 'All-in-one',
    badgeColor: 'text-amber-600 bg-amber-100',
    title: 'DURAZZNO APP',
    accentBar: 'from-amber-400 to-orange-400',
    desc: "The PC tools you actually use, in one small app. It sits in the tray, starts with Windows and keeps itself up to date. Nothing else to install.",
  },
  {
    dark: true,
    imgSrc: '/DurazznoApp/dashboard.webp',
    imgAlt: 'Durazzno App dashboard',
    imgLeft: false,
    screenshot: true,
    badge: 'Monitoring & disks',
    badgeColor: 'text-sky-400 bg-sky-400/10',
    title: 'DASHBOARD & DISK TOOLS',
    accentBar: 'from-sky-400 to-blue-500',
    desc: "CPU, GPU, memory, network and battery, live. DiskInfo checks your drives' health and warns you when one starts failing, DiskMark tests their speed and DiskMap shows what's eating your space.",
  },
  {
    dark: false,
    imgSrc: '/DurazznoApp/driverhub.webp',
    imgAlt: 'DriverHub',
    imgLeft: true,
    screenshot: true,
    badge: 'Drivers',
    badgeColor: 'text-cyan-700 bg-cyan-100',
    title: 'DRIVERHUB',
    accentBar: 'from-cyan-400 to-teal-500',
    desc: 'Finds newer drivers from Windows Update, Microsoft, Intel, NVIDIA, AMD and your PC maker, and installs them one by one. If a driver breaks a device, it goes back to the old one on its own.',
  },
  {
    dark: true,
    imgSrc: '/DurazznoApp/wintweaks.webp',
    imgAlt: 'WinTweaks',
    imgLeft: false,
    screenshot: true,
    badge: 'Tweaks',
    badgeColor: 'text-lime-400 bg-lime-400/10',
    title: 'WINTWEAKS & STARTUP',
    accentBar: 'from-lime-400 to-green-500',
    desc: 'Turn off ads, telemetry, mouse acceleration and Bing in Start with a switch, and turn any of it back on just as easily. Startup shows everything that runs when Windows boots, and PowerCuts schedules a shutdown.',
  },
  {
    dark: false,
    imgSrc: '/DurazznoApp/apps.webp',
    imgAlt: 'Durazzno Apps',
    imgLeft: true,
    screenshot: true,
    badge: 'Apps',
    badgeColor: 'text-pink-600 bg-pink-100',
    title: 'DURAZZNO APPS',
    accentBar: 'from-pink-400 to-rose-500',
    desc: 'Extra apps like DeckHub and Power Link Sound, one click away. Every download is checked before it runs, and updates come from the same place.',
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
          All your PC tools in one app that updates itself. Made for Windows 10 and 11.
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

        <div
          className={`relative z-10 container mx-auto ${
            s.screenshot ? 'max-w-6xl' : 'max-w-5xl'
          } flex flex-col md:flex-row items-center gap-12`}
        >
          {/* Image */}
          <div
            className={`${s.screenshot ? 'md:w-7/12' : 'md:w-5/12'} flex justify-center ${
              s.imgLeft ? 'order-1 anim-slide-left' : 'order-2 anim-slide-right'
            } anim-delay-1`}
          >
            <img
              src={s.imgSrc}
              alt={s.imgAlt}
              loading={idx === 0 ? undefined : 'lazy'}
              className={
                s.screenshot
                  ? 'w-full rounded-xl shadow-2xl ring-1 ring-black/10 transition-transform duration-500 hover:scale-[1.02]'
                  : 'w-56 md:w-72 drop-shadow-xl transition-transform duration-500 hover:scale-105 rounded-xl'
              }
            />
          </div>

          {/* Text */}
          <div
            className={`${s.screenshot ? 'md:w-5/12' : 'md:w-7/12'} ${
              s.imgLeft ? 'order-2 anim-slide-right' : 'order-1 anim-slide-left'
            }`}
          >
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
            The installer grabs the latest version, checks it and sets everything up in about a minute. No admin
            rights needed.
          </p>
          <a href={INSTALLER_URL} className="itzgalaxy-action-buttons inline-block">
            <span>Download Durazzno App</span>
          </a>
          <p className="text-gray-500 text-sm mt-4">Windows 10 and 11 · 64-bit</p>
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
