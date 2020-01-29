import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import TopicList from "./components/TopicList";
import ItemModal from "./components/TopicModal";
import { loadUser } from "./actions/authActions";
import LandingPage from "./components/LandingPage";

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
              <Route exact path="/topics">
                <ItemModal />
                <TopicList />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
