import React from "react";

function Focus(){

    let Focused = (e) => {
        e.target.style.backgroundColor = "green"
    }

    let deFocused = (e) => {
        e.target.style.backgroundColor = ""
    }

    return(
        <div>
            <input onFocus={Focused} onBlur={deFocused} />
        </div>
    )

}

export default Focus