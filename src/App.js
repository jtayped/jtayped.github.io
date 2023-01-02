import './App.css';

import {Hero, Navbar, About, Experience, Projects, Contact, Footer } from './containers/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
