import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import ComicsPage from './components/pages/ComicsPage.js';
import DoodlesPage from './components/pages/DoodlesPage.js';
import Escuadron37Page from './components/pages/Escuadron37Page.js';
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
          <Route name="comics" exact path="/comics" component={ComicsPage} />
          <Route name="doodles" exact path="/doodles" component={DoodlesPage} />
          <Route name="escuadron37" exact path="/escuadron37" component={Escuadron37Page} />
          <Route name="inktober" exact path="/inktober" component={InktoberPage} />
          <Route name="about" exact path="/about" component={AboutPage} />
        </div>
      </Router>
    )
  }
}

export default App;
