import React, { Component } from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Contact Manager" />
        <div className="container">
          <Contacts name="Vivek" email="vr329@njit.edu" phone="1236549780" />
          <Contacts
            name="Ravikumar"
            email="vr329@njit.edu"
            phone="9876543210"
          />
        </div>
      </div>
    );
  }
}

export default App;
