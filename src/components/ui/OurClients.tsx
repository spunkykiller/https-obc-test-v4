'use client';

import Image from 'next/image';

// Using high-quality SVG logos of popular companies to give a premium feel
const CLIENTS = [
    { name: 'GSS', logo: '/client-logos-final/GSS-removebg-preview.png', className: 'w-[220px] h-[100px]' },
    { name: 'Gogardenman', logo: '/client-logos-final/Gogardenman-removebg-preview.png', className: 'w-[220px] h-[100px]' },
    { name: 'Kotak', logo: '/client-logos-final/Kotak-removebg-preview.png', className: 'w-[220px] h-[100px]' },
    { name: 'Risinglane', logo: '/client-logos-final/Risinglane-removebg-preview.png', className: 'w-[220px] h-[100px]' },
    { name: 'Venturiq', logo: '/client-logos-final/venturiq_logo.jpg' },
    { name: 'Trovity', logo: '/client-logos-final/Trovity-Logo-removebg-preview.png' },
    { name: 'Bilander', logo: '/client-logos-final/bilander.png' },
    { name: 'LG', logo: '/client-logos-final/lg_new.png' },
    { name: 'Company 9', logo: '/client-logos-final/243203892_454314465882038_1533476976429623912_n.jpg', className: 'w-[220px] h-[100px]' },
];

export default function OurClients() {
    return (
        <section className="bg-background-pearl py-16 border-t border-border-light overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-text-black tracking-tight">
                    Our <span className="text-primary italic">Happy Clients</span>
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-6 mb-4"></div>
                <p className="text-sm font-medium italic text-text-charcoal max-w-2xl mx-auto leading-relaxed relative">
                    &quot;The best co working place for those who are looking to work pleasantly. They provide us the best. I recommend orange business centre to those who are ready to get the work space&quot;
                    <span className="block mt-4 not-italic font-bold text-text-black">
                        - Ms Madhuri
                        <span className="block font-normal text-text-muted text-xs mt-1">Vizag Head - CanAuz Overseas Careers</span>
                    </span>
                </p>
            </div>

            {/* Gradient masks for fading edges to make it look premium */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background-pearl to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background-pearl to-transparent z-10 pointer-events-none"></div>

            <div className="relative w-full flex overflow-x-hidden">
                <div className="animate-marquee flex whitespace-nowrap items-center py-4">
                    {/* Double the array for seamless infinite scroll */}
                    {[...CLIENTS, ...CLIENTS].map((client, index) => (
                        <div key={index} className={`mx-8 lg:mx-16 flex items-center justify-center transition-all duration-500 hover:scale-105 relative ${client.className || 'w-[180px] h-[80px]'}`}>
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </section>
    );
}
