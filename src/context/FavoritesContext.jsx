import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem("artfolio-favorites");
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "artfolio-favorites",
            JSON.stringify(favoriteIds)
        );
    }, [favoriteIds]);

    const toggleFavorite = (artworkId) => {
        setFavoriteIds((prev) => {
            if (prev.includes(artworkId)) {
                return prev.filter((id) => id !== artworkId);
            }

            return [...prev, artworkId];
        });
    };

    const isFavorite = (artworkId) => {
        return favoriteIds.includes(artworkId);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoriteIds,
                toggleFavorite,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}