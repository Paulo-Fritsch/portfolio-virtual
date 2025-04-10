import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Personal.css';

function Personal() {
  return (
    <section data-aos="fade-up" className="personal-section" id="inicio">
      <div className="personal-content">
        <h1>Paulo Fritsch</h1>
        <p>Desenvolvedor e Analista Pleno.</p>
        <a href="#projetos" className="personal-button">Ver Projetos</a>

        <div className="social-icons">
          <a href="https://github.com/paulo-fritsch" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/paulo-fritsch" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:paulofritsch.contato@email.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Personal;