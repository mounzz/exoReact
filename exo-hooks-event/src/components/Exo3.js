import React from "react";

function Copy(){

    let Copied = (e) =>{
        alert(e.target.value)
    }


    return(
        <div>
            <input onCopy={Copied} />
        </div>
    )


}

export default Copy