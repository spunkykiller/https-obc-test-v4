import Image from 'next/image';

export const metadata = {
    title: 'About Us | Orange Business Centre',
    description: 'Learn why Orange Business Centre is the premier choice for luxury co-working and private offices in Visakhapatnam.',
};

export default function AboutPage() {
    return (
        <div className="w-full bg-background-white flex flex-col pt-10 pb-24">

            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-black leading-tight mb-6">
                    Why <span className="text-primary italic">Orange Business Centre?</span>
                </h1>
                <p className="text-lg text-text-charcoal max-w-3xl mx-auto leading-relaxed">
                    We provide you with a state-of-the-art experience of fully furnished, plug-and-play office spaces with customized packages to help you and your company grow. Quality and Professional Environment with all Amenities is our motto.
                </p>
            </section>

            {/* Legacy Content: Extracted directly from the original orangebusinesscentre.in */}
            <section className="bg-background-pearl py-20 border-y border-border-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* The Text List */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-text-black mb-10">The Orange Advantage</h2>
                            <ul className="space-y-6 text-base text-text-charcoal leading-relaxed list-none">
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Save exorbitant investment costs for setting up office spaces.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Focus on your business targets without the burden of admin and maintenance of infrastructure.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Top class office space with dedicated admin staff for assistance.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Work in the heart of the city at Vizag’s prime location - Inox Leisure, Beach Road, Maharanipeta.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Cordial work-life balance with cafeteria, juice bar, pub and movie halls co-located in the same building.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Ideal work atmosphere with customised workstations.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-4 text-lg">✓</span>
                                    Assured growth in current transforming economy.
                                </li>
                            </ul>
                        </div>

                        {/* Visual Anchor */}
                        <div className="relative h-[600px] w-full bg-background-slate rounded-lg overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
