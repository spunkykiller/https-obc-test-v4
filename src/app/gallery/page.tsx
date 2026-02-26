import Image from 'next/image';

export const metadata = {
    title: 'Gallery | Orange Business Centre',
    description: 'Explore our premium coworking spaces and independent cubes in Visakhapatnam.',
};

const photos = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556761175-5973bd0f32a7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
];

export default function GalleryPage() {
    return (
        <div className="w-full bg-background-white flex flex-col pt-10 pb-24">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-black leading-tight mb-6">
                    Our <span className="text-primary italic">Gallery</span>
                </h1>
                <p className="text-lg text-text-charcoal max-w-3xl mx-auto leading-relaxed">
                    Take a visual tour of our state-of-the-art office spaces and premium amenities.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((src, index) => (
                        <div key={index} className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
