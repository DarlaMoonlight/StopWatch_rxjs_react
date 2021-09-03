import React from "react";

function Button_StopWatch(){
    return(
        <div className="sw_container">
            <input type="submit" value="Start" className="btn btn-green"/>
            <input type="submit" value="Wait" className="btn btn-yel"/>
            <input type="submit" value="Reset" className="btn btn-blue"/>
        </div>

    );
}

export default Button_StopWatch;