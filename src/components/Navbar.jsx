import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../context/FavoritesContext";
import { useTheme } from "../context/ThemeContext";

import {
    faHeart,
    faBars,
    faXmark,
    faMoon,
    faSun
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { favoriteIds } = useFavorites();
    const { isDark, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "Collections", path: "/collections" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#151515]/10 bg-[#F5EBDD]/95 backdrop-blur-md transition-colors duration-500 dark:border-[#F5EBDD]/10 dark:bg-[#1e1810]/95">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex items-center justify-between py-5">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD]"
                    >
                        ART<span className="text-[#D97757]">FOLIO</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${isActive
                                        ? "bg-[#151515] text-white dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                                        : "text-[#151515] hover:bg-[#D97757]/10 hover:text-[#D97757] dark:text-[#F5EBDD]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        {/* Theme Toggle */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            className={`relative flex h-9 w-16 shrink-0 items-center rounded-full px-1.5 transition-colors duration-500 ${isDark ? "bg-[#2a2219]" : "bg-[#151515]/10"
                                }`}
                        >
                            {/* Background icons (static) */}
                            <FontAwesomeIcon
                                icon={faSun}
                                className="absolute left-2 text-xs text-[#D97757]"
                            />
                            <FontAwesomeIcon
                                icon={faMoon}
                                className="absolute right-2 text-xs text-[#F5EBDD]/60"
                            />

                            {/* Sliding thumb */}
                            <span
                                className={`z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ease-in-out dark:bg-[#F5EBDD] ${isDark ? "translate-x-7" : "translate-x-0"
                                    }`}
                            >
                                <FontAwesomeIcon
                                    icon={isDark ? faMoon : faSun}
                                    className={`text-xs transition-colors duration-300 ${isDark ? "text-[#1e1810]" : "text-[#D97757]"
                                        }`}
                                />
                            </span>
                        </button>

                        {/* Favorites */}
                        <Link
                            to="/favorites"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#151515] transition hover:bg-black/5 dark:text-[#F5EBDD] dark:hover:bg-white/10"
                            aria-label="Favorites"
                        >
                            <FontAwesomeIcon icon={faHeart} />

                            {favoriteIds.length > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D97757] px-1 text-xs font-semibold text-white">
                                    {favoriteIds.length}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu */}
                        <button
                            type="button"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-xl text-[#151515] transition duration-300 hover:text-[#D97757] dark:text-[#F5EBDD] md:hidden"
                        >
                            <FontAwesomeIcon
                                icon={isMenuOpen ? faXmark : faBars}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden transition-all duration-500 md:hidden ${isMenuOpen
                        ? "max-h-96 pb-5 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-2 border-t border-[#151515]/10 pt-4 dark:border-[#F5EBDD]/10">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-xl px-4 py-3 text-sm font-medium transition duration-300 ${isActive
                                        ? "bg-[#151515] text-white dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                                        : "text-[#151515] hover:bg-[#D97757]/10 hover:text-[#D97757] dark:text-[#F5EBDD]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/favorites"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-[#151515] transition hover:bg-[#D97757]/10 hover:text-[#D97757] dark:text-[#F5EBDD]"
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            Favorites
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;