import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contacto">
        <h3>Contacto</h3>
        <a href="Telefono">Telefono</a>
        <a href="WhatsApp">WhatsApp</a>
      </div>
      <div className="contacto">
        <h3>Redes sociales</h3>
        <a href="Instagram">Instagram</a>
        <a href="Twitter">Twitter</a>
      </div>
      <div className="contacto">
        <h3>Acerca de</h3>
        <a href="Envios">Envios</a>
        <a href="Puntos de retiro">Puntos de retiro</a>
      </div>
    </div>
  );
};

export default Footer;
