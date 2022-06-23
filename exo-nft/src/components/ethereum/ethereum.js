import React from "react";
import './ethereum.css'
import Icon from './images/icon-ethereum.svg'

class Ethereum extends React.Component{
    render(){
        return(
            <div className="ethereum">
                <img src={Icon}/> 0.041eth
            </div>
        )
    }
}

export default Ethereum