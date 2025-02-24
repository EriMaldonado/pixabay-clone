import "../Footer/footer.css";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <a href="/pixabay-clone/#">
            <img
              src="./src/assets/pixabay.png"
              alt="Pixabay"
              width={160}
              height={40}
            />
          </a>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Descubrir</h4>
          <ul>
            <li>
              <a href="/pixabay-clone/#">Nuestra selección</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Colecciones seleccionadas</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Radio Pixabay</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Nuevo</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Imágenes populares</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Vídeos populares</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Música más escuchada</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Búsquedas populares</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Comunidad</h4>
          <ul>
            <li>
              <a href="/pixabay-clone/#">Blog</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Foro</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Creadores</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Cámaras</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Conócenos</h4>
          <ul>
            <li>
              <a href="/pixabay-clone/#">Acerca de nosotros</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Resumen de licencia</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Condiciones de Uso</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Políticas de Privacidad</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Política de cookies</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Ley de Servicios Digitales</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">Reportar contenido</a>
            </li>
            <li>
              <a href="/pixabay-clone/#">API</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Pixabay Clone
        </p>
        <p>
          <a href="/pixabay-clone/#">Política de Privacidad</a> |{" "}
          <a href="/pixabay-clone/#">Términos de Uso</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
