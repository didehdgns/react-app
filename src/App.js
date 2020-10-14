import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./compoments/Home";
import Detail from "./compoments/Detail";
import Navigation from "./compoments/Navigation";
import Login from "./compoments/Login";
import Registor from "./compoments/Registor";
import Review from './compoments/Review'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/game/:etitle" component={Detail} />
      <Route path="/game/:etitle/review" component={Review}/>
      <Route path="/Login" component={Login} />
      <Route path="/Registor" component={Registor} />
    </HashRouter>
  );
}

export default App;
