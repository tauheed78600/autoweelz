import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LOGO from '../assets/logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const items = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Sell Now",
            link: "/sell-now"
        },
        {
            name: "About us",
            link: "/about-us"
        },
                {
            name: "Blogs",
            link: "/blogs"
        },
                {
            name: "Contact us",
            link: "/about-us"
        },
                {
            name: "FAQ",
            link: "/faq"
        }
    ]

    return (
        <header className="w-full fixed top-0 left-0 z-50 shadow-lg bg-black/50 backdrop-blur-md text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.reload()}>
                    <img src={LOGO} alt="Logo" className="h-12 transition-transform hover:scale-105 duration-300" />
                </div>
                <div>
                    {/* <p className='md:hidden lg:text-sm'>Call now at <span className='text-blue-300'>+91-9923073108</span></p> */}
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="text-white font-medium text-lg relative group"
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button className="p-2 rounded focus:outline-none hover:bg-white/10 transition" onClick={toggleMenu}>

                        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-white/5 z-50 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-4 px-6' : 'max-h-0'
                    } backdrop-blur-md  text-white`}
            >

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="block text-lg font-medium hover:text-green-100 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
