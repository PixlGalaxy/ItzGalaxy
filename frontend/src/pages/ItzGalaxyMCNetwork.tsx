import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const ItzGalaxyMCNetwork: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mc.itzgalaxy.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>ItzGalaxy - Minecraft Network</title>
      <main className="flex-1">

        {/* Hero Section */}
        <section
          className="relative text-white py-12 px-4 pt-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">ItzGalaxy Minecraft Network</h1>
            <p className="text-lg md:text-xl">
              Supported Java Versions: <strong>1.20.1 - 1.21.5</strong>
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/YellowBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/3 text-center space-y-3">
              <LucideIcons.TreePine className="mx-auto w-16 h-16 text-green-700" strokeWidth={1.5} />
              <h3 className="text-xl font-bold">Survival Worlds</h3>
              <p>
                Explore rich vanilla survival worlds with a friendly community and zero pay-to-win.
              </p>
            </div>
            <div className="md:w-1/3 text-center space-y-3">
              <LucideIcons.Swords className="mx-auto w-16 h-16 text-red-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold">UHC & Special Events</h3>
              <p>
                Participate in unique server events and intense Ultra Hardcore (UHC) matches. Compete, survive, and win!
              </p>
            </div>
            <div className="md:w-1/3 text-center space-y-3">
              <LucideIcons.Star className="mx-auto w-16 h-16 text-purple-500" strokeWidth={1.5} />
              <h3 className="text-xl font-bold">MiniGames & Fun (Coming Soon)</h3>
              <p>
                Take a break from survival with minigames and community challenges. There's always something fun happening on the server!
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/GreenBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Join?</h2>
            <p className="text-lg">Copy the IP and hop in right now!</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 text-xl font-mono backdrop-blur-md border border-white border-opacity-20">
                mc.itzgalaxy.com
              </div>
              <button
                onClick={handleCopy}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all border border-white border-opacity-20 p-2 rounded-lg backdrop-blur-md"
                title="Copy IP"
              >
                {copied ? (
                  <LucideIcons.Check className="text-black w-6 h-6" />
                ) : (
                  <LucideIcons.ClipboardCopy className="text-black w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Extra Section */}
        <section
          className="relative text-black py-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/backgrounds/BlueBackground.webp")' }}
        >
          <div className="absolute inset-0 bg-white opacity-10 z-0" />
          <div className="relative z-10 container mx-auto text-center space-y-4">
            <LucideIcons.Info className="mx-auto w-12 h-12 text-blue-700" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-4xl font-bold">Need Help or Want to Join Our Discord?</h2>
            <p className="text-base md:text-lg">
              Visit our <a href="/resources" className="underline font-semibold">Resources Page</a> or contact us through Discord!
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
        <p>
          &copy; {new Date().getFullYear()} ItzGalaxy.com | ItzGalaxy Web Services | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ItzGalaxyMCNetwork;
