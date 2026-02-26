'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CENTRES = [
    {
        name: 'Smart City Building (HQ)',
        address: 'Inox Leisure, Beach Road, Maharanipeta, Visakhapatnam',
        description: "Our flagship global head office offering unparalleled sea-views and immediate access to the city's top retail and business hubs.",
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        href: '/locations/smart-city',
        tag: 'Headquarters'
    },
    {
        name: 'Navratna Trade Center',
        address: 'Asilmetta, Near VIP Road, Visakhapatnam',
        description: 'Situated in a bustling commercial hub, this facility blends corporate prestige with modern, flexible functionality for teams of all sizes.',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        href: '/locations/navratna',
        tag: 'Premium Business Hub'
    },
    {
        name: 'Harbour Park Road',
        address: 'Pandurangapuram, Visakhapatnam',
        description: 'Experience a tranquil yet productive work environment directly opposite the scenic coastal stretch. Perfect for focused work by the water.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        href: '/locations/harbour-park',
        tag: 'Coastal Workspace'
    }
];

export default function CentresPage() {
    return (
        <div className="bg-background-pearl min-h-screen pb-24">
            {/* Header Section */}
            <section className="bg-text-charcoal text-background-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="text-primary italic">Flagship Centres</span>
                    </h1>
                    <p className="text-lg md:text-xl text-border-light max-w-3xl mx-auto font-medium leading-relaxed">
                        Explore our premium business locations across Visakhapatnam, each designed to empower your team with luxury, comfort, and state-of-the-art infrastructure.
                    </p>
                </div>
            </section>

            {/* Listing Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {CENTRES.map((centre) => (
                        <div key={centre.name} className="bg-background-white group rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={centre.image}
                                    alt={centre.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-lg">
                                        {centre.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h2 className="font-serif text-2xl font-bold text-text-black mb-3">
                                    {centre.name}
                                </h2>
                                <p className="text-sm text-text-muted flex items-start mb-6">
                                    <MapPinIcon className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                                    {centre.address}
                                </p>
                                <p className="text-text-charcoal text-sm leading-relaxed mb-8 flex-grow">
                                    {centre.description}
                                </p>
                                <Link
                                    href={centre.href}
                                    className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase group/link"
                                >
                                    Explore Centre
                                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
                <div className="bg-background-white p-12 md:p-16 border-t-8 border-primary shadow-lg max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-text-black mb-4">
                        Ready to find your desk?
                    </h2>
                    <p className="text-text-charcoal mb-8">
                        Schedule a personalized tour of any of our centres and experience the Orange standard firsthand.
                    </p>
                    <button
                        onClick={() => (window as any).cms_open_modal && (window as any).cms_open_modal()}
                        className="bg-primary text-white px-10 py-4 font-bold tracking-wide uppercase hover:bg-primary-dark transition-colors shadow-md"
                    >
                        Book a Tour
                    </button>
                    {/* Fallback script for modal toggle if standard hook isn't available globally */}
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        window.cms_open_modal = () => {
                            const btn = document.querySelector('button[onClick*="openModal"]');
                            if(btn) btn.click();
                        }
                    `}} />
                </div>
            </section>
        </div>
    );
}
