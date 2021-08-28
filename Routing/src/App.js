import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Error404 from "./components/Error404";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  activeStyle={{ backgroundColor: "yellow" }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "yellow" }}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "yellow" }}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home} />
            {/* en sona / ile anasayfaya gönderdiğimiz component yazılmalı çünkü ilk başa yazıldığında hepsi / ile başladığı için hepsi home componentine gider. Ya da exact kullanarak en üstte kullanılabilir */}
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
