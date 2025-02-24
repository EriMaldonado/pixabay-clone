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
              alt="Pixabay Logo"
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
              <a href="/">Nuestra selección</a>
            </li>
            <li>
              <a href="/">Colecciones seleccionadas</a>
            </li>
            <li>
              <a href="/">Radio Pixabay</a>
            </li>
            <li>
              <a href="/">Nuevo</a>
            </li>
            <li>
              <a href="/">Imágenes populares</a>
            </li>
            <li>
              <a href="/">Vídeos populares</a>
            </li>
            <li>
              <a href="/">Música más escuchada</a>
            </li>
            <li>
              <a href="/">Búsquedas populares</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Comunidad</h4>
          <ul>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Foro</a>
            </li>
            <li>
              <a href="/">Creadores</a>
            </li>
            <li>
              <a href="/">Cámaras</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Conócenos</h4>
          <ul>
            <li>
              <a href="/">Acerca de nosotros</a>
            </li>
            <li>
              <a href="/">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="/">Resumen de licencia</a>
            </li>
            <li>
              <a href="/">Condiciones de Uso</a>
            </li>
            <li>
              <a href="/">Políticas de Privacidad</a>
            </li>
            <li>
              <a href="/">Política de cookies</a>
            </li>
            <li>
              <a href="/">Ley de Servicios Digitales</a>
            </li>
            <li>
              <a href="/">Reportar contenido</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Pixabay Clone - Todos los derechos
          reservados.
        </p>
        <p>
          <a href="/">Política de Privacidad</a> |{" "}
          <a href="/">Términos de Uso</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
