import { useState, useEffect } from "react";
import Hero from "../components/Sections/Hero";
import ImageGallery from "../components/ImageGallery";
import "../styles.css";

function Home() {
  const [images, setImages] = useState([]); // Estado para las imágenes
  const [heroImage, setHeroImage] = useState(null);

  // Función para obtener la imagen aleatoria para el Hero
const fetchRandomImage = async () => {
  try {
    const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=1`;

    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Error en la solicitud de la API");
    }

    const data = await res.json();
    if (data.hits.length > 0) {
      const randomImage =
        data.hits[Math.floor(Math.random() * data.hits.length)];
      setHeroImage(randomImage.largeImageURL); // Establecer la URL de la imagen aleatoria
    } else {
      setHeroImage("/default-image.jpg"); // Imagen de respaldo si no hay imágenes de Pixabay
    }
  } catch (error) {
    console.error("Hubo un problema con la solicitud de la API:", error);
    setHeroImage("/default-image.jpg"); // Imagen de respaldo
  }
};



  // Cargar la imagen aleatoria al inicio
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div>
      {/* Aquí pasamos la función setImages */}
      <Hero backgroundImage={heroImage} setImages={setImages} />
      <ImageGallery images={images} />
    </div>
  );
}

export default Home;
