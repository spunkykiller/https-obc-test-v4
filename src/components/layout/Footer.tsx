import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-pearl pt-16 pb-8 border-t border-border-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-3 font-serif text-3xl font-bold tracking-tight text-text-black mb-4">
                            <Image src="/Orange_Business_centre_V1.png" alt="Orange Business Centre Logo" width={60} height={60} className="object-contain" />
                            <div><span className="text-primary">Orange</span> <br />Business Centre</div>
                        </Link>
                        <p className="text-sm text-text-muted mt-2">
                            Premium responsive luxury coworking spaces in Visakhapatnam.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="h-10 w-10 bg-border-light rounded-full flex items-center justify-center text-text-charcoal hover:bg-primary hover:text-white transition cursor-pointer shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="h-10 w-10 bg-border-light rounded-full flex items-center justify-center text-text-charcoal hover:bg-primary hover:text-white transition cursor-pointer shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="h-10 w-10 bg-border-light rounded-full flex items-center justify-center text-text-charcoal hover:bg-primary hover:text-white transition cursor-pointer shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-text-black tracking-widest uppercase mb-4">Centres</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/locations/smart-city" className="text-sm text-text-muted hover:text-primary transition">
                                    Smart City Building (HQ)
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/navratna" className="text-sm text-text-muted hover:text-primary transition">
                                    Navratna Trade Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/harbour-park" className="text-sm text-text-muted hover:text-primary transition">
                                    Harbour Park Rd
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Workspace Solutions */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-text-black tracking-widest uppercase mb-4">Workspaces</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/workspaces/cubes" className="text-sm text-text-muted hover:text-primary transition">
                                    Independent Cubes
                                </Link>
                            </li>
                            <li>
                                <Link href="/workspaces/coworking" className="text-sm text-text-muted hover:text-primary transition">
                                    Co-working Desks
                                </Link>
                            </li>
                            <li>
                                <Link href="/workspaces/conference" className="text-sm text-text-muted hover:text-primary transition">
                                    Conference Rooms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-text-black tracking-widest uppercase mb-4">Get In Touch</h3>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li>
                                <p>Support: <a href="mailto:hello@orangebusinesscentre.in" className="text-text-black hover:text-primary font-medium">hello@orangebusinesscentre.in</a></p>
                            </li>
                            <li>
                                <p>Sales: <a href="tel:+919999999999" className="text-text-black hover:text-primary font-medium">+91 999 999 9999</a></p>
                            </li>
                            <li className="pt-2">
                                <p className="text-xs">
                                    Visakhapatnam Smart City Building,<br />
                                    Visakhapatnam, Andhra Pradesh
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
                    <p>© {new Date().getFullYear()} Orange Business Centre. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
