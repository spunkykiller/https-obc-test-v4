'use client';

import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useModal } from '@/context/ModalContext';

export default function Hero() {
    const { openModal } = useModal();

    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-background-pearl">
            {/* 
        Placeholder for High-End Mockup Photography. 
        In production, this will be an actual Next/Image component.
      */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div> {/* Subtle dark overlay for text contrast */}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* The WeWork-style "Overlap" Card */}
                <div className="bg-background-white p-8 md:p-12 max-w-2xl shadow-2xl relative mt-32 md:mt-48 -ml-4 md:ml-0 border-l-4 border-primary">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-black leading-tight mb-6">
                        Workspaces designed for <span className="text-primary italic">your success.</span>
                    </h1>
                    <p className="text-lg text-text-charcoal mb-8 max-w-lg leading-relaxed">
                        Premium, flexible coworking and independent business cubes in the heart of Visakhapatnam. Built for innovators, creators, and modern teams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#centres" className="bg-primary hover:bg-primary-dark text-background-white px-8 py-4 text-base font-semibold transition-all flex items-center justify-center group">
                            Explore Spaces
                            <ArrowLongRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button onClick={openModal} className="bg-background-pearl hover:bg-background-slate text-text-black border border-border-light px-8 py-4 text-base font-semibold transition-all text-center">
                            Book a Tour
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
