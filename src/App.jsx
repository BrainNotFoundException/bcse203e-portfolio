import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contacts";

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App