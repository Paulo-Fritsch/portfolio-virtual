import '../styles/ProjectCard.css';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import ProjectModal from './ProjectModal';
import { useState } from 'react';

const ProjectCard = ({ title, description, images, techs, codeLink, demoLink, modaldescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
  <>
    <div className="project-card">
      <div className="project-image-wrapper">
      <img src={images[0]} alt={`${title}-image`} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tags">
          {techs.map((tech, index) => (
            <span className="specify-tags" key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="code-btn">
              <FaGithub /> Código
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-btn">
              <BsBoxArrowUpRight /> Demo
            </a>
          )}
          <button className="see-more-btn" onClick={handleOpenModal}>Ver mais</button>

        </div>
      </div>
    </div>
    <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} title={title} modaldescription={modaldescription} techs={techs} images={images}/>
  </>
    
  );
};

export default ProjectCard;
