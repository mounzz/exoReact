import React from "react";

class Perso extends React.Component{
  
    render(){
        return(
                <div>
                    <p>Je m'appelle {this.props.perso1.prenom} {this.props.perso1.nom}, j'ai {this.props.perso1.age}.</p>
                    <p>Je m'appelle {this.props.perso2.prenom} {this.props.perso2.nom}, j'ai {this.props.perso2.age}.</p>
                    <p>Je m'appelle {this.props.perso3.prenom} {this.props.perso3.nom}, j'ai {this.props.perso3.age}.</p>
                    
                    <button onClick={() => this.props.changeContent()}>change</button>
                </div>
        );
    }

}


export default Perso