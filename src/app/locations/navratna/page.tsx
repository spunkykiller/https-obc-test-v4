import Image from 'next/image';
import { MapPinIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import StickyTourForm from '@/components/locations/StickyTourForm'; // We'll abstract the sticky form into a reusable component

export default function NavratnaLocationPage() {
    return (
        <div className="bg-background-pearl min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end pb-16 md:pb-24">
                {/* Background Image w/ Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Navratna Trade Center Office Space"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
                    <div className="max-w-2xl text-left">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
                            Premium Location
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4 shadow-sm">
                            Navratna Trade Center
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium flex items-center">
                            <MapPinIcon className="w-5 h-5 mr-2" />
                            Asilmetta, Near VIP Road, Visakhapatnam
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* LEFT COLUMN - Details & Amenities */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Introduction */}
                        <div>
                            <h2 className="font-serif text-3xl text-text-black font-bold mb-6">About this workspace</h2>
                            <p className="text-text-charcoal leading-relaxed text-lg mb-6">
                                Situated in the bustling commercial hub of Asilmetta, our Navratna Trade Center facility offers an unparalleled business environment. Designed for established enterprises and growing startups alike, this location blends corporate prestige with modern, flexible functionality.
                            </p>
                            <p className="text-text-charcoal leading-relaxed text-lg">
                                Enjoy immediate access to VIP Road's premium dining, retail, and transit options. Inside, experience light-filled private cubes, high-tech conference rooms, and a thriving professional community.
                            </p>
                        </div>

                        {/* Amenities Grid */}
                        <div>
                            <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-8">Included Amenities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                                {/* Amenity Item */}
                                <div className="flex items-start group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-text-black mb-1 transition-colors duration-300 group-hover:text-primary">Premium IT Infrastructure</h4>
                                        <p className="text-sm text-text-muted">Enterprise-grade Wi-Fi and secure wired connections.</p>
                                    </div>
                                </div>
                                {/* Amenity Item */}
                                <div className="flex items-start group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-text-black mb-1 transition-colors duration-300 group-hover:text-primary">Executive Lounges</h4>
                                        <p className="text-sm text-text-muted">Sophisticated common areas for networking and breaks.</p>
                                    </div>
                                </div>
                                {/* Amenity Item */}
                                <div className="flex items-start group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-text-black mb-1 transition-colors duration-300 group-hover:text-primary">24/7 Access & Security</h4>
                                        <p className="text-sm text-text-muted">Biometric entry and comprehensive CCTV surveillance.</p>
                                    </div>
                                </div>
                                {/* Amenity Item */}
                                <div className="flex items-start group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-text-black mb-1 transition-colors duration-300 group-hover:text-primary">On-site Parking</h4>
                                        <p className="text-sm text-text-muted">Dedicated, secure parking spaces available for members.</p>
                                    </div>
                                </div>
                                {/* Amenity Item */}
                                <div className="flex items-start group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-text-black mb-1 transition-colors duration-300 group-hover:text-primary">Boardroom Access</h4>
                                        <p className="text-sm text-text-muted">Fully equipped meeting rooms with video conferencing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Workspaces */}
                        <div>
                            <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-8">Available at this location</h3>
                            <div className="space-y-6">
                                {/* Workspace Card */}
                                <div className="border border-border-light rounded-lg p-6 bg-white hover:border-primary transition duration-300 flex flex-col md:flex-row md:items-center justify-between group">
                                    <div>
                                        <h4 className="font-serif text-2xl font-bold text-text-black mb-2 group-hover:text-primary transition">Independent Cubes</h4>
                                        <p className="text-text-muted text-sm max-w-md">Fully furnished, private glass-enclosed offices ready for your team to move in.</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-left md:text-right">
                                        <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Capacity</p>
                                        <p className="font-bold text-text-black">1 - 20+ Desks</p>
                                    </div>
                                </div>

                                {/* Workspace Card */}
                                <div className="border border-border-light rounded-lg p-6 bg-white hover:border-primary transition duration-300 flex flex-col md:flex-row md:items-center justify-between group">
                                    <div>
                                        <h4 className="font-serif text-2xl font-bold text-text-black mb-2 group-hover:text-primary transition">Dedicated Desks</h4>
                                        <p className="text-text-muted text-sm max-w-md">Your own permanent desk in a shared, premium lockable office space.</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-left md:text-right">
                                        <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Capacity</p>
                                        <p className="font-bold text-text-black">Individual</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location / Map */}
                        <div>
                            <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-8">Location</h3>
                            <div className="bg-white p-2 rounded-xl shadow-sm border border-border-light">
                                <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden relative min-h-[400px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1873105745124!2d83.30825707474427!3d17.735824583212876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433eccfc3797%3A0xc34a6ee1e913ec85!2sNavaratna%20Trade%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mt-6 flex items-start">
                                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div className="ml-4">
                                    <p className="font-bold text-text-black text-lg">Navratna Trade Center</p>
                                    <p className="text-text-charcoal mt-1">Asilmetta, Near VIP Road<br />Visakhapatnam, Andhra Pradesh 530002</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN - Sticky Form */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-32">
                            <StickyTourForm locationName="Navratna Trade Center" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
