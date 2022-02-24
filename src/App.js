import React, { useEffect } from 'react';
import './App.css';
import {
  Switch,
  withRouter,
  Route,
} from "react-router-dom";
import Conversion from './components/Conversion';
import Operations from './components/Operations';
import NavBar from "./components/Navbar";



function App(props) {
  useEffect(() => {
    document.title = "Floating Point Converter";
  }, []);

  return (
      <div className="App">

        <NavBar />
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Conversion} />
              <Route path="/operations" component={Operations} />
              <Route path="/conversion" component = {Conversion} />
            </Switch>
          </header>
      </div>
  );
}

export default withRouter(App);
