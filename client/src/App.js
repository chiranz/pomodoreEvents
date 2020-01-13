import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import TopicList from "./components/TopicList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <TopicList />
      </div>
    </Provider>
  );
}

export default App;
