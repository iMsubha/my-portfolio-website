import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Contact from "./components/Contact/Contact";
import Header from './components/Header/Header';
import Projects from "./components/Projects/Projects";
import Testimonial from './components/Testimonial/Testimonial';
function App() {
  return (
   
     <Router>
     <Switch>
          <Route exact path="/">
          <Header/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/testimonial">
           <Testimonial/>
          </Route>
          <Route exact path="/blogs">
          <Blogs/>
          </Route>
          <Route path="/aboutMe">
          <AboutMe/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          </Switch>
     </Router>
  
  );
}

export default App;
