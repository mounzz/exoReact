import React from "react";
import './Boutons.css';

class Boutons extends React.Component{
    
    render(){
        return(
            <div className="btnContainer">
            <p className="bouton" onClick={() => }>Daily</p>
            <p className="bouton">Weekly</p>
            <p className="bouton">Monthly</p>
            </div>
            );
        }
    }
    
    export default Boutons