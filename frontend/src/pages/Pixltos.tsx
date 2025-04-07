import React from 'react';

const PixlTOS: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <title>ItzGalaxy - PIXL Terms of Service</title>

        {/* Header */}
        <section
            className="relative text-white py-12 px-4 pt-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/backgrounds/PurpleBackground.png")' }}
        >
            <div className="absolute inset-0 bg-white opacity-10 z-0" />
            <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-5xl font-bold">PIXL</h1>
            <h2 className="text-3xl mt-4 font-semibold">TERMS OF SERVICE</h2>
            <div className="w-full md:w-1/2 h-1 bg-cyan-400 mt-4 mx-auto" />
            </div>
        </section>

        {/* TOS Section */}
        <section className="bg-teal-400 text-black px-6 md:px-24 py-16 text-left">
            <h3 className="text-xl italic underline font-semibold mb-8">Terms Of Service.</h3>

            <div className="space-y-6">
            <div>
                <h4 className="font-bold underline">1. Introduction</h4>
                <p>1.1. Welcome to PIXL Bot! These Terms of Service govern your use of PIXL, so please read them carefully.</p>
                <p>1.2. By using PIXL, you agree to abide by these Terms of Service. If you do not agree with any part of these terms, you may not use the bot.</p>
            </div>

            <div>
                <h4 className="font-bold underline">2. Use of PIXL</h4>
                <p>2.1. PIXL is intended for entertainment and moderation purposes only. You may not use it for any illegal or malicious activities.</p>
                <p>2.2. You may use PIXL features, including music playback, moderation commands, and message purging, in accordance with Discord's Terms of Service and Community Guidelines.</p>
            </div>

            <div>
                <h4 className="font-bold underline">3. Music Playback</h4>
                <p>3.1. PIXL provides the ability to play music from various sources, including YouTube, Spotify, and SoundCloud.</p>
                <p>3.2. By using PIXL music playback features, you agree to comply with the terms of use and copyright policies of the respective music platforms.</p>
                <p>3.3. You are solely responsible for any copyright violations or infringements that may occur as a result of using PIXL to play music.</p>
            </div>

            <div>
                <h4 className="font-bold underline">4. Moderation Commands</h4>
                <p>4.1. PIXL offers moderation commands, including kick, mute, ban, and purge.</p>
                <p>4.2. You agree to use moderation commands responsibly and in accordance with Discord's Terms of Service and Community Guidelines.</p>
                <p>4.3. You may not use moderation commands to harass, intimidate, or discriminate against other users.</p>
            </div>

            <div>
                <h4 className="font-bold underline">5. Limitation of Liability</h4>
                <p>5.1. PIXL is provided "as is" without any warranty of any kind, either express or implied.</p>
                <p>5.2. We shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of PIXL.</p>
            </div>

            <div>
                <h4 className="font-bold underline">6. Termination</h4>
                <p>6.1. We reserve the right to terminate or suspend your access to PIXL at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.</p>
            </div>

            <div>
                <h4 className="font-bold underline">7. Changes to Terms of Service</h4>
                <p>7.1. We reserve the right to modify or replace these Terms of Service at any time. Your continued use of PIXL after any such changes constitutes acceptance of the new Terms of Service.</p>
            </div>

            <div>
                <h4 className="font-bold underline">8. Governing Law</h4>
                <p>8.1. These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            </div>

            <div>
                <h4 className="font-bold underline">9. Contact Us</h4>
                <p>9.1. If you have any questions about these Terms of Service, please contact us at webservices.itzgalaxy@gmail.com.</p>
            </div>

            <div>
                <h4 className="font-bold underline">10. Acknowledgment</h4>
                <p>10.1. By using PIXL, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.</p>
            </div>
            </div>

            <h3 className="text-xl italic underline font-semibold mt-12 mb-8">Privacy</h3>

            <div className="space-y-6">
            <div>
                <h4 className="font-bold underline">1. Data Collection</h4>
                <p>1.1. PIXL does not collect or store any personal data from users.</p>
                <p>1.2. While using PIXL, certain non-personal data may be collected for the purpose of improving bot performance and functionality. This data may include usage statistics, error logs, usernames, and other technical information.</p>
            </div>

            <div>
                <h4 className="font-bold underline">2. Data Usage</h4>
                <p>2.1. Any data collected by PIXL is used solely for the purpose of enhancing user experience and improving bot performance.</p>
                <p>2.2. We do not sell, rent, or otherwise distribute any data collected by PIXL to third parties.</p>
                <p>2.3. All data cached on PIXL is deleted after each restart.</p>
            </div>

            <div>
                <h4 className="font-bold underline">3. Data Security</h4>
                <p>3.1. We take reasonable measures to ensure the security of any data collected by PIXL, including encryption and access controls.</p>
                <p>3.2. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.</p>
            </div>

            <div>
                <h4 className="font-bold underline">4. User Consent</h4>
                <p>4.1. By using PIXL, you consent to the collection and use of non-personal data as described in this Privacy section.</p>
            </div>

            <div>
                <h4 className="font-bold underline">5. Changes to Privacy Policy</h4>
                <p>5.1. We reserve the right to modify or replace this Privacy section at any time. Your continued use of PIXL after any such changes constitutes acceptance of the new Privacy section.</p>
            </div>
            </div>

            {/* Thank You Section */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
            <img src="/Other/GalaxyPC.png" alt="Galaxy Sticker" className="w-40 h-auto" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Thank You For Using PIXL.</h2>
            </div>
        </section>
        <footer className="bg-white bg-opacity-50 backdrop-blur-md text-black text-left px-4 py-4 z-10">
            <p>
            &copy; {new Date().getFullYear()} ItzGalaxy.com | Itz Galaxy Web Services | All Rights Reserved.
            </p>
        </footer>
        </div>
        
  );
};

export default PixlTOS;