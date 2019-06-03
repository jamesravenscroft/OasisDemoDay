import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import LevelOneOne from "./LevelOne";
import Game from "./Game";
import LevelOneTwo from "./LevelTwo";
import Game2 from "./Game2";
import LevelOneThree from "./LevelThree";
import Game3 from "./Game3";
import Game4 from "./Game4";
import Game5 from "./Game5";
import LevelFour from "./LevelFour";
import Game6 from "./Game6";
import MenuCurtain from "./components/MenuCurtain";
import {Picture} from "./img/background_battleScreen.jpg"
import ThankYou from "./ThankYou";

// import "./stylesGame.css"

// import ReactAudioPlayer from 'react-audio-player';
// // import MusicLoop from "./components/MusicLoop";
// import Music from "./components/MusicLoop/IronMaiden-ToTameLand8-Bit.mp3"



const routing = (


    <Router
    style={{
        position:"absolute",
        zIndex:-1,
        // maxHeight:"50%"

        }}
    >
        <div 
        style={{maxHeight:"900px",
        zIndex:1,
    
    
            }}
        >

            <Route exact path="/" component={App} />
            <Route exact path="/leveloneone" component={LevelOneOne}/>
            <Route exact path="/game" component={Game} />
            <Route exact path="/levelonetwo" component={LevelOneTwo}/>
            <Route exact path="/game2" component={Game2}/>
            <Route exact path="/levelonethree" component={LevelOneThree}/>
            <Route exact path="/game3" component={Game3}/>
            <Route exact path="/game4" component={Game4}/>
            <Route exact path="/game5" component={Game5}/>
            <Route exact path="/levelonefour" component={LevelFour}/>
            <Route exact path="/game6" component={Game6}/>
            <Route exact path="/thankyou" component={ThankYou}/>
          
        </div>
        
    </Router >

)

ReactDOM.render(routing, document.getElementById("FightScreen"));

