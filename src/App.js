import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

// your code is going to go here, for now
const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
