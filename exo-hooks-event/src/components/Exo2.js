import React from "react";


function ChangeText({val, setVal}){

    let changeVal = (e) => {
        if(e.key === 'Enter'){
            val = e.target.value;
            setVal(val);
        }
    }


    return(
        <div>
            <input onKeyPress={changeVal}/> {val}
        </div>
    )
}

export default ChangeText