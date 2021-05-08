import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';
import Navbar from "./components/common/Navbar/Navbar";
import { MENU_ITEMS } from "./components/Constants";

function App() {
    return (
      <>
      <Navbar menu={MENU_ITEMS} />
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
      </>
    );
}

export default App;
