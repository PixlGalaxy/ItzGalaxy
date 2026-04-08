import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const features = [
  {
    icon: <LucideIcons.TreePine className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    iconBg: 'bg-emerald-100',
    accentBar: 'from-emerald-400 to-green-500',
    title: 'Survival Worlds',
    desc: 'Explore rich vanilla survival worlds with a friendly community and zero pay-to-win.',
  },
  {
    icon: <LucideIcons.Swords className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    iconBg: 'bg-red-100',
    accentBar: 'from-red-400 to-rose-500',
    title: 'UHC & Special Events',
    desc: 'Participate in unique server events and intense Ultra Hardcore matches. Compete, survive, win!',
  },
  {
    icon: <LucideIcons.Star className="w-8 h-8 text-violet-600" strokeWidth={1.5} />,
    iconBg: 'bg-violet-100',
    accentBar: 'from-violet-400 to-purple-500',
    title: 'MiniGames & Fun',
    desc: (
      <>
        Take a break from survival with minigames and community challenges.{' '}
        <span className="font-semibold text-violet-600">(Coming Soon)</span>
      </>
    ),
  },
];

const ItzGalaxyMCNetwork: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mc.itzgalaxy.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Minecraft Network</title>
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
          <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-400 opacity-[0.05] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-lime-400 opacity-[0.04] blur-3xl pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-4xl text-center anim-fade-up">
            <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              ItzGalaxy Game Server
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              ItzGalaxy<br />
              <span className="text-[#00ffae]">Minecraft Network</span>
            </h1>
            <div className="section-title-bar w-40 mx-auto mb-5" />
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
              <LucideIcons.CheckCircle className="w-4 h-4 text-[#00ffae]" />
              Supported Java Versions: <strong className="text-white">1.20.1 – 1.21.5</strong>
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 text-black py-20 px-6 overflow-hidden">
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-5xl">
            <div className="text-center mb-12 anim-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Awaits You</h2>
              <p className="text-gray-500 text-sm mt-2">A complete survival experience for every kind of player.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden bg-white shadow-sm card-lift anim-fade-up anim-delay-${i + 1} flex flex-col`}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${f.accentBar}`} />
                  <div className="p-6 flex flex-col gap-3">
                    <div className={`w-14 h-14 rounded-xl ${f.iconBg} flex items-center justify-center`}>
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Copy IP ──────────────────────────────────────────────────── */}
        <section className="relative bg-hero-dark text-white py-20 px-6 overflow-hidden">
          <div className="dot-pattern absolute inset-0 opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] rounded-full bg-[#00ffae] opacity-[0.04] blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-2xl text-center anim-fade-up">
            <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Ready to play?
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
              Join the Server
            </h2>
            <div className="section-title-bar w-32 mx-auto mb-6" />
            <p className="text-gray-400 mb-8">Copy the IP address below and connect in-game.</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="flex items-center bg-white/10 border border-[#00ffae]/30 ip-box-animated rounded-xl px-6 py-3 backdrop-blur-sm">
                <LucideIcons.Server className="w-5 h-5 text-[#00ffae] mr-3 flex-shrink-0" />
                <span className="text-xl font-mono font-bold tracking-wider">mc.itzgalaxy.com</span>
              </div>
              <button
                onClick={handleCopy}
                className={`transition-all duration-200 border rounded-xl p-3 backdrop-blur-sm active:scale-95 ${
                  copied
                    ? 'bg-[#00ffae]/20 border-[#00ffae]/50 text-[#00ffae]'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                title="Copy IP"
              >
                {copied ? (
                  <LucideIcons.Check className="w-6 h-6" />
                ) : (
                  <LucideIcons.ClipboardCopy className="w-6 h-6" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-[#00ffae] text-sm font-semibold mt-3 anim-fade-up">
                ✓ Copied to clipboard!
              </p>
            )}
          </div>
        </section>

        {/* ── Help ─────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 text-black py-16 px-6 overflow-hidden">
          <div className="grid-pattern absolute inset-0 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-2xl text-center anim-fade-up">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
              <LucideIcons.Info className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Help?</h2>
            <p className="text-gray-700 text-base md:text-lg">
              Visit our{' '}
              <a href="/resources" className="font-semibold text-blue-600 underline hover:text-blue-800 transition-colors">
                Resources Page
              </a>{' '}
              or contact us through Discord!
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0c0a1a] border-t border-white/10 text-gray-400 px-6 py-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ItzGalaxyMCNetwork;
