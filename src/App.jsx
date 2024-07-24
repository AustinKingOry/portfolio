import {Navbar, About, Skills, Projects, Contact, Hero, Background, Footer, Experience} from './components'
const App = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Background />
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default App;
