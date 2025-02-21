/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../Sections/hero.css";
import SearchBar from "../Search/SearchBar";

const Hero = ({ setImages }) => {
  const [backgroundColor, setBackgroundColor] = useState("rgb(35, 35, 35)"); 

  // Definir los colores de fondo correspondientes para cada categoría
  const categoryColors = {
    Fotos: "rgb(65, 79, 114)", // Gris oscuro
    Ilustraciones: "rgb(50, 48, 48)", // Gris más claro
    Vectores: "rgb(43, 85, 43)", // Verde
    Videos: "rgb(52, 84, 119)", // Azul
    Música: "rgb(220, 180, 59)", // Amarillo
    "Efectos de sonido": "rgb(100, 41, 61)", // Rosa
    GIF: "rgb(180, 60, 23)", // Naranja
  };

  // Cambiar el color de fondo según la categoría seleccionada
  const handleCategoryClick = (category) => {
    setBackgroundColor(categoryColors[category]);
  };

  useEffect(() => {
    // Establecer un color por defecto al cargar la página
    setBackgroundColor(categoryColors.Fotos);
  }, [categoryColors.Fotos]);

  // Manejar los clics en los filtros
  const handleFilterClick = (filter) => {
    // Llamamos a setImages con el filtro
    setImagesByQuery(filter);
  };

  // Realizar la búsqueda cuando se hace clic en un filtro
  const setImagesByQuery = async (query) => {
    if (query.trim() === "") return; // Verificamos si la consulta no está vacía

    const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;

    const res = await fetch(URL);
    const data = await res.json();
    setImages(data.hits); // Aquí actualizamos el estado de las imágenes en Home
  };

  return (
    <section
      className="hero"
      style={{
        backgroundColor: backgroundColor,
        height: "50vh",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <div className="hero-content">
        <h1>Increíbles Imágenes Gratis Para Descargar</h1>
        <div className="hero-nav">
          <button className="explore-btn">Explorar</button>
          <nav className="">
            {Object.keys(categoryColors).map((category) => (
              <a
                className="categories-btn"
                href="#"
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>

        {/* SearchBar justo debajo de la navegación */}
        <div className="search-bar">
          <SearchBar
            setImages={setImages}
            backgroundColor={setBackgroundColor}
          />
        </div>

        <div className="filters">
          {[
            "naturaleza",
            "flores",
            "playa",
            "inteligencia artificial",
            "animales",
            "mar",
            "cielo",
            "familia",
          ].map((filter) => (
            <span key={filter} onClick={() => handleFilterClick(filter)}>
              {filter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
