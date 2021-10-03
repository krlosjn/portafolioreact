import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe.js';
import Hobbies from './components/Hobbies';
import Carrousel from './components/Carrousel.js';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
      <Menu/>
      </header>
      <body>
        <section>
        <Presentation/>
        </section>
        <section>
          <AboutMe/>
        </section>
        <section>
          <Hobbies/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Contact/>
        </section>
      </body>
    </div>
  );
}

export default App;
