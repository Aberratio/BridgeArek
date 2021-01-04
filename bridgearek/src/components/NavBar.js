import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-black bg-opacity-80">
            <div className="container mx-auto flex justify-between">
                <nav className="flex text-lg my-primary-text">
                    <NavLink 
                        className="inflex-flex items-center text-green-300 py-8 px-3 mr-6 text-red-50 hover:text-blue-100 text-4xl font-bold cursive tracking-widest" 
                        activeClassName="text-white"
                        to="/" 
                        exact>
                        Arkowe
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100 text-xl"
                        activeClassName="text-blue-100"
                        to="/ogloszenia">
                        Ogłoszenia 
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100 text-xl"
                        activeClassName="block text-blue-100"
                        to="/wtorkowe">
                        Wtorkowe
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100 text-xl"
                        activeClassName="block text-blue-100"
                        to="/okazjonalne">
                        Okazjonalne
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100 text-xl"
                        activeClassName="text-blue-100"
                        to="/info">
                        Informacje
                    </NavLink>
                </nav>
            </div>
        </header>
        )
} 