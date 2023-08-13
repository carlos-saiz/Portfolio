import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, technologies, link } = props;

  return (
    <div className="card project-card">
      <img
        src="URL_DE_LA_IMAGEN"
        className="card-img-top project-image"
        alt="Project"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Tecnologías:</strong> {technologies}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
