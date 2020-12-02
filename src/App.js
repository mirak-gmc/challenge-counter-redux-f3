import React from "react";
import { connect } from "react-redux";

import Button from "./components/Button";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Button title="-" />
      <span> {props.number} </span>
      <Button title="+" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.count,
  };
};

export default connect(mapStateToProps)(App);
