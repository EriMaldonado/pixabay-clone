/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "../ImageComponents/images.css";

function ImageCard({ image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pixabay-clone/image/${image.id}`);
  };

  return (
    <div className="image-card" onClick={handleClick}>
      <div className="image-wrapper">
        <img src={image.webformatURL} alt={image.tags} className="image" />
      </div>
      <div className="image-info">
        <p className="user">
          <strong>Usuario:</strong> {image.user}
        </p>
        <p className="stats">
          <strong>Vistas:</strong> {image.views} |<strong> Descargas:</strong>{" "}
          {image.downloads} |<strong> Likes:</strong> {image.likes}
        </p>
      </div>
    </div>
  );
}

export default ImageCard;
