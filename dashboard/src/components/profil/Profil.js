import React from "react";
import './Profil.css'
import Picture from './images/image-jeremy.png'


class Profil extends React.Component{
    render(){
        return(
            <div className="profil">
                <img src={Picture} className="picture"/>
                <div className="texteContainer">
                <p className="text">Report for</p>
                <div className="nom">
                    Jeremy
                    Robson
                </div>
                </div>
                
            </div>
        );

    }
}

export default Profil