import React from "react";
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
import ArtworkPage from "./components/pages/ArtworkPage.js";
import InkPage from "./components/pages/InkPage.js";
import TitleComponent from "./components/TitleComponent.js";
import backgroundImage from "./images/background.png";
import { getConfigFromKey } from "./helpers/ContentHelper";
import { mainNavLinks, secondaryNavLinks } from "./components/navLinks";

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

const withTitle = (component, title) => (
  <>
    <TitleComponent title={title} />
    {component}
  </>
);

const homepage = () =>
  withTitle(<HomePage />, "Okcerk.com - Cartoons and comics by Andres Marc");
const titleWithEnding = (title) => `${title} - Okcerk.com`;

const getArtwork = ({ match }) => {
  if (!match.params.artKey) {
    return homepage;
  }

  const configKey = match.params.configKey.toLocaleLowerCase();
  const artKey = match.params.artKey.toLocaleLowerCase();

  const config = getConfigFromKey(configKey);

  if (!config) {
    return homepage;
  }

  const artworkConfig = config.items[artKey];

  if (!artworkConfig) {
    return homepage;
  }

  return withTitle(
    <ArtworkPage
      {...artworkConfig}
      pageLinks={mainNavLinks}
      secondaryPageLinks={secondaryNavLinks}
    />,
    titleWithEnding(artworkConfig.text)
  );
};

const App = () => (
  <Router history={history}>
    <div style={style.body}>
      <Route name="home" exact path="/" render={homepage} />
      <Route
        name="comics"
        exact
        path="/comics"
        render={() => withTitle(<ComicsPage />, titleWithEnding("Comics"))}
      />
      <Route
        name="digital"
        exact
        path="/digital"
        render={() =>
          withTitle(<DigitalPage />, titleWithEnding("Digital artwork"))
        }
      />
      <Route
        name="ink"
        exact
        path="/ink"
        render={() => withTitle(<InkPage />, titleWithEnding("Ink artwork"))}
      />
      <Route
        name="escuadron37"
        exact
        path="/escuadron37"
        render={() =>
          withTitle(
            <Escuadron37Page />,
            titleWithEnding("Escuadron 37 - Animation")
          )
        }
      />
      <Route
        name="inktober"
        exact
        path="/inktober"
        render={() => withTitle(<InktoberPage />, titleWithEnding("Inktober"))}
      />
      <Route
        name="inktober2018"
        exact
        path="/inktober2018"
        render={() =>
          withTitle(<Inktober2018Page />, titleWithEnding("Inktober 2018"))
        }
      />
      <Route
        name="inktober2019"
        exact
        path="/inktober2019"
        render={() =>
          withTitle(<Inktober2019Page />, titleWithEnding("Inktober 2019"))
        }
      />
      <Route
        name="about"
        exact
        path="/about"
        render={() =>
          withTitle(<AboutPage />, titleWithEnding("About Andres Marc"))
        }
      />
      <Route
        name="artwork"
        exact
        path="/artwork/:configKey/:artKey"
        render={getArtwork}
      />
    </div>
  </Router>
);

export default App;
