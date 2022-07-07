import React from "react";

function PlusOne({click, add}){

    let addOne = () => {
        click++
        add({click})
    }

    return(
        <div>
            {click}
            <button onClick={addOne}>click</button>
        </div>
    );
}

export default PlusOne