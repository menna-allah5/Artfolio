import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { artists } from "../data/artists";

function FeaturedArtists() {
    return (
        <section className="bg-[#F5EBDD] py-20 transition-colors duration-500 dark:bg-[#1e1810] ">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="animate-fade-up">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                            Creative Minds
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-4xl ">
                            Featured Artists
                        </h2>

                        <p className="mt-4 max-w-2xl text-[#151515]/60 dark:text-[#F5EBDD]/60 ">
                            Meet the artists behind some of the most inspiring works.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {artists.map((artist, index) => (
                        <Link
                            key={artist.id}
                            to={`/artist/${artist.id}`}
                            className="group animate-fade-up overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-[#2a2219] "
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#D97757]">
                                    {artist.role}
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-[#151515] dark:text-[#F5EBDD] ">
                                    {artist.name}
                                </h3>

                                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#151515]/55 dark:text-[#F5EBDD]/55 ">
                                    {artist.bio}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#151515] transition group-hover:text-[#D97757] dark:text-[#F5EBDD] ">
                                    View Profile
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="transition duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedArtists;