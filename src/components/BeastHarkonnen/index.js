import React from "react";
// import Picture from '../../components/BeastHarkonnen/beastHarkonnen.gif';
import Picture from './beastHarkonnen.gif';
import "../../stylesGame.css"


function BeastHarkonnen (props) {
    return (
        <div id="beastHarkonnenHolder"
        style={{position:"relative", zIndex:1}}
        >
          {/* <img src={require('../..Assets/fire-explosion-animation-2.gif')} id="fireExplosion" alt ="fireExplosion" height ="500" width="450" style={{
                        position:"fixed", zIndex:100,
                    
                        }} 
                        className={props.fireExploding ? "fireExploding" : "fireNotExploding"        
                        } /> */}
                 <img src={Picture} alt="Beast Harkonnen" height="630" 
                    style={{
                        position:"relative", zIndex:1,  float:"right"            
                        }} /> </div>
    );
}

export default BeastHarkonnen;

// import React from "react";
// import Picture from "../../img/beastHarkonnen.gif";

// function BeastHarkonnen (props) {
//     return (
//         <div id="beastHarkonnen">
//           {/* <img src={require('./fire-explosion-animation-2.gif')} id="fireExplosion" alt ="fireExplosion" height ="500" width="450" style={{
//                         position:"fixed", zIndex:100,
                    
//                         }} 
//                         className={props.fireExploding ? "fireExploding" : "fireNotExploding"        
//                         } /> */}
//            <img src={Picture} alt="Beast Harkonnen" height="500" 
//                     style={{
//                         position:"relative", zIndex:1,                
//                         }} /> </div>
//     );
// }

// export default BeastHarkonnen;