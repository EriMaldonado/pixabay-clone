/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaSearch, FaUpload, FaBars } from "react-icons/fa";
import "../Header/header.css";

function Header({ setImages, setQuery, query, category }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=${category === "all" ? "photo" : category}&per_page=30`;

      const res = await fetch(URL);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const data = await res.json();
      setImages(data.hits || []);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error.message);
    }
  };

  return (
    <header className={`header container ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="/pixabay-clone/#">
          <img
            src="./src/assets/pixabay.png"
            alt="Pixabay Logo"
            width={120}
            height={36}
          />
        </a>
      </div>
      <form
        className={`search-bar-header ${isScrolled ? "visible" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="search-input-container">
          <button className="btn-search" type="submit">
            <FaSearch />
          </button>

          <input
            type="text"
            placeholder="Buscar en Pixabay"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />

          <div className="dropdown">
            <select
              className="dropdown-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Todas las imágenes</option>
              <option value="photo">Imágenes</option>
              <option value="video">Videos</option>
              <option value="illustration">Ilustraciones</option>
              <option value="vector">Vectoriales</option>
              <option value="editorial">Editorial</option>
            </select>
          </div>
        </div>
      </form>

      <button
        className={`hamburger-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Explorar ▾</a>
        <a href="#">Iniciar sesión</a>
        <button className="btn-outline">Unirme</button>
        <button className="btn-upload">
          <FaUpload /> Subir
        </button>
      </nav>
    </header>
  );
}

export default Header;
