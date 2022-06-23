import React from "react";
import Icon from './images/icon-clock.svg'
import './time.css'

class Time extends React.Component{
    render(){
        return(
            <div className="time">
                <img src={Icon}/> 3 days left.
            </div>

        );
    }
}

export default Time