import { useState } from "react";
import logo from "./assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="overflow-x-clip sticky top-0 z-50">
            <div className="container mx-auto px-4 py-5 relative bg-white">

                {/* Navbar Main */}
                <div className="flex items-center justify-between min-h-10">

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden shrink-0 text-2xl text-text-secondary hover:text-red-500 transition-colors duration-300"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Logo */}
                    <div className="shrink-0 md:order-0">
                        <img
                            src={logo}
                            alt="Dev-Stack"
                            className="w-32 sm:w-36 md:w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4 lg:gap-5">
                            <li className="text-red-500 font-semibold cursor-pointer">
                                Home
                            </li>

                            <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                                Technologies
                            </li>

                            <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                                Projects
                            </li>

                            <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                                About
                            </li>

                            <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                                Contact
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3 lg:gap-5">
                        <button className="text-secondary outline-none font-semibold cursor-pointer px-4 py-2 rounded-md hover:brand-bg 
                        hover:text-white hover:opacity-90 transition-all duration-200">Sign In</button>

                        <button className="brand-bg text-white font-semibold 
                        cursor-pointer px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="md:hidden flex items-center gap-1">
                        <button
                            type="button"
                            className="text-secondary font-semibold cursor-pointer px-2 py-2 text-sm rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold cursor-pointer px-2 py-2 text-sm rounded-xl hover:opacity-90 transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <nav
                    className={`
                        md:hidden absolute top-full left-4 mt-3
                        w-[calc(100%-2rem)] max-w-72
                        rounded-2xl p-6
                        bg-white/95 backdrop-blur-xl
                        border border-slate-200/70
                        shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                        z-50
                        transition-all duration-300 ease-in-out
                        origin-top-left
                        ${isOpen
                            ? "scale-100 opacity-100 visible"
                            : "scale-95 opacity-0 invisible pointer-events-none"
                        }
                    `}
                >
                    {/* Navigation Links */}
                    <ul className="flex flex-col items-start gap-5">
                        <li className="text-red-500 font-semibold cursor-pointer">
                            Home
                        </li>

                        <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                            Technologies
                        </li>

                        <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                            Projects
                        </li>

                        <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                            About
                        </li>

                        <li className="text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Desktop Divider */}
            <div className="border-b border-slate-200"></div>
        </header>
    );
};

export default Navbar;