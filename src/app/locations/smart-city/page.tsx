'use client';
import { useModal } from '@/context/ModalContext';
import {
    BuildingOfficeIcon,
    VideoCameraIcon,
    MapPinIcon,
    ShieldCheckIcon,
    ClockIcon,
    WifiIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import StickyTourForm from '@/components/locations/StickyTourForm';

const LOCATION_AMENITIES = [
    { icon: ClockIcon, title: '24/7 Building Access' },
    { icon: ShieldCheckIcon, title: 'Biometric Security' },
    { icon: WifiIcon, title: 'High-Speed Wi-Fi' },
    { icon: BuildingOfficeIcon, title: 'Pantry & Cafeteria' },
];

const SPACES = [
    {
        title: 'Independent Cubes',
        capacity: '1-10 Desks',
        desc: 'Fully furnished private office space offering absolute privacy and secure 24/7 access.',
        price: 'Custom Quote',
        icon: BuildingOfficeIcon,
    },
    {
        title: 'Co-Working Desk',
        capacity: '1 Desk',
        desc: 'A dedicated desk in an open-plan premium environment. Perfect for freelancers and remote pros.',
        price: 'Custom Quote',
        icon: MapPinIcon,
    },
    {
        title: 'Conference Room',
        capacity: 'Up to 20 Guests',
        desc: 'High-end boardrooms with LED TVs, projectors, and premium catering options.',
        price: 'Hourly / Daily',
        icon: VideoCameraIcon,
    }
];

export default function SmartCityLocation() {
    const { openModal } = useModal();

    return (
        <div className="bg-background-white min-h-screen pb-24">

            {/* 1. Immersive Hero Image */}
            <div className="relative w-full h-[50vh] min-h-[400px] bg-background-slate">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4 shadow-sm">
                            Smart City Building (HQ)
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium flex items-center">
                            <MapPinIcon className="w-5 h-5 mr-2" />
                            Inox Leisure, Beach Road, Maharanipeta, Visakhapatnam
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Main Content & Sticky Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column (Details) */}
                    <div className="w-full lg:w-[65%]">

                        {/* Intro */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl text-text-black mb-6">About the Location</h2>
                            <p className="text-lg text-text-charcoal leading-relaxed mb-4">
                                Positioned in the pulsing heart of Visakhapatnam at the iconic Smart City Building. This is the global head office of Orange Business Centre, offering unparalleled sea-views and immediate access to the city's top retail and business hubs.
                            </p>
                            <p className="text-lg text-text-charcoal leading-relaxed">
                                Experience a cordial work-life balance with a cafeteria, juice bar, and entertainment avenues co-located in the same building.
                            </p>
                        </div>

                        <hr className="border-border-light mb-12" />

                        {/* Available Workspaces */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl text-text-black mb-8">Available Workspaces</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {SPACES.map((space) => (
                                    <div key={space.title} className="flex flex-col md:flex-row items-start md:items-center bg-background-pearl border border-border-light p-6 md:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300">
                                        <div className="h-16 w-16 bg-white border border-border-light rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                            <space.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-text-black mb-1">{space.title}</h3>
                                            <p className="text-sm font-bold tracking-wider text-text-muted uppercase mb-2">{space.capacity}</p>
                                            <p className="text-text-charcoal mb-4 md:mb-0">{space.desc}</p>
                                        </div>
                                        <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 w-full md:w-auto">
                                            <button onClick={openModal} className="w-full md:w-auto bg-background-white border-2 border-text-charcoal text-text-charcoal hover:bg-text-charcoal hover:text-white px-6 py-3 font-semibold transition-colors duration-300 text-sm tracking-wide">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="border-border-light mb-12" />

                        {/* Building Amenities */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-bold text-text-black mb-8">Included Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                                {LOCATION_AMENITIES.map((amenity) => (
                                    <div key={amenity.title} className="flex items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                                        <amenity.icon className="h-8 w-8 text-primary mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark" />
                                        <span className="text-text-black font-medium transition-colors duration-300 group-hover:text-primary">{amenity.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="border-border-light mb-12" />

                        {/* Map Placeholder */}
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-text-black mb-8">Location & Map</h2>
                            <div className="w-full h-96 bg-background-slate flex items-center justify-center border border-border-light relative overflow-hidden">
                                <iframe
                                    src="https://maps.google.com/maps?q=Orange%20Business%20Centre,%20Smart%20City%20Building,%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Sticky Form Panel - WeWork Style) */}
                    <div className="w-full lg:w-[35%] relative">
                        <div className="sticky top-28">
                            <StickyTourForm locationName="Smart City Building (HQ)" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
