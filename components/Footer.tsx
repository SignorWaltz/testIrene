import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h3 className="font-serif text-2xl mb-4">Bar di Irene</h3>
                    <p className="text-primary/80 text-sm leading-relaxed">
                        Il luogo ideale per i tuoi momenti di relax. <br />
                        Vieni a trovarci!
                    </p>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-primary">Contatti</h4>
                    <ul className="space-y-2 text-sm text-primary/80">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} /> Via Roma 123, Milano
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +39 02 1234567
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-primary">Seguici</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-primary/60">
                <p>&copy; {new Date().getFullYear()} Bar di Irene. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
};

export default Footer;
