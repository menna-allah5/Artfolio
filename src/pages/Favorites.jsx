import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHeart,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { artworks } from "../data/artworks";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
    const { favoriteIds, toggleFavorite } = useFavorites();

    const favoriteArtworks = artworks.filter((artwork) =>
        favoriteIds.includes(artwork.id)
    );

    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="animate-fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                        Your Collection
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-6xl">
                        My Favorites
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                        Artworks you have saved and want to keep close.
                    </p>
                </div>

                {/* Empty State */}
                {favoriteArtworks.length === 0 ? (
                    <div className="mt-16 flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white px-6 text-center dark:bg-[#2a2219]">

                        <FontAwesomeIcon
                            icon={faHeart}
                            className="mb-6 text-6xl text-gray-300 dark:text-[#F5EBDD]/15"
                        />

                        <h2 className="text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                            No favorites yet
                        </h2>

                        <p className="mb-6 mt-2 max-w-md text-gray-500 dark:text-[#F5EBDD]/50">
                            Start exploring and save the artworks you love.
                        </p>

                        <Link
                            to="/explore"
                            className="inline-flex items-center gap-2 rounded-full bg-[#151515] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#D97757] dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                        >
                            Explore Artworks
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>

                    </div>
                ) : (
                    <>
                        {/* Results Header */}
                        <div className="mt-14 flex items-center justify-between gap-4">
                            <h2 className="text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                Saved Artworks
                            </h2>

                            <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                {favoriteArtworks.length}{" "}
                                {favoriteArtworks.length === 1
                                    ? "artwork"
                                    : "artworks"}
                            </p>
                        </div>

                        {/* Artwork Cards */}
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {favoriteArtworks.map((artwork, index) => (
                                <article
                                    key={artwork.id}
                                    className="group animate-fade-up transition duration-500 hover:-translate-y-2"
                                    style={{
                                        animationDelay: `${index * 0.08}s`,
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 group-hover:shadow-xl dark:bg-[#2a2219]">

                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        {/* Favorite Button */}
                                        <button
                                            onClick={() => toggleFavorite(artwork.id)}
                                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110 dark:bg-[#2a2219]/90"
                                            aria-label={`Remove ${artwork.title} from favorites`}
                                        >
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="text-[#D97757]"
                                            />
                                        </button>

                                        {/* View Button */}
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

                                    {/* Card Info */}
                                    <div className="mt-4">

                                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#D97757]">
                                            {artwork.category}
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                            {artwork.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#151515]/55 dark:text-[#F5EBDD]/55">
                                            {artwork.artist}
                                        </p>

                                    </div>
                                </article>
                            ))}

                        </div>
                    </>
                )}

            </div>
        </main>
    );
}

export default Favorites;