import React from "react";
import About from "./page/About";
import Home from "./page/Home";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  return (
    <div className="Appdiv">
      <Header />

      <About />
      <Home />
    </div>
  );
}

export default App;
