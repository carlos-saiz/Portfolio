import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Portafolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
            {/* Agrega más elementos de navegación aquí */}
          </ul>
        </div>
      </nav>
      <h1>Carlos Saiz</h1>
      <p>Desarrollador Full Stack</p>
    </header>
  );
};

export default Header;
