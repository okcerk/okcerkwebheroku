import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";
import MainPage from "./components/pages/MainPage";
import { createBrowserHistory } from "history";
import ArtworkPage from "./components/pages/ArtworkPage.js";
import LocationChangeRegister from "./components/LocationChangeRegister";
import { withTitle, titleWithEnding } from "./helpers/pageTitleHelpers";
import { headerLinks, secondaryHeaderLinks } from "./components/navLinks";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers/rootReducer";
import { rootSaga } from "./redux/sagas";
import createSagaMiddleware from 'redux-saga';
import { redirectToHomepage } from "./helpers/navigationHelper";
import cloroImage from "./images/cloro.png";
import SocialMediaLinks from "./components/SocialMediaLinks";

// Initialize Redux store
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
// Start sagas
sagaMiddleware.run(rootSaga);

const trackingId = "UA-169364395-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

const homepage = () =>
  withTitle(<MainPage pageConfigName={'homepage'} />, "Okcerk.com - Cartoons and comics by Andres Marc");

const getArtwork = ({ match }) => {
  if (!match.params.artKey) {
    redirectToHomepage();
    return null;
  }

  const configKey = match.params.configKey.toLocaleLowerCase();
  const artKey = match.params.artKey.toLocaleLowerCase();

  return <ArtworkPage configKey={configKey} artKey={artKey} />;
};

const style = {
  coreSection: {
    textAlign: "-webkit-center",
  },
  pageLinks: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageLink: {
    cursor: "pointer",
  },
  cloro: {
    marginTop: 20,
  },
};

const App = () => (
  <Provider store={store}>
      <Router history={history}>
        <div style={style.coreSection}>
          <div style={style.pageLinks}>
            {headerLinks}
            <div style={style.cloro}>
              <img src={cloroImage} alt="cloro" />
            </div>
          </div>
          <div style={style.pageLinks}>
            {secondaryHeaderLinks}
            <SocialMediaLinks />
          </div>
          <LocationChangeRegister/>
          <Route
            name="comics"
            exact
            path="/comics"
          >{withTitle(<MainPage pageConfigName={'comics'} />, titleWithEnding("Comics"))}</Route>
          <Route
            name="digital"
            exact
            path="/digital"
            render={() =>
              withTitle(<MainPage pageConfigName={'digital'} />, titleWithEnding("Digital artwork"))
            }
          />
          <Route
            name="ink"
            exact
            path="/ink"
            render={() => withTitle(<MainPage pageConfigName={'ink'} />, titleWithEnding("Ink artwork"))}
          />
          <Route
            name="escuadron37"
            exact
            path="/escuadron37"
            render={() =>
              withTitle(
                <MainPage pageConfigName={'escuadron37'} />,
                titleWithEnding("Escuadron 37 - Animation")
              )
            }
          />
          <Route
            name="inktober"
            exact
            path="/inktober"
            render={() => withTitle(<MainPage pageConfigName={'inktober'} />, titleWithEnding("Inktober"))}
          />
          <Route
            name="inktober2018"
            exact
            path="/inktober2018"
            render={() =>
              withTitle(<MainPage pageConfigName={'inktober2018'} />, titleWithEnding("Inktober 2018"))
            }
          />
          <Route
            name="inktober2019"
            exact
            path="/inktober2019"
            render={() =>
              withTitle(<MainPage pageConfigName={'inktober2019'} />, titleWithEnding("Inktober 2019"))
            }
          />
          <Route
            name="about"
            exact
            path="/about"
            render={() =>
              withTitle(<MainPage pageConfigName={'about'} />, titleWithEnding("About Andres Marc"))
            }
          />
          <Route
            name="artwork"
            exact
            path="/artwork/:configKey/:artKey"
            render={getArtwork}
          />
          <Route name="home" exact path="/" render={homepage} />
        </div>
      </Router>
  </Provider>
);

export default App;
