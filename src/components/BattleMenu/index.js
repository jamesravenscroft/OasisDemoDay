import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import {Animated} from "react-animated-css";
import "../../stylesGame.css"
import MusicPlayer from "react-audio-player";
import Song from "../../Assets/IronMaiden-ToTameLand8-Bit.mp3";
import { Container, Row, Col } from "../Grid";

function BattleMenu(props)  {
   
    return (
    <div className="alert" 
    style={{width:"100%", 
    }}><img src={require("../../Assets/verticalLine.png")} alt="vertLine" style={{ position:"relative", zIndex:10, height:440, opacity:0}}/>
    
            <div className="container">
            <div className="row" >
                <div className="col-sm-3">
                    <button  style={{fontSize:25,borderColor:"black", borderWidth:4, width:"80%"}}
                        className="btn btn-warning"
                        onClick={props.normalAttack}
                    >
                    Attack
                    </button>
                    <button  style={{marginTop:30, fontSize:25, borderColor:"black", borderWidth:4, width:"80%"}}
                        className="btn btn-danger"
                        onClick={props.pulseAttack}
                    >Pulse Attack </button>
                        
                </div>
                <div className="col-sm-3">
                    <ul className="playerStats" style={{fontSize:35, color:"lime", backgroundColor:"grey", borderRadius:20}}>
                    <li>Shields: {props.playerShields}</li>
                   
                    <li>Level: {props.level}</li>
                    {/* <li>Attack: {props.playerAttack}</li> */}
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="container">
                        <div className="row" 
                        style={{marginLeft:60}}
                            >
                            <ArrowUp
                                handleClickUp={props.handleClickUp}
                            />
                        </div>
                        <div className="row">
                            <ArrowLeft 
                            // style={{float:"left", position:"relative", height:"30%"}}
                                handleClickLeft={props.handleClickLeft}
                            />
                            <ArrowRight 
                            // style={{float:"right", height:"50%"}}
                                handleClickRight={props.handleClickRight}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <ul className="enemyStats" style={{fontSize:35, color:"lime", backgroundColor:"grey", borderRadius:20, float:"right"}}>
                        <li>Sheilds: {props.enemyShields}</li> 
                       
                        {/* <li>Attack:{props.enemyAttack}</li> */}
                    </ul><MusicPlayer
                            src={Song}  
                            autoPlay
                            controls
                            style={{ width:240, marginTop:15}}
                        />
                </div>
            </div>
            
            
                
        </div>
        </div>
    );
}



export default BattleMenu;