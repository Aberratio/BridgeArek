import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-black bg-opacity-90 sm:fixed w-full z-40 top-0">
            <div className="container mx-auto flex justify-between">
                <nav className="md:flex text-lg my-primary-text">
                    <NavLink 
                        className="text-3xl md:text-4xl inline-flex items-center text-green-300 py-2 pt-4 md:py-8 px-3 md:mr-6 text-red-50 hover:text-blue-100 font-bold cursive tracking-widest" 
                        activeClassName="text-white"
                        to="/" 
                        exact>
                        Brydż nad Odrą
                    </NavLink>
                    <NavLink 
                        className="block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl"
                        activeClassName="text-blue-100"
                        to="/ogloszenia">
                        Ogłoszenia 
                    </NavLink>
                    <NavLink 
                        className="block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl"
                        activeClassName="block text-blue-100"
                        to="/wtorkowe">
                        Wtorkowe
                    </NavLink>
                    <NavLink 
                        className="block px-auto md:inline-flex items-center md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl"
                        activeClassName="block text-blue-100"
                        to="/okazjonalne">
                        Okazjonalne
                    </NavLink>
                    <NavLink 
                        className="block px-auto md:inline-flex items-center pb-4 md:py-3 px-3 mt-2 md:my-6 hover:text-blue-100 text-base md:text-xl"
                        activeClassName="text-blue-100"
                        to="/info">
                        Informacje
                    </NavLink>
                </nav>
            </div>
        </header>
        )
} 