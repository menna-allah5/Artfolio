import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPalette,
    faUsers,
    faHeart,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="max-w-3xl animate-fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                        About Artfolio
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-6xl">
                        A space for creativity,
                        <br />
                        inspiration, and art.
                    </h1>

                    <p className="mt-6 text-base leading-8 text-[#151515]/60 dark:text-[#F5EBDD]/60 sm:text-lg">
                        Artfolio is a creative platform designed to showcase inspiring
                        artworks and connect people with artists and visual stories from
                        different creative fields.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mt-16 grid gap-6 lg:grid-cols-2">

                    {/* Text Card */}
                    <div className="rounded-3xl bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-[#2a2219] lg:p-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D97757] text-white">
                            <FontAwesomeIcon icon={faPalette} />
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                            Our Mission
                        </h2>

                        <p className="mt-4 leading-8 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                            Our mission is to create a simple and inspiring place where
                            creativity can be discovered, appreciated, and shared. Artfolio
                            brings different forms of visual art together in one beautiful
                            experience.
                        </p>
                    </div>

                    {/* Community Card */}
                    <div className="rounded-3xl bg-[#151515] p-8 text-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-[#2a2219] lg:p-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D97757]">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold">
                            Our Community
                        </h2>

                        <p className="mt-4 leading-8 text-white/60">
                            Artfolio is made for artists, designers, photographers, and
                            anyone who enjoys discovering creative work and visual
                            inspiration.
                        </p>
                    </div>

                </section>

                {/* Values */}
                <section className="mt-20">

                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                            What We Believe
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-[#151515] dark:text-[#F5EBDD] sm:text-4xl">
                            Creativity should be easy to discover.
                        </h2>

                        <p className="mt-4 leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                            We believe every artwork has a story, and every creative person
                            deserves a space where their work can be seen.
                        </p>
                    </div>

                    {/* Value Cards */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="group rounded-2xl bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-[#2a2219]">
                            <FontAwesomeIcon
                                icon={faPalette}
                                className="text-2xl text-[#D97757] transition duration-300 group-hover:scale-110"
                            />

                            <h3 className="mt-5 text-lg font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                Creativity
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                Celebrating unique ideas, styles, and creative expressions.
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-[#2a2219]">
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="text-2xl text-[#D97757] transition duration-300 group-hover:scale-110"
                            />

                            <h3 className="mt-5 text-lg font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                Community
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                Connecting people through art, inspiration, and shared ideas.
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-[#2a2219]">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="text-2xl text-[#D97757] transition duration-300 group-hover:scale-110"
                            />

                            <h3 className="mt-5 text-lg font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                Inspiration
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                Helping visitors discover artwork that sparks new ideas.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="mt-20 overflow-hidden rounded-3xl bg-[#D97757] px-8 py-12 text-center sm:px-12 lg:py-16">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Discover something inspiring.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
                        Explore our collection of artworks and find creative work that
                        catches your eye.
                    </p>

                    <Link
                        to="/explore"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#151515] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-[#151515]"
                    >
                        Explore Artwork
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </section>

            </div>
        </main>
    );
}

export default About;