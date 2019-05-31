import React from "react";
import BattleMenu from "../BattleMenu";
import Story from "../Story";


function LevelHolder (props) {

    return (
        <div>
            <div>
                <Story
                    story={props.story}
                />
            </div>
    
        </div>
       


    )
};

export default LevelHolder;