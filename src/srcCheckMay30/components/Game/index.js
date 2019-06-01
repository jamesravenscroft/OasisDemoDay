import React, { Component } from "react";
// import "../../stylesGame.css"
import {Animated} from "react-animated-css";
// import {BattleBackground} from "./assets/background_battleScreen.jpg";
import BattleMenu from "../BattleMenu";
import { Container, Row, Col } from "../Grid";
import LevelOne from "../../LevelOne";

import StickyFooter from 'react-sticky-footer';
import { relative } from "path";


class Game extends Component{


    constructor() {
        super();
        this.state = {
          player: {
            shields: 1500       
          },
          enemy: {
            shields: 3000
          },
          isAttacking: false,
          isShowing: false,
          message: "",
          link: "",
     
        
        fireExploding:true,
        // duncanHeadEntering:false,
        // headMasterEntering:false,
        // duncanIdahoEntering:false,
        // beastEntering:false,
        // gruntEntering:false,
        // eliteEntering:false,
        // assassinEntering:false,
        // userAvatarEntering:false,
        
        // battleBackgroundShowing:false,
        // blueBackgroundShowing:false,
        // redBackgroundShowing:false,
        // yellowBackgroundShowing:false,
        // rainOverlayShowing:false,
        
        // duncanIdahoAttacking:false,
        // beastAttacking:false,
        // gruntAttacking:false,
        // eliteAttacking:false,
        // assassinAttacking:false,
        // userAvatarAttackinging:false,
        
        // duncanIdahoDying:false,
        // beastDyinging:false,
        // gruntDying:false,
        // eliteDying:false,
        // assassinDying:false,
        // userAvatarDying:false,
        
        // mapPlay_EndShowing:false,
        // mapPlay_LeftShowing:false,
        // mapPlay_LeftRightShowing:false,
        // mapPlay_LeftStraightShowing:false,

        // attackButtonsHidden:false,
        // arrowButtonsHidden:false,

      }
      };
    
      normalAttack = () => {
        this.setState({enemy: {shields: this.state.enemy.shields}});
        console.log("normal attack");
        console.log(this.state.enemy.shields);
        let newEnemyShields = this.state.enemy.shields - 300;
        console.log(`enemy health ${newEnemyShields}`);
        this.setState({enemy: {shields: newEnemyShields}});
        this.setState({isAttacking:true,});    
        this.enemyAttack();
        this.deathCheckEnemy();
        this.deathCheckPlayer();
        setTimeout(() =>{this.setState({isAttacking:false})}, 550);
      }
    
      enemyAttack = () => {
        this.setState({player: {shields: this.state.player.shields}});
        let roll = Math.floor(Math.random() * 12) + 1;
        console.log(`this is beast's roll ${roll}`);
        if ( roll === 6) {
          let newPlayerShields = this.state.player.shields - this.state.player.shields;
          this.setState({player: {shields: newPlayerShields}});
        }
        else {
          let newPlayerShields = this.state.player.shields - 300;
          this.setState({player: {shields: newPlayerShields}});
        }
      };
      
      pulseAttack = () => {
        this.setState({enemy: {shields: this.state.enemy.shields}});
        console.log("pulse attack");
        console.log(this.state.enemy.shields);
        let roll = Math.floor(Math.random() * 6) + 1;
        console.log(`this is the roll ${roll}`);
        if (roll === 1 || roll === 4) {
          let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
          console.log(`damage dealt ${damageDealt}`);
          let newEnemyShields = this.state.enemy.shields - damageDealt;
          console.log(`new enemy shields ${newEnemyShields}`);
          this.setState({enemy: {shields: newEnemyShields}});
        }
        else if (roll === 2 || roll === 5) {
          let damageDealt = (40/100) * this.state.enemy.shields;
          console.log(`damage dealt ${damageDealt}`);
          let newEnemyShields = this.state.enemy.shields - damageDealt;
          console.log(`new enemy shields ${newEnemyShields}`);
          this.setState({enemy: {shields: newEnemyShields}});
        }
        else if (roll === 3 || roll === 6) {
          let damageDealt = 0;
          console.log(`damage dealt ${damageDealt}`);
          let newEnemyShields = this.state.enemy.shields - damageDealt;
          console.log(`new enemy shields ${newEnemyShields}`);
          this.setState({enemy: {shields: newEnemyShields}});
        }
        this.enemyPulseAttack();
        this.deathCheckEnemy();
        this.deathCheckPlayer();  
    
      }
    
      enemyPulseAttack = () => {
        this.setState({player: {shields: this.state.player.shields}});
        let pulseAttackCost = Math.floor(this.state.player.shields/10);
        let damageDealt = pulseAttackCost + 300;
        this.setState({player: {shields: this.state.player.shields}});
        let roll = Math.floor(Math.random() * 12) + 1;
        console.log(`this is beast's roll ${roll}`);
        if ( roll === 6) {
          let newPlayerShields = this.state.player.shields - this.state.player.shields;
          this.setState({player: {shields: newPlayerShields}});
        }
        else {
          let newPlayerShields = this.state.player.shields - damageDealt;
          this.setState({player: {shields: newPlayerShields}});
        }
      }
    
      deathCheckPlayer = () => {
        let vida = this.state.player.shields; 
        if ( vida === 0 || vida < 0) {
          console.log("duncan is dead");
          alert(`Duncan is dead, but in death he finds the power of coding magic.`);
          let newPlayerShields = 1000000000000000;
          this.setState({player: {shields: newPlayerShields}});
        }
      };
      deathCheckEnemy = () => {
        if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
          console.log(`enemy is dead`);
          let newMessage = "Beast is dead";
          this.setState({isShowing: true});
          this.setState({message: newMessage});
          this.setState({link: "/thankyou"});
        }
      };
    
      render() {
        return (
          <div className="GameContainer" style={{
            position:"relative", zIndex:1, width:"100%"
          }}>
              
              <img src={require("../../Assets/background_battleScreen.jpg")} alt= "BattleBackground "width="100%"
                style={{ position:"fixed", zIndex:-100}}
                />
           
           <div style={{width:"100%"}}>
       

              <Row className="FightScreen" 
                style={{width: "100%", minheight:"75%", zIndex:1, position:"relative"}}
                >
                <LevelOne style={{width:"100%"}}/>
                </Row >
               
                <Row style={{width:"100%"}}>
              
                {/* <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <div> */}
                  <BattleMenu className="BattleMenu"
                    playerShields = {this.state.player.shields}
                    normalAttack = {this.normalAttack}
                    pulseAttack = {this.pulseAttack}
                    enemyShields = {this.state.enemy.shields}   
                      style={{
                        marginTop:"100%",
                       position:"fixed", zIndex:10,
                     width:"100%"
                       }}            
                  /> 
                  {/* </div></Animated> */}
                </Row>
                     
                </div>
            
         
          </div>
        );
      }
    }
    
    export default Game;
    