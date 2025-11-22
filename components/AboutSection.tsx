import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <div
                        className="aspect-square rounded-lg overflow-hidden shadow-xl"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1442512595331-e89e7385a861?q=80&w=2574&auto=format&fit=crop")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">La Nostra Storia</h2>
                    <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                        Benvenuti al <strong>Bar di Irene</strong>. Dal 2024 serviamo i migliori caffè e aperitivi della città in un ambiente accogliente e familiare.
                    </p>
                    <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                        La nostra passione per la qualità si riflette in ogni tazzina e in ogni dolce che prepariamo. Che sia per una colazione veloce o un aperitivo rilassante con gli amici, qui troverai sempre un sorriso ad accoglierti.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <div className="text-center">
                            <span className="block font-serif text-3xl text-accent">100%</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Caffè Arabica</span>
                        </div>
                        <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
                        <div className="text-center">
                            <span className="block font-serif text-3xl text-accent">Fatto in Casa</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Ogni Giorno</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
