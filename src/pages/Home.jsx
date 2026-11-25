import Hero from "../components/Hero";
import FeaturedArtworks from "../components/FeaturedArtworks";
import Categories from "../components/Categories";
import FeaturedArtists from "../components/FeaturedArtists";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedArtworks />
            <Categories />
            <FeaturedArtists />
        </>
    );
}

export default Home;