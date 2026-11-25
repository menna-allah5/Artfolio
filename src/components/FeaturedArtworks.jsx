import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { artworks } from "../data/artworks";
import { useFavorites } from "../context/FavoritesContext";

function FeaturedArtworks() {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <section className="bg-white py-20 transition-colors duration-500 dark:bg-[#1e1810] ">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="animate-fade-up">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                            Curated Selection
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-4xl ">
                            Featured Artworks
                        </h2>

                        <p className="mt-4 max-w-2xl text-[#151515]/60 dark:text-[#F5EBDD]/60 ">
                            A selection of artworks worth discovering.
                        </p>
                    </div>

                    <Link
                        to="/explore"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-[#151515] transition hover:text-[#D97757] dark:text-[#F5EBDD] "
                    >
                        View all
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="transition duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {artworks.slice(0, 4).map((artwork, index) => (
                        <article
                            key={artwork.id}
                            className="group animate-fade-up transition duration-500 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 group-hover:shadow-xl dark:bg-[#2a2219] ">

                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <button
                                    type="button"
                                    onClick={() => toggleFavorite(artwork.id)}
                                    aria-label={`Add ${artwork.title} to favorites`}
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110 dark:bg-[#2a2219]/90 "
                                >
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={
                                            isFavorite(artwork.id)
                                                ? "text-[#D97757]"
                                                : "text-[#151515] dark:text-[#F5EBDD] "
                                        }
                                    />
                                </button>

                                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Link
                                        to={`/artwork/${artwork.id}`}
                                        className="flex items-center justify-center gap-2 rounded-full bg-[#151515]/90 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-[#D97757]"
                                    >
                                        View Artwork
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#D97757]">
                                    {artwork.category}
                                </p>

                                <h3 className="mt-2 text-lg font-semibold text-[#151515] dark:text-[#F5EBDD] ">
                                    {artwork.title}
                                </h3>

                                <p className="mt-1 text-sm text-[#151515]/55 dark:text-[#F5EBDD]/55 ">
                                    {artwork.artist}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedArtworks;