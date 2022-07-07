import React from "react";
import "./panier.css"


class Panier extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="containerPanier">
               
               {this.props.panier.map((produit) => {
                   return(
                    <div className="panier">

                    <p>
                    produit: {produit.nom}
                    </p>
                    
                    <button onClick={() => this.props.remettre(produit)}>remettre</button>
                        
                      
                    
                    </div>
                   );
               })}
            </div>
        );

    }





}

export default Panier