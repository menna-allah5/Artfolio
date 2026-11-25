import { Link } from "react-router-dom";
import { collections } from "../data/collections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faImages,
} from "@fortawesome/free-solid-svg-icons";

function Collections() {
    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 transition-colors duration-500 dark:bg-[#211C19] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="animate-fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                        Curated
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-6xl">
                        Collections
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/65">
                        Explore curated collections of artworks gathered around
                        different ideas, moods, and creative styles.
                    </p>
                </div>

                {/* Results Header */}
                <div className="mt-14 flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
                        All Collections
                    </h2>

                    <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                        {collections.length} collections
                    </p>
                </div>

                {/* Collection Cards */}
                <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {collections.map((collection, index) => (
                        <article
                            key={collection.id}
                            className="group animate-fade-up"
                            style={{
                                animationDelay: `${index * 0.08}s`,
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-[#302925]">

                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

                                {/* View Collection Button */}
                                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Link
                                        to={`/collections/${collection.id}`}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#151515] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#D97757]"
                                    >
                                        View Collection

                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Card Info */}
                            <div className="mt-4">

                                {/* Artwork Count */}
                                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#D97757]">
                                    <FontAwesomeIcon icon={faImages} />

                                    {collection.artworkIds.length}{" "}
                                    {collection.artworkIds.length === 1
                                        ? "Artwork"
                                        : "Artworks"}
                                </p>

                                {/* Title */}
                                <h3 className="mt-2 text-lg font-semibold text-[#151515] transition-colors duration-300 group-hover:text-[#D97757] dark:text-[#F5EBDD]">
                                    {collection.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#151515]/55 dark:text-[#F5EBDD]/55">
                                    {collection.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Collections;