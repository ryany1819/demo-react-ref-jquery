import React, { Component } from "react";
import "./styles.css";
import StringRef from "./StringRef";
import CallbackRef from "./CallbackRef";
import CreateRef from "./CreateRef";
import UseRef from "./UseRef";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Demo: Using jQuery with React Ref</h1>
        <StringRef title="Demo 1 (depreciated)" />
        <CreateRef title="Demo 2" />
        <CallbackRef title="Demo 3" />
        <UseRef title="Demo 4" />
      </div>
    );
  }
}
