import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../ImageComponents/images.css";
import { FaDownload, FaEdit } from "react-icons/fa"; 
function ImageDetail() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
        const response = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&id=${id}`
        );
        const data = await response.json();

        if (data.hits && data.hits.length > 0) {
          setImage(data.hits[0]);
        } else {
          console.error("No image found with this ID");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  if (!image) return <div className="loading">Image not found!</div>;

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image.largeImageURL;
    link.download = `${image.user}-${image.id}.jpg`;
    link.click();
  };

  const editInCanva = () => {
    const imageUrl = encodeURIComponent(image.largeImageURL);
    const externalId = `image-${image.id}`;
    const canvaMediaId = `MAElTDu-R-M`;
    const canvaUrl = `https://www.canva.com/es_es/content-partner/?image-url=${imageUrl}&external-id=${externalId}&canva-media-id=${canvaMediaId}`;
    window.open(canvaUrl, "_blank");
  };

  return (
    <div className="image-detail-container">
      <div className="image-detail-header">
        <h1>Detalles de Imagen</h1>
        <p className="image-user">
          <strong>Subido por:</strong> {image.user}
        </p>
        {image.userImageURL && (
          <img src={image.userImageURL} alt="User" className="user-image" />
        )}
      </div>

      <div className="image-detail-body">
        <div className="image-detail-left">
          <img
            src={image.largeImageURL}
            alt={image.tags}
            className="image-detail-img"
          />
        </div>

        <div className="image-detail-right">
          <div className="image-info">
            <h2>Información de la imagen</h2>
            <p>
              <strong>Tags:</strong> {image.tags}
            </p>
            <p>
              <strong>Likes:</strong> {image.likes}
            </p>
            <p>
              <strong>Views:</strong> {image.views}
            </p>
            <p>
              <strong>Comments:</strong> {image.comments}
            </p>
            <p>
              <strong>Dimensions:</strong> {image.imageWidth} x{" "}
              {image.imageHeight} px
            </p>
            <p>
              <strong>Size:</strong>{" "}
              {(image.imageSize / 1024 / 1024).toFixed(2)} MB
            </p>
            <p>
              <strong>Collections:</strong> {image.collections}
            </p>
          </div>

          <div className="buttons-container">
            <button onClick={downloadImage} className="download-btn">
              <FaDownload /> Descargar Imagen{" "}
             
            </button>
            <button onClick={editInCanva} className="edit-btn">
              <FaEdit /> Editar en Canva 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetail;
