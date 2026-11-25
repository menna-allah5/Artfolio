import digitalDreams from "../assets/collections/digital-dreams.jpg";
import natureCalm from "../assets/collections/nature-calm.jpg";
import abstractThoughts from "../assets/collections/abstract-thoughts.jpg";
import urbanStories from "../assets/collections/urban-stories.jpg";
import portraits from "../assets/collections/portraits.jpg";
import modernForms from "../assets/collections/modern-frams.jpg";

export const collections = [
    {
        id: 1,
        title: "Digital Dreams",
        description:
            "A collection of imaginative digital artworks and creative visual experiments.",
        image: digitalDreams,
        artworkIds: [1, 5],
    },

    {
        id: 2,
        title: "Nature & Calm",
        description:
            "Peaceful artworks inspired by nature, light, and beautiful moments.",
        image: natureCalm,
        artworkIds: [3, 7],
    },

    {
        id: 3,
        title: "Abstract Thoughts",
        description:
            "A visual exploration of shapes, forms, colors, and abstract ideas.",
        image: abstractThoughts,
        artworkIds: [4, 8],
    },

    {
        id: 4,
        title: "Urban Stories",
        description:
            "Artworks inspired by modern cities, people, and everyday life.",
        image: urbanStories,
        artworkIds: [6],
    },

    {
        id: 5,
        title: "Portraits",
        description:
            "A selection of expressive characters and illustrated personalities.",
        image: portraits,
        artworkIds: [2],
    },

    {
        id: 6,
        title: "Modern Forms",
        description:
            "Contemporary artworks focused on clean shapes and modern aesthetics.",
        image: modernForms,
        artworkIds: [8, 4],
    },
];