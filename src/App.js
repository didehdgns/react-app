import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./compoments/Home";
import Detail from "./compoments/Detail";
import Navigation from "./compoments/Navigation";
import Login from "./compoments/Login";
import Registor from "./compoments/Registor";
import Review from './compoments/Review';
import Search from './compoments/Search';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/game/:etitle/About" component={Detail}/>
      <Route path="/game/:etitle/Review" component={Review}/>
      <Route path="/Search" component={Search} />
      <Route path="/Login" component={Login} />
      <Route path="/Registor" component={Registor} />
    </HashRouter>
  );
}

export default App;
