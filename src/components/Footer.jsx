import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#151515] text-white transition-colors duration-500 dark:bg-[#140f09] ">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            ART<span className="text-[#D97757]">FOLIO</span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                            A digital art gallery created to help you discover inspiring
                            artworks and creative artists.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D97757]">
                            Explore
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            <Link
                                to="/explore"
                                className="text-sm text-white/60 transition hover:text-white"
                            >
                                Artworks
                            </Link>

                            <Link
                                to="/collections"
                                className="text-sm text-white/60 transition hover:text-white"
                            >
                                Collections
                            </Link>

                            <Link
                                to="/favorites"
                                className="text-sm text-white/60 transition hover:text-white"
                            >
                                Favorites
                            </Link>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D97757]">
                            Artfolio
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            <Link
                                to="/about"
                                className="text-sm text-white/60 transition hover:text-white"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/"
                                className="text-sm text-white/60 transition hover:text-white"
                            >
                                Home
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                    <p className="text-center text-xs text-white/40">
                        © 2026 Artfolio. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;