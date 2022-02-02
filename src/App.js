// import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={About} exact />
          <Route path='/contact' component={Contact}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
