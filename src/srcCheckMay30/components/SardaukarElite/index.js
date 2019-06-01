import React from "react";
import Picture from "../../Assets/sardaukarElite.gif";

function SardaukarElite (props) {
    return (
        <div id="sardaukarElite">
            <img src={Picture} alt="Sardaukar Elite"
               height="80%" style={{float:"right",
           
               marginTop:"5%", position:"fixed", zIndex:-1}}
             className={props.isAttacking ? "SardaukarElite attacking" : "SardaukarElite"}/>
        </div>
    );
}

export default SardaukarElite;