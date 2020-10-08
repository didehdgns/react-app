import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./compoments/Home";
import Detail from "./compoments/Detail";
import Navigation from "./compoments/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/game/:etitle" component={Detail} />
    </HashRouter>
  );
}

export default App;
