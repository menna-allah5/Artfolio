import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ArtworkDetails from "./pages/ArtworkDetails";
import Collections from "./pages/Collections";
import About from "./pages/About";
import ArtistProfile from "./pages/ArtistProfile";
import Favorites from "./pages/Favorites";
import CollectionDetails from "./pages/CollectionDetails";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/artwork/:id" element={<ArtworkDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/collections/:id" element={<CollectionDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;