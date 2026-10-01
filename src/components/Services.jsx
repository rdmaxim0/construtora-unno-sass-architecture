import { Compass, Home, Building2, Sofa, ClipboardList, ChevronRight } from 'lucide-react';

const servicesData = [
  { id: 1, icon: <Compass size={36} strokeWidth={1.2} />, title: 'Arquitetura', description: 'Design conceitual que equilibra criatividade e funcionalidade.' },
  { id: 2, icon: <Home size={36} strokeWidth={1.2} />, title: 'Residencial', description: 'Casas de alto padrão construídas com precisão e cuidado.' },
  { id: 3, icon: <Building2 size={36} strokeWidth={1.2} />, title: 'Construção Comercial', description: 'Espaços de alta performance para negócios modernos.' },
  { id: 4, icon: <Sofa size={36} strokeWidth={1.2} />, title: 'Interiores', description: 'Ambientes funcionais adaptados ao seu estilo de vida.' },
  { id: 5, icon: <ClipboardList size={36} strokeWidth={1.2} />, title: 'Gestão de Projeto', description: 'Execução impecável do conceito à conclusão.' }
];

const Services = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="container services-container">
        
        {/* INVERTIDO: Lado Esquerdo agora são os Cards */}
        <div className="services-track">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        {/* INVERTIDO: Lado Direito agora é o Texto */}
        <div className="services-header">
          <span className="sub-title">NOSSOS SERVIÇOS</span>
          <h2>Soluções Integradas<br />de Ponta a Ponta</h2>
          <p className="services-desc">
            Arquitetura, Construção Residencial, Construção Comercial, Interiores, Gestão de Projeto.
          </p>
          <a href="#contact-form" className="btn btn-outline btn-services">
            SAIBA MAIS <ChevronRight size={18} strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;