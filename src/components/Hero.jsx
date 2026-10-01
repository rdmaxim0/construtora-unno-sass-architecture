import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section" id='hero'>
            <div className="container hero-content">

                <div className="hero-decorator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="line"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <div className="hero-text-wrapper">
                   <h1 className="hero-title">
                        Construímos espaços <br />
                        <span className="text-highlight">atemporais.</span><br />
                        Feitos para você.
                    </h1>

                    <p className="hero-description">Do conceito à conclusão, criamos espaços extraordinários que elevam a sua vivência, unem sofisticação e resistem ao teste do tempo.</p>
                    <a href="#projetos" className="btn btn-primary btn-hero">
                        EXPLORE NOSSO TRABALHO 
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;