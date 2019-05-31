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
                style={{width:"2000", position:"absolute", zIndex:-1}}
                >
                  <Row
                //   style={{width:"1000px",
                //   marginBottom:"100%"
                // }}
                  >
                      <Col size="md-3"><Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                       <div><DuncanIdaho 
                           isAttacking={this.state.isAttacking}
                        
                              /></div></Animated>
                      </Col>
                      <Col size="md-6">
                        
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