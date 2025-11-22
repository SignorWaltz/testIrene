import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="font-serif text-6xl md:text-8xl mb-6 animate-fade-in">
                    Bar di Irene
                </h1>
                <p className="font-sans text-xl md:text-2xl tracking-wide uppercase opacity-90">
                    Il tuo momento di pausa perfetto
                </p>
                <div className="mt-10">
                    <a href="#menu" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-bold">
                        Scopri il Menù
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
