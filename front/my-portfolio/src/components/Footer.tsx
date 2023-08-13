import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
