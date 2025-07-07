import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full fixed top-0 left-0 z-50 shadow-lg backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.reload()}>
                    <img src="src/assets/logo1.png" alt="Logo" className="h-12 transition-transform hover:scale-105 duration-300" />
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    {['Home', 'Sell Now', 'About Us', 'Blog', 'Contact Us', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-white font-medium text-lg relative group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button className="p-2 rounded bg-black/10 focus:outline-none hover:bg-white/10 transition" onClick={toggleMenu}>

                        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-4 px-6' : 'max-h-0'
                    } backdrop-blur-md bg-white/5 text-white`}
            >

                <div className="space-y-4">
                    {['Home', 'Sell Now', 'About Us', 'Blog', 'Contact Us', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block text-lg font-medium hover:text-green-100 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
