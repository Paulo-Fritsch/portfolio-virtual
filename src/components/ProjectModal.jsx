import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../styles/ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, title, modaldescription, techs, images = [], codeLink, demoLink }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
<Modal open={isOpen} onClose={onClose}>
  <Box className="project-modal-box">
  <button className="close-icon" onClick={onClose}>×</button>
    <div className="modal-content-wrapper">
      {images.length > 0 && (
        <div className="manual-carousel">
          <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`} className="carousel-img" />
          <button className="carousel-btn left" onClick={handlePrev}>‹</button>
          <button className="carousel-btn right" onClick={handleNext}>›</button>
        </div>
      )}

      <div className="modal-text-content">
        <h2 className="project-modal-title">{title}</h2>
        <div className="project-modal-description">
          {modaldescription.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <div className="project-modal-techs">
          {techs.map((tech, index) => (
            <span key={index} className="specify-tags-modal">{tech}</span>
          ))}
        </div>

        <div className="project-modal-buttons">
          {demoLink && (
            <a href={demoLink} className="project-modal-button" target="_blank" rel="noopener noreferrer">
              Acessar projeto
            </a>
          )}
          {codeLink && (
            <a href={codeLink} className="project-modal-button" target="_blank" rel="noopener noreferrer">
              Ver repositório
            </a>
          )}
        </div>
      </div>
    </div>
  </Box>
</Modal>

  );
};

export default ProjectModal;
