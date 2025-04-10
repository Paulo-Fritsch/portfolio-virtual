import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard'
import projectList from '../data/projectlist.json';

function Projects() {
  return (
    <section data-aos="fade-up" className="projects-section" id="projetos">
      <h2>Projetos</h2>
      <div  data-aos="fade-up" className="projects-grid">
      {projectList.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
