/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../Hero/Hero.css";
import SearchBar from "../Search/SearchBar";
import ImageCard from "../ImageComponents/ImageCard";
import explorarImage from "../../assets/explorar.jpg";
import fotosImage from "../../assets/fotos.jpg";
import ilustracionesImage from "../../assets/ilustraciones.png";
import vectoresImage from "../../assets/vectores.jpg";
import musicaImage from "../../assets/musica.jpg";
import efectosDeSonidoImage from "../../assets/efectos.jpg";

const Hero = ({
  setImages,
  setGalleryTitle,
  setHeroTitle,
  query,
  setQuery,
}) => {
  const [, setBackgroundColor] = useState("rgb(35, 35, 35)");
  const [activeCategory, setActiveCategory] = useState("Explorar");
  const [images, setImagesState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [selectedButton, setSelectedButton] = useState("Nuestra selección");

  const categoryTitles = {
    Explorar: "Increíbles Imágenes Gratis Para Descargar",
    Fotos: "Impresionantes Fotos Gratis para Descargar",
    Ilustraciones: "Ilustraciones Gratis e Inspiradoras para Descargar",
    Vectores: "Vectores Impresionantes Imágenes Vectoriales Gratis",
    Música: "Música sin regalías disponible para descargar",
    "Efectos de sonido":
      "Efectos de sonido sin regalías disponibles para descargar",
  };

  const categoryTitlesForGallery = {
    Explorar:
      "Nuestro banco de imágenes tiene más de 1 millón de imágenes y videos compartidos por nuestra talentosa comunidad.",
    Fotos:
      "Más de 1 millón de fotos libres de derechos compartidas por nuestra talentosa comunidad.",
    Ilustraciones:
      "Más de 160,000 ilustraciones hermosas y gratuitas compartidas por nuestra talentosa comunidad.",
    Vectores:
      "Más de 70,000 imágenes vectoriales gratuitas compartidas por nuestra talentosa comunidad.",
    Música:
      "Más de 110,000 pistas de música gratis compartidas por esta comunidad con tanto talento.",
    "Efectos de sonido":
      "Más de 90,000 pistas de efectos de sonido gratis compartidas por esta comunidad con tanto talento.",
  };

  const categoryImages = {
    Explorar: explorarImage,
    Fotos: fotosImage,
    Ilustraciones: ilustracionesImage,
    Vectores: vectoresImage,
    Música: musicaImage,
    "Efectos de sonido": efectosDeSonidoImage,
  };

  const fetchImages = async (searchQuery, type = "photo", page = 1) => {
    if (!searchQuery.trim()) return;
    const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      searchQuery
    )}&image_type=${type}&page=${page}&per_page=30`;

    const res = await fetch(URL);
    const data = await res.json();
    setImagesState(data.hits || []);
    setTotalHits(data.totalHits || 0);
  };
  const handleCategoryClick = (category) => {
    setBackgroundColor(categoryImages[category]);
    setActiveCategory(category);
    setHeroTitle(categoryTitles[category]);
    setGalleryTitle(categoryTitlesForGallery[category]);
    setQuery(category);
    setCurrentPage(1);
    fetchImages(category, "photo", 1);
  };
  const handleFilterClick = (filter) => {
    setQuery(filter);
    setCurrentPage(1);
    fetchImages(filter, "photo", 1);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    fetchImages(query || categoryTitles[activeCategory], "photo", 1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalHits / 30)) return;
    setCurrentPage(newPage);
    fetchImages(query || categoryTitles[activeCategory], "photo", newPage);
  };

  useEffect(() => {
    fetchImages(query || categoryTitles[activeCategory], "photo", 1);
  }, [query, activeCategory]);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${categoryImages[activeCategory]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="hero-content">
          <h1>{categoryTitles[activeCategory]}</h1>
          <nav className="hero-nav">
            {Object.keys(categoryImages).map((category) => (
              <a
                key={category}
                className={`categories-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
              >
                {category}
              </a>
            ))}
          </nav>

          <SearchBar
            setImages={setImagesState}
            setQuery={setQuery}
            setCurrentPage={setCurrentPage}
            query={query}
          />

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
              "tecnología",
            ].map((filter) => (
              <button key={filter} onClick={() => handleFilterClick(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="image-gallery-container">
          <div className="gallery-header">
            <h1>{categoryTitlesForGallery[activeCategory]}</h1>
            <div className="gallery-buttons">
              <button
                className={
                  selectedButton === "Nuestra selección" ? "selected" : ""
                }
                onClick={() => handleButtonClick("Nuestra selección")}
              >
                Nuestra selección
              </button>
              <button
                className={selectedButton === "Más recientes" ? "selected" : ""}
                onClick={() => handleButtonClick("Más recientes")}
              >
                Más recientes
              </button>
              <button
                className={selectedButton === "Tendencias" ? "selected" : ""}
                onClick={() => handleButtonClick("Tendencias")}
              >
                Tendencias
              </button>
            </div>
          </div>

          <div className="image-gallery">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className="text">
              Página {currentPage} de {Math.ceil(totalHits / 30)}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= Math.ceil(totalHits / 30)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
