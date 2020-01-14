import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import TopicList from "./components/TopicList";
import ItemModal from "./components/TopicModal";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Container>
          <ItemModal />
          <TopicList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
