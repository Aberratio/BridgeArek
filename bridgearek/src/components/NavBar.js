import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="my-primary-background">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-100 text-4xl font-bold cursive tracking-widest" 
                        to="/" 
                        exact>
                        Areczek
                    </NavLink>
                    <NavLink 
                        activeClassName="text-blue-100"
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100"
                        to="/project">
                        Ogłoszenia 
                    </NavLink>
                    <NavLink 
                        activeClassName="block text-blue-100"
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100"
                        to="/post">
                        Wyniki
                    </NavLink>
                    <NavLink 
                        activeClassName="text-blue-100"
                        className="inline-flex items-center py-3 px-3 my-6 hover:text-blue-100"
                        to="/about">
                        Informacje
                    </NavLink>
                </nav>
            </div>
        </header>
        )
} 