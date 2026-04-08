import React from 'react';
import * as LucideIcons from 'lucide-react';

const cards = [
  {
    icon: <LucideIcons.Bot className="w-9 h-9 text-indigo-600" strokeWidth={1.5} />,
    bg: 'bg-indigo-50',
    title: 'Discord Bots',
    desc: 'PIXL bots bring moderation, music playback, and server management to Discord communities of any size.',
  },
  {
    icon: <LucideIcons.AppWindow className="w-9 h-9 text-amber-500" strokeWidth={1.5} />,
    bg: 'bg-amber-50',
    title: 'Desktop Apps',
    desc: 'Durazzno App bundles the most useful utilities into a single Python-powered Windows application.',
  },
  {
    icon: <LucideIcons.Server className="w-9 h-9 text-emerald-600" strokeWidth={1.5} />,
    bg: 'bg-emerald-50',
    title: 'Server Infrastructure',
    desc: 'Self-hosted servers, network infrastructure, and homelab setups — built and maintained from scratch.',
  },
  {
    icon: <LucideIcons.Network className="w-9 h-9 text-sky-600" strokeWidth={1.5} />,
    bg: 'bg-sky-50',
    title: 'Network Engineering',
    desc: 'Designing and managing network infrastructure, routing, and connectivity for self-hosted services.',
  },
  {
    icon: <LucideIcons.Code2 className="w-9 h-9 text-pink-500" strokeWidth={1.5} />,
    bg: 'bg-pink-50',
    title: 'Multi-language Dev',
    desc: 'Projects built across different stacks — Python, TypeScript, and more — tailored to each problem.',
  },
  {
    icon: <LucideIcons.Boxes className="w-9 h-9 text-violet-500" strokeWidth={1.5} />,
    bg: 'bg-violet-50',
    title: 'Project Hub',
    desc: 'ItzGalaxy centralizes every project built and published — a growing repo of tools, apps, and ideas.',
  },
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - About</title>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600 opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#00ffae] opacity-[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center anim-fade-up">
          <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            The story behind it
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-3">ABOUT</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">ItzGalaxy</h2>
          <div className="section-title-bar w-40 mt-5 mx-auto" />
        </div>
      </section>

      {/* ── Who is Galaxy ────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-black -mt-20 pt-40 pb-20 px-6 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-300 opacity-20 blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-5/12 flex justify-center anim-slide-left">
            <img
              src="/Other/GalaxyPC.webp"
              alt="Galaxy"
              className="w-56 md:w-72 drop-shadow-xl transition-transform duration-500 hover:scale-105 rounded-2xl"
            />
          </div>
          <div className="md:w-7/12 anim-slide-right">
            <p className="text-teal-600 text-sm font-semibold tracking-[0.15em] uppercase mb-2">The creator</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Made by Galaxy</h2>
            <div className="section-title-bar w-32 mb-5" />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              ItzGalaxy was created by <strong>Galaxy</strong> as a self-hosted solution to develop, deploy,
              and maintain personal projects. It started as a way to have full control over infrastructure —
              building apps, running servers, and managing everything in-house rather than relying on third-party platforms.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              ItzGalaxy is the main website where Galaxy showcases and deploys projects. Visitors can access
              apps like Durazzno App, PIXL, and Servers, along with resources and tools developed
              and published here. A growing hub centralizing everything built on the web.
            </p>
            {/* GitHub link */}
            <a
              href="https://github.com/PixlGalaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.505.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.021C22 6.484 17.522 2 12 2z" />
              </svg>
              PixlGalaxy on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── What ItzGalaxy is ────────────────────────────────────────── */}
      <section className="relative bg-hero-dark text-white py-20 px-6 overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00ffae] opacity-[0.03] blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-5xl">
          <div className="text-center mb-10 anim-fade-up">
            <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">What is ItzGalaxy</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">A Self-Hosted Platform</h2>
            <div className="section-title-bar w-32 mx-auto mb-5" />
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              A personal, self-hosted infrastructure built to develop, host, and publish software projects
              across different technologies — from web apps and Discord bots to network setups and server stacks.
            </p>
          </div>

          {/* Highlight row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 anim-fade-up anim-delay-1">
            <div className="border border-[#00ffae]/20 rounded-2xl p-6 bg-white/[0.03] text-center">
              <LucideIcons.HardDrive className="w-8 h-8 text-[#00ffae] mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-1">Self-Hosted</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Everything runs on Galaxy's own infrastructure — servers, network, and services fully managed in-house.
              </p>
            </div>
            <div className="border border-[#00ffae]/20 rounded-2xl p-6 bg-white/[0.03] text-center">
              <LucideIcons.FolderGit2 className="w-8 h-8 text-[#00ffae] mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-1">Project Repository</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A centralized hub for all public projects — code, apps, bots, and tools published and maintained here.
              </p>
            </div>
            <div className="border border-[#00ffae]/20 rounded-2xl p-6 bg-white/[0.03] text-center">
              <LucideIcons.Layers className="w-8 h-8 text-[#00ffae] mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-1">Multi-stack</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Projects span multiple languages, frameworks, and platforms — built to solve real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hardware ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 text-black py-20 px-6 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-12 anim-fade-up">
            <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">The Hardware</h2>
            <div className="section-title-bar w-32 mx-auto mb-4" />
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Two servers power all ItzGalaxy services — both running Unraid OS and connected at 10Gb/s.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Zaylar ── */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 card-lift anim-fade-up anim-delay-1">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#00ffae] to-cyan-400" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <LucideIcons.Server className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Zaylar</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">The Muscle</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <LucideIcons.Cpu className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">CPU</span>
                      <p className="text-gray-600">Dual Intel Xeon E5-2696 v4</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.CircuitBoard className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Motherboard</span>
                      <p className="text-gray-600">HUANANZHI X99-F8D PLUS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.MemoryStick className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">RAM</span>
                      <p className="text-gray-600">512 GB DDR4 ECC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.Monitor className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">GPU</span>
                      <p className="text-gray-600">
                        RX 7900 XTX — AI, Embeddings &amp; Encode/Decode <span className="text-xs text-violet-500 font-medium">(ROCm)</span>
                      </p>
                      <p className="text-gray-600">
                        RTX 3060 12 GB — dedicated CUDA VM <span className="text-xs text-green-500 font-medium">(CUDA)</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.HardDrive className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Storage</span>
                      <p className="text-gray-600">2× WD Black SN7100 2 TB NVMe <span className="text-xs text-gray-400">(array)</span></p>
                      <p className="text-gray-600">2× Seagate Exos — 14 TB RAID 1 <span className="text-xs text-gray-400">(pool)</span></p>
                      <p className="text-gray-600">1× Seagate IronWolf 12 TB <span className="text-xs text-gray-400">(pool)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.Network className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Network</span>
                      <p className="text-gray-600">10 Gb/s — Fiber Optic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Ryzhell ── */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 card-lift anim-fade-up anim-delay-2">
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-400 to-purple-500" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <LucideIcons.Server className="w-5 h-5 text-violet-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Ryzhell</h3>
                    <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">The Speedster</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <LucideIcons.Cpu className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">CPU</span>
                      <p className="text-gray-600">AMD Ryzen 9 9900X</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.CircuitBoard className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Motherboard</span>
                      <p className="text-gray-600">MSI PRO X870E-P WIFI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.MemoryStick className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">RAM</span>
                      <p className="text-gray-600">96 GB DDR5 Non-ECC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.HardDrive className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Storage</span>
                      <p className="text-gray-600">2× WD Black SN7100 2 TB NVMe <span className="text-xs text-gray-400">(array)</span></p>
                      <p className="text-gray-600">2× Seagate IronWolf 4 TB RAID 1 <span className="text-xs text-gray-400">(pool)</span></p>
                      <p className="text-gray-600">2× WD Black SN7100 4 TB NVMe RAID 1 <span className="text-xs text-gray-400">(pool)</span></p>
                      <p className="text-gray-600">1× HP Enterprise 2 TB <span className="text-xs text-gray-400">(pool)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LucideIcons.Network className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-semibold text-gray-800">Network</span>
                      <p className="text-gray-600">10 Gb/s NIC — Fiber Optic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shared badge row */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 anim-fade-up anim-delay-3">
            {[
              { icon: <LucideIcons.Container className="w-3.5 h-3.5" />, label: 'Unraid OS' },
              { icon: <LucideIcons.Network className="w-3.5 h-3.5" />, label: '10Gb/s LAN' },
              { icon: <LucideIcons.Shield className="w-3.5 h-3.5" />, label: 'RAID Storage' },
              { icon: <LucideIcons.Gauge className="w-3.5 h-3.5" />, label: 'NVMe Arrays' },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gray-800 text-gray-200 px-3 py-1.5 rounded-full">
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Gets Built ──────────────────────────────────────────── */}
      <section className="relative bg-hero-dark text-white py-20 px-6 overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500 opacity-[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-12 anim-fade-up">
            <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Categories</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">What Gets Built</h2>
            <div className="section-title-bar w-32 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`${c.bg} rounded-2xl p-6 card-lift anim-fade-up anim-delay-${Math.min(i + 1, 5)} flex flex-col gap-3`}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 text-black py-20 px-6 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-gray-300 opacity-30 blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-2xl text-center anim-fade-up">
          <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get In Touch</h2>
          <div className="section-title-bar w-24 mx-auto mb-6" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Questions, suggestions, or just want to say hi?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:webservices.itzgalaxy@gmail.com"
              className="inline-flex items-center gap-2.5 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <LucideIcons.Mail className="w-5 h-5" strokeWidth={1.5} />
              contact@itzgalaxy.com
            </a>
            <a
              href="https://github.com/PixlGalaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.505.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.021C22 6.484 17.522 2 12 2z" />
              </svg>
              PixlGalaxy on GitHub
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
};

export default About;
