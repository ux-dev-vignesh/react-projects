import React, { useState, useEffect } from 'react'
import { fetchMenus } from '../services/firebaseService'

const Navbar = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const getmenus = async () => {
            const menuItems = await fetchMenus();
            setMenus(menuItems);
        };
        getmenus();
    }, []);

    

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-semibold">EDGY ART</a>
                <div className="block lg:hidden">
                    <button className="text-white" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex space-x-6">
                    {menus.map((menu, index) => (
                        <a key={index} href={menu.link} className="text-white hover:text-gray-400">
                            {menu.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar