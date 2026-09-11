import { useState } from "react";
import logo from "./assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div className="container mx-auto px-4 pt-5 relative">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={logo} alt="Dev-Stack" className="w-36 md:w-auto" />
                    </div>
                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-5">
                            <li className="text-red-500 font-semibold cursor-pointer"> Home</li>
                            <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Technologies</li>
                            <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Projects</li>
                            <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">About</li>
                            <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Contact</li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex items-center gap-5">
                        <button className="text-text-secondary font-semibold cursor-pointer px-4 py-2 hover:bg-red-500 hover:text-white transition-all 
                        duration-300 rounded-2xl">Sign In</button>
                        <button className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold cursor-pointer px-4 py-2 
                        rounded-2xl hover:opacity-90 transition-all duration-300">Sign Up</button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl text-text-secondary hover:text-red-500 transition-colors duration-300"
                        aria-label="Toggle menu" >{isOpen ? <FiX /> : <FiMenu />}</button>

                </div>

                {/* Mobile Menu */}
                <nav className={`md:hidden absolute top-full right-4 mt-3 w-72 max-w-[calc(100vw-2rem)] rounded-2xl p-6
                        bg-white/95 backdrop-blur-xl border border-slate-200/70 shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                        z-50 transition-all duration-500 ease-in-out
                        ${isOpen ? "translate-x-0 opacity-100"
                        : "translate-x-[120%] opacity-0 pointer-events-none"
                    }
                    `}
                >
                    {/* Navigation Links */}
                    <ul className="flex flex-col items-end gap-5">
                        <li className="text-red-500 font-semibold cursor-pointer">Home</li>
                        <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Technologies</li>
                        <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Projects</li>
                        <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">About</li>
                        <li className="text-text-secondary font-semibold cursor-pointer hover:text-red-500 transition-colors duration-300">Contact</li>
                    </ul>

                    {/* Divider */}
                    <div className="border-t border-slate-200 mt-6 pt-5">
                        <div className="flex justify-end gap-3">
                            <button className="px-4 py-2 text-text-secondary font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300">Sign In</button>
                            <button className="px-4 py-2 bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300">Sign Up</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="md:divider"></div>
        </section>
    );
};

export default Navbar;