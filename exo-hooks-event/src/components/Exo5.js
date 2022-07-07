import React from "react";

function AlertClick(){

    let clickAlert = () =>{
        alert(":)")
    }



    return(
    <div>
        <button onClick={clickAlert}>click</button>
    </div>)
}

export default AlertClick