import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export function Footer() {
  const whatsappNumber = '15551234567'; // <-- NÚMERO INTERNACIONAL
  const emailAddress = 'nativeflowteacher@email.com';
  const instagramUser = 'nativeflowteacher';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Native Flow</h3>
          <p>Aulas de inglês que se adaptam ao seu ritmo.</p>
        </div>
        <div className="footer-social">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
          <a href={`mailto:${emailAddress}`} aria-label="Email"><FaEnvelope /></a>
          <a href={`https://instagram.com/${instagramUser}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date( ).getFullYear()} Native Flow. Todos os direitos reservados. Este site foi projetado e desenvolvido por Forti.</p>
      </div>
    </footer>
  );
}
