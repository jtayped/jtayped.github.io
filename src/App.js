import './App.css';

import {Hero, Navbar, About, Experience, Projects, Contact } from './containers/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div style={{ margin: 10000 }}></div>
    </div>
  );
}

export default App;
