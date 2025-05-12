import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import API_BASE_URL from '../services/api';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menus, setMenus] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Handle scroll event
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Make the API call
        axios.get(`${API_BASE_URL}/api/menus`)
            .then((res) => setMenus(res.data))
            .catch((err) => console.error(err));

        // Cleanup: remove the scroll event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`w-full top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "fixed bg-white shadow-md text-black" : "absolute bg-transparent text-stone-100"}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">EDGY <span className="text-lime-600">ART</span></Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {menus.map((item) => (
                        <li key={item.id}>
                            <Link to={item.link} className="hover:text-lime-500 transition-colors duration-300">{item.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl transition-transform duration-300">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white text-black py-4 transition-all duration-300 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-10"}`}>
                <ul className="space-y-4 text-center">
                    {menus.map((item) => (
                        <li key={item.id}>
                            <Link to={item.link} className="block py-2 px-4 transition-colors duration-300">{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
