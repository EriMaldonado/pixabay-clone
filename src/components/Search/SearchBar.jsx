import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({ setImages }) {
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    if (query.trim() === "") return; // Verificamos si la consulta no está vacía

    const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;

    const res = await fetch(URL);
    const data = await res.json();
    setImages(data.hits); // Aquí actualizamos el estado de las imágenes en Home
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar imágenes, videos, música y otros contenidos gratuitos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchImages}>Buscar</button>
    </div>
  );
}

export default SearchBar;
