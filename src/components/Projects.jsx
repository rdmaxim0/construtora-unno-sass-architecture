import { useState, useEffect } from 'react';
import { ArrowUpRight, X, Maximize2 } from 'lucide-react';
import paelImg from '../assets/PaelRJ.jpeg'
import mizuImg from '../assets/MizuRJ.jpeg'
import crapiImg from '../assets/CrapiCesarao.jpeg'
import rioBonitoImg from '../assets/RioBonitoRJ.jpeg' 


// Dados dinâmicos dos projetos
const projectsData = [
  {
    id: 1,
    title: 'Instalação de CFTV e Adequação Civil',
    category: 'Segurança e Civil',
    image: paelImg,
    description: 'Fornecimento de mão de obra especializada para instalação completa de infraestrutura de monitoramento, integrada à readequação do ambiente com montagem de estruturas em drywall e acabamento fino em pintura.',
    area: 'Sob consulta', 
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 2,
    title: 'Revitalização e Manutenção Industrial',
    category: 'Manutenção Industrial',
    image: mizuImg,
    description: 'Execução técnica de trabalho em altura para revitalização de pintura de silos industriais e reparo corretivo em telhas galvanizadas, garantindo a integridade, proteção e segurança da estrutura.',
    area: 'Sob consulta',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 3,
    title: 'Construção de Piscina Coberta',
    category: 'Construção Civil',
    image: crapiImg,
    description: 'Empreitada de mão de obra civil completa envolvendo estruturação do terreno, escavação e alvenaria dedicadas à construção de uma piscina coberta, seguindo rigorosos padrões de execução e segurança.',
    area: 'Sob consulta',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 4,
    title: 'Infraestrutura Elétrica Cenográfica',
    category: 'Elétrica e Estrutura',
    image: rioBonitoImg,
    description: 'Mobilização de equipe técnica para montagem, passagem de cabeamento elétrico seguro e posterior desmontagem de toda a iluminação e estruturas cenográficas temáticas de Natal em área pública.',
    area: 'Sob consulta',
    location: 'Rio Bonito, RJ'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Trava a rolagem da página quando o pop-up estiver aberto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projetos" className="projects-section">
      <div className="container projects-container">
        
        {/* Cabeçalho na Esquerda */}
        <div className="projects-header">
          <span className="sub-title">PORTFÓLIO</span>
          <h2>Projetos Que<br />Definem o Padrão</h2>
          <a href="#contact-form" className="btn btn-outline btn-projects">
            VER OUTROS PROJETOS <ArrowUpRight size={18} strokeWidth={2} />
          </a>
        </div>

        {/* Galeria Dinâmica na Direita */}
        <div className="projects-gallery">
          {projectsData.map((project, index) => (
            <article 
              key={project.id} 
              // A classe pos-1, pos-2 define o tamanho no CSS Grid
              className={`project-card pos-${index + 1}`} 
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <button className="project-link-btn" aria-label="Ver detalhes">
                  <Maximize2 size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* POP-UP / MODAL (Só aparece se houver um projeto selecionado) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          {/* onClick na content com stopPropagation impede que clicar DENTRO do modal feche ele */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="modal-desc">{selectedProject.description}</p>
                
                <div className="modal-specs">
                  <div className="spec-item">
                    <strong>Área:</strong>
                    <span>{selectedProject.area}</span>
                  </div>
                  <div className="spec-item">
                    <strong>Localização:</strong>
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <a href="#contact-form" className="btn btn-primary modal-btn" onClick={() => setSelectedProject(null)}>
                  SOLICITAR ORÇAMENTO PARECIDO
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;