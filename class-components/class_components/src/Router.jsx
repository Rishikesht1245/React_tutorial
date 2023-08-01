import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => <h1>Welcome to the Home page!</h1>;
const About = () => <h1>This is the About page.</h1>;
const Contact = () => <h1>Contact us at contact@example.com</h1>;

const Router = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Router;
