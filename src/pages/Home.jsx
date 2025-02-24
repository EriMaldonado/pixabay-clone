/* eslint-disable react/prop-types */
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import "../styles.css";

function Home({ setImages, query, setQuery }) {
  // eslint-disable-next-line no-unused-vars
  const [galleryTitle, setGalleryTitle] = useState(
    "Más de 1 millón de fotos libres de derechos compartidas por nuestra talentosa comunidad."
  );

  const [, setHeroTitle] = useState(
    "Increíbles Imágenes Gratis Para Descargar"
  );

  return (
    <div>
      <Hero
        setImages={setImages}
        setGalleryTitle={setGalleryTitle}
        setHeroTitle={setHeroTitle}
        query={query} 
        setQuery={setQuery}
      />
    </div>
  );
}

export default Home;
