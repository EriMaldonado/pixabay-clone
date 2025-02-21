import { useState, useEffect } from "react";
import { FaSearch, FaUpload } from "react-icons/fa";
import "../Layouts/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">pixabay</div>
      <div className={`search-bar-header ${isScrolled ? "visible" : ""}`}>
        <FaSearch className="search-icon-header" />
        <input type="text" placeholder="Buscar en Pixabay" />
        <select>
          <option>Todas las imágenes</option>
        </select>
      </div>
      <nav className="nav-links">
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
