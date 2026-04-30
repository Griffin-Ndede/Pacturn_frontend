import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            {/* Navbar */}
            <div className="w-full z-20 fixed px-6 md:px-10 py-4 shadow-lg bg-white backdrop-blur-md">
                <div className="flex justify-between items-center w-5/6 mx-auto text-center">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="/public/images/Pacturn horizontal logo_1.png"
                            alt="Pacturn Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex text-custom-navy gap-8 items-center font-light font-menu">
                        <li>
                            <Link to="/" className="hover:text-custom-gold">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-custom-gold">About us</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-custom-gold">Services</Link>
                        </li>
                        <li>
                            <Link to="/research-desk" className="hover:text-custom-gold">Research Desk</Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/contact" className="hidden md:block btn-primary font-light">Contact</Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-custom-navy focus:outline-none"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed right-0 top-16 bg-white px-8 py-6 rounded-bl-lg shadow-lg z-10">
                    <ul className="space-y-6 text-custom-navy font-menu font-light text-right text-base">
                        <li>
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-custom-gold ">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-custom-gold ">About us</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-custom-gold ">Services</Link>
                        </li>
                        <li>
                            <Link to="/research-desk" onClick={() => setIsMenuOpen(false)} className="hover:text-custom-gold ">Research Desk</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-custom-gold ">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;