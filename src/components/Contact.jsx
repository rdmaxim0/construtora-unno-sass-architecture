import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import luxuryHouse from '../assets/luxuryHouse.jpg';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Arquitetura e Design',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const waNumber = "5521972326300";
        const text = `Olá, Unno Engenharia! Meu nome é *${formData.name}*.\n\nGostaria de solicitar um orçamento para o serviço de *${formData.service}*.\n\n*Detalhes do Projeto:*\n${formData.message}\n\n*Meu Telefone:* ${formData.phone}`;
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${waNumber}?text=${encodedText}`;
        window.open(url, '_blank')
    }
    
    return (
        <section id="contatos" className="contact-section">
      <div className="container contact-container">
        <div className="contact-form-wrapper" id="contact-form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Solicite um Orçamento</h3>
            <p>Preencha os dados e falaremos com você via WhatsApp.</p>
            
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone / WhatsApp</label>
              <input type="tel" id="phone" name="phone" className="form-control" placeholder="(21) 90000-0000" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="service">Serviço de Interesse</label>
              <select id="service" name="service" className="form-control" value={formData.service} onChange={handleChange}>
                <option value="Arquitetura e Design">Arquitetura e Design</option>
                <option value="Construção Residencial">Construção Residencial</option>
                <option value="Construção Comercial">Construção Comercial</option>
                <option value="Interiores">Design de Interiores</option>
                <option value="Gestão de Projetos">Gestão de Projetos</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Detalhes do Projeto</label>
              <textarea id="message" name="message" className="form-control" rows="4" placeholder="Conte-nos um pouco sobre o que você deseja construir..." value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              ENVIAR PARA O WHATSAPP <Send size={18} />
            </button>
          </form>
        </div>

        <div className="contact-info-wrapper">
          <span className="sub-title">FALE CONOSCO</span>
          <h2>Inicie Seu Próximo<br />Grande Projeto</h2>
          <p className="contact-desc">
            Nossa equipe de especialistas está pronta para transformar a sua visão em um legado construído com excelência.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} strokeWidth={1.5} /></div>
              <div>
                <h4>Nosso Escritório</h4>
                <p>R. Rio D'una, 267 - Guaratiba, RJ</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} strokeWidth={1.5} /></div>
              <div>
                <h4>Whatsapp</h4>
                <p>+55 (21) 97232-6300</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} strokeWidth={1.5} /></div>
              <div>
                <h4>E-mail</h4>
                <p>contato@unnoengenharia.com</p>
              </div>
            </div>
          </div>

          <div className="contact-image-container">
            <img src={luxuryHouse} alt="Projetos Unno" className="contact-image" />
            <div className="contact-image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default Contact;