import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageDetail from "./components/ImageComponents/ImageDetail";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Router>
      <Header setImages={setImages} setQuery={setQuery} query={query} />
      <Routes>
        <Route
          path="/pixabay-clone"
          element={
            <Home
              images={images}
              setImages={setImages}
              query={query}
              setQuery={setQuery}
            />
          }
        />
        <Route path="/pixabay-clone/image/:id" element={<ImageDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
