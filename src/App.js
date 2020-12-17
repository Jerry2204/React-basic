import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Functional/NavbarComp';
import { HomePage } from './Component/Functional/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutComp } from './Component/Functional/AboutComp';
import { DetailComp } from './Component/Functional/DetailComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutComp} />
        <Route exact path="/detail/:id" component={DetailComp} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
