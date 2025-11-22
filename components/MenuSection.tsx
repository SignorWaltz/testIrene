import React from 'react';

const MenuSection = () => {
    const categories = [
        {
            title: "Caffetteria",
            items: [
                { name: "Espresso", price: "1.50€", description: "Miscela arabica 100%" },
                { name: "Cappuccino", price: "2.50€", description: "Latte fresco e caffè espresso" },
                { name: "Latte Macchiato", price: "3.00€", description: "Schiuma di latte vellutata" },
                { name: "Irene's Special", price: "3.50€", description: "Caffè, panna, cacao e nocciola" },
            ]
        },
        {
            title: "Pasticceria",
            items: [
                { name: "Cornetto", price: "1.50€", description: "Vuoto, crema, cioccolato o marmellata" },
                { name: "Muffin", price: "2.50€", description: "Cioccolato o mirtilli" },
                { name: "Torta del Giorno", price: "4.00€", description: "Fatta in casa ogni mattina" },
            ]
        },
        {
            title: "Aperitivi",
            items: [
                { name: "Spritz", price: "5.00€", description: "Aperol, Campari o Select" },
                { name: "Prosecco", price: "4.00€", description: "DOCG Valdobbiadene" },
                { name: "House Cocktail", price: "6.00€", description: "La ricetta segreta di Irene" },
            ]
        }
    ];

    return (
        <section id="menu" className="py-20 px-4 bg-primary/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-accent mb-4">Il Nostro Menù</h2>
                    <p className="font-sans text-gray-600 max-w-2xl mx-auto">
                        Ingredienti selezionati con cura per offrirti il meglio in ogni momento della giornata.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((category, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-accent">
                            <h3 className="font-serif text-2xl text-accent mb-6 text-center border-b pb-4 border-primary">{category.title}</h3>
                            <ul className="space-y-6">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex justify-between items-start group">
                                        <div>
                                            <h4 className="font-bold text-gray-800 group-hover:text-accent transition-colors">{item.name}</h4>
                                            <p className="text-sm text-gray-500 italic">{item.description}</p>
                                        </div>
                                        <span className="font-serif font-bold text-accent">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
