import Hero from "@/components/home/Hero";
import Amenities from "@/components/home/Amenities";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background-white">
      <Hero />
      <Amenities />

      {/* WeWork Style Locations CTA Section */}
      <section id="centres" className="py-24 bg-text-charcoal text-background-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay bg-black/80 py-24 rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 border-4 border-primary m-4 md:m-8 opacity-20 pointer-events-none"></div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Three premium locations. <span className="text-primary italic">One standard of luxury.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-border-light mb-10 relative z-10">
            From the bustling Smart City Building to the exclusive Naval Trade Center, find the perfect space for your business to thrive in Visakhapatnam.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-background-white px-8 py-4 text-base font-semibold transition-all relative z-10 shadow-lg hover:-translate-y-1">
            Browse All Centres
          </button>
        </div>
      </section>
    </div>
  );
}
