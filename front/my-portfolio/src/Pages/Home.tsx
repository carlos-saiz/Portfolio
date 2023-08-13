import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

interface Project {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'u-know-team3-backend',
    description: 'Backend Project for u-know-team3',
    technologies: 'Nestjs, Docker, Test, Mysql, Api Design,',
    link: 'https://github.com/carlos-saiz/u-know-team3-backend',
  },
  {
    title: 'u-know-team3-frontend',
    description: 'Frontend Project for u-know-team3',
    technologies: 'React Typescript, MongoDB, Vitest, Tailwindcss, Nestjs ',
    link: 'https://github.com/carlos-saiz/ui-uknow-stiinta',
  },
  {
    title: 'toqueneldom',
    description: 'Pagina web para la simular tocar un instrumento',
    technologies: 'Html, Css, Javascript.',
    link: 'https://link-del-proyecto-3.com',
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción del proyecto 4.',
    technologies: 'Django, PostgreSQL',
    link: 'https://link-del-proyecto-4.com',
  },
  {
    title: 'Proyecto 5',
    description: 'Descripción del proyecto 5.',
    technologies: 'Laravel, MySQL',
    link: 'https://link-del-proyecto-5.com',
  },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2>Proyectos Más Importantes</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
