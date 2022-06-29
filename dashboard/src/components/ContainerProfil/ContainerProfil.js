import React from "react";
import './ContainerProfil.css';

import Profil from "../profil/Profil";

class ContainerProfil extends React.Component{

    selectTimeframe(period) {
        this.props.onSelectTimeframe(period);
    }

    render(){
        return(
            <div className="containerProfil">
            <Profil />
            <div className="btnContainer">
            <p className="bouton" onClick={() => this.selectTimeframe('daily')}>Daily</p>
            <p className="bouton" onClick={() => this.selectTimeframe('weekly')}>Weekly</p>
            <p className="bouton" onClick={() => this.selectTimeframe('monthly')}>Monthly</p>
            </div>
            </div>
            );
        }
    }
    
    export default ContainerProfil