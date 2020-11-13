import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import DocDetail from "./pages/DocDetail";
import DocSearch from "./pages/DocSearch";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={DocSearch} />
          <Route path={"/doc/:filename"} component={DocDetail} />
          <Route path={"/about"} component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
