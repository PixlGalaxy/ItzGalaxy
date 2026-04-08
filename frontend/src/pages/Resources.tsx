import React from 'react';

const resources = [
  {
    href: '/pixl',
    img: '/Pixl/Cyan.webp',
    alt: 'PIXL Discord Bot',
    label: 'PIXL Discord\nManagement Bot',
    badge: 'Discord',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    accentBar: 'from-indigo-400 to-cyan-400',
    cardBg: 'bg-gradient-to-b from-indigo-50 to-cyan-50',
    external: false,
  },
  {
    href: '/itzgalaxymcnetwork',
    img: '/Minecraft/GrassBlock.webp',
    alt: 'Minecraft Network',
    label: 'ItzGalaxy\nMinecraft Network',
    badge: 'Game Server',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    accentBar: 'from-emerald-400 to-green-500',
    cardBg: 'bg-gradient-to-b from-emerald-50 to-green-50',
    external: false,
  },
  {
    href: '/durazznoapp',
    img: '/DurazznoApp/Durazzno.webp',
    alt: 'Durazzno App',
    label: 'Durazzno App\nfor Windows',
    badge: 'Windows App',
    badgeColor: 'bg-amber-100 text-amber-700',
    accentBar: 'from-amber-400 to-orange-400',
    cardBg: 'bg-gradient-to-b from-amber-50 to-orange-50',
    external: false,
  },
  {
    href: 'https://webincloud.itzgalaxy.com/public/folder/vrdm294cnu6g6yw1zwny3q/Minecraft%20Worlds%20Downloads',
    img: '/Minecraft/DiamondOreBlock.webp',
    alt: 'Minecraft World Files',
    label: 'Minecraft\nWorld Map Files',
    badge: 'Webin Cloud Server',
    badgeColor: 'bg-sky-100 text-sky-700',
    accentBar: 'from-sky-400 to-blue-500',
    cardBg: 'bg-gradient-to-b from-sky-50 to-blue-50',
    external: true,
  },
];

const delays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4'];

const ResourcesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Resources</title>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00ffae] opacity-[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center anim-fade-up">
          <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Everything in one place
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-3">RESOURCES</h1>
          <div className="section-title-bar w-40 mx-auto" />
          <p className="text-gray-400 text-base max-w-md mx-auto mt-5">
            All ItzGalaxy tools, downloads, and services — organized for you.
          </p>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <main className="relative bg-gradient-to-br from-slate-50 to-gray-100 text-black -mt-20 pt-40 pb-20 px-6 flex-1 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, idx) => (
              <a
                key={idx}
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
                className={`${r.cardBg} rounded-2xl overflow-hidden card-lift anim-fade-up ${delays[idx]} flex flex-col no-underline`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${r.accentBar}`} />
                <div className="flex flex-col items-center p-6 gap-3 flex-1">
                  <img
                    src={r.img}
                    alt={r.alt}
                    className="w-28 h-28 md:w-32 md:h-32 object-contain transition-transform duration-400 hover:scale-105"
                  />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.badgeColor}`}>
                    {r.badge}
                  </span>
                  <p className="font-bold text-sm text-center whitespace-pre-line leading-snug text-gray-800">
                    {r.label}
                  </p>
                  {r.external && (
                    <span className="text-xs text-gray-400 mt-auto">↗ External link</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#0c0a1a] border-t border-white/10 text-gray-400 px-6 py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResourcesPage;
