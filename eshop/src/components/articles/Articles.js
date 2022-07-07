import React from "react";
import "./articles.css"


class Articles extends React.Component{

    buttonLayout;

    constructor(props){
        super(props);
    }

    updateCard = (product) => {
        switch(product.stockDispo) {
            case 1: return 'orange';
            case 0: return 'red';
            default: return;
        }
    }

    toggleButton(product) {
        if (this.props.money > 0 && product.stockDispo > 0) {
            this.buttonLayout = <div className="containerBouton" >
            <button onClick={()=> this.props.acheter(product)} className="bouton">acheter</button>
        </div>;
        } else {
            this.buttonLayout = null;
        }
    }
    
    render(){
        return(
            <div className="cardContainer">
                {this.props.articleData.map((produit) =>
          {
              this.toggleButton(produit);
            return(
              <div className="Card" key={produit.nom} style={{backgroundColor: this.updateCard(produit)}}>
                    <div className="imgProduit">
                        <img className="img" src={produit.img}/>
                    </div>
                    <div className="contentProduit">
                        <div className="nom">
                            {produit.nom}
                        </div>
                        <div className="prix">
                            Prix: {produit.prix}€
                        </div>
                        <div className="stockDispo">
                            Stock Disponible: {produit.stockDispo}
                        </div>
                        {this.buttonLayout}
                    </div>
                </div>
            )
          })}
            </div>
        );
    }
}

export default Articles