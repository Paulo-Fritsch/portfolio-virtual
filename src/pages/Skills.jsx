import '../styles/Skills.css';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaNodeJs,
  FaDatabase, FaServer, FaTools,
  FaLaptopCode
} from 'react-icons/fa';

import { SiPostgresql, SiSqlite, SiDotnet, SiExpress, SiMysql } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: 'Frontend',
      icon: <FaLaptopCode size={32} />,
      skills: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Responsive Design' },
        { name: 'Web Accessibility' },
      ],
    },
    {
      title: 'Backend',
      icon: <FaServer size={32} />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'C#', icon: <TbBrandCSharp /> },
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'API Development' },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: <FaDatabase size={32} />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SQLite', icon: <SiSqlite /> },
      ],
    },
    {
      title: 'Ferramentas',
      icon: <FaTools size={32} />,
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Agile/Scrum', icon: <VscOrganization/> },
      ],
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Minhas Habilidades</h2>
      <div className="skills-grid-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="skills-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="skills-icon">{category.icon}</div>
            <h3 className="category-title">{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i}>
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;