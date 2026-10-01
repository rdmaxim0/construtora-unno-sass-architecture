import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import  Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/main.scss'



function App() {
  

  return (
    <>
      <Header />
      <main>
        <Hero /> 
        <Metrics />
        <About />
        <Projects />
        <Services />
        <Process />
        <Contact />
       
      </main>
      <Footer />
       
     
      
    </>
  )
}

export default App
