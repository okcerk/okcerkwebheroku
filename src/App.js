import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import MainPage from "./components/pages/MainPage";
import { createBrowserHistory } from "history";
import ArtworkPage from "./components/pages/ArtworkPage.js";
import { withTitle, titleWithEnding } from "./helpers/pageTitleHelpers";
import { mainNavLinks, secondaryNavLinks } from "./components/navLinks";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers/rootReducer";
import { rootSaga } from "./redux/sagas";
import createSagaMiddleware from 'redux-saga';
import { redirectToHomepage } from "./helpers/navigationHelper";

// Initialize Redux store
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
// Start sagas
sagaMiddleware.run(rootSaga);

const trackingId = "UA-169364395-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const homepage = () =>
  withTitle(<MainPage pageConfigName={'homepage'} />, "Okcerk.com - Cartoons and comics by Andres Marc");

const getArtwork = ({ match }) => {
  if (!match.params.artKey) {
    redirectToHomepage();
    return null;
  }

  const configKey = match.params.configKey.toLocaleLowerCase();
  const artKey = match.params.artKey.toLocaleLowerCase();

  return <ArtworkPage
    configKey={configKey}
    artKey={artKey}
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
  />;
};

const App = () => (
  <Provider store={store}>
    <Router history={history}>
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
    </Router>
  </Provider>
);

export default App;
