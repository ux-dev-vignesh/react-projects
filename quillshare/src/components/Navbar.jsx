// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
    "Videos", "Photos", "Illustrations", "Vectors", "Audio",
    "Templates", "Free", "Fonts", "3D", "Customize (Preview)"
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b shadow-sm">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section */}
                    <div className="flex items-center space-x-3">
                        <div className="grid place-items-center w-8 h-8 bg-gray-200 rounded-sm">
                            <div className="text-xs font-bold">St</div>
                        </div>
                        <span className="text-lg font-semibold">Adobe Stock</span>
                    </div>

                    {/* Center Menu (Desktop) */}
                    <div className="hidden md:flex space-x-5 text-sm text-gray-600 font-medium">
                        {menuItems.map((item, i) => (
                            <a key={i} href="#" className="hover:text-black whitespace-nowrap">{item}</a>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                        <a href="#" className="hover:text-black">Sell</a>
                        <a href="#" className="hover:text-black">Pricing</a>
                        <a href="#" className="hover:text-black">Sign in</a>
                        <button className="hover:text-black">
                            <span className="text-lg">?</span>
                        </button>
                        <span className="text-2xl font-bold">🅰️</span>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 py-3 space-y-2 text-sm text-gray-600 border-t">
                    {menuItems.map((item, i) => (
                        <a key={i} href="#" className="block hover:text-black">{item}</a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
