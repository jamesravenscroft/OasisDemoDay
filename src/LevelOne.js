import React from "react";

import DuncanIdaho from "../src/components/DuncanIdaho"
// import Modal from "./components/Modal/Modal";
import SardaukarGrunt from "../src/components/SardaukarGrunt"
import "./stylesGame.css";
// import "./test.css";
import { Container, Row, Col } from "./components/Grid";

import {Animated} from "react-animated-css";
import SardaukarElite from "../src/components/SardaukarElite";

class LevelOne extends React.Component {  
  constructor() {
    super();
    this.state = {
      // player: {
      //   shields: 1500       
      // },
      // enemy: {
      //   shields: 3000
      // },
      // isAttacking: false,
      // isShowing: false,
      // message: "",
      // link: "",  

    
    
    Level: {
      level:1
    },
    
    fireExploding:true,
    DuncanHeadShowing:true,
    battleBackgroundShowing:true,

    // headMasterEntering:false,
    // duncanIdahoEntering:false,
    // beastEntering:false,
    // gruntEntering:false,
    // eliteEntering:false,
    // assassinEntering:false,
    // userAvatarEntering:false,
    
    // battleMenuShowing:true,
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

    console.log("normal attack");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 100;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({
      enemy: {shields: newEnemyShields},
      isAttacking:true,
    } 
    ); 
    
    setTimeout(() =>{this.setState({isAttacking:false})}, 550);
    this.enemyAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
  }
 
  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields}});
    console.log(`The enemy attacks`);
    console.log(this.state.player.shields);
    let newPlayerShields = this.state.player.shields - 70;
    console.log(`player health ${newPlayerShields}`);
    this.setState({player: {shields: newPlayerShields}});
  };
  
  pulseAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields},
    isAttacking:true,
    });
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
      let damageDealt = Math.floor((40/100) * this.state.enemy.shields);
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
    let pulseAttackCost = this.state.player.shields/10;
    let damageDealt = 70 + pulseAttackCost;
    let newPlayerShields = this.state.player.shields - damageDealt;
    this.setState({player: {shields: newPlayerShields}});
  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("duncan is dead");
    }
  };
  deathCheckEnemy = () => {
    if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
      console.log(`enemy is dead`);
      let newMessage = "Enemy is dead";
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link: "/levelonetwo"});

    }
  };
    
    render() {
        
        return (
         <Container
            style={{width:"2000", position:"absolute", zIndex:-10}}
                  >
              <Row >
                  <Col size="md-3">
                      <DuncanIdaho 
                        isAttacking={this.state.isAttacking}
                      />
                  </Col>
                  <Col size="md-6"  style={{marginLeft:30, }}>              
                    <SardaukarGrunt
                    className="sardaukarGrunt"
                    style={{float:"right", position:"fixed", zIndex:-10}}
                    />
                  </Col>
                  <Col size="md-3">
                  <Animated animationIn="zoomInLeft" animationOut="fadeOut" isVisible={true}>
                    <div>
                    <SardaukarElite/></div></Animated>
                  </Col>
                </Row>
                    
                
                    
        </Container>
                
         
        )
    };
}

export default LevelOne;



