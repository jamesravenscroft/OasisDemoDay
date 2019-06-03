import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import LevelOne from "./LevelOne";
import {Animated} from "react-animated-css";
import registerServiceWorker from "./registerServiceWorker";
import Game from "./components/Game";


const routing = (
    <Router>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Game">Game</Link>
            </li>
        </ul> */}
        <Route exact path="/" component={App}/>
        <Route exact path="/game" component={Game}/>

    </Router>
)


ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
