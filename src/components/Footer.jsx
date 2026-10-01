const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Coluna 1: Marca e Redes Sociais */}
        <div className="footer-brand">
          <h2>Construtora<span>Unno</span></h2>
          <p>Mão de obra técnica especializada e soluções integradas de ponta a ponta para o seu projeto.</p>
          <div className="social-links">
            
            {/* Ícone Nativo: Instagram */}
            <a href="https://instagram.com/construtora_unno" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* Ícone Nativo: E-mail */}
            <a href="mailto:contato@construtoraunno.com.br" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            
          </div>
        </div>

        {/* Coluna 2: Navegação Rápida */}
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#processo">Nosso Processo</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>R. Rio D'una, 267 - Guaratiba, RJ</p>
          <p>+55 (21) 97232-6300</p>
          <p>contato@construtoraunno.com.br</p>
        </div>

      </div>

      {/* Faixa inferior de Direitos Autorais */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {currentYear} Construtora Unno. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;