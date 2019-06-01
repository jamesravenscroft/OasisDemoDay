import React, {Component} from "react";
import { runInThisContext } from "vm";

    class Story01 extends Component{
    
    DuncanIdahoFace = () => {
            //timeline 00:00 initial slide in animation
            this.setState({duncanIsEntering:true});
            //timeline 05:00- hide after 5 seconds
            setTimeout(() =>{this.setState({duncanIsShowing:false})}, 5000);
            //timeline 15:00- return 10 seconds later
            setTimeout(() =>{this.setState({duncanIsShowing:true})}, 10000);
        }

    Headmaster=()=>{
            // timeline 00:00    setTimeout to slide in at 5 seconds 
         this.setTimeout(()=>{this.setState({headMasterIsEntering:true})},5000);   
            //timeline 05:00- setTimeout to hide 10 Seconds later    
         this.setTimeout(()=>{this.setState({headMasterIsShowing:false})},10000);
            //timeline 15:00  Duncan should be showing at 15 seconds. 
            }    
    }


    return (

<div>
            <p>{props.story}</p> 
        </div>
    )

export default Story;