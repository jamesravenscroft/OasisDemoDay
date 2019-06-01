import React, {Component} from "react";
import "../../stylesGame.css";
import {Animated} from "react-animated-css";

class Story extends Component {
    constructor() {
        super();
        this.state = {
          isAttacking: false,
          isShowing: false,
          message: "",
          link: "",
        DuncanHeadShowing:false,
        battleBackgroundShowing:false,
        // battleMenuShowing:false
      }};
    // DuncanHead = () => {
    // //timeline 00:00 initial slide in animation
    // this.setState({DuncanHeadEntering:true});
    // //timeline 05:00- hide after 5 seconds
    // setTimeout(() =>{this.setState({DuncanHeadShowing:false})}, 5000);
    // //timeline 15:00- return 10 seconds later
    // setTimeout(() =>{this.setState({DuncanHeadShowing:true})}, 10000);
    // }

// GinazHead=()=>{
//     // timeline 00:00    setTimeout to slide in at 5 seconds 
//  this.setTimeout(()=>{this.setState({headMasterIsEntering:true})},5000);   
//     //timeline 05:00- setTimeout to hide 10 Seconds later    
//  this.setTimeout(()=>{this.setState({headMasterIsShowing:false})},10000);
//     //timeline 15:00  Duncan should be showing at 15 seconds. 
//     }    
    render(){
    return (
        <div style={{position:"fixed", zIndex:10}}
            >   <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div>      
            <img src={require("../../Assets/duncanHead.gif")} alt="DuncanHead"
                style={{height:"100%", position:"fixed", zIndex:-50}}
                // className={this.props.DuncanHeadShowing ? "DuncanHeadShowing" : "DuncanHeadHidden"}
                /></div></Animated>
                <div style={{float:"right"}}>
                    <img src={require("../../Assets/ginazHead.gif")} alt="ginazHead"
                        style={{height:"100%", marginLeft:"50%", position:"fixed", zIndex:-50}}  />
                    {/* <p>{props.story}</p> */}
                   </div>
              </div>
             )
        }
    };
export default Story;