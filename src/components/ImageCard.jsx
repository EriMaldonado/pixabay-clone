/* eslint-disable react/prop-types */
import "../styles.css";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.webformatURL} alt={image.tags} />
      <p>{image.user}</p>
    </div>
  );
}

export default ImageCard;
