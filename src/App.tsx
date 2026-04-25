import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <TechMarquee />
        
        <About />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>
        
        <Skills />
        <Services />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>
        
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Ketan Pillai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
