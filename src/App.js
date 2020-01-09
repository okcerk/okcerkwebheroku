import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import Escuadron37Page from './components/pages/Escuadron37Page.js';
import SketchesPage from './components/pages/SketchesPage.js';
import InktoberPage from './components/pages/InktoberPage.js';
import AboutPage from './components/pages/AboutPage.js';
import backgroundImage from './images/background.png';

const style = {
  body: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'repeat',
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <div style={style.body}>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="escuadron37" exact path="/escuadron37" component={Escuadron37Page} />
          <Route name="sketches" exact path="/sketches" component={SketchesPage} />
          <Route name="inktober" exact path="/inktober" component={InktoberPage} />
          <Route name="about" exact path="/about" component={AboutPage} />
        </div>
      </Router>
    )
  }
}

export default App;
