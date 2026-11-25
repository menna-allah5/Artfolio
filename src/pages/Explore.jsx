import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { artworks } from "../data/artworks";
import { useFavorites } from "../context/FavoritesContext";

import {
  faSearch,
  faHeart,
  faArrowRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  "All",
  "Digital Art",
  "Illustration",
  "Photography",
  "3D Art",
];

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(categoryFromUrl) ? categoryFromUrl : "All"
  );

  const { toggleFavorite, isFavorite } = useFavorites();

  // Filter artworks
  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      artwork.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Change category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <main className="min-h-screen bg-[#F5EBDD] px-6 py-16 dark:bg-[#1e1810] lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
            Discover
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#151515] dark:text-[#F5EBDD] sm:text-6xl">
            Explore Artworks
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#151515]/60 dark:text-[#F5EBDD]/60">
            Discover inspiring digital artworks, illustrations, photography,
            and creative visual stories.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search Box */}
          <div className="relative w-full lg:max-w-md">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#151515]/40 dark:text-[#F5EBDD]/40"
            />

            <input
              type="text"
              placeholder="Search artworks or artists..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-full border border-[#151515]/10 bg-white py-4 pl-12 pr-5 text-sm text-[#151515] outline-none transition placeholder:text-[#151515]/40 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/20 dark:border-[#F5EBDD]/10 dark:bg-[#2a2219] dark:text-[#F5EBDD] dark:placeholder:text-[#F5EBDD]/40"
            />
          </div>

          {/* Filter Label */}
          <div className="flex items-center gap-3 text-sm text-[#151515]/60 dark:text-[#F5EBDD]/60">
            <FontAwesomeIcon icon={faFilter} />
            <span>Filter by category</span>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${selectedCategory === category
                ? "bg-[#151515] text-white dark:bg-[#F5EBDD] dark:text-[#1e1810]"
                : "border border-[#151515]/15 bg-transparent text-[#151515] hover:border-[#D97757] hover:text-[#D97757] dark:border-[#F5EBDD]/15 dark:text-[#F5EBDD]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-14 flex items-center justify-between gap-4">

          <h2 className="text-2xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
            {selectedCategory === "All"
              ? "All Artworks"
              : selectedCategory}
          </h2>

          <p className="text-sm text-[#151515]/50 dark:text-[#F5EBDD]/50">
            {filteredArtworks.length}{" "}
            {filteredArtworks.length === 1
              ? "artwork"
              : "artworks"}
          </p>
        </div>

        {/* Artwork Cards */}
        {filteredArtworks.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredArtworks.map((artwork, index) => (
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
                    aria-label={
                      isFavorite(artwork.id)
                        ? `Remove ${artwork.title} from favorites`
                        : `Add ${artwork.title} to favorites`
                    }
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
          <div className="mt-10 rounded-2xl bg-white px-6 py-16 text-center dark:bg-[#2a2219]">

            <h3 className="text-xl font-semibold text-[#151515] dark:text-[#F5EBDD]">
              No artworks found
            </h3>

            <p className="mt-3 text-sm text-[#151515]/60 dark:text-[#F5EBDD]/60">
              Try another search term or choose a different category.
            </p>

          </div>
        )}

      </div>
    </main>
  );
}

export default Explore;