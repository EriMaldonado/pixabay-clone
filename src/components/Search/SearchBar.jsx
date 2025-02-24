/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../Search/searchBar.css";

function SearchBar({ setImages, setQuery, setCurrentPage, query }) {
  const [queryInput, setQueryInput] = useState(query || "");

  useEffect(() => {
    setQueryInput(query);
  }, [query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!queryInput.trim()) return;

    setQuery(queryInput);
    setCurrentPage(1);
    try {
      const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        queryInput
      )}&image_type=photo&page=1&per_page=30`;

      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      setImages(data.hits || []); 
    } catch (error) {
      console.error("Error al obtener las imágenes:", error.message);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar imágenes, videos, música y otros contenidos gratuitos"
        value={queryInput}
        onChange={(e) => setQueryInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
