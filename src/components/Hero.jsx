import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="overflow-hidden bg-[#F5EBDD] transition-colors duration-500 dark:bg-[#1e1810]">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">

                {/* Text */}
                <div className="animate-fade-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                        Digital Art Gallery
                    </p>

                    <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#151515] transition-colors duration-500 dark:text-[#F5EBDD] sm:text-6xl lg:text-7xl ">
                        Discover Art.
                        <br />
                        <span className="text-[#D97757]">Feel the Story.</span>
                    </h1>

                    <p className="text-[#151515]/60 dark:text-[#F5EBDD]/60 ">
                        Explore a curated collection of digital artworks, creative
                        collections, and inspiring artists from around the world.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            to="/explore"
                            className="inline-flex items-center justify-center rounded-full bg-[#151515] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#D97757] dark:bg-[#F5EBDD] dark:text-[#1e1810] dark:hover:bg-[#D97757] dark:hover:text-white "
                        >
                            Explore Artworks
                        </Link>

                        <Link
                            to="/collections"
                            className="inline-flex items-center justify-center rounded-full border border-[#151515]/20 px-7 py-3.5 text-sm font-medium text-[#151515] transition duration-300 hover:border-[#D97757] hover:text-[#D97757] dark:border-[#F5EBDD]/20 dark:text-[#F5EBDD] "
                        >
                            View Collections
                        </Link>

                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative animate-fade-in">
                    <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition-colors duration-500 dark:bg-[#2a2219] ">
                        <img
                            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=80"
                            alt="Featured artwork"
                            className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="absolute -bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm transition-colors duration-500 dark:bg-[#2a2219]/95 ">
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#D97757]">
                            Featured Artwork
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#151515] dark:text-[#F5EBDD] ">
                            Colors of Emotion
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;