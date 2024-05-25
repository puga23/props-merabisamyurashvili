import React from "react";
import Button from "./components/Button";
import Home from "./components/Home";
import "./App.css";
function App({ children }) {
  return (
    <div>
      <Button name="btn1">click me</Button>
      <Button name="btn2">click me </Button>
      <Button name="btn3">click me </Button>
      <Button name="btn4">click me </Button>
      <Home> gamarjoba</Home>
    </div>
  );
}

export default App;
