import {Navbar, About, Projects, Contact, Resume, Hero, Background} from './components'
const App = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Background />
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      </div>
    </div>
  );
};

export default App;
