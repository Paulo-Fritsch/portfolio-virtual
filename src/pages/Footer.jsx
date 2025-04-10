import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact } from 'react-icons/fa';
import { SiDotnet, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h2>Paulo Fritsch </h2>
          <p>Desenvolvedor Full Stack <FaReact /> <TbBrandCSharp /> <SiDotnet /> </p>
        </div>

        <div className="footer-icons">
          <a href="https://github.com/paulo-fritsch"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/paulo-fritsch"><FaLinkedin /></a>
          <a href="mailto:paulofritsch.contat@email.com"><FaEnvelope /></a>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <p>© 2025 Paulo Fritsch. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
