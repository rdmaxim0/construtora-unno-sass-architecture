import {useState} from "react";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon, X, Menu} from 'lucide-react';
import LogoUnno from '../assets/LogoUnno.png'
import LogoCircle from '../assets/LogoCircle.png'


const Header = () => {
    const {theme, toggleTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="navbar">
            <div className="container nav-container">

                {/* Logo */}
                <a href="#hero" className="brand-logo">
                    {theme === 'dark' ? <img src={LogoUnno} alt="Logo Unno Engenharia" /> : <img src={LogoCircle} alt="Logo Unno Engenharia" /> }
                </a>
                {/* Menu Principal */}
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#hero" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#sobre" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                    <a href="#servicos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                    <a href="#projetos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projetos</a>
                    <a href="#contatos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contatos</a>
                
                    {/* Botão de Orçamento Mobile */}
                    <a href="https://wa.me/21972326300" target="_blank" className="btn btn-primary mobile-cta" onClick={() => setIsMenuOpen(false)}>
                        Solicitar Orçamento
                    </a>
                </nav>

                {/* Ações (Tema e Botão CTA Desktop) */}

                <div className="nav-actions">
                    <button className="btn-icon" aria-label="Alternar Tema" onClick={toggleTheme}>
                        <span>
                            {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
                        </span>
                    </button>

                    <a href="https://wa.me/21972326300" target="_blank" className="btn btn-primary desktop-only">
                        Solicitar Orçamento
                    </a>

                    {/* Botão do menu Hamburguer (Mobile) */}
                    <button className="btn-icon mobile-only" aria-label="Menu" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;