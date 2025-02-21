import "../Layouts/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Pixabay Clone - Todos los derechos
        reservados.
      </p>
      <p>
        <a href="/">Política de Privacidad</a> | <a href="/">Términos de Uso</a>
      </p>
    </footer>
  );
}

export default Footer;
