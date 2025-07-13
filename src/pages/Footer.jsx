import { Facebook, Instagram, Locate, Mail, Phone, Twitter } from 'lucide-react';
import React from 'react';

function Footer() {
    return (
        <div className="p-6 border-t border-t-gray-200 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <div>
                        <h2 className="text-3xl text-blue-900 font-semibold mb-4">Quick Links</h2>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="http://localhost:5173"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg">
                                Home
                            </a>
                            <a
                                href="http://localhost:5173/about"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                About Us
                            </a>
                            <a
                                href="http://localhost:5173/sell-now"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                Sell now
                            </a>
                            <a
                                href="http://localhost:5173/blog"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                Blog
                            </a>
                            <a
                                href="http://localhost:5173/privacy-policy"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="http://localhost:5173/terms-n-conditions"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                Terms and Conditions
                            </a>
                            <a
                                href="http://localhost:5173/faqs"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                FAQs
                            </a>
                            <a
                                href="http://localhost:5173/contact-us"
                                className="text-blue-900 hover:text-blue-700 text-sm hover:underline transition duration-300 text-lg"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl text-blue-900 font-semibold mb-4">Contact Us</h2>
                        <div className="flex flex-col space-y-2 text-gray-700 text-sm">
                            <p className='flex flex-row gap-2'><Mail className='h-5 w-5' /> support@biketrader.com</p>
                            <p className='flex flex-row gap-2'><Phone className='h-5 w-5' /> 9021492752</p>
                            <p className='flex flex-row gap-2'><Locate className='h-5 w-5' /> Rasta Peth, Pune</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl text-blue-900 font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-900 hover:text-blue-700 text-sm transition duration-300"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://twitter.com "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-900 hover:text-blue-700 text-sm transition duration-300"
                            >
                                <Twitter />
                            </a>
                            <a
                                href="https://instagram.com "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-900 hover:text-blue-700 text-sm transition duration-300"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full border-t-gray-100 bg-gray-100 flex justify-center'>
                    <p>Made with ❤ by Tauheed</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;