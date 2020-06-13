import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.js";
import ComicsPage from "./components/pages/ComicsPage.js";
import DigitalPage from "./components/pages/DigitalPage.js";
import Escuadron37Page from "./components/pages/Escuadron37Page.js";
import InktoberPage from "./components/pages/InktoberPage.js";
import Inktober2018Page from "./components/pages/Inktober2018Page.js";
import Inktober2019Page from "./components/pages/Inktober2019Page.js";
import AboutPage from "./components/pages/AboutPage.js";
import InkPage from "./components/pages/InkPage.js";
import backgroundImage from "./images/background.png";

const style = {
  body: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "repeat",
    top: 0,
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <div style={style.body}>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="comics" exact path="/comics" component={ComicsPage} />
          <Route name="digital" exact path="/digital" component={DigitalPage} />
          <Route name="ink" exact path="/ink" component={InkPage} />
          <Route
            name="escuadron37"
            exact
            path="/escuadron37"
            component={Escuadron37Page}
          />
          <Route
            name="inktober"
            exact
            path="/inktober"
            component={InktoberPage}
          />
          <Route
            name="inktober2018"
            exact
            path="/inktober2018"
            component={Inktober2018Page}
          />
          <Route
            name="inktober2019"
            exact
            path="/inktober2019"
            component={Inktober2019Page}
          />
          <Route name="about" exact path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
