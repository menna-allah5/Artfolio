import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faArrowLeft,
    faArrowRight,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { collections } from "../data/collections";
import { artworks } from "../data/artworks";
import { useFavorites } from "../context/FavoritesContext";

function CollectionDetails() {
    const { id } = useParams();

    const collection = collections.find(
        (item) => item.id === Number(id)
    );

    const { toggleFavorite, isFavorite } = useFavorites();

    // Collection not found
    if (!collection) {
        return (
            <main className="min-h-screen bg-[#F5EBDD] flex items-center justify-center px-6 dark:bg-[#1e1810]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#151515] mb-4 dark:text-[#F5EBDD]">
                        Collection Not Found
                    </h1>

                    <Link
                        to="/collections"
                        className="text-[#D97757] hover:underline"
                    >
                        Back to Collections
                    </Link>
                </div>
            </main>
        );
    }

    // Get artworks belonging to this collection
    const collectionArtworks = artworks.filter((artwork) =>
        collection.artworkIds.includes(artwork.id)
    );

    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Back Button */}
                <div className="mb-10">
                    <Link
                        to="/collections"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#151515] transition hover:text-[#D97757] dark:text-[#F5EBDD]"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to Collections
                    </Link>
                </div>

                {/* Collection Header */}
                <section className="animate-fade-up">
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        {/* Collection Image */}
                        <div className="overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-[#2a2219]">
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="h-[400px] w-full object-cover"
                            />
                        </div>

                        {/* Collection Info */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                                Collection
                            </p>

                            <h1 className="text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-5xl">
                                {collection.title}
                            </h1>

                            <p className="mt-5 max-w-xl text-base leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                {collection.description}
                            </p>

                            <p className="mt-5 text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                {collectionArtworks.length} artworks
                            </p>
                        </div>

                    </div>
                </section>

                {/* Artworks Section */}
                <section className="mt-20">

                    {/* Section Header */}
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                            Artworks in this Collection
                        </h2>

                        <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                            {collectionArtworks.length} artworks
                        </p>
                    </div>

                    {/* Artwork Cards */}
                    {collectionArtworks.length > 0 ? (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {collectionArtworks.map((artwork, index) => (
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
                                        >
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className={
                                                    isFavorite(artwork.id)
                                                        ? "text-[#D97757]"
                                                        : "text-[#151515] dark:text-[#F5EBDD]"
                                                }
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
                    ) : (
                        /* Empty State */
                        <div className="mt-10 rounded-2xl bg-white px-6 py-16 text-center dark:bg-[#2a2219]">
                            <h3 className="text-xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                No artworks found
                            </h3>

                            <p className="mt-3 text-sm text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                There are no artworks in this collection yet.
                            </p>
                        </div>
                    )}

                </section>

            </div>
        </main>
    );
}

export default CollectionDetails;