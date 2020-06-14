import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import HomePage from "./components/pages/HomePage.js";
import ComicsPage from "./components/pages/ComicsPage.js";
import DigitalPage from "./components/pages/DigitalPage.js";
import Escuadron37Page from "./components/pages/Escuadron37Page.js";
import InktoberPage from "./components/pages/InktoberPage.js";
import Inktober2018Page from "./components/pages/Inktober2018Page.js";
import Inktober2019Page from "./components/pages/Inktober2019Page.js";
import AboutPage from "./components/pages/AboutPage.js";
import InkPage from "./components/pages/InkPage.js";
import TitleComponent from "./components/TitleComponent.js";
import backgroundImage from "./images/background.png";

const trackingId = "UA-169364395-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const style = {
  body: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "repeat",
    top: 0,
  },
};

const withTitle = (component, title) => () => (
  <>
    <TitleComponent title={title} />
    {component}
  </>
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={style.body}>
          <Route
            name="home"
            exact
            path="/"
            component={withTitle(
              <HomePage />,
              "Okcerk - Cartoons and comics by Andres Marc"
            )}
          />
          <Route
            name="comics"
            exact
            path="/comics"
            component={withTitle(<ComicsPage />, "Comics - Okcerk")}
          />
          <Route
            name="digital"
            exact
            path="/digital"
            component={withTitle(<DigitalPage />, "Digital artwork - Okcerk")}
          />
          <Route
            name="ink"
            exact
            path="/ink"
            component={withTitle(<InkPage />, "Ink artwork - Okcerk")}
          />
          <Route
            name="escuadron37"
            exact
            path="/escuadron37"
            component={withTitle(
              <Escuadron37Page />,
              "Escuadron 37 - Animation - Okcerk"
            )}
          />
          <Route
            name="inktober"
            exact
            path="/inktober"
            component={withTitle(<InktoberPage />, "Inktober - Okcerk")}
          />
          <Route
            name="inktober2018"
            exact
            path="/inktober2018"
            component={withTitle(
              <Inktober2018Page />,
              "Inktober 2018 - Okcerk"
            )}
          />
          <Route
            name="inktober2019"
            exact
            path="/inktober2019"
            component={withTitle(
              <Inktober2019Page />,
              "Inktober 2019 - Okcerk"
            )}
          />
          <Route
            name="about"
            exact
            path="/about"
            component={withTitle(<AboutPage />, "About Andres Marc - Okcerk")}
          />
        </div>
      </Router>
    );
  }
}

export default App;
