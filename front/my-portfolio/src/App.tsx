import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer'; // Agrega la importación
// Importa otros componentes según las necesidades

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Mueve el componente Header fuera del enrutamiento */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Renderiza los componentes después de la página Home */}
          <Route path="/proyecto" element={<ProjectCard title={''} description={''} technologies={''} link={''} />} />
          {/* Agrega más rutas para otros componentes */}
        </Routes>
        <Footer /> {/* Agrega el componente Footer */}
      </div>
    </Router>
  );
}

export default App;
