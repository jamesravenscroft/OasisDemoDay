import React from "react";
import Picture from "./sardaukarGrunt.gif";

function SardaukarGrunt () {
    return (
        <div id="sardaukarGrunt">
            <img src={Picture} alt="Sardaukar Grunt"
             height="80%" style={{float:"right",
           
                 marginTop:"5%", position:"fixed", zIndex:-1}} 
            />
        </div>
    );
}

export default SardaukarGrunt;