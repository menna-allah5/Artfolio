import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { artists } from "../data/artists";
import { artworks } from "../data/artworks";
import { useFavorites } from "../context/FavoritesContext";

import {
    faArrowLeft,
    faPalette,
    faImages,
    faHeart,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


function ArtistProfile() {
    const { id } = useParams();
    const artist = artists.find((item) => item.id === Number(id));
    const { toggleFavorite, isFavorite } = useFavorites();


    if (!artist) {
        return (
            <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                        Artist Not Found
                    </h1>

                    <Link
                        to="/"
                        className="mt-8 inline-flex rounded-full bg-[#151515] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#D97757] dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                    >
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    // Get only the artworks that belong to this artist
    const artistArtworks = artworks.filter((artwork) =>
        artist.artworkIds.includes(artwork.id)
    );

    return (
        <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Back */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#151515]/60 transition hover:text-[#D97757] dark:text-[#F5EBDD]/60"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to Home
                </Link>

                {/* Artist Header */}
                <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm dark:bg-[#2a2219] lg:p-12">
                    <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">

                        {/* Artist Image */}
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="h-40 w-40 rounded-full object-cover shadow-md"
                        />

                        {/* Artist Info */}
                        <div className="flex-1">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                                Artist Profile
                            </p>

                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-5xl">
                                {artist.name}
                            </h1>

                            <p className="mt-2 text-base font-medium text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                {artist.role}
                            </p>

                            <p className="mt-5 max-w-2xl leading-8 text-[#151515]/60 dark:text-[#F5EBDD]/60">
                                {artist.bio}
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-3">

                        <div className="rounded-2xl bg-[#F5EBDD] p-5 text-center dark:bg-[#1e1810]">
                            <FontAwesomeIcon
                                icon={faImages}
                                className="text-xl text-[#D97757]"
                            />

                            <p className="mt-2 text-2xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                                {artist.artworks}
                            </p>

                            <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                Artworks
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#F5EBDD] p-5 text-center dark:bg-[#1e1810]">
                            <FontAwesomeIcon
                                icon={faPalette}
                                className="text-xl text-[#D97757]"
                            />

                            <p className="mt-2 text-2xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                                {artist.role}
                            </p>

                            <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                Speciality
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#F5EBDD] p-5 text-center dark:bg-[#1e1810]">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="text-xl text-[#D97757]"
                            />

                            <p className="mt-2 text-2xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                                Loved
                            </p>

                            <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                                By the community
                            </p>
                        </div>

                    </div>
                </section>

                {/* Artist Artworks */}
                <section className="mt-16">

                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                                Portfolio
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#151515] dark:text-[#F5EBDD]">
                                {artist.name}'s Artworks
                            </h2>
                        </div>

                        <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
                            {artistArtworks.length} artworks
                        </p>
                    </div>

                    {/* Same Explore Cards */}
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {artistArtworks.map((artwork) => (
                            <article
                                key={artwork.id}
                                className="group transition duration-500 hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 group-hover:shadow-xl dark:bg-[#2a2219]">

                                    {/* Image */}
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* Favorite */}
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

                                    {/* View Artwork */}
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

                                {/* Info */}
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

                </section>
            </div>
        </main>
    );
}

export default ArtistProfile;