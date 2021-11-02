import './App.css';
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Curriculum from './components/Curriculum'
import Home from './components/Home';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path='/aboutme' component={AboutMe}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route exact path='/curriculum' component={Curriculum}></Route>
              <Route exact path='/Home' component={Home}></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
