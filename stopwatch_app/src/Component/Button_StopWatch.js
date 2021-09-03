import React from "react";

function Button_StopWatch(props){
    return(
        <div className="sw_container">
            <input type="submit" onClick={props.start} value="Start" className="btn btn-green"/>
            <input type="submit" onClick={props.stop} value="Stop" className="btn btn-red"/>
            <input type="submit" onClick={(e)=>{
                setTimeout(()=>{
                    if(e.detail>=2){
                        console.log(e.detail);
                        props.wait();
                    }
                }, 300)
            }} value="Wait" className="btn btn-yel"/>
            <input type="submit" onClick={props.reset} value="Reset" className="btn btn-blue"/>
        </div>

    );
}

export default Button_StopWatch;