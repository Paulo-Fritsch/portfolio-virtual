import '../styles/Aboutme.css';
import PixelArt from '../assets/pixelart.webp'

function AboutMe() {
  return (
    <section data-aos="fade-up" className="aboutme-section" id="sobre">
      <div className="aboutme-container">
        <div className="aboutme-image">
          <img src= {PixelArt} alt="Pixel art representado Paulo Fritsch" />
        </div>
        <div className="aboutme-content">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou um desenvolvedor apaixonado por criar soluções web inovadoras e intuitivas. Com experiência em desenvolvimento full stack, tenho trabalhado em diversos projetos que combinam design atraente com funcionalidade robusta.
            Minha jornada na programação começou em 2020, e desde então venho aprimorando minhas habilidades em tecnologias modernas. Acredito que o bom código deve ser limpo, eficiente e escalável.
          </p>
          <p>
            No meu dia a dia, trabalho com ReactJS no front-end, C# .NET ASPNET no back-end, e bancos de dados
            como SQLite, PostgreSQL. Também tenho experiência com Electron e Tauri, desenvolvendo
            aplicações desktop modernas e costumo programar muitas coisas por hobbie.
          </p>
          <p>
            Além de desenvolvedor, sou um entusiasta automotivo de mão cheia, goleiro nas horas vagas e também sou gamer como todo bom Nerd da área. Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;