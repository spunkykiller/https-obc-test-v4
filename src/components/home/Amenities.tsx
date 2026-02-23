import {
    BuildingOffice2Icon, // Used for lounge/reception
    WifiIcon,
    VideoCameraIcon,
    ShieldCheckIcon,
    ClockIcon,
    CubeTransparentIcon // Used for custom desks
} from '@heroicons/react/24/outline';
import { CupWaterIcon } from 'lucide-react'; // Simulating a coffee/pantry icon

const AMENITIES = [
    { icon: ClockIcon, title: '24/7 Access', desc: 'Secure, round-the-clock access to your business cabin.' },
    { icon: ShieldCheckIcon, title: 'Premium Security', desc: 'CCTV surveillance and strict biometric access systems.' },
    { icon: WifiIcon, title: 'Enterprise Wi-Fi', desc: 'High-speed, uninterrupted internet connectivity.' },
    { icon: VideoCameraIcon, title: 'Conference Hub', desc: 'Fully equipped halls with LED screens and HD projectors.' },
    { icon: BuildingOffice2Icon, title: 'Business Lounge', desc: 'Elegant reception and waiting areas for your clients.' },
    { icon: CubeTransparentIcon, title: 'Custom Workstations', desc: 'Fully furnished spaces with your choice of customization.' },
];

export default function Amenities() {
    return (
        <section className="py-24 bg-background-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-black mb-6">
                        Everything your business needs. Nothing you don't.
                    </h2>
                    <p className="text-lg text-text-muted">
                        We provide an all-inclusive, premium environment. Enjoy dedicated staff, top-tier tech, and a luxurious pantry with light refreshments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {AMENITIES.map((amenity, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 group hover:bg-background-pearl transition duration-300 rounded-lg">
                            <div className="h-16 w-16 bg-background-slate rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <amenity.icon className="h-8 w-8 text-text-charcoal group-hover:text-background-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-text-black mb-3">{amenity.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {amenity.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
