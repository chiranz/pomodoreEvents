import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import { loadUser } from "./actions/authActions";
import LandingPage from "./components/LandingPage";
import { PrivateRoute } from "./PrivateRoute";
import TopicPage from "./pages/TopicPage";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute exact path="/topics" component={TopicPage} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
