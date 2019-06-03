import React, { Component } from "react";
// import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
// import Modal from "./components/Modal/Modal";
import {Animated} from "react-animated-css";

class Game4 extends Component {

  constructor() {
    super();
    this.state = {
      player: {
        shields: 800
        
      },
      enemy: {
        shields: 1500
      },
      isAttacking: false,
      isShowing: false,
      message: "",
      link: "",
    
      Level: {
        level:4
      },
    }
  }

  normalAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields}});
    console.log("normal attack");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 150;
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
    console.log(`The enemy attacks`);
    console.log(this.state.player.shields);
    let newPlayerShields = this.state.player.shields - 150;
    console.log(`player health ${newPlayerShields}`);
    this.setState({player: {shields: newPlayerShields}});
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
    let pulseAttackCost = Math.floor(this.state.player.shields/10);
    let damageDealt = 150 + pulseAttackCost;
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
      this.setState({link: "/game5"});

    }
  };

  render() {
    return (
      <div style={{
        position:"fixed",
        zIndex:-1, marginTop:"1%",
        width:"100%"
          }}>
              {/* <img src={require("../src/img/background_battleScreen.jpg")} alt= "BattleBackground "width="100%"
        style={{
          position:"fixed",
          zIndex:-10,
        }}
        
        />
       <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          link={this.state.link}>  
            {this.state.message}             
        </Modal> */}
        <Container>
          <Row>
              <Col size="md-3">
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div> 
                <DuncanIdaho
                   isAttacking={this.state.isAttacking}
                /></div></Animated>
              </Col>    
              <Col size="md-3">  <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                <div>
                <SardaukarGrunt/></div></Animated>
              </Col>
              <Col size="md-3">  <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                <div>
                <SardaukarGrunt/></div></Animated>
              </Col>
              <Col size="md-3">  <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                <div>
                <SardaukarGrunt/></div></Animated>
              </Col>
            </Row>       
        </Container>
        
      </div>
    );
  }
}

export default Game4;


//Card Component
//div for hiding
//div for opacity
//div for position
//div for scale
//image overlay gif(hidden until action)
//main image controls rotation (its the anchor point!)
//div for underlay effect (usually path highlights, arrows, etc)
