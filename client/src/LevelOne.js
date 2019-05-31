import React from "react";
import LevelHolder from "./components/LevelHolder";
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
            attackButtonsHidden:false,
            arrowButtonsHidden:true,
        }

    
    }
    
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