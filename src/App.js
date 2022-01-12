import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Homepage from "./Pages/home-page/Homepage";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
