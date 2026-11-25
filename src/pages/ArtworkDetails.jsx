import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../context/FavoritesContext";
import { artworks } from "../data/artworks";

import {
    faArrowLeft,
    faHeart,
    faShareNodes,
    faPalette,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function ArtworkDetails() {
    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState(null);
    const { toggleFavorite, isFavorite } = useFavorites();

    const artwork = artworks.find((item) => item.id === Number(id));

    if (!artwork) {
        return (
            <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                        Artwork Not Found
                    </h1>

                    <p className="mt-4 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                        The artwork you're looking for doesn't exist.
                    </p>

                    <Link
                        to="/explore"
                        className="mt-8 inline-flex rounded-full bg-[#151515] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#D97757] dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                    >
                        Back to Explore
                    </Link>
                </div>
            </main>
        );
    }

    const handleShare = async () => {
        try {
            await navigator.share({
                title: artwork.title,
                text: `Check out "${artwork.title}" by ${artwork.artist}.`,
                url: window.location.href,
            });
        } catch {
            // Share cancelled or unavailable
        }
    };

    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Back */}
                <Link
                    to="/explore"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#151515]/60 transition hover:text-[#D97757] dark:text-[#F5EBDD]/60"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to Explore
                </Link>

                {/* Main Content */}
                <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">

                    {/* Artwork Image */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-[#2a2219]">
                        <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="h-[450px] w-full object-cover sm:h-[550px]"
                        />
                    </div>

                    {/* Artwork Info */}
                    <div className="lg:pt-6">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                            {artwork.category}
                        </p>

                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-5xl">
                            {artwork.title}
                        </h1>

                        {/* Artist */}
                        <div className="mt-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#151515] text-white dark:bg-[#F5EBDD] dark:text-[#1e1810]">
                                <FontAwesomeIcon icon={faUser} />
                            </div>

                            <div>
                                <p className="text-xs text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                    Created by
                                </p>

                                <p className="text-sm font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                    {artwork.artist}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mt-8 max-w-xl text-base leading-8 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                            {artwork.description}
                        </p>

                        {/* Actions */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                onClick={() => toggleFavorite(artwork.id)}
                                className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 transition hover:bg-gray-100 dark:border-[#F5EBDD]/20 dark:text-[#F5EBDD] dark:hover:bg-white/10"
                            >
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={
                                        isFavorite(artwork.id)
                                            ? "text-[#D97757]"
                                            : "text-[#151515] dark:text-[#F5EBDD]"
                                    }
                                />

                                {isFavorite(artwork.id) ? "Liked" : "Like"}
                            </button>

                            <button
                                type="button"
                                onClick={handleShare}
                                className="flex items-center gap-2 rounded-full border border-[#151515]/15 px-6 py-3 text-sm font-medium text-[#151515] transition hover:border-[#D97757] hover:text-[#D97757] dark:border-[#F5EBDD]/15 dark:text-[#F5EBDD]"
                            >
                                <FontAwesomeIcon icon={faShareNodes} />
                                Share
                            </button>
                        </div>

                        {/* Color Palette */}
                        <div className="mt-10 rounded-2xl bg-white p-6 dark:bg-[#2a2219]">
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon
                                    icon={faPalette}
                                    className="text-[#D97757]"
                                />

                                <h2 className="text-lg font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                    Color Palette
                                </h2>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-4">
                                {artwork.colors.map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                        className={`h-12 w-12 rounded-full border-4 transition hover:scale-110 ${selectedColor === color
                                            ? "border-[#151515] dark:border-[#F5EBDD]"
                                            : "border-white shadow-sm dark:border-[#2a2219]"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            {selectedColor && (
                                <p className="mt-5 text-sm text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                    Selected color:{" "}
                                    <span className="font-semibold text-[#151515] dark:text-[#F5EBDD]">
                                        {selectedColor}
                                    </span>
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default ArtworkDetails;