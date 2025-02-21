/* eslint-disable react/prop-types */
import ImageCard from "./ImageCard";
import "../styles.css";

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;
