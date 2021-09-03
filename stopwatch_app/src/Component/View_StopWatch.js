import React from "react";

function View_StopWatch(props){
    return(
        <div className="sw_container">
            <span className="time_view">{new Date(props.second).toISOString().slice(11,13)}</span>
            <span>&#58;</span>
            <span className="time_view">{new Date(props.second).toISOString().slice(14,16)}</span>
            <span>&#58;</span>
            <span className="time_view">{new Date(props.second).toISOString().slice(17,19)}</span>
        </div>
    );
}

export default View_StopWatch;