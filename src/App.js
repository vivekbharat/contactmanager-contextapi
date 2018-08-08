import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
// import AddContact from "./components/Contacts/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename>
          <div className="App">
            <Header name="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
