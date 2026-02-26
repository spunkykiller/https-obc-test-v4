'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    MapPinIcon,
    BuildingOfficeIcon,
    VideoCameraIcon
} from '@heroicons/react/24/outline'; // Will install heroicons shortly

const LOCATIONS = [
    { name: 'Smart City Building (HQ)', href: '/locations/smart-city' },
    { name: 'Navratna Trade Center', href: '/locations/navratna' },
    { name: 'Harbour Park Rd', href: '/locations/harbour-park' },
];

const WORKSPACE_CATEGORIES = [
    {
        id: 'private',
        name: 'Office spaces',
        desc: 'Ready-to-move-in or customisable private cubes',
        icon: BuildingOfficeIcon,
        items: [
            { name: 'Independent Cubes', desc: 'Fully furnished, ready to move in private offices for maximum focus.', href: '/workspaces/cubes' },
            { name: 'Custom Built Offices', desc: 'Tailored workspace solutions built precisely for your team.', href: '/workspaces/custom' },
        ],
    },
    {
        id: 'coworking',
        name: 'Coworking spaces',
        desc: 'Dynamic desks for the hour, day, or month',
        icon: MapPinIcon,
        items: [
            { name: 'Dedicated Desks', desc: 'Your own permanent desk in a shared premium environment.', href: '/workspaces/coworking' },
            { name: 'Flexible Day Passes', desc: 'Access our premium coworking amenities on a pay-per-use basis.', href: '/workspaces/coworking' },
        ],
    },
    {
        id: 'specialized',
        name: 'Additional solutions',
        desc: 'Solutions that go beyond traditional workspaces',
        icon: VideoCameraIcon,
        items: [
            { name: 'Conference Rooms', desc: 'State-of-the-art meeting halls with LED TVs and projectors.', href: '/workspaces/conference' },
            { name: 'Virtual Office', desc: 'Give your business a premium address for GST and registration.', href: '/workspaces/virtual' },
            { name: 'Event Spaces', desc: 'Host workshops, corporate events, and pop-ups in our lounge.', href: '/workspaces/events' },
        ],
    },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [activeWorkspaceCategory, setActiveWorkspaceCategory] = useState(WORKSPACE_CATEGORIES[0].id);
    const { openModal } = useModal();

    return (
        <header className="sticky top-0 z-[70] w-full bg-background-white border-b border-border-light shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Zone */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight text-text-black">
                            <Image src="/Orange_Business_centre_V1.png" alt="Orange Business Centre Logo" width={50} height={50} className="object-contain" />
                            <span><span className="text-primary">Orange</span> <span className="hidden sm:inline">Business Centre</span></span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/about" className="text-text-charcoal hover:text-primary transition font-medium text-sm pt-2">
                            About Us
                        </Link>

                        <Link href="/gallery" className="text-text-charcoal hover:text-primary transition font-medium text-sm pt-2">
                            Gallery
                        </Link>

                        {/* Workspaces Mega Menu Trigger */}
                        <div
                            className="relative pt-2 pb-2"
                            onMouseEnter={() => setHoveredMenu('workspaces')}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="flex items-center text-text-charcoal hover:text-primary transition font-medium text-sm">
                                Workspaces <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            {hoveredMenu === 'workspaces' && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-background-white border border-border-light shadow-2xl p-0 rounded-b-md overflow-hidden flex">
                                    {/* Left Column - Categories */}
                                    <div className="w-[45%] bg-background-pearl p-6 border-r border-border-light flex flex-col justify-between">
                                        <div className="space-y-2">
                                            {WORKSPACE_CATEGORIES.map((category) => (
                                                <div
                                                    key={category.id}
                                                    onMouseEnter={() => setActiveWorkspaceCategory(category.id)}
                                                    className={`flex items-start p-4 rounded-md cursor-pointer transition-colors ${activeWorkspaceCategory === category.id ? 'bg-background-white shadow-sm border border-border-light' : 'hover:bg-background-white/50 border border-transparent'}`}
                                                >
                                                    <category.icon className={`h-8 w-8 mt-1 flex-shrink-0 transition-colors ${activeWorkspaceCategory === category.id ? 'text-primary' : 'text-text-muted'}`} />
                                                    <div className="ml-4">
                                                        <p className={`text-base font-bold transition-colors ${activeWorkspaceCategory === category.id ? 'text-primary' : 'text-text-black'}`}>
                                                            {category.name}
                                                        </p>
                                                        <p className="text-xs text-text-muted mt-1 leading-snug">
                                                            {category.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-6 px-4">
                                            <Link href="/workspaces" className="text-primary font-semibold hover:text-primary-dark transition text-sm" onClick={() => setHoveredMenu(null)}>
                                                All Solutions
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Column - Items */}
                                    <div className="w-[55%] p-8 bg-background-white">
                                        {WORKSPACE_CATEGORIES.map((category) => (
                                            <div
                                                key={category.id}
                                                className={`space-y-6 ${activeWorkspaceCategory === category.id ? 'block animate-fade-in' : 'hidden'}`}
                                            >
                                                {category.items.map(item => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block group"
                                                        onClick={() => setHoveredMenu(null)}
                                                    >
                                                        <p className="text-base font-bold text-text-black group-hover:text-primary transition-colors">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-sm text-text-muted mt-1 leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Locations Menu Trigger */}
                        <div
                            className="relative pt-2 pb-2"
                            onMouseEnter={() => setHoveredMenu('locations')}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="flex items-center text-text-charcoal hover:text-primary transition font-medium text-sm">
                                Centres <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </button>

                            {hoveredMenu === 'locations' && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-background-white border border-border-light shadow-xl p-2 rounded-b-md">
                                    {LOCATIONS.map((loc) => (
                                        <Link key={loc.name} href={loc.href} className="block px-4 py-3 text-sm text-text-charcoal hover:bg-background-slate hover:text-primary transition rounded-md" onClick={() => setHoveredMenu(null)}>
                                            {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right side CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+919999999999" className="text-sm font-medium text-text-charcoal hover:text-primary transition">
                            +91 999 999 9999
                        </a>
                        <button onClick={openModal} className="bg-primary hover:bg-primary-dark text-background-white px-5 py-2.5 rounded-sm font-semibold text-sm transition shadow-sm">
                            Get in touch
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-text-charcoal hover:text-primary p-2"
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background-white border-b border-border-light max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <Link href="/about" className="block px-3 py-4 text-base font-semibold text-text-charcoal border-b border-border-light" onClick={() => setIsMobileMenuOpen(false)}>
                            About Us
                        </Link>

                        <Link href="/gallery" className="block px-3 py-4 text-base font-semibold text-text-charcoal border-b border-border-light" onClick={() => setIsMobileMenuOpen(false)}>
                            Gallery
                        </Link>

                        <div className="px-3 py-4 border-b border-border-light">
                            <p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">Workspaces</p>
                            {WORKSPACE_CATEGORIES.map((category) => (
                                <div key={category.id} className="mb-4 last:mb-0">
                                    <p className="text-sm font-semibold text-text-black pl-2 mb-1">{category.name}</p>
                                    {category.items.map((item) => (
                                        <Link key={item.name} href={item.href} className="block py-1.5 text-sm font-medium text-text-charcoal pl-6 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="px-3 py-4 border-b border-border-light">
                            <p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">Centres</p>
                            {LOCATIONS.map((loc) => (
                                <Link key={loc.name} href={loc.href} className="block py-2 text-base font-medium text-text-charcoal pl-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    {loc.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-6 px-3">
                            <button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="w-full bg-primary text-background-white px-5 py-3 rounded-sm font-semibold text-center mt-2">
                                Book a Tour
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
