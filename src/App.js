import React, { Component } from "react";

import Header from "./components/Layout/Header";
import Contacts from "./components/Contacts/Contacts";
// import AddContact from "./components/Contacts/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AddContact from "./components/Contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header name="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
