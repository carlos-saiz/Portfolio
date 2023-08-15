import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="page about">
      <div className="about-content">
        <h2>Sobre Mí</h2>
        <div className="about-info">
          <img src="/path/to/profile-image.jpg" alt="Foto de Perfil" className="profile-image" />
          <div className="info-text">
            <p>Soy Carlos, un apasionado joven de 21 años con un emocionante recorrido en el mundo laboral.</p>
            <p>Mi viaje comenzó en el mundo de la programación web después de una experiencia trabajando en un almacén. Rápidamente me di cuenta de que mi verdadera pasión radicaba en crear soluciones digitales atractivas y funcionales.</p>
            <p>Decidí invertir en mi futuro al sumergirme en dos bootcamps, uno enfocado en Fullstack y otro en Front-end, con el objetivo de desarrollar mis habilidades y conocimientos. La programación web me fascina y mi sueño es forjar una carrera enfocada en React, una tecnología que me ha cautivado por su versatilidad y capacidad para crear experiencias interactivas en el navegador.</p>
            <p>A lo largo de mis experiencias laborales, he aprendido la importancia del trabajo en equipo, la organización y la responsabilidad. Cada paso en mi camino me ha brindado valiosas lecciones y ha fortalecido mi determinación para enfrentar nuevos desafíos.</p>
            <p>Me considero una persona curiosa, siempre dispuesta a aprender y mejorar mis habilidades. Resolver problemas es algo que me motiva y me llena de satisfacción. Afronto los retos con una actitud positiva, sabiendo que cada obstáculo es una oportunidad para crecer.</p>
            <p>Estoy entusiasmado por mi futuro en el campo de la programación web y estoy listo para seguir creciendo como desarrollador. Mi objetivo es contribuir con mi conocimiento y pasión a proyectos innovadores y emocionantes.</p>
            <p>En resumen, soy un joven apasionado por la programación web, con una experiencia laboral en almacén que me ha brindado valiosas lecciones. Mi deseo es convertirme en un especialista en React y enfrentar nuevos desafíos con entusiasmo y determinación. ¡Estoy emocionado por lo que el futuro me depara en el mundo de la tecnología!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
