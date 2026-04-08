import React from 'react';

interface TosSection {
  id: string;
  title: string;
  items: string[];
}

const tosSections: TosSection[] = [
  {
    id: '1',
    title: '1. Introduction',
    items: [
      '1.1. Welcome to PIXL Bot! These Terms of Service govern your use of PIXL, so please read them carefully.',
      '1.2. By using PIXL, you agree to abide by these Terms of Service. If you do not agree with any part of these terms, you may not use the bot.',
    ],
  },
  {
    id: '2',
    title: '2. Use of PIXL',
    items: [
      '2.1. PIXL is intended for entertainment and moderation purposes only. You may not use it for any illegal or malicious activities.',
      "2.2. You may use PIXL features, including music playback, moderation commands, and message purging, in accordance with Discord's Terms of Service and Community Guidelines.",
    ],
  },
  {
    id: '3',
    title: '3. Music Playback',
    items: [
      '3.1. PIXL provides the ability to play music from various sources, including YouTube, Spotify, and SoundCloud.',
      '3.2. By using PIXL music playback features, you agree to comply with the terms of use and copyright policies of the respective music platforms.',
      '3.3. You are solely responsible for any copyright violations or infringements that may occur as a result of using PIXL to play music.',
    ],
  },
  {
    id: '4',
    title: '4. Moderation Commands',
    items: [
      '4.1. PIXL offers moderation commands, including kick, mute, ban, and purge.',
      "4.2. You agree to use moderation commands responsibly and in accordance with Discord's Terms of Service and Community Guidelines.",
      '4.3. You may not use moderation commands to harass, intimidate, or discriminate against other users.',
    ],
  },
  {
    id: '5',
    title: '5. Limitation of Liability',
    items: [
      '5.1. PIXL is provided "as is" without any warranty of any kind, either express or implied.',
      '5.2. We shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of PIXL.',
    ],
  },
  {
    id: '6',
    title: '6. Termination',
    items: [
      '6.1. We reserve the right to terminate or suspend your access to PIXL at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.',
    ],
  },
  {
    id: '7',
    title: '7. Changes to Terms of Service',
    items: [
      '7.1. We reserve the right to modify or replace these Terms of Service at any time. Your continued use of PIXL after any such changes constitutes acceptance of the new Terms of Service.',
    ],
  },
  {
    id: '8',
    title: '8. Governing Law',
    items: [
      '8.1. These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.',
    ],
  },
  {
    id: '9',
    title: '9. Contact Us',
    items: ['9.1. If you have any questions about these Terms of Service, please contact us at webservices.itzgalaxy@gmail.com.'],
  },
  {
    id: '10',
    title: '10. Acknowledgment',
    items: [
      '10.1. By using PIXL, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.',
    ],
  },
];

const privacySections: TosSection[] = [
  {
    id: 'p1',
    title: '1. Data Collection',
    items: [
      '1.1. PIXL does not collect or store any personal data from users.',
      '1.2. While using PIXL, certain non-personal data may be collected for the purpose of improving bot performance and functionality. This data may include usage statistics, error logs, usernames, and other technical information.',
    ],
  },
  {
    id: 'p2',
    title: '2. Data Usage',
    items: [
      '2.1. Any data collected by PIXL is used solely for the purpose of enhancing user experience and improving bot performance.',
      '2.2. We do not sell, rent, or otherwise distribute any data collected by PIXL to third parties.',
      '2.3. All data cached on PIXL is deleted after each restart.',
    ],
  },
  {
    id: 'p3',
    title: '3. Data Security',
    items: [
      '3.1. We take reasonable measures to ensure the security of any data collected by PIXL, including encryption and access controls.',
      '3.2. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.',
    ],
  },
  {
    id: 'p4',
    title: '4. User Consent',
    items: ['4.1. By using PIXL, you consent to the collection and use of non-personal data as described in this Privacy section.'],
  },
  {
    id: 'p5',
    title: '5. Changes to Privacy Policy',
    items: [
      '5.1. We reserve the right to modify or replace this Privacy section at any time. Your continued use of PIXL after any such changes constitutes acceptance of the new Privacy section.',
    ],
  },
];

const TosBlock: React.FC<{ section: TosSection; delay?: number }> = ({ section, delay = 0 }) => (
  <div className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-lift anim-fade-up anim-delay-${Math.min(delay, 5)}`}>
    <h4 className="font-bold text-gray-900 mb-2">{section.title}</h4>
    {section.items.map((item, i) => (
      <p key={i} className="text-sm text-gray-600 leading-relaxed mt-1">{item}</p>
    ))}
  </div>
);

const PixlTOS: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - PIXL Terms of Service</title>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-hero-dark text-white py-24 px-6 pt-32 overflow-hidden clip-diagonal">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500 opacity-[0.07] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-400 opacity-[0.05] blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center anim-fade-up">
          <p className="text-[#00ffae] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2">PIXL</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Terms of Service &amp; Privacy Policy</h2>
          <div className="section-title-bar w-40 mx-auto" />
        </div>
      </section>

      {/* ── Terms of Service ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 -mt-20 pt-36 pb-16 px-6 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-8 anim-fade-up">
            <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-violet-500" />
            <h3 className="text-2xl font-extrabold text-gray-900">Terms Of Service</h3>
          </div>
          <div className="space-y-4">
            {tosSections.map((s, i) => (
              <TosBlock key={s.id} section={s} delay={(i % 5) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-teal-50 to-emerald-50 py-16 px-6 overflow-hidden">
        <div className="grid-pattern absolute inset-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-8 anim-fade-up">
            <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-teal-400 to-emerald-500" />
            <h3 className="text-2xl font-extrabold text-gray-900">Privacy Policy</h3>
          </div>
          <div className="space-y-4">
            {privacySections.map((s, i) => (
              <TosBlock key={s.id} section={s} delay={(i % 5) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Thank You ────────────────────────────────────────────────── */}
      <section className="relative bg-hero-dark text-white py-16 px-6 overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-2xl flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left anim-fade-up">
          <img src="/Other/GalaxyPC.webp" alt="Galaxy Sticker" className="w-36 h-auto" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Thank You For Using PIXL.</h2>
            <p className="text-gray-400 text-sm">We appreciate you trusting our bot.</p>
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

export default PixlTOS;
